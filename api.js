const express = require('express');
const csv = require('csvtojson')
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

const incidenza = './dati/incidenza_comuni_distretti.csv';
const vaccinati = './dati/vaccinati.csv';

let options = {
    flatKeys:true
}

const parse = (f) => {
    let file = csv(options).fromFile(f)
    return file
}

const filter = (array, query) => {
    return array.filter(x =>  JSON.stringify(x).toLowerCase().indexOf(query.toLowerCase()) !== -1)
}

const comune = (array, query) => {
    return array.filter(x => x.Comune.toLowerCase().includes(query.toLowerCase()))
}

app.use(cors({ origin: '*' }));

app.get('/', (req, res) => {
    res.sendStatus(200);
});

app.get('/incidenza', async (req, res) => {
    let query = req.query
    const data = await parse(incidenza)
    if(typeof query.comune !== 'undefined' || typeof query.distretto !== 'undefined'){
        try {
            res.send(comune(data, query.comune))
        }
        catch(e){
            console.log(e)
        }
    } else {
        try {
            res.send(data)
        }
        catch(e){
            res.sendStatus(e)
        }
    }
})

app.get('/vaccini', async (req, res) => {
    let query = req.query.q
    const data = await parse(vaccinati)
    if(query){
        try {
            res.send(filter(data, query))
        }
        catch(e){
            res.sendStatus(e)
        }
    } else {
        try {
            res.send(data)
        }
        catch(e){
            res.sendStatus(e)
        }
    }
})

app.listen(port, () => console.log(`Listening on port ${port}!`))
