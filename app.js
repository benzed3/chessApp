//for click and drag for whiteRook1
dragElement(document.getElementById("wr"));

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "whiteRook1")) {
        document.getElementById(elmnt.id + "whiteRook1").onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

//click and drag for white rook 2//
dragElement(document.getElementById("wr2"));

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "whiteRook2")) {

        document.getElementById(elmnt.id + "whiteRook2").onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

//for click and drag for blackRook1
dragElement(document.getElementById("br"));

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "blackRook1")) {
        document.getElementById(elmnt.id + "blackRook1").onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

//click and drag for black rook 2//
dragElement(document.getElementById("br2"));

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "blackRook2")) {

        document.getElementById(elmnt.id + "blackRook2").onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

//click and drag for white knight 1//
dragElement(document.getElementById("wn"));

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "whiteKnight1")) {

        document.getElementById(elmnt.id + "whiteKnight1").onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

//click and drag for white knight 2//
dragElement(document.getElementById("wn2"));

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "whiteKnight2")) {

        document.getElementById(elmnt.id + "whiteKnight2").onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

//click and drag for black knight 1//
dragElement(document.getElementById("bn"));

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "blackKnight1")) {

        document.getElementById(elmnt.id + "blackKnight1").onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

//click and drag for black knight 2//
dragElement(document.getElementById("bn2"));

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "blackKnight2")) {

        document.getElementById(elmnt.id + "blackKnight2").onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}


