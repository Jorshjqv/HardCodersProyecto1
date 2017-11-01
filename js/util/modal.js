var isCacelled = false;
var modal = document.getElementById('sellEvent');
var span = document.getElementsByClassName("close")[0];
var funToExe, elementId;

if (document.querySelector('#btnOK') != null) {
	document.querySelector('#btnOK').addEventListener('click',acept);
}

if (document.querySelector('#btnCancelar') != null) {
	document.querySelector('#btnCancelar').addEventListener('click',cancel);
}

var showModal = function(id, functioToExce) {
    modal.style.display = "block";
    funToExe = functioToExce;
    elementId = id;
}

span.onclick = function() {
    modal.style.display = "none";
    isCacelled = true;
    funToExe();
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        isCacelled = true;
        funToExe();
    }
}

function acept (){
    isCacelled = false;
    funToExe(elementId);
    modal.style.display='none';
}
function cancel(){
    modal.style.display = "none";
    isCacelled = true;
    funToExe();
}

var showConfirm = function(id, functioToExce, students) {
    var element = document.querySelector("#ko");
  while (element.firstChild) {
    element.removeChild(element.firstChild);
    }
    $("#ko").append("<p> ¿Seguro que desea guardar los cambios? Los siguientes estudiantes serán descalificados: </p>");
    for (var i = 0; i < students.length; i++) {
        $("#ko").append("<p>"+students[i]+"</p>");
    };
    modal.style.display = "block";
    funToExe = functioToExce;
    elementId = id;
}