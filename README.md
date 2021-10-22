# covid-reports-api

Alcune query implementate:

- https://covid-reports-api.herokuapp.com/vaccini
- https://covid-reports-api.herokuapp.com/vaccini?q=agrigento
- https://covid-reports-api.herokuapp.com/incidenza
- https://covid-reports-api.herokuapp.com/incidenza?comune=castelvetrano

## funzione personalizzata per QGIS

il file `vaccinati_sicilia.py` è una funzione personalizzata da utilizzare nel field calc di QGIS, permette di richiamare i valori presenti nel file `vaccinati.csv`

HELP FUNZIONE:

Dati Epidemiologici e Vaccinali:

La funzione, tramite una richiesta all'API (realizzate da Gabriele), restituisce le informazioni sui vaccini per i Comuni siciliani:

Esempio: 
- get_vax_info('082034','comune') -> 'Corleone' 
- get_vax_info("pro_com_t",'%vaccinati1dose') -> '88.23'

NB: le chiavi sono tutte minuscole: cod_prov, pro_com_t, provincia, comune, %vaccinati1dose,%Immunizzati
