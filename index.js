function showDate() {
    var x = document.getElementById('time');
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
    document.getElementById('time').innerHTML = Date();
    document.getElementById('time').style.border = '2px solid black'
}

function sizeSmall() {
    document.getElementById('size').style.fontSize = '25px';
}

function sizeBig() {
    document.getElementById('size').style.fontSize = '100px';
}