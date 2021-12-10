
//for click and drag
//black rook 1//
dragElement(document.getElementById("rookdiv"));

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "rooka")) {
        /* if present, the header is where you move the DIV from:*/
        document.getElementById(elmnt.id + "rooka").onmousedown = dragMouseDown;
    } else {
        /* otherwise, move the DIV from anywhere inside the DIV:*/
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
    }
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



