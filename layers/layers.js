var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_CemeteryBoundary_1 = new ol.format.GeoJSON();
var features_CemeteryBoundary_1 = format_CemeteryBoundary_1.readFeatures(json_CemeteryBoundary_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CemeteryBoundary_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CemeteryBoundary_1.addFeatures(features_CemeteryBoundary_1);
var lyr_CemeteryBoundary_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CemeteryBoundary_1, 
                style: style_CemeteryBoundary_1,
                interactive: false,
                title: '<img src="styles/legend/CemeteryBoundary_1.png" /> Cemetery Boundary'
            });
var format_GPRGrids_2 = new ol.format.GeoJSON();
var features_GPRGrids_2 = format_GPRGrids_2.readFeatures(json_GPRGrids_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GPRGrids_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GPRGrids_2.addFeatures(features_GPRGrids_2);
var lyr_GPRGrids_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GPRGrids_2, 
                style: style_GPRGrids_2,
                interactive: false,
                title: '<img src="styles/legend/GPRGrids_2.png" /> GPR Grids'
            });
var format_GPR_Confidence_High_3 = new ol.format.GeoJSON();
var features_GPR_Confidence_High_3 = format_GPR_Confidence_High_3.readFeatures(json_GPR_Confidence_High_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GPR_Confidence_High_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GPR_Confidence_High_3.addFeatures(features_GPR_Confidence_High_3);
var lyr_GPR_Confidence_High_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GPR_Confidence_High_3, 
                style: style_GPR_Confidence_High_3,
                interactive: true,
                title: '<img src="styles/legend/GPR_Confidence_High_3.png" /> GPR_Confidence_High'
            });
var format_PavedRoads_4 = new ol.format.GeoJSON();
var features_PavedRoads_4 = format_PavedRoads_4.readFeatures(json_PavedRoads_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PavedRoads_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PavedRoads_4.addFeatures(features_PavedRoads_4);
var lyr_PavedRoads_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PavedRoads_4, 
                style: style_PavedRoads_4,
                interactive: false,
                title: '<img src="styles/legend/PavedRoads_4.png" /> Paved Roads'
            });
var format_MetalMarkers_5 = new ol.format.GeoJSON();
var features_MetalMarkers_5 = format_MetalMarkers_5.readFeatures(json_MetalMarkers_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MetalMarkers_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MetalMarkers_5.addFeatures(features_MetalMarkers_5);
var lyr_MetalMarkers_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MetalMarkers_5, 
                style: style_MetalMarkers_5,
                interactive: true,
                title: '<img src="styles/legend/MetalMarkers_5.png" /> Metal Markers'
            });
var format_GardenofRemembrance_6 = new ol.format.GeoJSON();
var features_GardenofRemembrance_6 = format_GardenofRemembrance_6.readFeatures(json_GardenofRemembrance_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GardenofRemembrance_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GardenofRemembrance_6.addFeatures(features_GardenofRemembrance_6);
var lyr_GardenofRemembrance_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GardenofRemembrance_6, 
                style: style_GardenofRemembrance_6,
                interactive: false,
                title: '<img src="styles/legend/GardenofRemembrance_6.png" /> Garden of Remembrance'
            });
var format_IndividualGraves_7 = new ol.format.GeoJSON();
var features_IndividualGraves_7 = format_IndividualGraves_7.readFeatures(json_IndividualGraves_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IndividualGraves_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IndividualGraves_7.addFeatures(features_IndividualGraves_7);
var lyr_IndividualGraves_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IndividualGraves_7, 
                style: style_IndividualGraves_7,
                interactive: true,
                title: '<img src="styles/legend/IndividualGraves_7.png" /> Individual Graves'
            });
var format_SharedMonuments_8 = new ol.format.GeoJSON();
var features_SharedMonuments_8 = format_SharedMonuments_8.readFeatures(json_SharedMonuments_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SharedMonuments_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SharedMonuments_8.addFeatures(features_SharedMonuments_8);
var lyr_SharedMonuments_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SharedMonuments_8, 
                style: style_SharedMonuments_8,
                interactive: true,
                title: '<img src="styles/legend/SharedMonuments_8.png" /> Shared Monuments'
            });
var format_Fences_9 = new ol.format.GeoJSON();
var features_Fences_9 = format_Fences_9.readFeatures(json_Fences_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fences_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fences_9.addFeatures(features_Fences_9);
var lyr_Fences_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Fences_9, 
                style: style_Fences_9,
                interactive: false,
                title: '<img src="styles/legend/Fences_9.png" /> Fences'
            });
