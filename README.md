# covid-reports-api

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

La documentazione delle API è esplorabile al seguente [link](https://covid-reports-api.herokuapp.com/docs/).

Alcune query implementate:

- https://covid-reports-api.herokuapp.com/vaccini
- https://covid-reports-api.herokuapp.com/vaccini?q=agrigento
- https://covid-reports-api.herokuapp.com/incidenza
- https://covid-reports-api.herokuapp.com/incidenza?comune=castelvetrano

## funzione personalizzata per QGIS

il file `vaccinati_sicilia.py` è una funzione personalizzata da utilizzare nel field calc di QGIS, permette di richiamare i valori presenti nel file `vaccinati.csv`

HELP FUNZIONE:

Dati Epidemiologici e Vaccinali:

La funzione, tramite una richiesta all'API (realizzate da Gabriele), restituisce le informazioni sui vaccinati per i Comuni siciliani:

Esempio: 
- get_vax_info('082034','comune') -> 'Corleone' 
- get_vax_info("pro_com_t",'%vaccinati1dose') -> '88.23'

NB: le chiavi sono tutte minuscole: cod_prov, pro_com_t, provincia, comune, %vaccinati1dose,%Immunizzati
