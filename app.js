
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
window.onload = function () {

    var bp8img = document.getElementById("dragtargetbp8");

    bp8img.addEventListener("touchmove", function (ev) {

        var touchLocation = ev.targetTouches[0];

        bp8img.style.left = touchLocation.pageX + "px";
        bp8img.style.top = touchLocation.pageY + "px";

    })

}