//click and drag for white bishop 1//
dragElement(document.getElementById("wb"));

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "whiteBishop1")) {

        document.getElementById(elmnt.id + "whiteBishop1").onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

//click and drag for white bishop 2//
dragElement(document.getElementById("wb2"));

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "whiteBishop2")) {

        document.getElementById(elmnt.id + "whiteBishop2").onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

//click and drag for black bishop 1//
dragElement(document.getElementById("bb"));

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "blackBishop1")) {

        document.getElementById(elmnt.id + "blackBishop1").onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

//click and drag for black bishop 2//
dragElement(document.getElementById("bb2"));

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "blackBishop2")) {

        document.getElementById(elmnt.id + "blackBishop2").onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

//click and drag for white queen//
dragElement(document.getElementById("wq"));

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "whiteQueen")) {

        document.getElementById(elmnt.id + "whiteQueen").onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

//click and drag for black queen//
dragElement(document.getElementById("bq"));

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "blackQueen")) {

        document.getElementById(elmnt.id + "blackQueen").onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

//click and drag for white king//
dragElement(document.getElementById("wk"));

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "whiteKing")) {

        document.getElementById(elmnt.id + "whiteKing").onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

//click and drag for black king//
dragElement(document.getElementById("bk"));

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "blackKing")) {

        document.getElementById(elmnt.id + "blackKing").onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

//click and drag for pawn a//
dragElement(document.getElementById("pawna"));

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "pawn1")) {

        document.getElementById(elmnt.id + "pawn1").onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

//click and drag for pawnb//
dragElement(document.getElementById("pawnb"));

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "pawn2")) {

        document.getElementById(elmnt.id + "pawn2").onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

//click and drag for pawnc//
dragElement(document.getElementById("pawnc"));

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "pawn3")) {

        document.getElementById(elmnt.id + "pawn3").onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

//click and drag for pawnd//
dragElement(document.getElementById("pawnd"));

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "pawn4")) {

        document.getElementById(elmnt.id + "pawn4").onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

//click and drag for pawne
dragElement(document.getElementById("pawne"));

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "pawn5")) {

        document.getElementById(elmnt.id + "pawn5").onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

//click and drag for pawnf//
dragElement(document.getElementById("pawnf"));

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "pawn6")) {

        document.getElementById(elmnt.id + "pawn6").onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

//click and drag for pawng//
dragElement(document.getElementById("pawng"));

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "pawn7")) {

        document.getElementById(elmnt.id + "pawn7").onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

//click and drag for pawnh//
dragElement(document.getElementById("pawnh"));

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "pawn8")) {

        document.getElementById(elmnt.id + "pawn8").onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

//TOUCH AND DRAG//

//white rook//
var whiteRookA = document.getElementById("wr");

whiteRookA.addEventListener("touchmove", function (ev) {

    ev.preventDefault();

    var touchLocation = ev.targetTouches[0];

    whiteRookA.style.left = touchLocation.pageX + "px";
    whiteRookA.style.top = touchLocation.pageY + "px";

})

whiteRookA.addEventListener("touchend", function (ev) {

    var x = parseInt(whiteRookA.style.left);
    var y = parseInt(whiteRookA.style.top);

})

//white rook2//
var whiteRookB = document.getElementById("wr2");

whiteRookB.addEventListener("touchmove", function (ev) {

    ev.preventDefault();

    var touchLocation = ev.targetTouches[0];

    whiteRookB.style.left = touchLocation.pageX + "px";
    whiteRookB.style.top = touchLocation.pageY + "px";

})

whiteRookB.addEventListener("touchend", function (ev) {

    var x = parseInt(whiteRookB.style.left);
    var y = parseInt(whiteRookB.style.top);

})

//white knight 1//
var whiteKnightA = document.getElementById("wn");

whiteKnightA.addEventListener("touchmove", function (ev) {

    ev.preventDefault();

    var touchLocation = ev.targetTouches[0];

    whiteKnightA.style.left = touchLocation.pageX + "px";
    whiteKnightA.style.top = touchLocation.pageY + "px";

})

whiteKnightA.addEventListener("touchend", function (ev) {

    var x = parseInt(whiteKnightA.style.left);
    var y = parseInt(whiteKnightA.style.top);

})

//white knight 2//
var whiteKnightB = document.getElementById("wn2");

whiteKnightB.addEventListener("touchmove", function (ev) {

    ev.preventDefault();

    var touchLocation = ev.targetTouches[0];

    whiteKnightB.style.left = touchLocation.pageX + "px";
    whiteKnightB.style.top = touchLocation.pageY + "px";

})

whiteKnightB.addEventListener("touchend", function (ev) {

    var x = parseInt(whiteKnightB.style.left);
    var y = parseInt(whiteKnightB.style.top);

})

//white bishop 2//
var whiteBishopA = document.getElementById("wb");

whiteBishopA.addEventListener("touchmove", function (ev) {

    ev.preventDefault();

    var touchLocation = ev.targetTouches[0];

    whiteBishopA.style.left = touchLocation.pageX + "px";
    whiteBishopA.style.top = touchLocation.pageY + "px";

})

whiteBishopA.addEventListener("touchend", function (ev) {

    var x = parseInt(whiteBishopA.style.left);
    var y = parseInt(whiteBishopA.style.top);

})

//white bishop 2//
var whiteBishopB = document.getElementById("wb2");

whiteBishopB.addEventListener("touchmove", function (ev) {

    ev.preventDefault();

    var touchLocation = ev.targetTouches[0];

    whiteBishopB.style.left = touchLocation.pageX + "px";
    whiteBishopB.style.top = touchLocation.pageY + "px";

})

whiteBishopB.addEventListener("touchend", function (ev) {

    var x = parseInt(whiteBishopB.style.left);
    var y = parseInt(whiteBishopB.style.top);

})

//white queen//
var whiteQueen = document.getElementById("wq");

whiteQueen.addEventListener("touchmove", function (ev) {

    ev.preventDefault();

    var touchLocation = ev.targetTouches[0];

    whiteQueen.style.left = touchLocation.pageX + "px";
    whiteQueen.style.top = touchLocation.pageY + "px";

})

whiteQueen.addEventListener("touchend", function (ev) {

    var x = parseInt(whiteQueen.style.left);
    var y = parseInt(whiteQueen.style.top);

})

//white king//
var whiteKing = document.getElementById("wk");

whiteKing.addEventListener("touchmove", function (ev) {

    ev.preventDefault();

    var touchLocation = ev.targetTouches[0];

    whiteKing.style.left = touchLocation.pageX + "px";
    whiteKing.style.top = touchLocation.pageY + "px";

})

whiteKing.addEventListener("touchend", function (ev) {

    var x = parseInt(whiteKing.style.left);
    var y = parseInt(whiteKing.style.top);

})

//white pawns//
var whitePawnA = document.getElementById("pawnaa");

whitePawnA.addEventListener("touchmove", function (ev) {

    ev.preventDefault();

    var touchLocation = ev.targetTouches[0];

    whitePawnA.style.left = touchLocation.pageX + "px";
    whitePawnA.style.top = touchLocation.pageY + "px";

})

whitePawnA.addEventListener("touchend", function (ev) {

    var x = parseInt(whitePawnA.style.left);
    var y = parseInt(whitePawnA.style.top);

})
////
var whitePawnB = document.getElementById("pawnbb");

whitePawnB.addEventListener("touchmove", function (ev) {

    ev.preventDefault();

    var touchLocation = ev.targetTouches[0];

    whitePawnB.style.left = touchLocation.pageX + "px";
    whitePawnB.style.top = touchLocation.pageY + "px";

})

whitePawnB.addEventListener("touchend", function (ev) {

    var x = parseInt(whitePawnB.style.left);
    var y = parseInt(whitePawnB.style.top);

})
////
var whitePawnC = document.getElementById("pawncc");

whitePawnC.addEventListener("touchmove", function (ev) {

    ev.preventDefault();

    var touchLocation = ev.targetTouches[0];

    whitePawnC.style.left = touchLocation.pageX + "px";
    whitePawnC.style.top = touchLocation.pageY + "px";

})

whitePawnC.addEventListener("touchend", function (ev) {

    var x = parseInt(whitePawnC.style.left);
    var y = parseInt(whitePawnC.style.top);

})
////
var whitePawnD = document.getElementById("pawndd");

whitePawnD.addEventListener("touchmove", function (ev) {

    ev.preventDefault();

    var touchLocation = ev.targetTouches[0];

    whitePawnD.style.left = touchLocation.pageX + "px";
    whitePawnD.style.top = touchLocation.pageY + "px";

})

whitePawnD.addEventListener("touchend", function (ev) {

    var x = parseInt(whitePawnD.style.left);
    var y = parseInt(whitePawnD.style.top);

})
////
var whitePawnE = document.getElementById("pawnee");

whitePawnE.addEventListener("touchmove", function (ev) {

    ev.preventDefault();

    var touchLocation = ev.targetTouches[0];

    whitePawnE.style.left = touchLocation.pageX + "px";
    whitePawnE.style.top = touchLocation.pageY + "px";

})

whitePawnE.addEventListener("touchend", function (ev) {

    var x = parseInt(whitePawnE.style.left);
    var y = parseInt(whitePawnE.style.top);

})
////
var whitePawnF = document.getElementById("pawnff");

whitePawnF.addEventListener("touchmove", function (ev) {

    ev.preventDefault();

    var touchLocation = ev.targetTouches[0];

    whitePawnF.style.left = touchLocation.pageX + "px";
    whitePawnF.style.top = touchLocation.pageY + "px";

})

whitePawnF.addEventListener("touchend", function (ev) {

    var x = parseInt(whitePawnF.style.left);
    var y = parseInt(whitePawnF.style.top);

})
////
var whitePawnG = document.getElementById("pawngg");

whitePawnG.addEventListener("touchmove", function (ev) {

    ev.preventDefault();

    var touchLocation = ev.targetTouches[0];

    whitePawnG.style.left = touchLocation.pageX + "px";
    whitePawnG.style.top = touchLocation.pageY + "px";

})

whitePawnG.addEventListener("touchend", function (ev) {

    var x = parseInt(whitePawnG.style.left);
    var y = parseInt(whitePawnG.style.top);

})
////
var whitePawnH = document.getElementById("pawnhh");

whitePawnH.addEventListener("touchmove", function (ev) {

    ev.preventDefault();

    var touchLocation = ev.targetTouches[0];

    whitePawnH.style.left = touchLocation.pageX + "px";
    whitePawnH.style.top = touchLocation.pageY + "px";

})

whitePawnH.addEventListener("touchend", function (ev) {

    var x = parseInt(whitePawnH.style.left);
    var y = parseInt(whitePawnH.style.top);

})
////

//black rook 1//
var blackRookA = document.getElementById("br");

blackRookA.addEventListener("touchmove", function (ev) {

    ev.preventDefault();

    var touchLocation = ev.targetTouches[0];

    blackRookA.style.left = touchLocation.pageX + "px";
    blackRookA.style.top = touchLocation.pageY + "px";

})

blackRookA.addEventListener("touchend", function (ev) {

    var x = parseInt(blackRookA.style.left);
    var y = parseInt(blackRookA.style.top);

})

//black rook 2//
var blackRookB = document.getElementById("br2");

blackRookB.addEventListener("touchmove", function (ev) {

    ev.preventDefault();

    var touchLocation = ev.targetTouches[0];

    blackRookB.style.left = touchLocation.pageX + "px";
    blackRookB.style.top = touchLocation.pageY + "px";

})

blackRookB.addEventListener("touchend", function (ev) {

    var x = parseInt(blackRookB.style.left);
    var y = parseInt(blackRookB.style.top);

})

//black knight 1//
var blackKnightA = document.getElementById("bn");

blackKnightA.addEventListener("touchmove", function (ev) {

    ev.preventDefault();

    var touchLocation = ev.targetTouches[0];

    blackKnightA.style.left = touchLocation.pageX + "px";
    blackKnightA.style.top = touchLocation.pageY + "px";

})

blackKnightA.addEventListener("touchend", function (ev) {

    var x = parseInt(blackKnightA.style.left);
    var y = parseInt(blackKnightA.style.top);

})

//black knight 2//
var blackKnightB = document.getElementById("bn2");

blackKnightB.addEventListener("touchmove", function (ev) {

    ev.preventDefault();

    var touchLocation = ev.targetTouches[0];

    blackKnightB.style.left = touchLocation.pageX + "px";
    blackKnightB.style.top = touchLocation.pageY + "px";

})

blackKnightB.addEventListener("touchend", function (ev) {

    var x = parseInt(blackKnightB.style.left);
    var y = parseInt(blackKnightB.style.top);

})

//black bishop 1//
var blackBishopA = document.getElementById("bb");

blackBishopA.addEventListener("touchmove", function (ev) {

    ev.preventDefault();

    var touchLocation = ev.targetTouches[0];

    blackBishopA.style.left = touchLocation.pageX + "px";
    blackBishopA.style.top = touchLocation.pageY + "px";

})

blackBishopA.addEventListener("touchend", function (ev) {

    var x = parseInt(blackBishopA.style.left);
    var y = parseInt(blackBishopA.style.top);

})

//black bishop 2//
var blackBishopB = document.getElementById("bb2");

blackBishopB.addEventListener("touchmove", function (ev) {

    ev.preventDefault();

    var touchLocation = ev.targetTouches[0];

    blackBishopB.style.left = touchLocation.pageX + "px";
    blackBishopB.style.top = touchLocation.pageY + "px";

})

blackBishopB.addEventListener("touchend", function (ev) {

    var x = parseInt(blackBishopB.style.left);
    var y = parseInt(blackBishopB.style.top);

})

//black queen//
var blackQueen = document.getElementById("bq");

blackQueen.addEventListener("touchmove", function (ev) {

    ev.preventDefault();

    var touchLocation = ev.targetTouches[0];

    blackQueen.style.left = touchLocation.pageX + "px";
    blackQueen.style.top = touchLocation.pageY + "px";

})

blackQueen.addEventListener("touchend", function (ev) {

    var x = parseInt(blackQueen.style.left);
    var y = parseInt(blackQueen.style.top);

})

//black king//
var blackKing = document.getElementById("bk");

blackKing.addEventListener("touchmove", function (ev) {

    ev.preventDefault();

    var touchLocation = ev.targetTouches[0];

    blackKing.style.left = touchLocation.pageX + "px";
    blackKing.style.top = touchLocation.pageY + "px";

})

blackKing.addEventListener("touchend", function (ev) {

    var x = parseInt(blackKing.style.left);
    var y = parseInt(blackKing.style.top);

})

//black pawns//
////
var blackPawnA = document.getElementById("pawna");

blackPawnA.addEventListener("touchmove", function (ev) {

    ev.preventDefault();

    var touchLocation = ev.targetTouches[0];

    blackPawnA.style.left = touchLocation.pageX + "px";
    blackPawnA.style.top = touchLocation.pageY + "px";

})

blackPawnA.addEventListener("touchend", function (ev) {

    var x = parseInt(blackPawnA.style.left);
    var y = parseInt(blackPawnA.style.top);

})
////
var blackPawnB = document.getElementById("pawnb");

blackPawnB.addEventListener("touchmove", function (ev) {

    ev.preventDefault();

    var touchLocation = ev.targetTouches[0];

    blackPawnB.style.left = touchLocation.pageX + "px";
    blackPawnB.style.top = touchLocation.pageY + "px";

})

blackPawnB.addEventListener("touchend", function (ev) {

    var x = parseInt(blackPawnB.style.left);
    var y = parseInt(blackPawnB.style.top);

})
////
var blackPawnC = document.getElementById("pawnc");

blackPawnC.addEventListener("touchmove", function (ev) {

    ev.preventDefault();

    var touchLocation = ev.targetTouches[0];

    blackPawnC.style.left = touchLocation.pageX + "px";
    blackPawnC.style.top = touchLocation.pageY + "px";

})

blackPawnC.addEventListener("touchend", function (ev) {

    var x = parseInt(blackPawnC.style.left);
    var y = parseInt(blackPawnC.style.top);

})
////
var blackPawnD = document.getElementById("pawnd");

blackPawnD.addEventListener("touchmove", function (ev) {

    ev.preventDefault();

    var touchLocation = ev.targetTouches[0];

    blackPawnD.style.left = touchLocation.pageX + "px";
    blackPawnD.style.top = touchLocation.pageY + "px";

})

blackPawnD.addEventListener("touchend", function (ev) {

    var x = parseInt(blackPawnD.style.left);
    var y = parseInt(blackPawnD.style.top);

})
////
var blackPawnE = document.getElementById("pawne");

blackPawnE.addEventListener("touchmove", function (ev) {

    ev.preventDefault();

    var touchLocation = ev.targetTouches[0];

    blackPawnE.style.left = touchLocation.pageX + "px";
    blackPawnE.style.top = touchLocation.pageY + "px";

})

blackPawnE.addEventListener("touchend", function (ev) {

    var x = parseInt(blackPawnE.style.left);
    var y = parseInt(blackPawnE.style.top);

})
////
var blackPawnF = document.getElementById("pawnf");

blackPawnF.addEventListener("touchmove", function (ev) {

    ev.preventDefault();

    var touchLocation = ev.targetTouches[0];

    blackPawnF.style.left = touchLocation.pageX + "px";
    blackPawnF.style.top = touchLocation.pageY + "px";

})

blackPawnF.addEventListener("touchend", function (ev) {

    var x = parseInt(blackPawnF.style.left);
    var y = parseInt(blackPawnF.style.top);

})
////
var blackPawnG = document.getElementById("pawng");

blackPawnG.addEventListener("touchmove", function (ev) {

    ev.preventDefault();

    var touchLocation = ev.targetTouches[0];

    blackPawnG.style.left = touchLocation.pageX + "px";
    blackPawnG.style.top = touchLocation.pageY + "px";

})

blackPawnG.addEventListener("touchend", function (ev) {

    var x = parseInt(blackPawnG.style.left);
    var y = parseInt(blackPawnG.style.top);

})
////
var blackPawnH = document.getElementById("pawnh");

blackPawnH.addEventListener("touchmove", function (ev) {

    ev.preventDefault();

    var touchLocation = ev.targetTouches[0];

    blackPawnH.style.left = touchLocation.pageX + "px";
    blackPawnH.style.top = touchLocation.pageY + "px";

})

blackPawnH.addEventListener("touchend", function (ev) {

    var x = parseInt(blackPawnH.style.left);
    var y = parseInt(blackPawnH.style.top);

})
