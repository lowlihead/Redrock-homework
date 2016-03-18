function Complex(real, imaginary){ if(isNaN(real) || isNaN(imaginary)){ //确保两个实参都是数字 
throw new TypeError(); //如果不都是数字，则抛出错误 } 
this.r = real; this.i = imagnary; } /* *类的实例方法定义为原型对象的函数值属性 *这里定义的方法可以被所有实例继承，并为他们提供共享的行为 *需注意，JavaScript的实例方法必须使用关键字this来存取实例的字段 */ //当前复数对象加上另外一个复数，并返回一个新的计算和值后的复数对象 
Complex.prototype.add = function(that){ return new Complex(this.r + that.r, this.i + that.i); }; 
//当前复数乘以另外一个复数，并返回一个新的计算乘积之后的复数对象 
Complex.prototype.mul = function(that){ return new Complex(this.r*that.r - this.i*that.i, this.r*that.i + this.i*that.r); }; 
//计算复数的模，复数的模定义为原点（0,0）到复平面的距离 
Complex.prototype.mag = function(){ return Math.sqrt(this.r*this.r + this.i*this.i); }; 
//将复数对象转化为一个字符串
 Complex.prototype.toString = function(){ return "{" + this.r + "," + this.i + "}"; }; 
 //检查当前复数对象是否和另外一个复数值相等 
 Complex.prototype.equals = function(that){ return that != null && //必须有定义且不为null 
 that.constructor === Complex && //并且必须是Complex实例 
 this.r === that.r && this.i === that.i; //并且必须包含相同的值 }; 
 /* *类字段（比如常量）和类方法直接定义为构造函数的属性 *需要注意的是，类方法通常不使用关键字this *他们只对其参数进行操作 */ 
 //这里预定义了一些对复数运算有帮助的类字段，他们的命名全是大写，用以表明它们是常量 
 Complex.ZERO = new Complex(0,0); Complex.ONE = new Complex(1,0); Complex.I = new Complex(0,1); 
 //这个类方法将由实例对象的toString方法返回的字符串格式解析为一个Complex对象或者抛出一个异常 
 Complex.parse = function(s){ try{ //假设解析成功 
 var m = Complex._format.exec(s); //利用正则表达式进行匹配 
 return new Complex(parseFloat(m[1]), parseFloat(m[2])); }catch(x){ //如果解析失败则抛出异常 
 throw new TypeError("Can't parse '" + s + "' as a complex number."); } }; //定义类的“私有”字段，这个字段在Complex.parse()中用到 
 //下划线前缀表明它是类内部使用的，而不属于类的共有API的部分 
 Comple._format = /^\{([^,]+), ([^}]+)\}$/; 
 //返回当前复数的共轭复数 
Complex.prototype.conj = function(){ return new Complex(this.r, -this.i); };