ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:25831").setExtent([450947.221291, 4365156.926239, 490485.038660, 4396511.334897]);
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
var format_Renta_1 = new ol.format.GeoJSON();
var features_Renta_1 = format_Renta_1.readFeatures(json_Renta_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25831'});
var jsonSource_Renta_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Renta_1.addFeatures(features_Renta_1);
var lyr_Renta_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Renta_1, 
                style: style_Renta_1,
                popuplayertitle: 'Renta',
                interactive: true,
    title: 'Renta<br />\
    <img src="styles/legend/Renta_1_0.png" /> 0 - 12996<br />\
    <img src="styles/legend/Renta_1_1.png" /> 12996 - 15016<br />\
    <img src="styles/legend/Renta_1_2.png" /> 15016 - 16513<br />\
    <img src="styles/legend/Renta_1_3.png" /> 16513 - 19120<br />\
    <img src="styles/legend/Renta_1_4.png" /> 19120 - 32058<br />' });
var format_Porcentajedesueloresidencialdentrodereadeservicio300mazonasverdes_2 = new ol.format.GeoJSON();
var features_Porcentajedesueloresidencialdentrodereadeservicio300mazonasverdes_2 = format_Porcentajedesueloresidencialdentrodereadeservicio300mazonasverdes_2.readFeatures(json_Porcentajedesueloresidencialdentrodereadeservicio300mazonasverdes_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25831'});
var jsonSource_Porcentajedesueloresidencialdentrodereadeservicio300mazonasverdes_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Porcentajedesueloresidencialdentrodereadeservicio300mazonasverdes_2.addFeatures(features_Porcentajedesueloresidencialdentrodereadeservicio300mazonasverdes_2);
var lyr_Porcentajedesueloresidencialdentrodereadeservicio300mazonasverdes_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Porcentajedesueloresidencialdentrodereadeservicio300mazonasverdes_2, 
                style: style_Porcentajedesueloresidencialdentrodereadeservicio300mazonasverdes_2,
                popuplayertitle: 'Porcentaje de suelo residencial dentro de área de servicio 300m a zonas verdes',
                interactive: true,
    title: 'Porcentaje de suelo residencial dentro de área de servicio 300m a zonas verdes<br />\
    <img src="styles/legend/Porcentajedesueloresidencialdentrodereadeservicio300mazonasverdes_2_0.png" /> Ausencia total<br />\
    <img src="styles/legend/Porcentajedesueloresidencialdentrodereadeservicio300mazonasverdes_2_1.png" /> 0 - 33%<br />\
    <img src="styles/legend/Porcentajedesueloresidencialdentrodereadeservicio300mazonasverdes_2_2.png" /> 33 - 66%<br />\
    <img src="styles/legend/Porcentajedesueloresidencialdentrodereadeservicio300mazonasverdes_2_3.png" /> 66 - 100%<br />\
    <img src="styles/legend/Porcentajedesueloresidencialdentrodereadeservicio300mazonasverdes_2_4.png" /> Cobertura total<br />' });
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
                popuplayertitle: 'Mapa bivariado',
                interactive: false,
    title: 'Mapa bivariado<br />\
    <img src="styles/legend/Mapabivariado_3_0.png" /> Accesibilidad baja y rentas bajas<br />\
    <img src="styles/legend/Mapabivariado_3_1.png" /> Accesibilidad media y rentas bajas<br />\
    <img src="styles/legend/Mapabivariado_3_2.png" /> Accesibilidad alta y rentas bajas<br />\
    <img src="styles/legend/Mapabivariado_3_3.png" /> Accesibilidad baja y rentas medias<br />\
    <img src="styles/legend/Mapabivariado_3_4.png" /> Accesibilidad media y rentas medias<br />\
    <img src="styles/legend/Mapabivariado_3_5.png" /> Accesibilidad alta y rentas medias<br />\
    <img src="styles/legend/Mapabivariado_3_6.png" /> Accesibilidad baja y rentas altas<br />\
    <img src="styles/legend/Mapabivariado_3_7.png" /> Accesibilidad media y rentas altas<br />\
    <img src="styles/legend/Mapabivariado_3_8.png" /> Accesibilidad alta y rentas altas<br />' });
var lyr_LeyendaBivariado_4 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Leyenda Bivariado<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/LeyendaBivariado_4.png",
            attributions: ' ',
            projection: 'EPSG:25831',
            alwaysInRange: true,
            imageExtent: [459614.961739, 4378139.617378, 462312.929823, 4381806.820168]
        })
    });
var format_Limitemunicipal_5 = new ol.format.GeoJSON();
var features_Limitemunicipal_5 = format_Limitemunicipal_5.readFeatures(json_Limitemunicipal_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25831'});
var jsonSource_Limitemunicipal_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limitemunicipal_5.addFeatures(features_Limitemunicipal_5);
var lyr_Limitemunicipal_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Limitemunicipal_5, 
                style: style_Limitemunicipal_5,
                popuplayertitle: 'Limite-municipal',
                interactive: false,
                title: '<img src="styles/legend/Limitemunicipal_5.png" /> Limite-municipal'
            });
