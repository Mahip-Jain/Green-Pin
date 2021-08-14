from os import error
from flask import Flask, render_template, request
import flask
import pandas as pd
import geopy
from geopy.geocoders import Nominatim
from math import sin, cos, sqrt, atan2, radians
import ssl
import certifi

print(flask.__version__)

# print(pd.show_versions())
# print(ssl.OPENSSL_VERSION)
# print(geopy.__version__)
