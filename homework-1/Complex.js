function Complex(re, im){ 
	if(isNaN(real) || isNaN(imaginary)){ 
      throw new TypeError();
  }
    this.r = re; 
    this.i = im;
}
Complex.prototype.add = function(addd){ return new Complex(this.r + addd.r, this.i + addd.i); }; //+
Complex.prototype.mul = function(mull){ return new Complex(this.r*mull.r - this.i*mull.i, this.r*mull.i + this.i*mull.r); }; //*
Complex.prototype.mag = function(){ return Math.sqrt(this.r*this.r + this.i*this.i); }; //求模
Complex.prototype.toString = function(){ return "{" + this.r + "," + this.i + "}"; }; //
Complex.prototype.conj = function(){ return new Complex(this.r, -this.i); };//求共轭复数