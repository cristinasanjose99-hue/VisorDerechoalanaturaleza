ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:25831").setExtent([461875.433785, 4374529.199190, 481460.445644, 4390206.403519]);
var wms_layers = [];


        var lyr_MapaBase_0 = new ol.layer.Tile({
            'title': 'Mapa Base',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}@2x.png'
            })
        });
var format_Acceso_1 = new ol.format.GeoJSON();
var features_Acceso_1 = format_Acceso_1.readFeatures(json_Acceso_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25831'});
var jsonSource_Acceso_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Acceso_1.addFeatures(features_Acceso_1);
var lyr_Acceso_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Acceso_1, 
                style: style_Acceso_1,
                popuplayertitle: 'Acceso',
                interactive: true,
    title: 'Acceso<br />\
    <img src="styles/legend/Acceso_1_0.png" /> 0<br />\
    <img src="styles/legend/Acceso_1_1.png" /> 0 - 33%<br />\
    <img src="styles/legend/Acceso_1_2.png" /> 33 - 66%<br />\
    <img src="styles/legend/Acceso_1_3.png" /> 66 - 99%<br />\
    <img src="styles/legend/Acceso_1_4.png" /> 100<br />' });
var format_Renta_2 = new ol.format.GeoJSON();
var features_Renta_2 = format_Renta_2.readFeatures(json_Renta_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25831'});
var jsonSource_Renta_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Renta_2.addFeatures(features_Renta_2);
var lyr_Renta_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Renta_2, 
                style: style_Renta_2,
                popuplayertitle: 'Renta',
                interactive: true,
    title: 'Renta<br />\
    <img src="styles/legend/Renta_2_0.png" /> 0 - 12996<br />\
    <img src="styles/legend/Renta_2_1.png" /> 12996 - 15016<br />\
    <img src="styles/legend/Renta_2_2.png" /> 15016 - 16513<br />\
    <img src="styles/legend/Renta_2_3.png" /> 16513 - 19120<br />\
    <img src="styles/legend/Renta_2_4.png" /> 19120 - 32058<br />' });
var format_Mapabivariado_3 = new ol.format.GeoJSON();
var features_Mapabivariado_3 = format_Mapabivariado_3.readFeatures(json_Mapabivariado_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25831'});
var jsonSource_Mapabivariado_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mapabivariado_3.addFeatures(features_Mapabivariado_3);
var lyr_Mapabivariado_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mapabivariado_3, 
                style: style_Mapabivariado_3,
                popuplayertitle: 'Mapa-bivariado',
                interactive: false,
    title: 'Mapa-bivariado<br />\
    <img src="styles/legend/Mapabivariado_3_0.png" /> 11<br />\
    <img src="styles/legend/Mapabivariado_3_1.png" /> 12<br />\
    <img src="styles/legend/Mapabivariado_3_2.png" /> 13<br />\
    <img src="styles/legend/Mapabivariado_3_3.png" /> 21<br />\
    <img src="styles/legend/Mapabivariado_3_4.png" /> 22<br />\
    <img src="styles/legend/Mapabivariado_3_5.png" /> 23<br />\
    <img src="styles/legend/Mapabivariado_3_6.png" /> 31<br />\
    <img src="styles/legend/Mapabivariado_3_7.png" /> 32<br />\
    <img src="styles/legend/Mapabivariado_3_8.png" /> 33<br />' });
var lyr_LeyendaMapaBivariado_4 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Leyenda-Mapa-Bivariado<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/LeyendaMapaBivariado_4.png",
            attributions: ' ',
            projection: 'EPSG:25831',
            alwaysInRange: true,
            imageExtent: [459144.543588, 4374737.205735, 464157.644220, 4381537.070275]
        })
    });
var format_Areaservicio300m_5 = new ol.format.GeoJSON();
var features_Areaservicio300m_5 = format_Areaservicio300m_5.readFeatures(json_Areaservicio300m_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25831'});
var jsonSource_Areaservicio300m_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Areaservicio300m_5.addFeatures(features_Areaservicio300m_5);
var lyr_Areaservicio300m_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Areaservicio300m_5, 
                style: style_Areaservicio300m_5,
                popuplayertitle: 'Area-servicio-300m',
                interactive: true,
                title: '<img src="styles/legend/Areaservicio300m_5.png" /> Area-servicio-300m'
            });
var format_Limitemunicipal_6 = new ol.format.GeoJSON();
var features_Limitemunicipal_6 = format_Limitemunicipal_6.readFeatures(json_Limitemunicipal_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25831'});
var jsonSource_Limitemunicipal_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limitemunicipal_6.addFeatures(features_Limitemunicipal_6);
var lyr_Limitemunicipal_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Limitemunicipal_6, 
                style: style_Limitemunicipal_6,
                popuplayertitle: 'Limite-municipal',
                interactive: false,
                title: '<img src="styles/legend/Limitemunicipal_6.png" /> Limite-municipal'
            });
