ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:3825").setExtent([164531.212958, 2692119.292414, 203459.923797, 2718558.623590]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_4_utf8_1 = new ol.format.GeoJSON();
var features_4_utf8_1 = format_4_utf8_1.readFeatures(json_4_utf8_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3825'});
var jsonSource_4_utf8_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_4_utf8_1.addFeatures(features_4_utf8_1);
var lyr_4_utf8_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_4_utf8_1, 
                style: style_4_utf8_1,
                interactive: true,
                title: '<img src="styles/legend/4_utf8_1.png" /> 集水區4_utf8'
            });
var format_43_utf8_2 = new ol.format.GeoJSON();
var features_43_utf8_2 = format_43_utf8_2.readFeatures(json_43_utf8_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3825'});
var jsonSource_43_utf8_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_43_utf8_2.addFeatures(features_43_utf8_2);
var lyr_43_utf8_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_43_utf8_2, 
                style: style_43_utf8_2,
                interactive: true,
                title: '<img src="styles/legend/43_utf8_2.png" /> 聚落43_utf8'
            });
var lyr_1975_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "後浦1975",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/1975_3.png",
    attributions: ' ',
                                projection: 'EPSG:3825',
                                alwaysInRange: true,
                                imageExtent: [180034.877242, 2702633.827561, 181628.833190, 2703656.104246]
                            })
                        });

lyr_GoogleSatellite_0.setVisible(true);lyr_4_utf8_1.setVisible(true);lyr_43_utf8_2.setVisible(true);lyr_1975_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_4_utf8_1,lyr_43_utf8_2,lyr_1975_3];
lyr_4_utf8_1.set('fieldAliases', {'ID': 'ID', 'VALUE': 'VALUE', 'NAME': 'NAME', });
lyr_43_utf8_2.set('fieldAliases', {'分區簡': '分區簡', });
lyr_4_utf8_1.set('fieldImages', {'ID': '', 'VALUE': '', 'NAME': '', });
lyr_43_utf8_2.set('fieldImages', {'分區簡': 'TextEdit', });
lyr_4_utf8_1.set('fieldLabels', {'ID': 'header label', 'VALUE': 'header label', 'NAME': 'header label', });
lyr_43_utf8_2.set('fieldLabels', {'分區簡': 'header label', });
lyr_43_utf8_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});