// # DOTENV (variabili di sistema - dependency)

// - DOTENV Import & Config
// * IMPORTO E UTILIZZO SUBITO DOTENV PER UTILIZZARE LE VARIABILI DI SISTEMA invocando metodo .config() (DOPO AVER FATTO npm i dotenv)
require('dotenv').config();

// - DOTENV Get variables from destructuring
// * PRENDO PER DESTRUTTURAZIONE LE VARIABILI DAL FILE .env CREATO 
const { APP_HOST, APP_PORT } = process.env;

// - DOTENV Use variables from destructuring
// * USO LE VARIABILI DAL FILE .env CREATO 
const app_url = `${APP_HOST}${APP_PORT ? ":" + APP_PORT : ""}`;
const port = APP_PORT;





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
const { getBacheca } = require('./functions.js');





// # MIDDLEWARES - "Parti di mezzo" (Funzionalità agg. messe a disposizione da pacchetti di express)

// - .static('foldername = public') => Gestione files statici
// * UTILIZZO MIDDLEWARE STATIC PER METTERE A DISPOSIZIONE LE IMMAGINI DEI POST
app.use(express.static('public'))





// todo: SOSTITUIRE CON RICHIESTA A DB
// # COSTANTE POSTS
const posts = [
    {
        titolo: "Post 1",
        contenuto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam commodo urna sed dolor fermentum, ut bibendum augue efficitur. In elementum mauris vitae dolor bibendum, sed pellentesque nisi varius. Curabitur quis neque vehicula, condimentum quam ut, finibus urna. Suspendisse convallis sit amet leo vitae porta.",
        // immagine: "http://localhost:3000/images/ciambellone.jpeg",
        immagine: `${app_url}/images/ciambellone.jpeg`,
        tags: [
            "tag 1",
        ],
    },
    {
        titolo: "Post 2",
        contenuto: "Sed vel odio nec arcu gravida mattis non id diam. Cras mollis nunc ultrices purus interdum mattis. Donec a neque sit amet leo facilisis maximus. Aliquam vehicula molestie ex, vel viverra est commodo mattis.",
        immagine: `${app_url}/images/cracker_barbabietola.jpeg`,
        tags: [
            "tag 1",
            "tag 3",
        ],
    },
    {
        titolo: "Post 3",
        contenuto: "Pellentesque ligula eros, convallis vitae sapien eu, scelerisque pellentesque orci. Nulla vitae ligula metus. Fusce porta consectetur auctor. Praesent eget diam ex. Nam ac rutrum enim. Praesent sodales a justo at consequat. Aliquam erat volutpat. Quisque ac turpis pharetra, pulvinar purus bibendum, semper est.",
        immagine: `${app_url}/images/pane_fritto_dolce.jpeg`,
        tags: [],
    },
    {
        titolo: "Post 4",
        contenuto: "Sed at velit sapien. Curabitur a dui id ligula rhoncus facilisis. Suspendisse felis dolor, dignissim volutpat mi quis, maximus luctus urna. Suspendisse vel porta odio.",
        immagine: `${app_url}/images/pasta_barbabietola.jpeg`,
    },
    {
        titolo: "Post 5",
        contenuto: "Nulla facilisi. Nam malesuada arcu turpis, at tempor odio feugiat et. Morbi luctus ac odio sed interdum. Cras eu mauris eget tortor pretium sollicitudin in vel sapien. Sed ut purus quis mi fermentum egestas et eu turpis. Etiam vehicula tristique enim sit amet laoreet. Morbi interdum varius massa, et dictum felis.",
        immagine: `${app_url}/images/torta_paesana.jpeg`,
        tags: [
            "tag 2",
        ],
    },
]





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





// # ASCOLTO DELLA PORTA DA PARTE DEL SERVER

// - SERVER LISTEN
// * METTO IL SERVER IN ASCOLTO PER LE RICHIESTE SULLA PORTA port (Equivale a APP_PORT in .env)
app.listen(port, () => {
    console.log(`Server del mio blog in ascolto sulla porta: ${port}`);
});