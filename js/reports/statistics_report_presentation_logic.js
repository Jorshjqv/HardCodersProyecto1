document.querySelector('#btnResultsReport').addEventListener('click', sendToResultsReport);

fillStatisticsReport();

function fillStatisticsReport(){
  var currentEvent = getCurrentEvent();
  var reportTitle = document.querySelector('#title');
  var reportDate = document.querySelector('#eventDate');
  var txtParticipantsAmount = document.querySelector('#txtParticipantsAmount');
  var txtEventsPlace = document.querySelector('#txtEventsPlace');


  reportTitle.innerHTML = currentEvent['name'];
  reportDate.innerHTML = 'Del ' + currentEvent['begin_day'] + ' al ' + currentEvent['end_day'];
  txtParticipantsAmount.innerHTML = getParticipationOnEvent();
  txtEventsPlace.innerHTML = getEventPlace();
}

function sendToResultsReport(){
  var id = getUrlVars()['id'];
  window.location.href = '../../views/reports/event_report.html?id=' + id;
}
