// # EXPRESS (gestione richieste/risposte e middlewares - dependency)

// - EXPRESS Import
// * IMPORTO I PACCHETTI DI EXPRESS INSTALLATI (DOPO AVER FATTO npm i express)
const express = require('express');

// - EXPRESS Express app initialization
// * INIZIALIZZO L'APPLICAZIONE EXPRESS INVOCANDO LA FUNZIONE express()
const app = express();



// # CUSTOM IMPORTS (mie funzioni - functions.js)

// - getBacheca(posts) => Ricezione posts
// * IMPORTO LA FUNZIONE CHE HO SCRITTO IN FUNCTIONS.JS PER POTERLA UTILIZZARE
const { getBacheca, getSinglePost } = require('./functions.js');





// # MIDDLEWARES - "Parti di mezzo" (Funzionalità agg. messe a disposizione da pacchetti di express)

// - .static('foldername = public') => Gestione files statici
// * UTILIZZO MIDDLEWARE STATIC PER METTERE A DISPOSIZIONE LE IMMAGINI DEI POST
app.use(express.static('public'))





// # COSTANTI

// - COSTANTE URL
const port = 3000;
const app_url = `http://localhost${port ? ":" + port : ""}`;

// todo: SOSTITUIRE CON RICHIESTA A DB
// - COSTANTE POSTS
const { posts } = require('./posts.js');
console.log(posts);




// # GESTIONE RICHIESTE GET

// - GET "/"
// * GESTISCO RICHIESTA ALLA HOME DANDO IL BENVENUTO
app.get('/', (req, res) => {
    console.log(`Richiesta ricevuta a: / sulla porta: ${port}`);

    response = "Server del mio blog";
    res.send(response);
});

// - GET "/bacheca"
// * GESTISCO RICHIESTA ALL BACHECA INVOCANDO FUNZIONE getBacheca(posts) E RISPONDENDO AL CLIENT CON L'OGGETTO APPROPRIATO
app.get('/bacheca', (req, res) => {
    console.log(`Richiesta ricevuta a: /bacheca sulla porta: ${port}`);

    // todo: chiedere informazioni a db tramite la funzione (da scrivere in file "fetch.js" o simile invece che in functios.js) per poi manipolarle e servirle al browser
    response = getBacheca(posts);
    res.json(response);
});

// - GET "/post?id=num"
// * 
app.get('/post', (req, res) => {
    console.log(`Richiesta ricevuta a: /post?id=num sulla porta: ${port}`);

    // console.log(req);
    console.log(req.query.id);
    // console.log(req.originalUrl);
    // console.log(req._parsedUrl);
    // console.log(req._parsedUrl.search);
    // console.log(req._parsedUrl.query);
    
    const testString = req._parsedUrl.query;
    // console.log(testString);
    const searchParams = new URLSearchParams(testString);
    const requestedId = parseInt(searchParams.get('id'));
    // const requestedId = req.query.id;
    // console.log(requestedId);

    // const requestedPost = { postData: getSinglePost(posts, requestedId) };
    const requestedPost = getSinglePost(posts, requestedId);
    // console.log(requestedPost);

    // res.json('OK');
    if (requestedPost) {
        res.json(requestedPost);
    } else {
        res
            .status(404)
            .send(`Post ${requestedId} non trovato.`)
    };
});

// - GET "/post/:id"
// * 
app.get('/post/:id', (req, res) => {
    console.log(`Richiesta ricevuta a: /post/:id sulla porta: ${port}`);

    // console.log(req);
    // console.log(req.params);
    // console.log(req.params.id);
    // console.log(typeof(req.params.id));

    const requestedId = parseInt(req.params.id);
    // console.log(requestedId);

    // const requestedPost = { postData: getSinglePost(posts, requestedId) };
    const requestedPost = getSinglePost(posts, requestedId);
    // console.log(requestedPost);

    // res.json('OK');
    if (requestedPost) {
        res.json(requestedPost);
    } else {
        res
            .status(404)
            .send(`Post ${requestedId} non trovato.`)
    };
});





// # ASCOLTO DELLA PORTA DA PARTE DEL SERVER

// - SERVER LISTEN
// * METTO IL SERVER IN ASCOLTO PER LE RICHIESTE SULLA PORTA port (Equivale a APP_PORT in .env)
app.listen(port, () => {
    console.log(`Server del mio blog in ascolto sulla porta: ${port}`);
});