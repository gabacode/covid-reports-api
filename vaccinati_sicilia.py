# -*- coding: utf-8 -*-
"""
/***************************************************************************
 Dati Epidemiologici e Vaccinali
                              -------------------
        copyright            : (C) 2021 by Giulio Fattori
        email                : giulio.fattori@tin.it
 ***************************************************************************/
"""

from qgis.core import *
from qgis.gui import *
import requests
import ast

@qgsfunction(args='auto', group='Custom')
def get_vax_info(xx, chiave, feature, parent):
    """
    <h1>Dati Epidemiologici e Vaccinali:</h1><br>    
    La funzione, tramite una richiesta all'API (realizzate da Gabriele), restituisce le informazioni sui vaccini per i Comuni siciliani:
    <h2>Esempio:</h2>
    <ul>
      <li>get_vax_info('082034','comune') -> 'Corleone'</li>
      <li>get_vax_info("pro_com_t",'%vaccinati1dose') -> 'Corleone'</li>
    </ul>
    <h2>NB: le chiavi sono tutte minuscole: cod_prov, pro_com_t, provincia, comune, %vaccinati, %immunizzati</h2>
    """
    req = "https://covid-reports-api.herokuapp.com/vaccini?q="+str(xx)
    r = requests.get(req)
    text = r.text
    text = text.replace("[", "")
    text = text.replace("]", "")
    text = ast.literal_eval(text)
    return text[chiave]
