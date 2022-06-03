i = 1;

setInterval(function(){ 
    if (i == 1) {
        document.getElementById("bar").style.backgroundImage = "linear-gradient(to right, green, white, white, white, white)";
        console.log("1");
    } else if (i == 2) {
        document.getElementById("bar").style.backgroundImage = "linear-gradient(to right, green, green, white, white, white)";
        console.log("2");
    } else if (i == 3) {
        document.getElementById("bar").style.backgroundImage = "linear-gradient(to right, green, green, green, white, white)";
        console.log("3");
    } else if (i == 4) {
        document.getElementById("bar").style.backgroundImage = "linear-gradient(to right, green, green, green, green, white)";
        console.log("4");
    } else if (i == 5) {
        document.getElementById("bar").style.backgroundImage = "linear-gradient(to right, green, green, green, green, green)";
        console.log("5");
    }
    i += 1;
}, 200);