const express = require("express");
const router = express.Router();
const func = require('../lib/functions');

const incidenza = `${__dirname}/../dati/incidenza-latest.csv`;

/**
 * @swagger
 * components:
 *   schemas:
 *     Incidenza:
 *       type: object
 *       properties:
 *         data:
 *           type: date
 *           description: Data pubblicazione report DASOE
 *         cod_prov:
 *           type: int
 *           description: Codice ISTAT della Provincia
 *         pro_com_t:
 *           type: string
 *           description: Codice ISTAT del Comune
 *         provincia:
 *           type: string
 *           description: Denominazione della Provincia
 *         comune:
 *           type: string
 *           description: Denominazione del Comune
 *         incidenza:
 *           type: float
 *           description: Incidenza cumulativa settimanale (ogni 100.000 abitanti)
 *         casi:
 *           type: integer
 *           description: Nuovi casi settimanali
 *       example:
 *         data: "2021-10-27"
 *         cod_prov: 84
 *         pro_com_t: "084002"
 *         provincia: "Agrigento"
 *         comune: "Alessandria della Rocca"
 *         incidenza: 855
 *         casi: 6
 */

 /**
  * @swagger
  * tags:
  *   name: Incidenza
  */

/**
 * @swagger
 * /incidenza:
 *   get:
 *     summary: Restituisce l'incidenza settimanale per i comuni siciliani
 *     parameters:
 *       - in: query
 *         name: comune
 *         schema:
 *           type: string
 *         description: Restituisce i comuni che contengono parti della stringa `comune`
 *     tags: [Incidenza]
 *     responses:
 *       200:
 *         description: Statistiche incidenza settimanale per comune
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Incidenza'
 */

 const schema = {
     'data': "string",
     'cod_prov': "int",
     'pro_com_t': "string",
     'provincia': "string",
     'comune': "string",
     'incidenza': "float",
     'casi': "int"
}

router.get("/", async (req, res) => {
    const query = req.query
    const data = await func.parse(incidenza, schema)

    if(query.comune){
        try {
            res.send(func.comune(data, query.comune))
        }
        catch(e){
            console.log(e)
        }
    }else{
        try {
            res.send(data)
        }
        catch(e){
            res.sendStatus(e)
        }
    }
})

module.exports = router;