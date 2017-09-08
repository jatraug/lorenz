
var setup = function() {
    yCenter = 250;
    var xCenter = 300;
    var lineWidth   = 1;
    context.beginPath();
    context.lineWidth = lineWidth;
    context.strokeStyle = '#1D8DB3';
    var xMove = xCenter;
    var yMove = yCenter;
    context.moveTo(xMove, yMove);


    return  function(x, y, z) {
//        console.log(x);
        context.beginPath();
        context.moveTo(xMove, yMove);
        xMove = Math.floor(xCenter +(10 * x[x.length -1]));
//        x[x.length -1];
        yMove =Math.floor(yCenter + (10 * y[y.length -1]));
// y[y.length -1];

//        console.log("x = " + x.length);
        x.forEach( function (xnow, index, array) {
//            console.log("index = " + x[index]);
            //            console.log(z[index]);
//            if (z[index] > 100 || z[index] < -100){
//                console.log( "x = " + x[index]);
//            }
            context.strokeStyle = getZcolor(z[index]);
            context.lineTo(Math.floor(xCenter +(10 * x[index])), Math.floor(yCenter + (10 * y[index])));
        });
        context.stroke();
    };
};



 
function getZcolor(z) {
    if (z < 20){
        return '#ff0000';
    }else if (z > 30) {
        return '#00ff00';
    }

    return'#0000ff';
}
