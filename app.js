const express = require('express');
const app = express();
const port = 3000;



app.get('/', (req, res) => {
    console.log(`Richiesta ricevuta a: / sulla porta: ${port}`);

    response = "Server del mio blog";
    res.send(response);
});



app.listen(port, () => {
    console.log(`Server del mio blog in ascolto sulla porta: ${port}`);
})