
var setup = function() {
    yCenter = 300;
    var xCenter = 400;
    var lineWidth   = 1;
    context.beginPath();
    context.lineWidth = lineWidth;
    context.strokeStyle = '#1D8DB3';
    context.moveTo(xCenter, yCenter);


    return  function(x, y, z) {
//        console.log(x);
        context.beginPath();


        x.forEach( function (xnow, index, array) {
//            console.log(z[index]);
            context.strokeStyle = getZcolor(z[index]);
            context.lineTo(xCenter +10 * xnow, yCenter + 10 * y[index]);
        });
        context.stroke();
    }
}



 
function getZcolor(z) {
    if (z < 20){
        return '#ff0000';
    }else if (z > 30) {
        return '#00ff00';
    }

    return'#0000ff';
}
