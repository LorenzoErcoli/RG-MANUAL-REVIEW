(()=>{
  const escTable=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const allTablesFor=sectionId=>Object.entries(MANUAL_TABLES||{}).filter(([key])=>key===sectionId||key.startsWith(sectionId+'.')).flatMap(([,tables])=>tables);
  const tableHtml=t=>`<div class="manual-table-card" id="table-${escTable(t.id)}"><div class="manual-table-title"><span>${escTable(t.id)}</span><strong>${escTable(t.title)}</strong></div><div class="manual-table-scroll"><table><thead><tr>${t.headers.map(h=>`<th>${escTable(h)}</th>`).join('')}</tr></thead><tbody>${t.rows.map((row,r)=>`<tr>${row.map((cell,c)=>`<td data-cell="${escTable(t.id)}-r${r+1}c${c+1}">${escTable(cell)}</td>`).join('')}</tr>`).join('')}</tbody></table></div></div>`;
  function injectTables(){
    document.querySelectorAll('.manual-table-card').forEach(x=>x.remove());
    MANUAL.chapters.forEach(ch=>ch.sections.forEach(sec=>{
      const heading=document.getElementById(`section-${String(sec.id).trim().toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')}`);
      if(!heading)return;
      const tables=allTablesFor(sec.id);
      if(!tables.length)return;
      let anchor=heading;
      tables.forEach(t=>{anchor.insertAdjacentHTML('afterend',tableHtml(t));anchor=anchor.nextElementSibling});
    }));
    const rev=document.getElementById('sourceRevision');
    if(rev)rev.textContent=`Revisione Drive importata: ${MANUAL.sourceRevision}`;
  }
  let scheduled=false;
  const schedule=()=>{if(scheduled)return;scheduled=true;requestAnimationFrame(()=>{scheduled=false;injectTables()})};
  const root=document.getElementById('manualRoot');
  if(root)new MutationObserver(schedule).observe(root,{childList:true,subtree:true});
  schedule();
})();