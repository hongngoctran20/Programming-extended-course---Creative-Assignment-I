//alert("Welcome on board!")
var x = 35, y =50;
//Gravity converter//
document.getElementById("grvConvert").innerHTML =
toGrav() + " g/l of density is equal to " + "<br>" + toGrav()/1000 + " sg of gravity";

function toGrav(b) {
	var b = 100;
	return b;
}

//Mars miles to Earth miles//
document.getElementById("marsEarth").innerHTML =
toMiles() + " miles on mars is equal to " + "<br>" + toMiles()*1/3 + " miles on earth";

function toMiles(a) {
	var a = 68;
	return a;
}

//Date//
var c = new Date();
document.getElementById("date").innerHTML = c.toUTCString() + "+00 Earth Time";

//Speed//
document.getElementById("spd").innerHTML = spd() + " km/h";
function spd(s) {
	var s = x*y*10;
	return s;
}

//gravity//
document.getElementById("grv").innerHTML = grv();
function grv(g) {
	var g = x/y;
	return g;
}

//fuel//
document.getElementById("fuel").innerHTML = fuel() + " %";
function fuel(f1) {
	var f1 = x/y*100;
	return f1;
}

//food//
document.getElementById("food").innerHTML = food() + " %";
function food(f2) {
	var f2 = x+y-30;
	return f2;
}

//distance//
document.getElementById("distance").innerHTML = distance() + " km";
function distance(d) {
	var d = x*y*12345;
	return d;
}

//water//
document.getElementById("water").innerHTML =water() + " %";
function water(w) {
	var w = x+y-25;
	return w;
}
	




