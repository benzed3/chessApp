var whiteknight = document.getElementById("knighta");

whiteknight.addEventListener("touchmove", function (ev) {

    var touchLocation = ev.targetTouches[0];

    whiteknight.style.left = touchLocation.pageX + "px";
    whiteknight.style.top = touchLocation.pageY + "px";

})

whiteknight.addEventListener("touchend", function (ev) {

    var x = parseInt(whiteknight.style.left);
    var y = parseInt(whiteknight.style.top);

})