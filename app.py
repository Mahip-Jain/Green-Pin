# import libraries
import math
import json
from os import error
from flask import Flask, render_template, request
import pandas as pd
import geopy
from geopy.geocoders import Nominatim
from math import sin, cos, sqrt, atan2, radians
import ssl
import certifi
error = ""
app = Flask(__name__)
@app.route("/")
def index():
    return render_template("index.html")



@app.route("/try-it", methods = ["GET", "POST"])
# @app.route("/try-it")
# def try_it():
    # return render_template("tryit.html")
def try_it():

    global error
    user_address = request.form.get("user_address")
    filter_choice = request.form.get("filter_choice")
    energy_choice = request.form.get("energy_choice")

    df = pd.read_csv("/Users/mahip/Downloads/Team 10 Data - Sheet1-1.csv")
    long_lat = []
    

    pd.set_option('mode.chained_assignment', None)
    def take_address() :
        global error
        try :
            # ask user for address
            address = user_address
            ctx = ssl.create_default_context(cafile=certifi.where())
            geopy.geocoders.options.default_ssl_context = ctx

            geolocator = Nominatim(user_agent="Name", scheme="http")
            
            # find longitude and latitude of user using address
            location = geolocator.geocode(address, timeout=None)
            if location == None:
                error = "Invalid Address... Please try again"
            # print(location.address)
            # print(location.latitude, location.longitude)
            else:
                error = ""
            
            
        # catch Attribute error if the location is not in geolocator's database    
        except AttributeError as e:
            error = "Invalid Address... Please try again"

        # call menu
        if error == "":
            table = menu(location)
            return table
                
        
    def menu(location):
        # filter choices are as follows:
        # 1 - no filter
        # 2 - filter by distance
        # 3 - filter by energy type and distance
        if (filter_choice == "1"):
            df = calc_dist(location)
            return df
            # return df.to_html(classes="table", index=False)
           
        elif (filter_choice == "2"):
            df2 = calc_dist(location)
            df2 = sort(df2, int(filter_choice), -1)
            return df2
            # return (df2.to_html(classes="table", index=False))
            
        elif (filter_choice == "3"):
            df2 = calc_dist(location)
            df2 = sort(df2, int(filter_choice), int(energy_choice))
            return df2
            # return df2.to_html(classes="table", index=False)


                
    # calculate the distance between the user and each energy plant            
    def calc_dist(location) :
        # approximate radius of earth in km
        R = 6373.0
        
        # create a new column in the dataframe called distance
        df["Distance"] = None
        
        # iterate through the dataframe
        for i in range(len(df)) : 
            lat1 = radians(df["Latitude"].loc[i])
            lon1 = radians(df["Longitude"].loc[i])
            lat2 = radians(location.latitude)
            lon2 = radians(location.longitude)
            
            # do some math to find the distance
            dlon = lon2 - lon1
            dlat = lat2 - lat1
            a = sin(dlat / 2)**2 + cos(lat1) * cos(lat2) * sin(dlon / 2)**2
            c = 2 * atan2(sqrt(a), sqrt(1 - a))
            distance1 = R * c
            
            # add the distance into the new distance column
            df["Distance"].loc[i] = round(distance1)
        return(df)

    def sort(df2, filter_choice, energy_choice):
        if (energy_choice == 1):
            str_energy_choice = "Solar"
        elif(energy_choice == 2):
            str_energy_choice = "Wind"
        elif(energy_choice == 3):
            str_energy_choice = "Hydro"
        df2 = df.sort_values(by = ['Distance'])
        if (filter_choice == 3):
            for x in range(len(df2)):
                if(not str_energy_choice in df2["Energy"].loc[x]):
                    df2.drop(x, inplace = True)
        return df2

    table = take_address()
    if table is not None:
        for i in range(0, len(table["Latitude"])-1):
            long_lat.append([float(table["Longitude"].iloc[i]), float(table["Latitude"].iloc[i]), table["Name"].iloc[i]])
        del table["Longitude"]
        del table["Latitude"]
        table = table.to_html(classes="table", index=False)
    return render_template("tryit.html", filter_choice=filter_choice, user_address=user_address, energy_choice=energy_choice, tables=table, error=error, long_lat=json.dumps(long_lat))



@app.route("/tips")
def tips():
    return render_template("tips.html")


