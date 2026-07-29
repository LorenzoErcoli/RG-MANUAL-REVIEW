(function(){
  let isLoadingSharedNotes=false;
  let lastSharedNotesLoad=0;

  function pendingLocalNoteIds(){
    return new Set((state.outbox||[])
      .filter(event=>event.contribution_type==='note')
      .map(event=>event.contribution_id));
  }

  function reduceNoteEvents(events){
    const latest=new Map();
    events.forEach(event=>{
      const current=latest.get(event.contribution_id);
      const currentTime=current?new Date(current.received_at||current.client_created_at||0).getTime():-1;
      const eventTime=new Date(event.received_at||event.client_created_at||0).getTime();
      if(!current||eventTime>=currentTime)latest.set(event.contribution_id,event);
    });
    return [...latest.values()]
      .filter(event=>event.action!=='delete'&&event.payload&&typeof event.payload==='object')
      .map(event=>cleanContribution({...event.payload,id:event.contribution_id,author:event.payload.author||event.reviewer||''}));
  }

  function mergeSharedNotes(remoteNotes){
    const pendingIds=pendingLocalNoteIds();
    const pendingLocal=(state.notes||[]).filter(note=>pendingIds.has(note.id));
    const pendingMap=new Map(pendingLocal.map(note=>[note.id,note]));
    const merged=new Map(remoteNotes.map(note=>[note.id,note]));
    pendingMap.forEach((note,id)=>merged.set(id,note));
    state.notes=[...merged.values()].sort((a,b)=>new Date(a.createdAt||0)-new Date(b.createdAt||0));
    persist(false);
    renderAll();
  }

  async function loadSharedNotes(force=false){
    const cfg=window.RG_SUPABASE;
    if(isLoadingSharedNotes||!cfg?.restUrl||!cfg?.publishableKey)return;
    if(!force&&Date.now()-lastSharedNotesLoad<10000)return;
    isLoadingSharedNotes=true;
    try{
      const query='select=event_id,contribution_id,action,reviewer,payload,client_created_at,received_at&contribution_type=eq.note&order=received_at.asc';
      const response=await fetch(`${cfg.restUrl}/review_contribution_events?${query}`,{
        method:'GET',
        headers:{apikey:cfg.publishableKey,Accept:'application/json'}
      });
      if(!response.ok){
        const detail=await response.text().catch(()=>String(response.status));
        throw new Error(`${response.status} ${detail}`);
      }
      const events=await response.json();
      mergeSharedNotes(reduceNoteEvents(Array.isArray(events)?events:[]));
      lastSharedNotesLoad=Date.now();
      if(!(state.outbox||[]).length)setSyncState(`Note condivise aggiornate · ${new Date().toLocaleTimeString('it-IT',{hour:'2-digit',minute:'2-digit'})}`);
    }catch(error){
      console.error('Shared notes load failed',error);
      if(!(state.outbox||[]).length)setSyncState('Note condivise non aggiornate');
    }finally{
      isLoadingSharedNotes=false;
    }
  }

  const originalFlushOutbox=flushOutbox;
  flushOutbox=async function(){
    await originalFlushOutbox();
    if(!(state.outbox||[]).length)await loadSharedNotes(true);
  };

  window.loadSharedNotes=()=>loadSharedNotes(true);
  window.addEventListener('focus',()=>loadSharedNotes());
  window.addEventListener('online',()=>loadSharedNotes(true));
  setInterval(()=>loadSharedNotes(),30000);
  loadSharedNotes(true);
})();
