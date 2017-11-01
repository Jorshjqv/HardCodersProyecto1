//Autor Jose Solano

loadtable(0);

loadPage();

var btnAll = document.querySelector("#ListAllEvents");
btnAll.addEventListener("click", function(){ loadtable(0); });
var btnPast = document.querySelector("#ListPastEvents");
btnPast.addEventListener("click", function(){ loadtable(1); });
var btnPresent = document.querySelector("#ListCurrentEvents");
btnPresent.addEventListener("click", function(){ loadtable(2); });
var btnFuture = document.querySelector("#ListFutureEvents");
btnFuture.addEventListener("click", function(){ loadtable(3); });


function loadPage(){
    var userInfo = getUserName();
  if(userInfo[1] == 3){
    window.location.replace("eventsAssigned.php");
  }
    if(userInfo[1] == 4){
    window.location.replace("eventsAssignedToStudent.php");
  }

}


function loadtable(listToRun) {
  var eventsList = 0;
  var filterToExecute = listToRun;
  var tbody = document.querySelector('#events tbody');
  var eventsListToShow = [];

  switch (filterToExecute) {
    case 1:
      eventsList = getAllPastEvents();
      break;

    case 2:
      eventsList = getAllCurrentEvents();
      break;

    case 3:
      eventsList = getAllFutureEvents();
      break;
    case 0:

      eventsList = getAllEvents();
      break;
  }


  for (var i = 0; i < eventsList.length; i++) {
    if(eventsList[i].status == 1 ){
        eventsListToShow.push(eventsList[i]);
    }
  }

  tbody.innerHTML = '';
  for(var i = 0; i < eventsListToShow.length; i++){

    var newRow = tbody.insertRow(i);
    var eventName = newRow.insertCell();
    var dateBe = newRow.insertCell();
    var place = newRow.insertCell();
    var type = newRow.insertCell();
    var btns = newRow.insertCell();

    var btnEdit = document.createElement('input');
    btnEdit.type = 'button';
    btnEdit.value = 'Editar';
    btnEdit.name = eventsList[i].id_event;
    btnEdit.classList.add('btnList','btnImportant');
    btnEdit.addEventListener('click', editEvent);

    var btnDelete = document.createElement('input');
    btnDelete.type = 'button';
    btnDelete.value = 'Eliminar';
    btnDelete.name = eventsList[i].id_event;
    btnDelete.classList.add('btnList','btnImportant');
    btnDelete.addEventListener('click', deleteEvent);


    eventName.innerHTML = eventsList[i].name;
    dateBe.innerHTML = eventsList[i].begin_day;
    place.innerHTML = eventsList[i].name_place;
    type.innerHTML = eventsList[i].name_eventtype;
    btns.appendChild(btnEdit);
    btns.appendChild(btnDelete);

  }
}
