const express = require('express');
const app = express();
const port = 3000;


app.use(express.static('public'))


const posts = [
    {
        titolo: "Post 1",
        contenuto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam commodo urna sed dolor fermentum, ut bibendum augue efficitur. In elementum mauris vitae dolor bibendum, sed pellentesque nisi varius. Curabitur quis neque vehicula, condimentum quam ut, finibus urna. Suspendisse convallis sit amet leo vitae porta.",
        immagine: "http://localhost:3000/images/ciambellone.jpeg",
        tags: [
            "tag 1",
        ],
    },
    {
        titolo: "Post 2",
        contenuto: "Sed vel odio nec arcu gravida mattis non id diam. Cras mollis nunc ultrices purus interdum mattis. Donec a neque sit amet leo facilisis maximus. Aliquam vehicula molestie ex, vel viverra est commodo mattis.",
        immagine: "http://localhost:3000/images/cracker_barbabietola.jpeg",
        tags: [
            "tag 1",
            "tag 3",
        ],
    },
    {
        titolo: "Post 3",
        contenuto: "Pellentesque ligula eros, convallis vitae sapien eu, scelerisque pellentesque orci. Nulla vitae ligula metus. Fusce porta consectetur auctor. Praesent eget diam ex. Nam ac rutrum enim. Praesent sodales a justo at consequat. Aliquam erat volutpat. Quisque ac turpis pharetra, pulvinar purus bibendum, semper est.",
        immagine: "http://localhost:3000/images/pane_fritto_dolce.jpeg",
        tags: [],
    },
    {
        titolo: "Post 4",
        contenuto: "Sed at velit sapien. Curabitur a dui id ligula rhoncus facilisis. Suspendisse felis dolor, dignissim volutpat mi quis, maximus luctus urna. Suspendisse vel porta odio.",
        immagine: "http://localhost:3000/images/pasta_barbabietola.jpeg",
    },
    {
        titolo: "Post 5",
        contenuto: "Nulla facilisi. Nam malesuada arcu turpis, at tempor odio feugiat et. Morbi luctus ac odio sed interdum. Cras eu mauris eget tortor pretium sollicitudin in vel sapien. Sed ut purus quis mi fermentum egestas et eu turpis. Etiam vehicula tristique enim sit amet laoreet. Morbi interdum varius massa, et dictum felis.",
        immagine: "http://localhost:3000/images/torta_paesana.jpeg",
        tags: [
            "tag 2",
        ],
    },
]


app.get('/', (req, res) => {
    console.log(`Richiesta ricevuta a: / sulla porta: ${port}`);

    response = "Server del mio blog";
    res.send(response);
});


app.get('/bacheca', (req, res) => {
    console.log(`Richiesta ricevuta a: /bacheca sulla porta: ${port}`);

    response = posts;
    res.json(response);
});



app.listen(port, () => {
    console.log(`Server del mio blog in ascolto sulla porta: ${port}`);
})