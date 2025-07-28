let colorDisplay = document.getElementById("color-display");
let div = document.querySelector("div");
let displayButton = document.getElementById("display-button");

let aqua = document.getElementById("aqua");
let teal = document.getElementById("teal");
let pink = document.getElementById("pink");
let purple = document.getElementById("purple");
let colorless = document.getElementById("colorless");

aqua.onclick = function() {
    if(colorDisplay != "aqua"){
        colorDisplay.innerHTML = "aqua";
        div.style.backgroundColor = "aqua";
    }
}

teal.onclick = function() {
    if(colorDisplay != "teal"){
        colorDisplay.innerHTML = "teal";
        div.style.backgroundColor = "teal";
    }
}

pink.onclick = function() {
    if(colorDisplay != "pink"){
        colorDisplay.innerHTML = "pink";
        div.style.backgroundColor = "pink";
    }
}

purple.onclick = function() {
    if(colorDisplay != "purple"){
        colorDisplay.innerHTML = "purple";
        div.style.backgroundColor = "purple";
    }
}

colorless.onclick = function() {
    if(colorDisplay != "colorless"){
        colorDisplay.innerHTML = "colorless";
        div.style.backgroundColor = "white";
    }
}

displayButton.style.display = "block";
displayButton.style.marginTop = "10px";

displayButton.onclick = function() {
    if(div.style.display != "none"){
        div.style.display = "none";
        displayButton.innerHTML = "Show";
    }else{
        div.style.display = "block";
        displayButton.innerHTML = "Hide";
    }
}






