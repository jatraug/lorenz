
var setup = function() {
    var yCenter = 250;
    var xCenter = 300;
    var lineWidth   = 1;
    context.beginPath();
    context.lineWidth = lineWidth;
    context.strokeStyle = '#1D8DB3';
    var xMove = xCenter;
    var yMove = yCenter;
    //context.moveTo(xMove, yMove);


    return  function(x, y, z) {

        context.beginPath();
        context.moveTo(xMove, yMove);



        x.forEach( function (xnow, index, array) {

            context.strokeStyle = getZcolor(z[index]);
           // xMove = Math.floor(xCenter +(10 * x[x.length -1]));
            
            // yMove =Math.floor(yCenter + (10 * y[y.length -1]));
            xMove = Math.floor(xCenter + (10 * x[index]));
            yMove = Math.floor(yCenter + (10 * getYorZ(y[index], z[index])));
            
            context.lineTo(xMove, yMove); //Math.floor(xCenter +(10 * x[index])), Math.floor(yCenter + (10 * y[index])));
        });
        context.stroke();
    };
};

var getYorZ = function(y,z) {
    return y;
};

    
//DEtermine if this should be x-y or x-z
function doXYZ(isYorZ){
    if (isYorZ ===1){
        getYorZ = function(y,z) {
            return y;
        };
    }else {
        getYorZ = function(y,z) {
            return z;
        };
    };
    start();
    start();
}


 
function getZcolor(z) {
    if (z < 20){
        return '#ff0000';
    }else if (z > 30) {
        return '#00ff00';
    }

    return'#0000ff';
}
