/**
 * Funzione che riceve la costante posts contenente l'array dei posts e restituisce un oggetto con chiave "posts" contenente l'array ricevuto, da inviare come risposta al client
 * @param {Array.<object>} posts Array di oggetti contenenti le informazioni di ciascun post
 * @returns {object} Oggetto che contiene l'array ricevuto sotto la chiave: "posts"
 */
// todo: CHIEDERE INFORMAZIONI A DB INVECE CHE RICEVENDOLE TRAMITE PARAMETRO (USARE QUELLO PER COSE APPROPRIATE COME UTENTE/GIORNO ECC...)
// todo: MODIFICARE DOCUMENTAZIONE FUNZIONE DI CONSEGUENZA
const getBacheca = (posts) => {
    // console.log(posts);
    return { posts };
};

module.exports = { getBacheca };