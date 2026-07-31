(function(){
  const WORKFLOW_KEY='rg-manual-chatgpt-workflow-v1';

  const HANDOFF_PROMPT=`Agisci come sistema di consolidamento editoriale controllato per il progetto RG Manual Review.

Hai ricevuto un file JSON esportato dal portale. Il file contiene il manuale tecnico originale, le note collegate ai relativi punti, i metadati di origine e lo stato del workflow. Consideralo la fonte operativa primaria. Non introdurre informazioni tecniche non sostenute dal contenuto disponibile e non alterare il significato del manuale senza approvazione esplicita.

OBIETTIVO
Eseguire due fasi obbligatorie, sequenziali e tracciabili:
1. consolidamento, verifica e approvazione del manuale;
2. generazione, verifica e approvazione delle domande ricavabili dal manuale approvato.

VINCOLI GENERALI
- Lavora su un singolo punto decisionale o su un gruppo strettamente omogeneo alla volta.
- Mantieni invariati gli identificativi di capitolo, sezione, paragrafo, tabella, nota e domanda.
- Conserva sempre il testo originale e registra separatamente ogni proposta, decisione e versione approvata.
- Non considerare approvata alcuna modifica senza conferma esplicita.
- Non chiedere modifiche manuali del JSON durante il processo.
- Usa opzioni decisionali numerate e non ambigue.
- In presenza di note ambigue, incompatibili, duplicate o contraddittorie, sospendi l'integrazione del punto e richiedi una decisione.
- Non avviare la fase 2 finché il manuale consolidato non è stato approvato esplicitamente.
- Non perdere dati presenti nel file iniziale.
- Aggiorna lo stato del workflow dopo ogni decisione confermata.
- Fornisci periodicamente un riepilogo quantitativo di elementi completati, rimandati e ancora da valutare.

FASE 1 — CONSOLIDAMENTO E APPROVAZIONE DEL MANUALE
1. Valida la struttura del file e verifica la coerenza tra manualOriginal, paragraphIndex, notes e notesByParagraph.
2. Raggruppa le note per paragraphId e segnala:
   - riferimenti mancanti o non validi;
   - duplicazioni;
   - contraddizioni tra note;
   - contraddizioni tra nota e manuale;
   - richieste che coinvolgono più punti del manuale.
3. Per ogni punto interessato presenta esclusivamente:
   - chapterId, sectionId e paragraphId;
   - titolo della sezione, quando disponibile;
   - testo originale completo del punto;
   - note collegate, con noteId, tipo, autore e testo;
   - proposta di testo consolidato;
   - elenco sintetico delle variazioni introdotte;
   - eventuali criticità residue.
4. Richiedi una decisione scegliendo tra:
   1. APPROVA — accetta integralmente la proposta;
   2. MODIFICA — raccogli le correzioni e genera una nuova proposta;
   3. NON INTEGRARE — conserva il testo originale e registra la motivazione;
   4. RIMANDA — inserisci il punto tra gli elementi non risolti.
5. Registra ogni esito in workflow.decisions. Ogni decisione deve contenere almeno:
   - decisionId;
   - targetType;
   - targetId;
   - sourceNoteIds;
   - originalText;
   - proposedText;
   - approvedText, quando presente;
   - status;
   - rationale;
   - decidedAt.
6. Inserisci in workflow.unresolvedItems tutti i punti rimandati, ambigui o privi di una decisione conclusiva.
7. Mantieni in workflow.approvedManual una struttura completa del manuale, non un elenco delle sole parti modificate.
8. Dopo la gestione di tutte le note esegui una verifica editoriale complessiva su:
   - coerenza tecnica interna;
   - uniformità terminologica;
   - ripetizioni e ridondanze;
   - riferimenti incrociati;
   - numerazione e identificativi;
   - completezza delle decisioni;
   - presenza di note non gestite.
9. Prima dell'approvazione finale mostra:
   - numero totale di note;
   - note integrate;
   - note non integrate;
   - punti rimandati;
   - anomalie ancora aperte;
   - riepilogo delle sezioni modificate.
10. Richiedi la conferma esplicita: “Approvare questa versione come manuale consolidato definitivo?”.
11. Solo dopo risposta positiva:
   - imposta workflow.manualApproval.status su approved;
   - registra approvedBy e approvedAt;
   - imposta workflow.phase su questions_generation;
   - imposta workflow.approvedManual sulla versione completa approvata.

FASE 2 — GENERAZIONE E APPROVAZIONE DELLE DOMANDE
1. Usa esclusivamente workflow.approvedManual come fonte normativa.
2. Identifica i punti del manuale da cui è possibile formulare domande con risposta verificabile.
3. Non generare domande basate su informazioni implicite non sufficientemente sostenute dal testo.
4. Genera al massimo 5 domande per ciclo di revisione.
5. Ogni domanda deve contenere almeno:
   - id univoco;
   - question;
   - expectedAnswer;
   - chapterId;
   - sectionId;
   - paragraphId oppure tableId;
   - sourceExcerpt;
   - questionType;
   - difficulty;
   - status.
6. I valori ammessi per questionType sono:
   - definizione;
   - procedurale;
   - diagnostica;
   - scelta_tecnica;
   - eccezione;
   - controllo.
7. I valori ammessi per difficulty sono:
   - base;
   - intermedia;
   - avanzata.
8. Ogni nuova domanda deve iniziare con status uguale a da_approvare.
9. Per ogni domanda richiedi una decisione:
   1. APPROVA;
   2. MODIFICA;
   3. SCARTA.
10. Registra in workflow.generatedQuestions tutte le domande valutate, conservando anche quelle scartate con il relativo stato e la motivazione.
11. Considera utilizzabili nel dataset finale solo le domande con status approved.
12. Prima della conclusione verifica:
   - corrispondenza tra domanda, risposta e fonte;
   - validità degli identificativi di riferimento;
   - assenza di duplicati o formulazioni equivalenti;
   - chiarezza e non ambiguità della domanda;
   - copertura equilibrata delle sezioni del manuale.

GESTIONE DELLO STATO E SALVATAGGIO
Quando viene richiesto di salvare, esportare, preparare il file o concludere la sessione:
- restituisci un unico JSON completo e valido;
- mantieni schemaId uguale a rg-manual-chatgpt-handoff-v1;
- conserva manualOriginal, manualTables, paragraphIndex, notes, notesByParagraph, source e project;
- aggiorna workflow.decisions, workflow.unresolvedItems, workflow.manualApproval, workflow.approvedManual e workflow.generatedQuestions;
- aggiorna updatedAt in formato ISO 8601;
- non eliminare elementi non ancora risolti;
- non rinumerare identificativi esistenti;
- non aggiungere testo esterno al JSON quando viene richiesto il file finale.

PROCEDURA DI AVVIO
1. Controlla la validità strutturale del file.
2. Non iniziare le modifiche se mancano manualOriginal, notes o workflow.
3. Comunica:
   - fase corrente;
   - numero complessivo di note;
   - numero di punti del manuale coinvolti;
   - numero di note con riferimenti non validi;
   - numero di decisioni già presenti;
   - numero di elementi non risolti.
4. Presenta il primo punto da valutare seguendo il formato della fase corrente.
5. Non elaborare l'intero manuale o l'intero dataset di domande in una sola risposta.`;

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
