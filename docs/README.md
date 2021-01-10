# Electron Demo React

# Introduzione

L'applicazione desktop _electron-demo-react_ (d'ora in poi riferita come _app_ o _demo_) mostra in modo interattivo alcune delle funzionalità principali del framework [Electron.js](https://www.electronjs.org/), approfondendo quindi tramite esempi l'utilizzo delle API e degli widget di Electron.

Il seguente documento ha lo scopo di illustrare le funzionalità implementate nella demo senza specificare i dettagli tecnici, facilemente reperibili sulla documentazione, ma facendo in modo di essere una sorta di guida "by examples" per alcune funzionalità di Electron.js.

# Applicazione

La demo sviluppata consiste in un'applicazione desktop basata principalmente sul framework cross-platform Electron.js, associato alla libreria [React.js](https://reactjs.org/) per la gestione dell'interfaccia utente e al linguaggio di programmazione [TypeScript](https://www.typescriptlang.org/), un superset di JavaScript, che assicura la _type safety_.

## Electron.js

**Cos'è Electron?** Electron.js è un framework cross-platfrom per creare applicazione con tecnologie web come JavaScript, HTML e CSS. Le applicazione create con Electron.js possono essere facilmente "pacchettizzate" in diversi formati distribuibili ed eseguibili sui principali sistemi operativi in uso attualmente: macOS, Windows e Linux. Ciò è reso possibile grazie a strumenti come Node.js per l'interazione con il file system e con il sistema operativo e Chromium per renderizzare il contenuto a video.

**Scope e target.** Electron.js è stato sviluppato come progetto open source da [GitHub](https://github.com/) nel 2013, principalmente per create l'editor [Atom](https://atom.io/). L'utenza target di Electron.js sono principalmente gli web developer con conoscenze HTML, CSS e JavaScript che vogliono rendere le loro applicazioni installabili come app desktop.

#### Electron Core

Per permettere lo sviluppo di applicazioni eseguibili su tre piattaforme diverse con tecnologie web Electron.js usa un particolare sistema che permette di istanziare un browser Chromium per visualizzare il contenuto dell'applicazione in finestre. In più, esso ottiene l'accesso alle API di Node.js e può quindi interagire con il file system ed il sistema operativo, proprio come Node.js.

Ciò ha un sacco di implicazioni interessanti: prima tra tutte il fatto che l'applicazione tecnicamente può funzionare anche senza una connessione ad internet. Da non sottovalutare poi il fatto che per l'ambiente Node.js sono stati sviluppati milioni di package che implementano le funzionalità più disparate, e di conseguenza possono essere facilemente integrati in un'applicazione Electron.js.

Un'applicazione Electron.js quindi non è altro che un'applicazione Node.js con un'interfaccia web.

#### Paradigma di programmazione

TODO: https://codeburst.io/electron-basics-and-fundamentals-b85b23aa611d

#### Processi

# Riferimenti

TODO:

1. https://medium.com/@voltx180/a-beginners-guide-to-electron-js-1679fd7b6e4f
2. https://codeburst.io/electron-basics-and-fundamentals-b85b23aa611d