var format_Redcarreteras_6 = new ol.format.GeoJSON();
var features_Redcarreteras_6 = format_Redcarreteras_6.readFeatures(json_Redcarreteras_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25831'});
var jsonSource_Redcarreteras_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Redcarreteras_6.addFeatures(features_Redcarreteras_6);
var lyr_Redcarreteras_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Redcarreteras_6, 
                style: style_Redcarreteras_6,
                popuplayertitle: 'Red-carreteras',
                interactive: false,
    title: 'Red-carreteras<br />\
    <img src="styles/legend/Redcarreteras_6_0.png" /> Autopista libre / autovía<br />\
    <img src="styles/legend/Redcarreteras_6_1.png" /> Camino<br />\
    <img src="styles/legend/Redcarreteras_6_2.png" /> Carretera convencional<br />\
    <img src="styles/legend/Redcarreteras_6_3.png" /> Carretera multicarril<br />\
    <img src="styles/legend/Redcarreteras_6_4.png" /> Carril bici<br />\
    <img src="styles/legend/Redcarreteras_6_5.png" /> Senda<br />\
    <img src="styles/legend/Redcarreteras_6_6.png" /> Urbano<br />\
    <img src="styles/legend/Redcarreteras_6_7.png" /> Urbano diseminado<br />\
    <img src="styles/legend/Redcarreteras_6_8.png" /> <br />' });
var format_Zonasverdes_7 = new ol.format.GeoJSON();
var features_Zonasverdes_7 = format_Zonasverdes_7.readFeatures(json_Zonasverdes_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25831'});
var jsonSource_Zonasverdes_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zonasverdes_7.addFeatures(features_Zonasverdes_7);
var lyr_Zonasverdes_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zonasverdes_7, 
                style: style_Zonasverdes_7,
                popuplayertitle: 'Zonas-verdes',
                interactive: false,
                title: '<img src="styles/legend/Zonasverdes_7.png" /> Zonas-verdes'
            });

lyr_MapaBase_0.setVisible(true);lyr_Renta_1.setVisible(true);lyr_Porcentajedesueloresidencialdentrodereadeservicio300mazonasverdes_2.setVisible(true);lyr_Mapabivariado_3.setVisible(true);lyr_LeyendaBivariado_4.setVisible(true);lyr_Limitemunicipal_5.setVisible(true);lyr_Redcarreteras_6.setVisible(true);lyr_Zonasverdes_7.setVisible(true);
var layersList = [lyr_MapaBase_0,lyr_Renta_1,lyr_Porcentajedesueloresidencialdentrodereadeservicio300mazonasverdes_2,lyr_Mapabivariado_3,lyr_LeyendaBivariado_4,lyr_Limitemunicipal_5,lyr_Redcarreteras_6,lyr_Zonasverdes_7];
lyr_Renta_1.set('fieldAliases', {'Renta': 'Renta', });
lyr_Porcentajedesueloresidencialdentrodereadeservicio300mazonasverdes_2.set('fieldAliases', {'Acceso%': 'Acceso%', });
lyr_Mapabivariado_3.set('fieldAliases', {'Renta': 'Renta', 'Acceso': 'Acceso', 'CodigoSC': 'CodigoSC', 'Reclass1': 'Reclass1', 'Reclass2': 'Reclass2', 'Bivariado': 'Bivariado', });
lyr_Limitemunicipal_5.set('fieldAliases', {'NAMEUNIT': 'NAMEUNIT', });
lyr_Redcarreteras_6.set('fieldAliases', {'clased': 'clased', });
lyr_Zonasverdes_7.set('fieldAliases', {'origen': 'origen', 'area': 'area', 'perimetro': 'perimetro', });
lyr_Renta_1.set('fieldImages', {'Renta': 'TextEdit', });
lyr_Porcentajedesueloresidencialdentrodereadeservicio300mazonasverdes_2.set('fieldImages', {'Acceso%': 'TextEdit', });
lyr_Mapabivariado_3.set('fieldImages', {'Renta': 'TextEdit', 'Acceso': 'TextEdit', 'CodigoSC': 'TextEdit', 'Reclass1': 'TextEdit', 'Reclass2': 'Range', 'Bivariado': 'Range', });
lyr_Limitemunicipal_5.set('fieldImages', {'NAMEUNIT': 'TextEdit', });
lyr_Redcarreteras_6.set('fieldImages', {'clased': 'TextEdit', });
lyr_Zonasverdes_7.set('fieldImages', {'origen': 'TextEdit', 'area': 'TextEdit', 'perimetro': '', });
lyr_Renta_1.set('fieldLabels', {'Renta': 'inline label - always visible', });
lyr_Porcentajedesueloresidencialdentrodereadeservicio300mazonasverdes_2.set('fieldLabels', {'Acceso%': 'inline label - always visible', });
lyr_Mapabivariado_3.set('fieldLabels', {'Renta': 'no label', 'Acceso': 'no label', 'CodigoSC': 'no label', 'Reclass1': 'no label', 'Reclass2': 'no label', 'Bivariado': 'no label', });
lyr_Limitemunicipal_5.set('fieldLabels', {'NAMEUNIT': 'no label', });
lyr_Redcarreteras_6.set('fieldLabels', {'clased': 'no label', });
lyr_Zonasverdes_7.set('fieldLabels', {'origen': 'no label', 'area': 'no label', 'perimetro': 'no label', });
lyr_Zonasverdes_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});