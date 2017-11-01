//Autor Jose Solano

loadtable();

function loadtable () {
  var eventsList = getAllEvents();
  var tbody = document.querySelector('#events tbody');
  var eventsListToShow = [];

for (var i = 0; i < eventsList.length; i++) {
    if(eventsList[i][10] === true ){
        eventsListToShow.push(eventsList[i]);
    }
    };

  tbody.innerHTML = '';
  for(var i = 0; i < eventsListToShow.length; i++){

    var newRow = tbody.insertRow(i);
    var eventName = newRow.insertCell();
    var dateBe = newRow.insertCell();
    var place = newRow.insertCell();
    var type = newRow.insertCell();
    var btns = newRow.insertCell();

    var btnDelete = document.createElement('input');
    btnDelete.type = 'button';
    btnDelete.value = 'Evento a competir';
    btnDelete.name = eventsListToShow[i][0];
    btnDelete.disabled = true;
    btnDelete.classList.add('btnList');
    btnDelete.classList.add('btnImportant');

    var getplace = getEventPlace(eventsList[i][5]);

    eventName.innerHTML = eventsListToShow[i][1];
    dateBe.innerHTML = eventsListToShow[i][2];
    place.innerHTML = getplace;
    type.innerHTML = eventsListToShow[i][8];
    btns.appendChild(btnDelete);
    
  }
}