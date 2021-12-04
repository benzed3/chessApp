
//for click and drag
function dragStart(event) {
    event.dataTransfer.setData("Text", event.target.id);
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
}

//for touch drag
var whiterookA = document.getElementById("wRookA");

whiterookA.addEventListener("touchmove", function (ev) {

    var touchLocation = ev.targetTouches[0];

    whiterookA.style.left = touchLocation.pageX + "px";
    whiterookA.style.top = touchLocation.pageY + "px";

})

whiterookA.addEventListener("touchend", function (ev) {

    var x = parseInt(whiterookA.style.left);
    var y = parseInt(whiterookA.style.top);

})