var format_Redcarreteras_7 = new ol.format.GeoJSON();
var features_Redcarreteras_7 = format_Redcarreteras_7.readFeatures(json_Redcarreteras_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25831'});
var jsonSource_Redcarreteras_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Redcarreteras_7.addFeatures(features_Redcarreteras_7);
var lyr_Redcarreteras_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Redcarreteras_7, 
                style: style_Redcarreteras_7,
                popuplayertitle: 'Red-carreteras',
                interactive: false,
    title: 'Red-carreteras<br />\
    <img src="styles/legend/Redcarreteras_7_0.png" /> Autopista libre / autovía<br />\
    <img src="styles/legend/Redcarreteras_7_1.png" /> Carretera convencional<br />\
    <img src="styles/legend/Redcarreteras_7_2.png" /> Carretera multicarril<br />\
    <img src="styles/legend/Redcarreteras_7_3.png" /> Urbano<br />\
    <img src="styles/legend/Redcarreteras_7_4.png" /> Urbano diseminado<br />' });
var format_Zonasverdes_8 = new ol.format.GeoJSON();
var features_Zonasverdes_8 = format_Zonasverdes_8.readFeatures(json_Zonasverdes_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25831'});
var jsonSource_Zonasverdes_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zonasverdes_8.addFeatures(features_Zonasverdes_8);
var lyr_Zonasverdes_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zonasverdes_8, 
                style: style_Zonasverdes_8,
                popuplayertitle: 'Zonas-verdes',
                interactive: true,
                title: '<img src="styles/legend/Zonasverdes_8.png" /> Zonas-verdes'
            });

lyr_MapaBase_0.setVisible(true);lyr_Acceso_1.setVisible(true);lyr_Renta_2.setVisible(true);lyr_Mapabivariado_3.setVisible(true);lyr_LeyendaMapaBivariado_4.setVisible(true);lyr_Areaservicio300m_5.setVisible(false);lyr_Limitemunicipal_6.setVisible(true);lyr_Redcarreteras_7.setVisible(true);lyr_Zonasverdes_8.setVisible(true);
var layersList = [lyr_MapaBase_0,lyr_Acceso_1,lyr_Renta_2,lyr_Mapabivariado_3,lyr_LeyendaMapaBivariado_4,lyr_Areaservicio300m_5,lyr_Limitemunicipal_6,lyr_Redcarreteras_7,lyr_Zonasverdes_8];
lyr_Acceso_1.set('fieldAliases', {'Acceso': 'Acceso', });
lyr_Renta_2.set('fieldAliases', {'Renta': 'Renta', });
lyr_Mapabivariado_3.set('fieldAliases', {'Renta': 'Renta', 'Acceso': 'Acceso', 'CodigoSC': 'CodigoSC', 'Reclass1': 'Reclass1', 'Reclass2': 'Reclass2', 'Bivariado': 'Bivariado', });
lyr_Areaservicio300m_5.set('fieldAliases', {'id': 'id', 'isocrona': 'isocrona', });
lyr_Limitemunicipal_6.set('fieldAliases', {'NAMEUNIT': 'NAMEUNIT', });
lyr_Redcarreteras_7.set('fieldAliases', {'clased': 'clased', });
lyr_Zonasverdes_8.set('fieldAliases', {'origen': 'origen', 'area': 'area', 'perimetro': 'perimetro', });
lyr_Acceso_1.set('fieldImages', {'Acceso': 'TextEdit', });
lyr_Renta_2.set('fieldImages', {'Renta': 'TextEdit', });
lyr_Mapabivariado_3.set('fieldImages', {'Renta': 'TextEdit', 'Acceso': 'TextEdit', 'CodigoSC': 'TextEdit', 'Reclass1': 'TextEdit', 'Reclass2': 'Range', 'Bivariado': 'Range', });
lyr_Areaservicio300m_5.set('fieldImages', {'id': 'TextEdit', 'isocrona': 'TextEdit', });
lyr_Limitemunicipal_6.set('fieldImages', {'NAMEUNIT': 'TextEdit', });
lyr_Redcarreteras_7.set('fieldImages', {'clased': 'TextEdit', });
lyr_Zonasverdes_8.set('fieldImages', {'origen': 'TextEdit', 'area': 'TextEdit', 'perimetro': '', });
lyr_Acceso_1.set('fieldLabels', {'Acceso': 'inline label - always visible', });
lyr_Renta_2.set('fieldLabels', {'Renta': 'inline label - always visible', });
lyr_Mapabivariado_3.set('fieldLabels', {'Renta': 'no label', 'Acceso': 'no label', 'CodigoSC': 'no label', 'Reclass1': 'no label', 'Reclass2': 'no label', 'Bivariado': 'no label', });
lyr_Areaservicio300m_5.set('fieldLabels', {'id': 'no label', 'isocrona': 'no label', });
lyr_Limitemunicipal_6.set('fieldLabels', {'NAMEUNIT': 'no label', });
lyr_Redcarreteras_7.set('fieldLabels', {'clased': 'hidden field', });
lyr_Zonasverdes_8.set('fieldLabels', {'origen': 'no label', 'area': 'inline label - always visible', 'perimetro': 'inline label - always visible', });
lyr_Zonasverdes_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});