window.onload = init;
var map;
var markerLocs = $('#long_lat').data();
function init() {
    map = new ol.Map({
        target: 'map',
        view: new ol.View({
            center: [8110693.383080478, 2168049.1155551844],
            zoom: 10.4,
            maxZoom: 15,
            minZoom: 5
        })
    });
    // Base maps
    const openStreetMapHumanitarian = new ol.layer.Tile({
        source: new ol.source.OSM({
            url: "https://{a-c}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        }),
        visible: false,
        title: "OSMHumanitarian"
    });
    const openStreetMapStandard = new ol.layer.Tile({
        source: new ol.source.OSM(),
        visible: true,
        title: "OSMStandard"
    });
    const stamenTerrain = new ol.layer.Tile({
        source: new ol.source.OSM({
            url: "https://stamen-tiles.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
            attributions: "Map tiles by Stamen Design, under CC BY 3.0. Data by OpenStreetMap, under ODbL"
        }),
        visible: false,
        title: "StamenTerrain"
    })

    // layer group
    const baseLayerGroup = new ol.layer.Group({
        layers: [
            openStreetMapStandard, openStreetMapHumanitarian, stamenTerrain            
        ]
    });

    map.addLayer(baseLayerGroup);

    // add features/markers to map
    var features = [];

    for (var i in markerLocs["name"]) {
        var item = markerLocs["name"][i];
    
        var iconFeature = new ol.Feature({
            geometry: new ol.geom.Point(ol.proj.fromLonLat(item))
        });
    
        var iconStyle = new ol.style.Style({
            image: new ol.style.Icon(({
                // anchor: [0.5, 1],
                src: 'static/marker.png'
            }))
        });
    
        iconFeature.setStyle(iconStyle);
        features.push(iconFeature);
    }

    var vectorSource = new ol.source.Vector({
        features: features
    });

    var vectorLayer = new ol.layer.Vector({
        source: vectorSource,
        style: new ol.style.Style({
            image: new ol.style.Icon({
                // anchor: [0.5, 1],
                src: 'static/marker.png'
            })
        })
    });
    map.addLayer(vectorLayer);


    var container = document.getElementById('popup');
    var content = document.getElementById('popup-content');
    var closer = document.getElementById('popup-closer');
    // overlay for popup text
    var overlay = new ol.Overlay({
        element: container,
        autoPan: true,
        positioning: 'bottom-center',
        offset: [0, -15],
        autoPanAnimation: {
            duration: 250
        }
    });
    
    // show text when clicking a marker/feature
    map.on('click', function (event) {
        console.log(event.coordinate)
        if (map.hasFeatureAtPixel(event.pixel) === true) {
            console.log(map.getFeaturesAtPixel(event.pixel)[0].getGeometry().getCoordinates())
            var coordinate = event.coordinate;
            var coords = map.getFeaturesAtPixel(event.pixel)[0].getGeometry().getCoordinates();
            console.log(coords)
            
            var long_lat = ol.proj.toLonLat(coords)
            // console.log(parseFloat(long_lat[0].toFixed(8)))
            for (i in markerLocs["name"]) {
                // rounding the longlat to 8 decimals because in the database it is 8 decimals,
                // and checking if it matches with the database
                if (parseFloat(long_lat[0].toFixed(8)) == markerLocs["name"][i][0] && parseFloat(long_lat[1].toFixed(8)) == markerLocs["name"][i][1]) {
                    content.innerText = markerLocs["name"][i][2];
                }
            }
 
            // set the position of the overlat
            overlay.setPosition(coords);
            // zoom and center animation on click
            map.getView().animate({
                center: coords,
                zoom: 15,
                duration: 1000
            })
        } else {
            overlay.setPosition(undefined);
            closer.blur();
        }
    });
    // add the overlay/popup text to map
    map.addOverlay(overlay);

    // change cursor type if hovering on feature
    map.on('pointermove', function (event) {
        if (map.hasFeatureAtPixel(event.pixel)) {
        map.getViewport().style.cursor = 'pointer';
        } else {
        map.getViewport().style.cursor = 'inherit';
        }
    });

}
// recenter
function recenter() {
    map.getView().animate({
        center: [8110693.383080478, 2168049.1155551844],
        zoom: 10.4,
        duration: 1000
    })
}

