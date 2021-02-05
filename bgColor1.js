document.getElementById("btn").addEventListener("click", changeColor);
var backGround = "#"; 

function changeColor() {

    var valueR = Math.floor(Math.random() * 256);
    var valueG = Math.floor(Math.random() * 256);
    var valueB = Math.floor(Math.random() * 256);

    var hex = valueR.toString(16) + valueG.toString(16) + valueB.toString(16);

    if( hex.length < 6 ) {
        hex += "0";
    }
    else if( hex.length < 5 ) {
        hex += "0A";
    }
    else {
        hex = hex;
    }

    document.body.style.backgroundColor = backGround + hex;
    document.getElementById("hex-value").textContent = backGround + hex;
}