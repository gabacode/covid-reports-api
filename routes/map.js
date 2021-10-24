const express = require("express");
const router = express.Router();
const fs = require('fs');

const map = `${__dirname}/../dati/comuni_siciliani2021.geojson`;

router.get("/", (req, res) => {
    const query = req.query
    const data = JSON.parse(fs.readFileSync(map));
    const features = data.features
    
    if(typeof query.comune !== 'undefined'){
        res.send(features.find(x => x.properties.PRO_COM_T === query.comune))
    }
    else if(typeof query.provincia !== 'undefined'){
        res.send(features.filter(x => x.properties.COD_PROV.toString() === query.provincia.toString()))
    }
    else{
        res.send(data)
    }
})

module.exports = router;