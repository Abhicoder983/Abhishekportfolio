document.getElementById('dot').addEventListener('click', function() {
    var dot = document.getElementById('icon');
    var downArrow = document.getElementById("downArrow");
    var dotlink = document.getElementById('dotlink');
    if (dotlink.style.display === 'block') {
        downArrow.style.display = "none";
        dot.style.display = "block";
        dotlink.style.display = 'none';
    } else {
        dotlink.style.display = 'block';
        dot.style.display = "none";
        downArrow.style.display = "block";
    }
});

function hideMenu() {
    var dot = document.getElementById('icon');
    var downArrow = document.getElementById("downArrow");
    var dotlink = document.getElementById('dotlink');
    dot.style.display = 'block';
    downArrow.style.display = 'none';
    dotlink.style.display = 'none';
}

document.getElementById('listClicked1').addEventListener('click', hideMenu);
document.getElementById('listClicked2').addEventListener('click', hideMenu);
document.getElementById('listClicked3').addEventListener('click', hideMenu);
document.getElementById('listClicked4').addEventListener('click', hideMenu);
document.getElementById('listClicked5').addEventListener('click', hideMenu);
document.getElementById('listClicked6').addEventListener('click', hideMenu);
document.getElementById('listClicked7').addEventListener('click', hideMenu);
