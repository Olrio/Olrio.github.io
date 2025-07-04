// Make the DIV element draggable:
dragElement(document.getElementById("carousel"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0;
  elmnt.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e.preventDefault();
    pos2 = e.clientX;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e.preventDefault();
    pos1 = pos2 - e.clientX;
    pos2 = e.clientX;
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

// This part of script disable visibility of carousel on pages other than accueil
page = document.getElementById('page_name')

if (page.textContent != 'Accueil') {
document.getElementById('carousel').style.visibility = 'hidden'
}
