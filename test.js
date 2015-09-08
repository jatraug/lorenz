var Lorenz = require('./lorenz');

var lor = new Lorenz(1,1,1);

for (var i=0; i< 10; ++i) {
    var point = lor.getNextPoint();
    console.log ('point: x = ' + point[0] + ' y= ' + point[1] + ' z= ' + point[2]);
}
