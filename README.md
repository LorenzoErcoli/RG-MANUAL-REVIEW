# RG Manual Review

MVP interno per revisionare il manuale tecnico senza modificare il documento master.

## Funzioni
- manuale in sola lettura, suddiviso in sezioni e paragrafi con ID stabili;
- note collegate al singolo paragrafo;
- classificazione: errore tecnico, precisazione, integrazione, dubbio, esempio;
- domande tecniche con più risposte;
- autore, certezza, macchina e materiale;
- approvazione, rifiuto o richiesta di approfondimento;
- export JSON completo, rileggibile da ChatGPT;
- server accessibile in rete locale.

## Avvio Windows
Fare doppio clic su `start-lan.bat`.

Oppure:
```bash
npm install
npm start
```

Aprire `http://localhost:8510`. Dagli altri PC usare `http://IP-DEL-PC:8510`.

## Dati
I dati sono in `data/` e vengono salvati come JSON. Il pulsante **Esporta JSON** produce un pacchetto con manuale, note, domande e risposte.

## Flusso consigliato
1. Importare una fotografia strutturata del manuale in `data/manual.json`.
2. I revisori aggiungono note e risposte senza modificare il testo.
3. Lorenzo approva o respinge i contributi.
4. Esportare il JSON.
5. In ChatGPT chiedere di leggere l’export, proporre il nuovo testo e aggiornare il Google Doc solo dopo approvazione.

## Prossimi upgrade
- import automatico dal Google Doc;
- autenticazione e ruoli;
- allegati nell’interfaccia;
- storico delle versioni del manuale;
- marcatura automatica `processedAt` dopo aggiornamento del master.
