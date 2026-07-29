(function(){
  const typeLabels={
    errore_tecnico:'Errore tecnico',
    precisazione:'Precisazione',
    integrazione:'Integrazione',
    dubbio:'Dubbio',
    esempio:'Esempio pratico'
  };

  window.renderNoteThread=function(paragraphId){
    const notes=state.notes.filter(n=>n.paragraphId===paragraphId);
    if(!notes.length)return'';
    const title=notes.length===1?'1 nota':`${notes.length} note`;
    return `<section class="inline-notes" aria-label="${esc(title)}">
      <div class="inline-notes-title"><span>${esc(title)}</span><span>Osservazioni sul punto</span></div>
      <div class="inline-notes-list">
        ${notes.map((n,index)=>{
          const edited=n.updatedAt?' · modificata':'';
          const date=new Date(n.updatedAt||n.createdAt).toLocaleString('it-IT');
          return `<article class="inline-note">
            <div class="inline-note-marker" aria-hidden="true">${index+1}</div>
            <div class="inline-note-content">
              <header class="inline-note-head">
                <div class="inline-note-author"><strong>${esc(n.author)}</strong><span>${esc(typeLabels[n.type]||n.type)}</span></div>
                <time>${esc(date+edited)}</time>
              </header>
              <p class="inline-note-text">${esc(n.text)}</p>
              ${isCurrentAuthor(n)?`<div class="inline-note-actions"><button class="edit-note-btn" data-edit-note="${esc(n.id)}">Modifica</button></div>`:''}
            </div>
          </article>`;
        }).join('')}
      </div>
    </section>`;
  };

  renderManual();
})();