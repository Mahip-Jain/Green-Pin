var markerLocs = $('#long_lat').data();


var myMap = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        })
    ],
    view: new ol.View({
        center: ol.proj.fromLonLat([72.8777,19.0760]),
        zoom: 6
    })
});

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
    source: vectorSource
});
myMap.addLayer(vectorLayer);