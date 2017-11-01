listAllEvents();

function listAllEvents(){
  var events = getAllEvents();
  var tbody = document.querySelector('#eventsList tbody');
  for(var i = 0; i < events.length; i++){
    var row = tbody.insertRow();
    var cellName = row.insertCell();
    var cellDate = row.insertCell();
    var cellPlace = row.insertCell();
    var cellType = row.insertCell();
    var cellBtn = row.insertCell();
    var btnReport = createGenericBtn("Ver reporte");

    btnReport.id = events[i].id_event;
    btnReport.addEventListener('click', sendToReportScreen);

    cellName.innerHTML = events[i].name;
    cellDate.innerHTML = events[i].begin_day;
    cellPlace.innerHTML = events[i].name_place;
    cellType.innerHTML = events[i].name_eventtype;
    cellBtn.appendChild(btnReport);
  }
}

function sendToReportScreen(){
  var id = this.id;
  window.location.href = '../../views/reports/statistics_report.php?id='+ id;
}
