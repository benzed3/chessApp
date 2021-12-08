
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

//for touch drag***//

//for black rook1//
var bRook1 = document.getElementById("blackRooka");

bRook1.addEventListener("touchmove", function (ev) {

    ev.preventDefault();

    var touchLocation = ev.targetTouches[0];

    bRook1.style.left = touchLocation.pageX + "px";
    bRook1.style.top = touchLocation.pageY + "px";

})

bRook1.addEventListener("touchend", function (ev) {

    var x = parseInt(bRook1.style.left);
    var y = parseInt(bRook1.style.top);

})

//for black rook 2//
var bRook2 = document.getElementById("blackRookb");

bRook2.addEventListener("touchmove", function (ev) {

    ev.preventDefault();

    var touchLocation = ev.targetTouches[0];

    bRook2.style.left = touchLocation.pageX + "px";
    bRook2.style.top = touchLocation.pageY + "px";

})

bRook2.addEventListener("touchend", function (ev) {

    var x = parseInt(bRook2.style.left);
    var y = parseInt(bRook2.style.top);

})