//alert("Welcome on board!")

//Gravity converter//
document.getElementById("grvConvert").innerHTML =
toGrav() + " g/l is equal to " + toGrav()/1000 + " kg/l";

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
var d = new Date();
document.getElementById("date").innerHTML = d.toUTCString() + " Earth Time";

//Speed//
