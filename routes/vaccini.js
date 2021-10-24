const express = require("express");
const router = express.Router();
const func = require('../lib/functions')

const vaccinati = `${__dirname}/../dati/vaccinati.csv`;

/**
 * @swagger
 * components:
 *   schemas:
 *     Vaccini:
 *       type: object
 *       properties:
 *         cod_prov:
 *           type: string
 *           description: Codice Provinciale
 *         pro_com_t:
 *           type: string
 *           description: Codice ISTAT
 *         provincia:
 *           type: string
 *           description: Nome della Provincia
 *         comune:
 *           type: string
 *           description: Nome del Comune
 *         %vaccinati1dose:
 *           type: string
 *           description: Percentuale dei vaccinati con almeno una dose
 *         %Immunizzati:
 *           type: string
 *           description: Percentuale degli immunizzati
 *       example:
 *         cod_prov: "84"
 *         pro_com_t: "084003"
 *         provincia: "Agrigento"
 *         comune: "Aragona"
 *         %vaccinati1dose: "88.51"
 *         %Immunizzati: "85.68"
 */

 /**
  * @swagger
  * tags:
  *   name: Vaccini
  */

/**
 * @swagger
 * /vaccini:
 *   get:
 *     summary: Restituisce le percentuali di vaccinati ed immunizzati per i comuni siciliani
 *     tags: [Vaccini]
 *     responses:
 *       200:
 *         description: Statistiche per comune
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Vaccini'
 */


router.get('/', async (req, res) => {
    const query = req.query.q
    const data = await func.parse(vaccinati)
    
    if(query){
        try {
            res.send(func.filter(data, query))
        }
        catch(e){
            res.sendStatus(e)
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