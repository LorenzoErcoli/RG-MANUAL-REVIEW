const P=(id,text,kind='paragraph')=>({id,text,kind});
const S=(id,title,paragraphs)=>({id,title,paragraphs});
const C=(id,title,sections)=>({id,title,sections});
const MANUAL={
 title:'MANUALE TECNICO DI PROGRAMMAZIONE E INDUSTRIALIZZAZIONE DEL RICAMO',
 version:'1.1-drive-sync',
 sourceRevision:'AIroW34TR_h_udtPg0DuCUv4dq38ZFW6wdyFOV52-JC_k7DDGsfW0Rtk8GIp3iTHczWzJ6bB39VPsyOgXWTh4V-pASQ8W194nXTOghYyOjTd',
 sourceDocumentId:'1pMp9XIH4yVNFgSXGaAzF6GhSQXIj1ZXqk9SnVpBfaQA',
 chapters:[
 C('1','Introduzione',[
  S('1','Introduzione',[
   P('1-p01','Lo scopo di questo manuale è definire gli standard di programmazione adottati all’interno dell’azienda, raccogliendo le esperienze maturate durante lo sviluppo e la produzione.'),
   P('1-p02','Le regole riportate costituiscono una base tecnica di riferimento per i programmatori e devono essere applicate valutando sempre il materiale, il tipo di ricamo e il risultato estetico richiesto.')
  ])
 ]),
 C('2','Regole generali di programmazione',[
  S('2.1','Lunghezza minima del punto',[
   P('2.1-p01','Indipendentemente dal tipo di punto, dal materiale utilizzato o dal filo impiegato, devono essere eliminati tutti i punti inferiori a 1 mm. Questa regola può essere superata solo in casi eccezionali e sotto la supervisione di un programmatore esperto.'),
   P('2.1-p02','I punti troppo corti possono provocare rotture del filo, surriscaldamento dell’ago, perdita di produttività, ricamo irregolare e aumento dei fermi macchina.'),
   P('2.1-p03','L’eventuale utilizzo di punti inferiori a 1 mm deve essere valutato e autorizzato caso per caso dal programmatore responsabile.')
  ])
 ]),
 C('3','Fili da ricamo',[
  S('3.1','Cieffe',[
   P('3.1-h01','3.1.1 Caratteristiche tecniche','subheading'),
   P('3.1-p01','Il filo Cieffe è un filo 100% Mako, caratterizzato da una finitura opaca, una superficie leggermente pelosa e una sezione irregolare.'),
   P('3.1-p02','Queste caratteristiche conferiscono al ricamo un aspetto naturale e materico, ma richiedono una programmazione accurata per ottenere una coprenza uniforme ed evitare eccessivi accumuli di filo.')
  ]),
  S('3.1.2','Cieffe Titolo 12',[
   P('3.1.2-p01','Il Cieffe Titolo 12 è il filo più grosso normalmente utilizzato in reparto. Garantisce una coprenza importante già con densità relativamente basse e richiede particolare attenzione durante la programmazione.'),
   P('3.1.2-p02','Densità massima consigliata: 20 Stilista.'),
   P('3.1.2-p03','È indicato per ricami molto coprenti, materici e con forte presenza del filo.')
  ]),
  S('3.1.3','Cieffe Titolo 30',[
   P('3.1.3-p01','Il Cieffe Titolo 30 è il filo maggiormente utilizzato in reparto e rappresenta il miglior compromesso tra coprenza, definizione e produttività.'),
   P('3.1.3-p02','Densità massima consigliata: 40 Stilista.')
  ]),
  S('3.1.4','Cieffe Titolo 40',[
   P('3.1.4-p01','Il Cieffe Titolo 40 è il filo più sottile della gamma normalmente utilizzata in reparto. È indicato per dettagli, logature, testi e piccoli elementi, ma risulta meno adatto ai ricami molto pesanti.'),
   P('3.1.4-p02','Densità massima consigliata: 50 Stilista.')
  ]),
  S('3.2','Gütermann Mara',[
   P('3.2-p01','Il Gütermann Mara è un filo in poliestere continuo con maggiore resistenza meccanica rispetto al Cieffe. Le regole di programmazione sono equivalenti ai corrispondenti titoli Cieffe.'),
   P('3.2-p02','Il Titolo 150 viene utilizzato prevalentemente come filo di spolina, perché resistente e fine.'),
   P('3.2-p03','Il Titolo 220 è molto sottile, poco resistente e poco utilizzato. Viene impiegato soprattutto nell’abbigliamento.')
  ]),
  S('3.3','Madeira Classic e Polyneon',[
   P('3.3-p01','I fili Madeira Classic e Madeira Polyneon sono lucidi e coprono leggermente meno rispetto ai fili Cieffe.'),
   P('3.3-p02','I titoli 30 e 40 corrispondono dimensionalmente ai rispettivi titoli Cieffe. Per ottenere una coprenza equivalente si consiglia di aumentare la densità di circa 5 punti Stilista.')
  ]),
  S('3.4','Madeira FS',[
   P('3.4-p01','Il Madeira FS appartiene alla famiglia dei fili laminati. I titoli 30 e 40 possono essere programmati con le stesse densità dei corrispondenti fili Cieffe.'),
   P('3.4-p02','Essendo fili delicati, tendono però a rompersi più facilmente in macchina. È quindi necessario evitare programmi troppo pesanti, sovrapposizioni eccessive e tensioni troppo dure.')
  ]),
  S('3.5','Serafil',[
   P('3.5-h01','3.5.1 Serafil 180','subheading'),
   P('3.5-p01','Il Serafil 180 viene utilizzato per logature molto dettagliate, piccoli testi, disegni fini e contorni precisi. L’effetto ottenuto è simile al tratto di una penna a china.'),
   P('3.5-p02','La densità consigliata varia da 60 a 80 Stilista. I punti non devono essere troppo lunghi.'),
   P('3.5-h02','3.5.2 Serafil 300','subheading'),
   P('3.5-p03','Il Serafil 300 è un filo estremamente sottile, utilizzato per disegni molto dettagliati su strutture non troppo rigide, come l’abbigliamento e i materiali morbidi.')
  ])
 ]),
 C('4','Impostazioni e limiti macchina',[
  S('4.1','Equilibrio delle tensioni',[
   P('4.1-p01','Le tensioni del filo superiore e della spolina devono essere sempre ben equilibrate per evitare rotture, irregolarità del punto e problemi di stabilità.'),
   P('4.1-p02','Per i fili più grossi si utilizzano generalmente tensioni più dure; per i fili più fini si utilizzano tensioni più morbide.')
  ]),
  S('4.2','Scelta dell’ago',[
   P('4.2-p01','L’ago è un elemento fondamentale per ottenere un ricamo preciso e stabile. La misura deve essere scelta in funzione del titolo del filo, del materiale e della lavorazione.')
  ]),
  S('4.3','Scelta del filo di spolina',[
   P('4.3-p01','Quando possibile si utilizza un filo inferiore appartenente alla stessa famiglia del filo superiore, così da mantenere caratteristiche compatibili e un comportamento uniforme.')
  ])
 ]),
 C('5','Gestione della densità',[
  S('5.1','Principio generale',[
   P('5.1-p01','La densità non è mai un valore fisso. I valori riportati nel manuale rappresentano regole di base e punti di partenza.'),
   P('5.1-p02','La densità definitiva deve essere adattata in funzione del gusto e dell’effetto estetico desiderato, del materiale, del tipo e titolo del filo, del numero di termogarze, delle sovrapposizioni, della rigidità del supporto e della qualità richiesta.')
  ]),
  S('5.2','Massima coprenza',[
   P('5.2-p01','Le densità riportate per ogni filo rappresentano i valori di riferimento per ottenere la massima coprenza senza termogarza.'),
   P('5.2-p02','Quando non è necessaria una copertura completa, la densità può essere ridotta indicativamente di circa 10 punti Stilista, ottenendo ricami più morbidi e naturali.')
  ]),
  S('5.3','Correzione con termogarza',[
   P('5.3-p01','La termogarza aumenta la coprenza del ricamo. In presenza di termogarza si consiglia quindi di diminuire la densità di circa 5 punti Stilista rispetto ai valori standard.'),
   P('5.3-p02','La correzione deve essere valutata anche in base al numero di termogarze utilizzate.')
  ]),
  S('5.4','Sovrapposizioni',[
   P('5.4-p01','La densità deve essere definita separatamente per ogni singolo oggetto o riempimento, in funzione dell’effetto desiderato e dello spessore del filo utilizzato. Un filo più fine, come il Cieffe Titolo 40, richiede generalmente una densità maggiore rispetto a un filo più spesso, come il Cieffe Titolo 30, per ottenere una coprenza equivalente.'),
   P('5.4-p02','Il controllo dell’accumulo riguarda invece le zone in cui più strati di filo si sovrappongono. Un eccessivo accumulo di punti può rendere difficile il passaggio della macchina, provocare perdita di punti e compromettere la precisione e la pulizia del ricamo.')
  ])
 ]),
 C('6','Ricami sfumati',[
  S('6.1','Costruzione della sfumatura',[
   P('6.1-p01','Per ottenere una sfumatura naturale si utilizzano almeno tre colori sovrapposti.'),
   P('6.1-p02','I colori devono mantenere la stessa retta di orientamento del punto. L’ordine di ricamo procede dai colori più chiari a quelli intermedi e infine ai colori più scuri.')
  ]),
  S('6.2','Densità per Cieffe 30, Gütermann 70 e Madeira 30',[
   P('6.2-p01','Questi sono i titoli più utilizzati per le sfumature.')
  ]),
  S('6.3','Densità per Cieffe 40, Gütermann 120 e Madeira 40',[
   P('6.3-p01','Per i titoli più fini si aumenta la densità di circa 10 punti Stilista.')
  ])
 ]),
 C('7','Studio e realizzazione di un programma di ricamo a partire da un’immagine',[
  S('7.1','Analisi e interpretazione iniziale del soggetto',[
   P('7.1-p01','La realizzazione di un programma di ricamo a partire da un’immagine comincia con l’analisi del soggetto rappresentato.'),
   P('7.1-p02','Prima di iniziare la costruzione del ricamo è necessario definire che cosa rappresenta l’immagine, come è costruita graficamente, quali sono gli elementi principali e secondari, se il soggetto è unico oppure composto da elementi ripetuti e quali parti possono essere ricondotte alla stessa tecnica di ricamo.'),
   P('7.1-p03','Spesso l’immagine è composta da più oggetti, sfondi ed elementi di contorno. Tutti questi elementi devono essere individuati e analizzati singolarmente, definendone forma, funzione, colore, posizione e relazione con le altre parti.'),
   P('7.1-p04','Nel caso di immagini più complesse, come fotografie o illustrazioni completamente piene, ogni elemento deve essere interpretato con maggiore attenzione. L’analisi delle singole parti deve però mantenere sempre una visione globale dell’immagine, così da conservare coerenza nella composizione, nei rapporti tra i soggetti, nelle profondità, nei colori e nell’effetto finale.')
  ]),
  S('7.2','Individuazione del modulo ripetuto',[
   P('7.2-p01','Quando l’immagine presenta più soggetti simili o ripetuti, si sviluppa inizialmente un solo soggetto o modulo rappresentativo. Su questo elemento vengono effettuate le prove necessarie per individuare e approvare la tecnica più adatta.'),
   P('7.2-p02','Solo successivamente la stessa costruzione viene replicata sugli altri elementi simili.'),
   P('7.2-p03','Esempio: se un’immagine è composta da numerosi fiori simili, si sviluppa inizialmente un solo fiore. Una volta approvati costruzione, punti, densità, orientamento, colori, sovrapposizioni, materiali e comportamento in macchina, la stessa logica viene applicata agli altri fiori.')
  ]),
  S('7.3','Definizione della tecnica di ricamo',[
   P('7.3-p01','Per tecnica di ricamo si intende l’insieme completo delle scelte effettuate per realizzare un determinato soggetto.'),
   P('7.3-p02','La tecnica comprende tipologia di punto, densità, orientamento, colori, riempimenti, sovrapposizioni, sfumature, contorni, aggiunte grafiche, fili, titoli, materiali di supporto, termogarze, operazioni da eseguire in macchina, rimozione o aggiunta di materiali e tipologia di teste di ricamo utilizzate.'),
   P('7.3-p03','La tecnica deve essere definita e approvata sul modulo di prova prima di essere applicata all’intero disegno.')
  ]),
  S('7.4','Scomposizione dell’immagine',[
   P('7.4-p01','Una volta individuato il soggetto o il modulo da sviluppare, si procede con la scomposizione dell’immagine in blocchi grafici e cromatici.'),
   P('7.4-p02','Ogni blocco deve essere analizzato considerando forma, colore, posizione, accostamento, sovrapposizione, ordine di esecuzione e funzione estetica o strutturale.'),
   P('7.4-p03','La scomposizione non deve basarsi esclusivamente sui colori visibili, ma deve considerare anche quali elementi si trovano sotto, quali devono essere ricamati sopra, quali forme devono risultare separate, quali parti devono fondersi attraverso una sfumatura e quali elementi devono avere maggiore coprenza o rilievo.')
  ]),
  S('7.5','Esempio applicativo: costruzione di un fiore',[
   P('7.5-p01','Un fiore può essere scomposto nella base dei petali, nella sfumatura dei petali e nel pistillo centrale.'),
   P('7.5-p02','Nell’esempio considerato, i petali presentano una base lilla chiaro e una sfumatura viola più scura che parte dalla zona centrale del fiore e si alleggerisce verso l’esterno. Il pistillo centrale è costituito da un blocco giallo.'),
   P('7.5-h01','7.5.1 Base dei petali','subheading'),
   P('7.5-p03','Ogni petalo deve essere tracciato separatamente e trattato come un elemento autonomo.'),
   P('7.5-p04','Per la base può essere utilizzato un riempimento raso semplice con densità sufficientemente alta da garantire una buona coprenza.'),
   P('7.5-p05','L’orientamento deve seguire la forma del petalo. Il punto viene disposto trasversalmente rispetto al suo sviluppo, partendo idealmente dalla zona centrale del fiore verso l’esterno.'),
   P('7.5-h02','7.5.2 Sfumatura dei petali','subheading'),
   P('7.5-p06','Sopra la base viene costruita una seconda area destinata alla sfumatura.'),
   P('7.5-p07','La parte rivolta verso il centro del fiore può essere più definita e regolare, mentre la parte esterna deve risultare maggiormente frastagliata e discontinua, evitando uno stacco netto tra i colori.'),
   P('7.5-p08','La densità della sfumatura deve essere inferiore rispetto a quella della base.'),
   P('7.5-h03','7.5.3 Pistillo centrale','subheading'),
   P('7.5-p09','Dopo i petali e le relative sfumature viene tracciato il pistillo centrale.'),
   P('7.5-p10','Il pistillo viene generalmente eseguito con una densità più alta, così da garantire una buona coprenza, separare visivamente il centro del fiore dai petali e regolarizzare le parti interne sottostanti.')
  ]),
  S('7.6','Replicazione della tecnica',[
   P('7.6-p01','Una volta approvata la costruzione del fiore campione, la stessa tecnica viene applicata agli altri fiori presenti nel disegno.'),
   P('7.6-p02','La replica non deve necessariamente essere identica: le forme possono essere adattate ai singoli soggetti mantenendo la stessa logica tecnica e lo stesso linguaggio estetico.')
  ]),
  S('7.7','Gestione del rilievo',[
   P('7.7-p01','Quando alcuni petali devono risultare più alti o tridimensionali rispetto agli altri, possono essere utilizzate una o più termogarze nelle sole aree interessate.'),
   P('7.7-p02','La presenza della termogarza deve essere pianificata durante la scomposizione iniziale e considerata nella definizione della densità, delle sovrapposizioni, dell’ordine di ricamo e delle operazioni di rimozione del materiale.')
  ]),
  S('7.8','Controllo delle sovrapposizioni',[
   P('7.8-p01','Durante tutta la costruzione del soggetto è necessario controllare la densità complessiva nelle zone in cui più elementi si sovrappongono.'),
   P('7.8-p02','Ogni oggetto deve essere programmato con una densità propria, scelta in base all’effetto desiderato, alla coprenza richiesta e al titolo del filo. È però necessario controllare separatamente l’accumulo di punti nelle aree in cui riempimenti di base, sfumature, contorni, elementi centrali, sottopunti e passaggi successivi si sovrappongono.'),
   P('7.8-p03','Quando la sovrapposizione di più strati produce un accumulo eccessivo, la macchina può faticare a ricamare, perdere punti e generare un risultato meno preciso. La correzione deve quindi riguardare la costruzione e l’interazione tra gli strati, senza considerare la densità come un unico valore complessivo.')
  ]),
  S('7.9','Regole estratte dal processo',[
   P('7.9-p01','Prima di punzonare è necessario analizzare il soggetto e la sua struttura.','list'),
   P('7.9-p02','Oggetti, sfondi, contorni e sotto-oggetti devono essere individuati singolarmente, mantenendo sempre una visione globale dell’immagine.','list'),
   P('7.9-p03','In presenza di elementi ripetuti, la tecnica deve essere sviluppata e approvata su un solo modulo rappresentativo prima di essere replicata.','list'),
   P('7.9-p04','Ogni immagine deve essere scomposta in blocchi e sotto-oggetti, considerando colori, forme, ordine di esecuzione e sovrapposizioni.','list'),
   P('7.9-p05','Ogni forma deve avere un orientamento del punto coerente con il proprio andamento e volume.','list'),
   P('7.9-p06','Le sfumature devono essere costruite mediante sovrapposizioni meno dense e bordi non completamente regolari.','list'),
   P('7.9-p07','Gli effetti tridimensionali devono essere pianificati durante lo studio iniziale del soggetto.','list'),
   P('7.9-p08','La densità deve essere valutata per ogni singolo oggetto o riempimento, in base all’effetto desiderato e al titolo del filo. Nelle sovrapposizioni deve invece essere controllato l’accumulo complessivo dei punti, per evitare difficoltà di ricamo, perdita di punti e imprecisioni.','list'),
   P('7.9-p09','La gestione dei colori, dei cambi ago e della sequenza macchina è app')
  ])
 ]),
 C('8','Sequenza di ricamo e gestione dei colori',[
  S('8.1','Organizzazione generale per colore',[
   P('8.1-p01','Quando un disegno contiene più oggetti, la sequenza viene generalmente organizzata completando lo stesso colore su tutti gli oggetti interessati prima di passare al colore successivo. Questo metodo riduce i cambi colore e rende più efficiente l’esecuzione del programma.')
  ]),
  S('8.2','Separazione tra parti basse e parti in rilievo',[
   P('8.2-p01','Quando uno o più oggetti comprendono parti che devono risultare in rilievo, la sequenza viene suddivisa in due fasi. Nella prima fase vengono ricamate, organizzate per colore, tutte le parti che devono rimanere più basse. Successivamente vengono posizionate le termogarze e, sempre seguendo l’organizzazione per colore, vengono ricamate le parti superiori o in rilievo.'),
   P('8.2-p02','La separazione tra le due fasi deve essere prevista durante la costruzione del programma e deve tenere conto dell’ordine degli oggetti, dei colori e delle operazioni necessarie per il posizionamento delle termogarze.')
  ]),
  S('8.3','Passaggi coperti',[
   P('8.3-p01','L’organizzazione per colore permette di collegare più blocchi di ricamo senza interrompere il filo, quando il percorso può essere collocato all’interno di una zona che verrà ricamata successivamente. Il tragitto deve essere il più breve possibile, ma deve anche consentire alla macchina di muoversi in modo pulito e funzionale rispetto alla sequenza dei blocchi.'),
   P('8.3-p02','Il passaggio viene realizzato mediante impunture posizionate il più possibile al centro dell’area che sarà coperta. Questa posizione riduce il rischio che il collegamento diventi visibile o fuoriesca in seguito ai ritiri e agli spostamenti generati dal ricamo.'),
   P('8.3-p03','Quando il passaggio attraversa o raggiunge un blocco che deve essere ricamato con lo stesso colore, è possibile arrivare fino alla parte opposta del blocco, ricamarlo tornando indietro e concludere nuovamente vicino al punto di partenza. Questa costruzione consente di utilizzare lo stesso blocco come parte del percorso, mantenendo i collegamenti puliti e nascosti.'),
   P('8.3-p04','Per le impunture di passaggio si utilizza generalmente una lunghezza del punto compresa tra 2 e 3 mm. Questa misura limita il numero di punti aggiuntivi, mantenendo allo stesso tempo precisione ed evitando tratti di filo eccessivamente lunghi.'),
   P('8.3-p05','Quando non è possibile restare al centro dell’area di copertura e il percorso deve avvicinarsi a un bordo, è necessario mantenere un margine di sicurezza sufficiente a compensare eventuali ritiri o spostamenti del ricamo. Il passaggio deve sempre essere controllato verificando che rimanga completamente coperto nel risultato finale.')
  ]),
  S('8.3.1','Costruzione dei passaggi di collegamento',[
   P('8.3.1-p01','Quando il collegamento tra due aree viene eseguito con un solo passaggio di impuntura, generalmente non produce uno spessore significativo e non risulta visibile nel ricamo finito.'),
   P('8.3.1-p02','Il percorso deve essere posizionato, quando possibile, al centro dell’area che verrà successivamente coperta dal ricamo. Questa soluzione permette di mantenere il collegamento nascosto anche in presenza di piccoli ritiri o spostamenti del materiale.'),
   P('8.3.1-p03','I passaggi di collegamento sono particolarmente importanti per evitare di iniziare direttamente con punti raso privi di una precedente fermatura o di un percorso di avvicinamento. Il filo viene così accompagnato fino alla zona di lavoro in modo più stabile e controllato.'),
   P('8.3.1-p04','In alcuni casi il collegamento può essere costruito seguendo il bordo esterno dell’oggetto, utilizzando una zona che sarà successivamente coperta dal contorno o dalle parti finali del ricamo.'),
   P('8.3.1-p05','Il percorso deve comunque essere valutato verificando che venga completamente ricoperto. Quando non esiste una zona interna o perimetrale sufficientemente sicura, il passaggio non deve essere realizzato, perché rimarrebbe visibile nel risultato finale.'),
   P('8.3.1-p06','In questi casi è possibile prevedere un salto tra le due aree, inserendo i fermapunti necessari alla fine del blocco precedente e all’inizio del blocco successivo. Il filo di collegamento verrà poi eliminato durante la pulizia manuale del ricamo.')
  ]),
  S('8.3.2','Definizione dei punti di ingresso e di uscita',[
   P('8.3.2-p01','I punti di ingresso e di uscita di ogni blocco devono essere definiti in funzione della sequenza complessiva degli oggetti.'),
   P('8.3.2-p02','L’ordine di ricamo deve essere costruito in modo da ridurre il numero dei passaggi, limitarne la visibilità e permettere alla macchina di lavorare per prossimità, passando preferibilmente da un oggetto a quello più vicino. In questo modo si migliora l’efficienza del programma e si riducono tempi, spostamenti e interruzioni.'),
   P('8.3.2-p03','La scelta dell’ingresso e dell’uscita deve quindi anticipare il blocco successivo: il punto di uscita di un oggetto dovrebbe trovarsi, quando possibile, nella posizione più favorevole per raggiungere l’elemento seguente.'),
   P('8.3.2-p04','In alcuni casi, tuttavia, ingresso e uscita sono vincolati dalla tipologia di ricamo. Nei riempimenti, nei punti raso e nelle costruzioni più complesse, devono essere scelti in modo da evitare sovrapposizioni anomale, deformazioni del punto o uno sviluppo scorretto del pattern.'),
   P('8.3.2-p05','Anche nei cordoncini la scelta può essere vincolata dalla direzione di lavoro della macchina. Cordoncini simili devono essere eseguiti, quando possibile, mantenendo la stessa direzione, evitando di ricamarne alcuni da un lato e altri dal lato opposto. Un’inversione della direzione può infatti produrre differenze visibili nell’aspetto, nella tensione e nella regolarità del cordoncino.'),
   P('8.3.2-p06','Come regola generale, si cerca di iniziare da un angolo esterno del blocco e di terminare su un altro angolo esterno, così da completare il ricamo con un’unica continuità di esecuzione e senza cambi aggiuntivi non necessari.'),
   P('8.3.2-p07','La scelta finale deve bilanciare continuità del punto, vicinanza con il blocco successivo, direzione macchina e corretto sviluppo tecnico del ricamo.')
  ]),
  S('8.3.3','Ordine degli oggetti sovrapposti',[
   P('8.3.3-p01','Quando due o più oggetti si sovrappongono, viene generalmente ricamato per primo l’elemento che si trova visivamente sotto.'),
   P('8.3.3-p02','La costruzione dell’oggetto inferiore deve essere valutata in funzione dell’elemento che verrà ricamato sopra. Se l’oggetto superiore garantisce una copertura completa, il riempimento sottostante può essere ridotto nelle zone nascoste, evitando accumuli inutili di filo. Se invece la copertura è parziale, rada o sfumata, l’oggetto inferiore deve essere mantenuto nelle aree necessarie a garantire continuità, colore e coprenza.'),
   P('8.3.3-p03','La scelta dipende anche dal rapporto cromatico tra gli elementi. In generale, un colore chiaro copre con maggiore difficoltà un colore scuro, mentre un colore scuro riesce più facilmente a coprire un colore chiaro. Questo rapporto deve essere considerato nella definizione dell’ordine, dell’estensione degli oggetti e della densità delle zone sovrapposte.'),
   P('8.3.3-p04','Tra un oggetto inferiore e uno superiore deve essere prevista una sovrapposizione indicativa di circa 1–2 mm. Questo valore rappresenta una regola generale e serve a compensare ritiri, deformazioni e tolleranze di esecuzione, evitando che risultino visibili stacchi, aperture o parti della base.'),
   P('8.3.3-p05','Nel caso delle sfumature, la quantità di sovrapposizione e l’estensione dell’oggetto inferiore devono essere definite in funzione dell’effetto richiesto. La transizione tra i colori deve risultare graduale, senza creare accumuli eccessivi o separazioni nette non desiderate.')
  ]),
  S('8.3.4','Contorni e ricami di ripulitura',[
   P('8.3.4-p01','I contorni e i bordi vengono generalmente eseguiti nelle fasi finali del programma, dopo la costruzione degli oggetti principali.'),
   P('8.3.4-p02','Questi ricami hanno una funzione di ripulitura: permettono di regolarizzare i bordi, coprire eventuali piccole imprecisioni nelle sovrapposizioni e aumentare la definizione del disegno.'),
   P('8.3.4-p03','Una tecnica frequentemente utilizzata consiste nella realizzazione di contorni mediante impunture semplici, spesso eseguite con filo nero o con un colore più scuro rispetto agli elementi interni. Queste impunture delimitano le forme e costruiscono graficamente i bordi del soggetto.'),
   P('8.3.4-p04','La larghezza e la posizione dei contorni devono essere definite considerando i ritiri del ricamo e l’effettiva posizione degli elementi già eseguiti, evitando che il bordo risulti spostato o separato dalle forme sottostanti.')
  ]),
  S('8.3.5','Riduzione dei riempimenti sottostanti',[
   P('8.3.5-p01','Quando nelle zone di sovrapposizione si genera un accumulo eccessivo di filo, si interviene direttamente sul programma di ricamo modificando la costruzione degli oggetti interessati.'),
   P('8.3.5-p02','L’intervento può consistere nello spostamento o nell’eliminazione dei punti presenti nelle aree troppo cariche, nella riduzione parziale del riempimento sottostante, nell’eliminazione completa delle parti totalmente coperte oppure nella modifica dei contorni dell’oggetto inferiore.'),
   P('8.3.5-p03','L’obiettivo è diminuire il numero di strati ricamati nella stessa zona senza compromettere la coprenza, la continuità visiva e la stabilità del soggetto.'),
   P('8.3.5-p04','La correzione deve quindi riguardare soprattutto la geometria dei riempimenti e l’estensione delle aree sovrapposte, evitando di intervenire esclusivamente sulla densità del singolo oggetto.')
  ]),
  S('8.4','Rasafilo',[
   P('8.4-p01','Per rasafilo si intende l’interruzione del ricamo con il taglio del filo da parte della macchina e la successiva ripartenza in un’altra posizione.'),
   P('8.4-p02','I rasafilo devono essere limitati quando è possibile realizzare un passaggio coperto. Ogni rasafilo richiede tempo macchina e può lasciare sporcizia sul retro del ricamo, dovuta al tratto di filo che rimane dopo il taglio nella alla successiva ripartenza.'),
   P('8.4-p03','La riduzione dei rasafilo deve comunque essere valutata senza compromettere la pulizia, la precisione e la corretta sequenza del ricamo.')
  ]),
  S('8.5','Gestione dei fermapunti',[
   P('8.5-p01','I fermapunti sono brevi sequenze di punti ravvicinati utilizzate per bloccare il filo all’inizio o alla fine di un tratto di ricamo. La loro funzione è impedire che il filo si sfili quando viene tagliato, durante il lavoro della macchina oppure nelle successive operazioni di rifinitura manuale.'),
   P('8.5-p02','L’utilizzo dei fermapunti dipende dalla posizione del blocco e dalla sequenza prevista nel programma.'),
   P('8.5-p03','Generalmente vengono inseriti prima e dopo un rasafilo, così da bloccare correttamente il filo prima del taglio e garantire una ripartenza stabile nel punto successivo.'),
   P('8.5-p04','I fermapunti devono essere previsti anche quando il programma contiene passaggi lunghi che non vengono tagliati automaticamente dalla macchina, ma saranno eliminati manualmente al termine del ricamo.'),
   P('8.5-p05','In alcuni casi, infatti, può essere preferibile mantenere alcuni collegamenti lunghi per evitare un numero eccessivo di rasafilo. In queste situazioni è necessario inserire un fermapunto alla fine del blocco precedente e uno all’inizio del blocco successivo.'),
   P('8.5-p06','Durante la successiva rifinitura manuale, i fili di collegamento possono così essere tagliati senza provocare lo sfilamento dei punti o l’apertura delle parti ricamate.'),
   P('8.5-p07','La scelta tra rasafilo e passaggio lungo deve essere valutata considerando il numero di interruzioni, il tempo macchina, la pulizia del retro e il lavoro manuale necessario dopo il ricamo.')
  ]),
  S('8.6','Direzione del punto',[
   P('8.6-p01','La direzione del punto deve essere definita tenendo conto sia della forma del soggetto sia del modo in cui la macchina esegue il ricamo.'),
   P('8.6-p02','Nei riempimenti di grandi dimensioni, come le basi o gli sfondi, la direzione viene scelta soprattutto per favorire un movimento regolare della macchina. In generale, si preferisce far lavorare il ricamo dall’alto verso il basso e dal basso verso l’alto, oppure in diagonale, evitando quando possibile direzioni che rendono l’esecuzione meno stabile.'),
   P('8.6-p03','La macchina tende infatti a lavorare con maggiore difficoltà nei movimenti dal basso verso l’alto e, in modo ancora più evidente, da destra verso sinistra. Questo comportamento è legato al modo in cui il filo superiore interagisce con il filo di spolina durante la formazione del punto.'),
   P('8.6-p04','Nei soggetti figurativi o negli elementi più piccoli, la direzione deve invece essere valutata caso per caso, in funzione della scomposizione del disegno, del volume e dell’effetto visivo desiderato.'),
   P('8.6-p05','La direzione del punto contribuisce infatti a costruire la forma del soggetto. Nel caso di un petalo, per esempio, il punto può svilupparsi dal centro verso l’esterno e ruotare progressivamente seguendo l’andamento del petalo stesso.'),
   P('8.6-p06','Lo stesso principio vale per ogni elemento del disegno: il punto deve seguire, quando possibile, la direzione naturale della forma, contribuendo a renderne leggibili struttura, movimento e volume.'),
   P('8.6-p07','Il ricamo può quindi essere considerato come un segno grafico orientato: la direzione del punto svolge una funzione simile a quella del tratto di un pennello, perché modifica la percezione della forma e dell’effetto finale.')
  ]),
  S('8.7','Compensazione dei ritiri e delle deformazioni',[
   P('8.7-p01','Nei programmi caratterizzati da una quantità elevata di filo, è normale che il ricamo produca ritiri, tensioni e deformazioni del materiale.'),
   P('8.7-p02','Questi spostamenti diventano spesso evidenti confrontando le prime parti ricamate con le ultime fasi del programma. I primi cambi ago possono infatti risultare progressivamente fuori posizione rispetto agli elementi eseguiti successivamente, a causa dell’accumulo di filo e delle tensioni generate durante la lavorazione.'),
   P('8.7-p03','La compensazione viene effettuata misurando manualmente gli spostamenti riscontrati sul campione e intervenendo sul programma con adattamenti, correzioni e calibrazioni delle forme e delle posizioni.'),
   P('8.7-p04','L’obiettivo è anticipare il comportamento reale del ricamo e modificare il programma in modo che, al termine della lavorazione, gli elementi tornino correttamente in posizione.'),
   P('8.7-p05','L’entità del ritiro dipende in primo luogo dai materiali di supporto utilizzati, ma anche dalla quantità complessiva di filo, dalla densità, dal tipo di ricamo e dalla sequenza di esecuzione.'),
   P('8.7-p06','Il comportamento cambia anche in funzione del sistema di fissaggio utilizzato. Il lavoro su pantografo può generare ritiri più complessi, perché il ricamo viene eseguito contemporaneamente da più teste, generalmente 10 o 12, e ciascuna testa può produrre spostamenti leggermente diversi.'),
   P('8.7-p07','Il telaio consente invece una gestione più controllata del materiale e rende generalmente più semplice osservare, misurare e correggere i ritiri.')
  ]),
  S('8.8','Sagome di riferimento e fissaggio dei materiali in appoggio',[
   P('8.8-p01','Le sagome di riferimento vengono utilizzate per indicare con precisione la posizione dei materiali da applicare durante la lavorazione.'),
   P('8.8-p02','Sono generalmente realizzate con un’impuntura abbastanza lunga, normalmente compresa tra 2,5 e 3 mm. La lunghezza deve comunque essere adattata alla forma della sagoma: in presenza di angoli stretti, dettagli piccoli o cambi di direzione ravvicinati può essere necessario utilizzare punti più corti per mantenere una buona precisione.'),
   P('8.8-p03','La sagoma viene tracciata in corrispondenza del limite esterno del materiale in appoggio. Il ricamo principale viene invece eseguito più internamente, lasciando tra il bordo del materiale e l’area ricamata lo spazio previsto dalla lavorazione.'),
   P('8.8-p04','Dopo il posizionamento del materiale viene eseguito, in uno stop successivo, il fissaggio vero e proprio. Questo deve essere collocato in prossimità del limite dell’area di ricamo, in una zona che verrà successivamente coperta dai punti principali.'),
   P('8.8-p05','Quando il materiale deve essere fissato anche nelle parti centrali, e non soltanto lungo il perimetro, il percorso di impuntura deve essere studiato come un passaggio coperto. Il fissaggio deve quindi attraversare esclusivamente aree che verranno completamente ricamate nelle fasi successive, evitando che l’impuntura rimanga visibile nel risultato finale.'),
   P('8.8-p06','La costruzione della sagoma e del fissaggio deve quindi considerare separatamente due funzioni:'),
   P('8.8-p07','La sagoma indica la posizione e l’ingombro del materiale.','list'),
   P('8.8-p08','Il fissaggio mantiene il materiale stabile durante il ricamo e deve essere interamente coperto dalla lavorazione successiva.','list')
  ])
 ]),
 C('9','Industrializzazione e validazione del programma',[
  S('9.1','Criteri per definire un programma pronto per la produzione',[
   P('9.1-p01','Un programma può essere considerato pronto e industrializzato quando è stato validato dal punto di vista estetico e tecnico ed è stato ottimizzato per la produzione.'),
   P('9.1-p02','La prima validazione riguarda il risultato richiesto dal cliente. Il campione deve essere approvato per stile, resa estetica, fisicità, comportamento e resistenza della lavorazione.'),
   P('9.1-p03','Dopo l’approvazione del risultato, il programma deve essere verificato e ottimizzato dal punto di vista produttivo. L’obiettivo è ottenere un ricamo preciso, stabile e ripetibile, riducendo i tempi macchina e le operazioni non necessarie.'),
   P('9.1-p04','L’ottimizzazione comprende in particolare:'),
   P('9.1-p05','Eliminazione dei punti in eccesso e dei punti troppo corti.','list'),
   P('9.1-p06','Riduzione dei cambi ago al minimo necessario.','list'),
   P('9.1-p07','Corretta definizione delle entrate e delle uscite, evitando ripartenze che possano lasciare fili, residui o segni visibili.','list'),
   P('9.1-p08','Controllo dei passaggi lunghi e delle segnature, con inserimento dei fermapunti quando necessario.','list'),
   P('9.1-p09','Presenza delle sagome di riferimento utili al posizionamento e al fissaggio dei materiali in appoggio.','list'),
   P('9.1-p10','Verifica della sequenza, dei rasafilo, dei cambi colore e di tutte le operazioni richieste durante la lavorazione.','list')
  ]),
  S('9.2','Uscita campo per il cambio delle spoline',[
   P('9.2-p01','Nei programmi di lunga durata devono essere previste apposite fermate per il cambio delle spoline.'),
   P('9.2-p02','La durata della spolina viene stimata in base al numero di punti e al titolo del filo utilizzato. Al raggiungimento del valore previsto, il programma deve interrompersi in una posizione il più possibile esterna rispetto al ricamo.'),
   P('9.2-p03','Questa fermata, definita uscita campo, permette alle operatrici di sostituire contemporaneamente le spoline di tutte le teste, riducendo i tempi di fermo macchina.'),
   P('9.2-p04','La posizione esterna facilita inoltre la gestione della successiva ripartenza, evitando che eventuali fili residui o segni iniziali rimangano all’interno delle parti visibili del ricamo.'),
   P('9.2-p05','Un programma industrializzato deve quindi rispettare tutte le regole necessarie per rendere la lavorazione il più possibile precisa, rapida, stabile e produttiva.')
  ]),
  S('9.3','Scheda macchina o scheda tecnica',[
   P('9.3-p01','La scheda macchina, o scheda tecnica, è il documento operativo che accompagna il programma di ricamo durante la produzione. Viene generata a partire dal software di programmazione e deve raccogliere tutte le informazioni necessarie per eseguire correttamente la lavorazione senza lasciare spazio a interpretazioni.'),
   P('9.3-p02','Nella parte iniziale devono essere riportati almeno:'),
   P('9.3-p03','Nome del programma.','list'),P('9.3-p04','Nome del prodotto.','list'),P('9.3-p05','Cliente.','list'),P('9.3-p06','Stagione e anno.','list'),P('9.3-p07','Materiali utilizzati a pantografo.','list'),
   P('9.3-p08','La scheda deve poi essere suddivisa per stop. Per ogni stop devono essere indicati:'),
   P('9.3-p09','Codice colore e titolo del filo superiore.','list'),P('9.3-p10','Codice colore e titolo del filo inferiore.','list'),P('9.3-p11','Eventuali materiali da aggiungere.','list'),P('9.3-p12','Eventuali operazioni da eseguire.','list'),P('9.3-p13','Ago da utilizzare.','list'),P('9.3-p14','Velocità macchina.','list'),P('9.3-p15','Valori di tensione del filo superiore e della spolina.','list'),P('9.3-p16','Eventuali indicazioni relative alle macchine da utilizzare o da evitare.','list'),P('9.3-p17','Eventuali cambi spolina.','list'),
   P('9.3-p18','Le principali operazioni associate agli stop possono essere distinte in:'),
   P('9.3-p19','Appoggiare, quando il materiale viene posizionato in modo semplice.','list'),P('9.3-p20','Piazzare, quando il posizionamento richiede maggiore precisione e tempi più lunghi.','list'),P('9.3-p21','Tagliare, quando è necessario rimuovere o rifilare materiali.','list'),P('9.3-p22','Alzare o abbassare, quando un materiale deve essere sollevato o riportato in posizione durante la lavorazione.','list'),
   P('9.3-p23','La scheda deve inoltre riportare i casi speciali, come l’utilizzo di teste dedicate, dispositivi particolari o lavorazioni con paillettes. In questi casi devono essere allegati anche i valori e i parametri necessari per la corretta impostazione della macchina.')
  ])
 ])
]};