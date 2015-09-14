// Loenz strange attractors:






var Lorenz = function (Xinit, Yinit, Zinit) {
this.x = Xinit;
this.y = Yinit;
this.z = Zinit;
this.rho = 28;
this.sigma = 10;
this.beta = 8/3;
this.dt = 0.01;

this.getDx = function() {
    var answer =  ( this.sigma * (this.nexty - this.nextx));
    console.log ("dx/dt = " + answer);
    return this.dt * answer;
};
this.getDy= function() {
   var answer = ( this.nextx * (this.rho - this.nextz) -this.nexty);
    //    var answer = this.rho * (this.x - this.y - (this.x * this.z)); 
    console.log ("dy/dt = " + answer);
    return this.dt * answer;

};
this.getDz = function() {
    var answer =  (this.nextx * this.nexty - (this.beta  * this.nextz));
    console.log ("dz/dt = " + answer);
    return this.dt * answer;

};

};

Lorenz.prototype.getNextPoint = function() {
    this.nextx = this.x;
    this.nexty = this.y;
    this.nextz = this.z;
   // console.log("this.nextx = " + this.nextx + " this.nexty = " + this.nexty + " this.nextz = " + this.nextz);

    this.x += this.getDx();
    this.y += this.getDy();
    this.z += this.getDz();
    //console.log("this.nextx = " + this.nextx + " this.nexty = " + this.nexty + " this.nextz = " + this.nextz);
    return[this.nextx, this.nexty, this.nextz];
};


module.exports = Lorenz;

