// Loenz strange attractors:


var Lorenz = function (Xinit, Yinit, Zinit) {
this.x = Xinit;
this.y = Yinit;
this.z = Zinit;
this.rho = 28;
this.sigma = 10;
this.beta = 8/3;

this.getDx = function() {
        return ( this.sigma * this.y - (this.sigma * this.x));
};
this.getDy= function() {
        return( this.rho *this.x - this.z*this.x -this.y);
};
this.getDz = function() {
    return (this.x * this.y - (this.beta  * this.z));
};

};

Lorenz.prototype.getNextPoint = function() {
    var nextx = this.x;
    var nexty = this.y;
    var nextz = this.z;
    this.x += this.getDx();
    this.y += this.getDy();
    this.z += this.getDz();

    return[nextx, nexty, nextz];
};


module.exports = Lorenz;

