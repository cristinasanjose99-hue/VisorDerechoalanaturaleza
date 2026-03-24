var size = 0;
var placement = 'point';

var style_Renta_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("Renta");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    if (value >= 0.000000 && value <= 12996.200000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(211,211,211,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 12996.200000 && value <= 15015.800000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(189,171,195,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 15015.800000 && value <= 16513.400000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(167,131,179,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 16513.400000 && value <= 19120.200000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(144,90,163,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 19120.200000 && value <= 32058.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(122,50,147,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
