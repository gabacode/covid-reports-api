const express = require("express");
const router = express.Router();
const func = require('../lib/functions');

const incidenza = `${__dirname}/../dati/incidenza_comuni_distretti.csv`;

/**
 * @swagger
 * components:
 *   schemas:
 *     Incidenza:
 *       type: object
 *       properties:
 *         Distretto:
 *           type: string
 *           description: Nome del distretto Sanitario
 *         Comune:
 *           type: string
 *           description: Denominazione del Comune
 *         Casi ultimi 7gg:
 *           type: string
 *           description: Nuovi positivi negli ultimi 7 giorni
 *         Incidenza x 100.000 ab 7 gg:
 *           type: string
 *           description: Numero nuovi positivi settimanali a media mobile
 *         Variazione tra le settimane:
 *           type: string
 *           description: Percentuale variazione nuovi positivi settimanali
 *       example:
 *         Distretto: "BAGHERIA"
 *         Comune: "BAGHERIA"
 *         Casi ultimi 7gg: "4"
 *         Incidenza x 100.000 ab 7 gg: "7.53"
 *         Variazione tra le settimane: "-60%"
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

router.get("/", async (req, res) => {
    const data = await func.parse(incidenza)
        try {
            res.send(data)
        }
        catch(e){
            res.sendStatus(e)
        }
    })

module.exports = router;