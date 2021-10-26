//for drag and drop//

function myFunction(event) {
    var x = event.touches[0].clientX;
    var y = event.touches[0].clientY;
    document.getElementById("demo").innerHTML = "x=" + x + ", y=" + y;
}

//for click and drag kenshin picture
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