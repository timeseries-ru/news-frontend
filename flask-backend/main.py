#!/usr/bin/env python
# -*- coding: utf-8 -*-

from flask import Flask, render_template, request
from flask_cors import CORS, cross_origin
import pandas as pd
import altair as alt
import json
from datamanager import DataManager
import os

# data_manager = DataManager()
app = Flask(__name__)
CORS(app)

@app.route('/endpoint/layout', methods=["GET"])
def get_data():
    # chart = data_manager.get_initial_data()
    with open('fake_spec_vega_lite.json', 'r') as fd:
        chart = json.load(fd)
    result = {
        'controls': [],
        'tabs': [{
            'tabName' : 'Первая вкладка',
            'widgets': [{
                'width' : 'xs12',
                'spec' : chart
            }]
        }]
    }
    return json.dumps(result)

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port, debug=False)
