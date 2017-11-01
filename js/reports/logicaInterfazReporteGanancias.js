document.querySelector('#btnResultsReport').addEventListener('click', sendToResultsReport);
document.querySelector('#btnStatisticsReport').addEventListener('click', sendToStatisticsReport);
fillExpensesReport();
function fillExpensesReport(){
  var currentEvent = getCurrentEvent();
  var reportTitle = document.querySelector('#title');
  var reportDate = document.querySelector('#eventDate');
  var txtSoldTickets = document.querySelector('#txtSoldTickets');
  var txtTicketEarnings = document.querySelector('#txtTicketEarnings');
  var txtTotalInscriptions = document.querySelector('#txtTotalInscriptions');
  var txtTotals = document.querySelector('#txtTotals');
  var sponsorsEvent = getSponsor(currentEvent.id_event);
  var sponsorsDiv = document.querySelector('#showSponsors');
  var sponsors = getSponsorsList();

  reportTitle.innerHTML = currentEvent.name;
  reportDate.innerHTML = 'Del ' + currentEvent.begin_day + ' al ' + currentEvent.end_day;
  txtSoldTickets.innerHTML = getSoldTickets();
  txtTicketEarnings.innerHTML = getTotalSoldTickets() + ' crc';
  txtTotalInscriptions.innerHTML = getTotalInscriptions() + ' crc';
  txtTotals.innerHTML = getTotalAmount() + ' crc';

  for(var i = 0; i < sponsors.length; i++){
    if(sponsorsEvent[i].Sponsor_id_sponsor == sponsors[i].id_sponsor){
      var ul = document.createElement('ul')
      var liName = document.createElement('li');
      var liProduct = document.createElement('li');
      liName.innerHTML = sponsors[i].name_commpany;
      liProduct.innerHTML = getSponsorTypeName(sponsorsEvent[i].SponsorType_id_sponsor_type);

      ul.appendChild(liName);
      ul.appendChild(liProduct);
      sponsorsDiv.appendChild(ul);
    }
  }
}

function sendToResultsReport(){
  var id = getUrlVars()['id'];
  window.location.href = '../../views/reports/event_report.html?id=' + id;
}

function sendToStatisticsReport(){
  var id = getUrlVars()['id'];
  window.location.href = '../../views/reports/statistics_report.html?id=' + id;
}