var format_Walls_10 = new ol.format.GeoJSON();
var features_Walls_10 = format_Walls_10.readFeatures(json_Walls_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Walls_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Walls_10.addFeatures(features_Walls_10);
var lyr_Walls_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Walls_10, 
                style: style_Walls_10,
                interactive: false,
                title: '<img src="styles/legend/Walls_10.png" /> Walls'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_CemeteryBoundary_1.setVisible(true);lyr_GPRGrids_2.setVisible(true);lyr_GPR_Confidence_High_3.setVisible(true);lyr_PavedRoads_4.setVisible(true);lyr_MetalMarkers_5.setVisible(true);lyr_GardenofRemembrance_6.setVisible(true);lyr_IndividualGraves_7.setVisible(true);lyr_SharedMonuments_8.setVisible(true);lyr_Fences_9.setVisible(true);lyr_Walls_10.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_CemeteryBoundary_1,lyr_GPRGrids_2,lyr_GPR_Confidence_High_3,lyr_PavedRoads_4,lyr_MetalMarkers_5,lyr_GardenofRemembrance_6,lyr_IndividualGraves_7,lyr_SharedMonuments_8,lyr_Fences_9,lyr_Walls_10];
lyr_CemeteryBoundary_1.set('fieldAliases', {'id': 'id', 'Desc': 'Desc', 'Area': 'Area', });
lyr_GPRGrids_2.set('fieldAliases', {'Number': 'Number', 'Label': 'Label', });
lyr_GPR_Confidence_High_3.set('fieldAliases', {'Confidence': 'Confidence', 'Marker': 'Marker', 'Conf_Note': 'Conf_Note', 'GridNumber': 'GridNumber', });
lyr_PavedRoads_4.set('fieldAliases', {'id': 'id', });
lyr_MetalMarkers_5.set('fieldAliases', {'Name': 'Name', 'MemorialID': 'MemorialID', 'FindAGrave': 'FindAGrave', });
lyr_GardenofRemembrance_6.set('fieldAliases', {'1-Name': '1-Name', '1-MemID': '1-MemID', '2-Name': '2-Name', '2-MemID': '2-MemID', '3-Name': '3-Name', '3-MemID': '3-MemID', '4-Name': '4-Name', '4-MemID': '4-MemID', '5-Name': '5-Name', '5-MemID': '5-MemID', '6-Name': '6-Name', '6-MemID': '6-MemID', '7-Name': '7-Name', '7-MemID': '7-MemID', '8-Name': '8-Name', '8-MemID': '8-MemID', '9-Name': '9-Name', '9-MemID': '9-MemID', '10-Name': '10-Name', '10-MemID': '10-MemID', '11-Name': '11-Name', '11-MemID': '11-MemID', '12-Name': '12-Name', '12-MemID': '12-MemID', '13-Name': '13-Name', '13-MemID': '13-MemID', '14-Name': '14-Name', '14-MemID': '14-MemID', '15-Name': '15-Name', '15-MemID': '15-MemID', '16-Name': '16-Name', '16-MemID': '16-MemID', '17-Name': '17-Name', '17-MemID': '17-MemID', '18-Name': '18-Name', '18-MemID': '18-MemID', '19-Name': '19-Name', '19-MemID': '19-MemID', '20-Name': '20-Name', '20-MemID': '20-MemID', '21-Name': '21-Name', '21-MemID': '21-MemID', });
lyr_IndividualGraves_7.set('fieldAliases', {'Name': 'Name', 'MemorialID': 'MemorialID', 'FindAGrave': 'FindAGrave', 'Last Name': 'Last Name', 'First Name': 'First Name', 'Middle Nam': 'Middle Nam', 'Nickname': 'Nickname', 'Birth Mont': 'Birth Mont', 'Birth Day': 'Birth Day', 'Birth Year': 'Birth Year', 'Death Mont': 'Death Mont', 'Death Day': 'Death Day', 'Death Year': 'Death Year', 'Has Photo': 'Has Photo', });
lyr_SharedMonuments_8.set('fieldAliases', {'Name': 'Name', 'MemorialID': 'MemorialID', '2nd Name': '2nd Name', '2nd MemID': '2nd MemID', '3rd Name': '3rd Name', '3rdMemID': '3rdMemID', '1FindAGra': '1FindAGra', '2FindAGra': '2FindAGra', '3FindAGra': '3FindAGra', });
lyr_Fences_9.set('fieldAliases', {'id': 'id', });
lyr_Walls_10.set('fieldAliases', {'id': 'id', });
lyr_CemeteryBoundary_1.set('fieldImages', {'id': '', 'Desc': '', 'Area': '', });
lyr_GPRGrids_2.set('fieldImages', {'Number': '', 'Label': '', });
lyr_GPR_Confidence_High_3.set('fieldImages', {'Confidence': '', 'Marker': '', 'Conf_Note': '', 'GridNumber': '', });
lyr_PavedRoads_4.set('fieldImages', {'id': '', });
lyr_MetalMarkers_5.set('fieldImages', {'Name': '', 'MemorialID': '', 'FindAGrave': '', });
lyr_GardenofRemembrance_6.set('fieldImages', {'1-Name': '', '1-MemID': '', '2-Name': '', '2-MemID': '', '3-Name': '', '3-MemID': '', '4-Name': '', '4-MemID': '', '5-Name': '', '5-MemID': '', '6-Name': '', '6-MemID': '', '7-Name': '', '7-MemID': '', '8-Name': '', '8-MemID': '', '9-Name': '', '9-MemID': '', '10-Name': '', '10-MemID': '', '11-Name': '', '11-MemID': '', '12-Name': '', '12-MemID': '', '13-Name': '', '13-MemID': '', '14-Name': '', '14-MemID': '', '15-Name': '', '15-MemID': '', '16-Name': '', '16-MemID': '', '17-Name': '', '17-MemID': '', '18-Name': '', '18-MemID': '', '19-Name': '', '19-MemID': '', '20-Name': '', '20-MemID': '', '21-Name': '', '21-MemID': '', });
lyr_IndividualGraves_7.set('fieldImages', {'Name': '', 'MemorialID': '', 'FindAGrave': '', 'Last Name': '', 'First Name': '', 'Middle Nam': '', 'Nickname': '', 'Birth Mont': '', 'Birth Day': '', 'Birth Year': '', 'Death Mont': '', 'Death Day': '', 'Death Year': '', 'Has Photo': '', });
lyr_SharedMonuments_8.set('fieldImages', {'Name': '', 'MemorialID': '', '2nd Name': '', '2nd MemID': '', '3rd Name': '', '3rdMemID': '', '1FindAGra': '', '2FindAGra': '', '3FindAGra': '', });
lyr_Fences_9.set('fieldImages', {'id': '', });
lyr_Walls_10.set('fieldImages', {'id': '', });
lyr_CemeteryBoundary_1.set('fieldLabels', {'id': 'inline label', 'Desc': 'inline label', 'Area': 'inline label', });
lyr_GPRGrids_2.set('fieldLabels', {'Number': 'inline label', 'Label': 'inline label', });
lyr_GPR_Confidence_High_3.set('fieldLabels', {'Confidence': 'no label', 'Marker': 'no label', 'Conf_Note': 'no label', 'GridNumber': 'no label', });
lyr_PavedRoads_4.set('fieldLabels', {'id': 'no label', });
lyr_MetalMarkers_5.set('fieldLabels', {'Name': 'inline label', 'MemorialID': 'inline label', 'FindAGrave': 'inline label', });
lyr_GardenofRemembrance_6.set('fieldLabels', {'1-Name': 'inline label', '1-MemID': 'inline label', '2-Name': 'inline label', '2-MemID': 'inline label', '3-Name': 'inline label', '3-MemID': 'inline label', '4-Name': 'inline label', '4-MemID': 'inline label', '5-Name': 'inline label', '5-MemID': 'inline label', '6-Name': 'inline label', '6-MemID': 'inline label', '7-Name': 'inline label', '7-MemID': 'inline label', '8-Name': 'inline label', '8-MemID': 'inline label', '9-Name': 'inline label', '9-MemID': 'inline label', '10-Name': 'inline label', '10-MemID': 'inline label', '11-Name': 'inline label', '11-MemID': 'inline label', '12-Name': 'inline label', '12-MemID': 'inline label', '13-Name': 'inline label', '13-MemID': 'inline label', '14-Name': 'inline label', '14-MemID': 'inline label', '15-Name': 'inline label', '15-MemID': 'inline label', '16-Name': 'inline label', '16-MemID': 'inline label', '17-Name': 'inline label', '17-MemID': 'inline label', '18-Name': 'inline label', '18-MemID': 'inline label', '19-Name': 'inline label', '19-MemID': 'inline label', '20-Name': 'inline label', '20-MemID': 'inline label', '21-Name': 'inline label', '21-MemID': 'inline label', });
lyr_IndividualGraves_7.set('fieldLabels', {'Name': 'inline label', 'MemorialID': 'inline label', 'FindAGrave': 'inline label', 'Last Name': 'inline label', 'First Name': 'inline label', 'Middle Nam': 'inline label', 'Nickname': 'inline label', 'Birth Mont': 'inline label', 'Birth Day': 'inline label', 'Birth Year': 'inline label', 'Death Mont': 'inline label', 'Death Day': 'inline label', 'Death Year': 'inline label', 'Has Photo': 'inline label', });
lyr_SharedMonuments_8.set('fieldLabels', {'Name': 'inline label', 'MemorialID': 'inline label', '2nd Name': 'inline label', '2nd MemID': 'inline label', '3rd Name': 'inline label', '3rdMemID': 'inline label', '1FindAGra': 'inline label', '2FindAGra': 'inline label', '3FindAGra': 'inline label', });
lyr_Fences_9.set('fieldLabels', {'id': 'no label', });
lyr_Walls_10.set('fieldLabels', {'id': 'no label', });
lyr_Walls_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});