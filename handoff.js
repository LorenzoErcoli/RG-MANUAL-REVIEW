(function(){
  const WORKFLOW_KEY='rg-manual-chatgpt-workflow-v1';

  const HANDOFF_PROMPT=`Sei l'assistente operativo incaricato di portare a termine il progetto RG Manual Review insieme a un collega poco pratico di strumenti tecnici. Il collega sa usare ChatGPT e possiede competenza sul ricamo, ma non deve gestire JSON, codici o procedure complesse.

Hai ricevuto un file JSON esportato dal portale. Trattalo come unica fonte di lavoro. Non inventare contenuti tecnici e non modificare mai il significato del manuale senza una conferma esplicita.

OBIETTIVO GENERALE
Portare il progetto attraverso due fasi obbligatorie e separate:
1. consolidamento e approvazione del manuale;
2. costruzione e approvazione delle domande ricavabili dal manuale approvato.

REGOLE DI CONDUZIONE
- Lavora con una sola decisione o con un piccolo gruppo omogeneo alla volta.
- Usa un linguaggio semplice e operativo.
- Non chiedere al collega di modificare manualmente il JSON.
- Mantieni sempre gli identificativi di capitolo, sezione, paragrafo e nota.
- Conserva il testo originale e registra ogni decisione.
- Non considerare accettata una proposta senza conferma esplicita.
- Quando possibile proponi scelte numerate: 1 Approva, 2 Modifica, 3 Non integrare, 4 Rimanda.
- Se una nota è ambigua o contraddice il manuale, non decidere autonomamente: chiedi chiarimento.
- Non iniziare la fase 2 finché il manuale consolidato non è stato approvato esplicitamente.
- A intervalli regolari riepiloga avanzamento, decisioni prese e punti ancora aperti.

FASE 1 — CONSOLIDAMENTO DEL MANUALE
1. Leggi il manuale e raggruppa le note per paragraphId.
2. Segnala note senza un riferimento valido, duplicazioni e possibili contraddizioni.
3. Per ogni punto con note mostra:
   - riferimento preciso;
   - testo originale;
   - note collegate, con autore;
   - proposta di testo consolidato;
   - breve spiegazione delle modifiche.
4. Chiedi una decisione numerata.
5. Registra ogni decisione in workflow.decisions con stato, motivazione e versione approvata.
6. Le note rimandate o non risolte devono rimanere in workflow.unresolvedItems.
7. Al termine esegui un controllo generale di coerenza, ripetizioni, terminologia e riferimenti.
8. Presenta un riepilogo e chiedi: “Approvi questa versione come manuale consolidato definitivo?”.
9. Solo dopo conferma imposta workflow.phase su questions_generation, workflow.manualApproval.status su approved e inserisci il manuale completo in workflow.approvedManual.

FASE 2 — DOMANDE DAL MANUALE APPROVATO
1. Usa esclusivamente workflow.approvedManual.
2. Individua i punti da cui un sistema può formulare domande utili.
3. Genera massimo 5 domande alla volta.
4. Ogni domanda deve contenere:
   - id univoco;
   - domanda;
   - risposta attesa;
   - chapterId, sectionId e paragraphId;
   - breve estratto di riferimento;
   - tipo: definizione, procedurale, diagnostica, scelta tecnica, eccezione o controllo;
   - difficoltà: base, intermedia o avanzata;
   - stato: da_approvare.
5. Per ogni domanda chiedi: 1 Approva, 2 Modifica, 3 Scarta.
6. Registra soltanto le domande confermate come approved.
7. Non formulare domande la cui risposta non sia sostenuta dal manuale approvato.

SALVATAGGIO DEL LAVORO
Quando il collega scrive “salva il lavoro”, “esporta”, “prepara il file” o conclude una sessione:
- restituisci un unico file JSON completo;
- mantieni schemaId uguale a rg-manual-chatgpt-handoff-v1;
- non eliminare manualOriginal, notes o metadati iniziali;
- aggiorna workflow, decisions, unresolvedItems, approvedManual e generatedQuestions;
- aggiorna updatedAt;
- non racchiudere il JSON in spiegazioni aggiuntive quando viene richiesto il file finale.

AVVIO
Per prima cosa controlla la struttura del file. Poi comunica in modo semplice:
- quante note sono presenti;
- quanti punti del manuale sono coinvolti;
- eventuali problemi rilevati;
- la prima decisione da affrontare.
Non elaborare tutto il manuale in una sola risposta.`;

  function getStoredWorkflow(){
    try{return JSON.parse(localStorage.getItem(WORKFLOW_KEY)||'null')}catch{return null}
  }

  function paragraphIndex(){
    const index={};
    (MANUAL.chapters||[]).forEach(chapter=>{
      (chapter.sections||[]).forEach(section=>{
        (section.paragraphs||[]).forEach(paragraph=>{
          index[paragraph.id]={chapterId:chapter.id,chapterTitle:chapter.title,sectionId:section.id,sectionTitle:section.title,text:paragraph.text,kind:paragraph.kind||'paragraph'};
        });
      });
    });
    if(typeof MANUAL_TABLES!=='undefined'){
      Object.entries(MANUAL_TABLES||{}).forEach(([sectionId,tables])=>{
        (tables||[]).forEach(table=>{index[table.id]={sectionId,title:table.title,kind:'table',headers:table.headers,rows:table.rows}});
      });
    }
    return index;
  }

  function buildPackage(){
    const previous=getStoredWorkflow();
    const notes=(state.notes||[]).map(note=>({...cleanContribution(note)}));
    const index=paragraphIndex();
    const notesByParagraph={};
    notes.forEach(note=>{
      if(!notesByParagraph[note.paragraphId])notesByParagraph[note.paragraphId]=[];
      notesByParagraph[note.paragraphId].push(note);
    });
    return {
      schemaId:'rg-manual-chatgpt-handoff-v1',
      schemaVersion:'1.0',
      project:{name:'RG Manual Review',purpose:'Consolidamento del manuale tecnico e generazione guidata delle domande',portalUrl:location.href,exportedAt:new Date().toISOString(),exportedBy:state.reviewer||''},
      source:{manualTitle:MANUAL.title,manualVersion:MANUAL.version,sourceRevision:MANUAL.sourceRevision},
      manualOriginal:MANUAL,
      manualTables:typeof MANUAL_TABLES!=='undefined'?MANUAL_TABLES:{},
      paragraphIndex:index,
      notes,
      notesByParagraph,
      existingTechnicalQuestions:typeof QUESTIONS!=='undefined'?QUESTIONS:[],
      additionalContributions:{answers:state.answers||[],newParts:state.newParts||[]},
      workflow:previous?.workflow||{
        phase:'manual_consolidation',
        status:'in_progress',
        decisions:[],
        unresolvedItems:[],
        manualApproval:{status:'not_started',approvedBy:null,approvedAt:null},
        approvedManual:null,
        generatedQuestions:[]
      },
      instructions:{prompt:HANDOFF_PROMPT,expectedFinalSchemaId:'rg-manual-chatgpt-handoff-v1'},
      updatedAt:new Date().toISOString()
    };
  }

  function downloadJson(data,name){
    const blob=new Blob([JSON.stringify(data,null,2)],{type:'application/json'});
    const link=document.createElement('a');
    link.href=URL.createObjectURL(blob);
    link.download=name;
    link.click();
    URL.revokeObjectURL(link.href);
  }

  async function copyPrompt(){
    try{
      await navigator.clipboard.writeText(HANDOFF_PROMPT);
      alert('Prompt copiato. Apri ChatGPT, carica il file esportato e incolla il prompt.');
    }catch{
      const area=document.createElement('textarea');
      area.value=HANDOFF_PROMPT;document.body.appendChild(area);area.select();document.execCommand('copy');area.remove();
      alert('Prompt copiato.');
    }
  }

  function renderStatus(){
    const root=document.querySelector('#handoffStatus');
    if(!root)return;
    const saved=getStoredWorkflow();
    if(!saved){root.innerHTML='<strong>Nessun risultato importato.</strong><span>Il primo passo è esportare il file e lavorarlo in ChatGPT.</span>';return}
    const workflow=saved.workflow||{};
    const decisions=(workflow.decisions||[]).length;
    const unresolved=(workflow.unresolvedItems||[]).length;
    const questions=(workflow.generatedQuestions||[]).filter(q=>q.status==='approved').length;
    root.innerHTML=`<strong>Ultimo risultato importato</strong><span>Fase: ${esc(workflow.phase||'non indicata')} · Decisioni: ${decisions} · Punti aperti: ${unresolved} · Domande approvate: ${questions}</span><span>Aggiornato: ${saved.updatedAt?new Date(saved.updatedAt).toLocaleString('it-IT'):'data non disponibile'}</span>`;
  }

  function importResult(file){
    const reader=new FileReader();
    reader.onload=()=>{
      try{
        const data=JSON.parse(reader.result);
        if(data.schemaId!=='rg-manual-chatgpt-handoff-v1')throw new Error('schema');
        if(!data.workflow||!data.manualOriginal||!Array.isArray(data.notes))throw new Error('structure');
        data.updatedAt=data.updatedAt||new Date().toISOString();
        localStorage.setItem(WORKFLOW_KEY,JSON.stringify(data));
        renderStatus();
        alert('Risultato di ChatGPT importato e conservato in questo browser. Puoi riesportarlo per continuare il lavoro.');
      }catch{
        alert('Il file non è un risultato valido del workflow RG Manual Review.');
      }
    };
    reader.readAsText(file);
  }

  const exportButton=document.querySelector('#handoffExportBtn');
  const promptButton=document.querySelector('#handoffPromptBtn');
  const importInput=document.querySelector('#handoffImportInput');
  const continueButton=document.querySelector('#handoffContinueBtn');

  if(exportButton)exportButton.onclick=()=>downloadJson(buildPackage(),`RG_MANUAL_CHATGPT_${new Date().toISOString().slice(0,10)}.json`);
  if(promptButton)promptButton.onclick=copyPrompt;
  if(importInput)importInput.onchange=e=>{const file=e.target.files?.[0];if(file)importResult(file);e.target.value=''};
  if(continueButton)continueButton.onclick=()=>{
    const saved=getStoredWorkflow();
    if(!saved){alert('Non è ancora stato importato un risultato di ChatGPT.');return}
    const refreshed={...saved,notes:(state.notes||[]).map(cleanContribution),notesByParagraph:buildPackage().notesByParagraph,updatedAt:new Date().toISOString()};
    downloadJson(refreshed,`RG_MANUAL_CHATGPT_CONTINUA_${new Date().toISOString().slice(0,10)}.json`);
  };
  renderStatus();
})();
