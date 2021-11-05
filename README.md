<a href="https://www.datibenecomune.it/"><img src="https://img.shields.io/badge/%F0%9F%99%8F-%23datiBeneComune-%23FFD700"/></a>
---
# covid-reports-api

---
**N.B**

Il progetto si è trasferito sul repository [opendatasicilia/covid-open-report-sicilia](https://github.com/opendatasicilia/covid-open-report-sicilia).  
Le API sono raggiungibili al nuovo indirizzo.

Per quanto riguarda le Mappe, il nuovo endpoint si trova a [questo link](https://api.infocomuni.eu/map) e segue il progetto [opendatasicilia/comuni-italiani](https://github.com/opendatasicilia/comuni-italiani)

---

```
Bollettino settimanale n° 3 del 20/10/2021:
Dati Epidemiologici e Vaccinali

Servizio 9
“Sorveglianza ed epidemiologia valutativa”
Servizio 4 
“Igiene Pubblica”
Task Force Vaccini Regionale
```

fonte dati: [Regione Sicilia](https://www.regione.sicilia.it/la-regione-informa/covid-bollettino-settimanale-ancora-calo-casi-sicilia-aumento-prime-dosi)

La documentazione delle API è consultabile al seguente [link](https://covid-reports-api.herokuapp.com/docs/).

## funzione personalizzata per QGIS

il file `vaccinati_sicilia.py` è una funzione personalizzata da utilizzare nel field calc di QGIS, permette di richiamare i valori presenti nel file `vaccinati.csv`

HELP FUNZIONE:

Dati Epidemiologici e Vaccinali:

La funzione, tramite una richiesta all'API (realizzate da Gabriele), restituisce le informazioni sui vaccinati per i Comuni siciliani:

Esempio: 
- get_vax_info('082034','comune') -> 'Corleone' 
- get_vax_info("pro_com_t",'%vaccinati1dose') -> '88.23'

NB: le chiavi sono tutte minuscole: cod_prov, pro_com_t, provincia, comune, %vaccinati,%immunizzati
