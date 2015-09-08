// Loenz strange attractors:


var Lorenz = function (Xinit, Yinit, Zinit) {
this.x = Xinit;
this.y = Yinit;
this.z = Zinit;
this.rho = 28;
this.sigma = 10;
this.beta = 2.66667; //8/3;

this.getDx = function() {
        return ( this.sigma * (this.nexty - this.nextx));
};
this.getDy= function() {
        return( this.nextx * (this.rho - this.nextz) -this.nexty);
};
this.getDz = function() {
    return (this.nextx * this.nexty - (this.beta  * this.nextz));
};

};

Lorenz.prototype.getNextPoint = function() {
    this.nextx = this.x;
    this.nexty = this.y;
    this.nextz = this.z;
   // console.log("this.nextx = " + this.nextx + " this.nexty = " + this.nexty + " this.nextz = " + this.nextz);

    this.x -= this.getDx();
    this.y -= this.getDy();
    this.z -= this.getDz();
    //console.log("this.nextx = " + this.nextx + " this.nexty = " + this.nexty + " this.nextz = " + this.nextz);
    return[this.nextx, this.nexty, this.nextz];
};


module.exports = Lorenz;

