// Loenz strange attractors:






var Lorenz = function (Xinit, Yinit, Zinit) {
    this.x = this.nextx = Xinit;
    this.y = this.nexty = Yinit;
    this.z = this.nexz = Zinit;
    this.rho = 28;
    this.sigma = 10;
    this.beta = 8/3;
    this.scaler = 0.01;

    this.getDxDt = function () {
        var answer =  ( this.sigma * (this.nexty - this.nextx));
        //console.log ("dx/dt = " + answer);
        return this.scaler * answer;
    };
    this.getDyDt = function () {
        var answer = ( this.nextx * (this.rho - this.nextz) -this.nexty);
        //    var answer = this.rho * (this.x - this.y - (this.x * this.z)); 
        //    console.log ("dy/dt = " + answer);
        return this.scaler * answer;

    };
    this.getDzDt = function () {
        var answer =  (this.nextx * this.nexty - (this.beta  * this.nextz));
        //    console.log ("dz/dt = " + answer);
        return this.scaler * answer;

    };

};

Lorenz.prototype.getNextPoint = function () {
    this.nextx = this.x;
    this.nexty = this.y;
    this.nextz = this.z;
    // console.log("this.nextx = " + this.nextx + " this.nexty = " + this.nexty + " this.nextz = " + this.nextz);

    this.x += this.getDxDt();
    this.y += this.getDyDt();
    this.z += this.getDzDt();
    //console.log("this.nextx = " + this.nextx + " this.nexty = " + this.nexty + " this.nextz = " + this.nextz);
    return[this.nextx, this.nexty, this.nextz];
};


//module.exports = Lorenz;




function doIt(lor, draw) {
    var x =[];
    var y =[];
    var z = [];
    for (var i=0; i< 20; ++i) {
        var point = lor.getNextPoint();
        x.push(point[0]);
        y.push(point[1]);
        z.push(point[2]);
        
        // console.log ('point: x = ' + point[0] + ' y= ' + point[1] + ' z= ' + point[2]);
    }
    draw(x,y,z);
}
