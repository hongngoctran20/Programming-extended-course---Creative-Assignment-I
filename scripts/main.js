alert("Welcome on board!")

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
	var a = 86;
	return a;
}

//Date//
var c = new Date();
document.getElementById("date").innerHTML = c.toUTCString() + "+00 Earth Time";


//Declare elements-------------//
var x = 25, y =50;

//Speed//
document.getElementById("spd").innerHTML = spd() + " km/h";
function spd(s) {
	var s = x*y*100;
	return s;
}
if (spd()>200000) {
	document.getElementById("spd").style.color = "red";
} else if (spd()<=200000) {document.getElementById("spd").style.color = "orange";}
else if (spd()<100000) {document.getElementById("spd").style.color = "green";}


//gravity//
document.getElementById("grv").innerHTML = grv();
function grv(g) {
	var g = x/y;
	return g;
}
if (grv()>=0.5) {
	document.getElementById("grv").style.color = "lightgreen";
} else {document.getElementById("grv").style.color = "red";}

//fuel//
document.getElementById("fuel").innerHTML = fuel() + " %";
function fuel(f1) {
	var f1 = x/y*100;
	return f1;
}
if (fuel()>65) {
	document.getElementById("fuel").style.color = "lightgreen";
} else if (fuel()>30) {document.getElementById("fuel").style.color = "orange";}
else if (fuel()<=30) {document.getElementById("fuel").style.color = "red";}

//food//
document.getElementById("food").innerHTML = food() + " %";
function food(f2) {
	var f2 = x+y-30;
	return f2;
}
if (food()>60) {
	document.getElementById("food").style.color = "lightgreen";
} else if (food()>35) {document.getElementById("food").style.color = "orange";}
else if (food()<=35) {document.getElementById("food").style.color = "red";}


//distance//
document.getElementById("distance").innerHTML = distance() + " km";
function distance(d) {
	var d = x*y*12345;
	return d;
}
if (distance()>2000000) {
	document.getElementById("distance").style.color = "lightblue";
} else if (distance()<=2000000) {document.getElementById("distance").style.color = "lightgreen";}
else if (distance()<100000) {document.getElementById("distance").style.color = "yellow";}


//water//
document.getElementById("water").innerHTML =water() + " %";
function water(w) {
	var w = x+y-25;
	return w;
}
if (water()>55) {
	document.getElementById("water").style.color = "lightgreen";
} else if (water()>35) {document.getElementById("water").style.color = "orange";}
else if (water()<=35) {document.getElementById("water").style.color = "red";}




