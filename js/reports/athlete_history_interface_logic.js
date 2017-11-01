


document.getElementById('backBtn').addEventListener('click',goBackPage);


var pid = getUrlVars()["id"];
var usertype = getUserName();



if (pid == null) {

var  userId = getAthleteIdByUserName(usertype[0]);


showReportByAthleteId(userId);


 

}else {
  showReportByAthleteId(pid);
  }


function createCanvas(){
  var chartContainer = document.createElement('canvas');
  chartContainer.setAttribute("id","chartContainer");
  chartContainer.setAttribute("width","1130");
  chartContainer.setAttribute("height","350");
  chartContainer.getContext('2d');
  return chartContainer;
}




function drawTournamentCharts(athleteId){
  var dates = generateChartDataset(athleteId)[0];
  var points = generateChartDataset(athleteId)[1];
  var chartContainer = document.getElementById('chartContainer')
  var newChart = new Chart(chartContainer, {
    type: 'line',
    data: {
        labels: dates,
        datasets: [{
            label: 'cantidad de puntos',
            data: points,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
                'rgba(255,99,132,1)',
            ],
            borderWidth: 1
        }]
    },
    scales: {
            yAxes: [{
                ticks: {
                    stepSize: 5,
                    beginAtZero: true,
                    max: 16
                }
            }]
        },
        options: {
                 responsive: false,
                   width:500,
                        height:300,
                        scaleShowGridLines: false,
                        showScale: false,
                        maintainAspectRatio:  false,
                        barShowStroke: false,

               
            }
  });
}




function averagePoints(athleteId) {
  var avg = get_average_points_per_Athlete(athleteId);
  var text = ''
  if (isNaN(avg)){
    text = document.createTextNode("No disponible");
  }
  else {  text = document.createTextNode(avg); }
  return text;
}

function writeGeneralStatitics(athleteId){

  var statsContainer = document.createElement('div');
  statsContainer.setAttribute("id","generalStats");

  var wonTournamets =  document.createTextNode(getInfoAthlete(athleteId).won_tornaments);
  var allTournaments = document.createTextNode(getInfoAthlete(athleteId).tornaments_participated);
  var allExhibitions = document.createTextNode(getInfoAthlete(athleteId).exibitions_participated);
  var avg = averagePoints(athleteId);

  var title1 = document.createTextNode("Promedio de puntos: ");
  var title2 = document.createTextNode("Torneos ganados: ");
  var title3 = document.createTextNode("Torneos inscritos: ");
  var title4 = document.createTextNode("Exhibiciones inscritas: ");

  var tbody = document.createElement('table');
  var row = tbody.insertRow();

  var cell1 = row.insertCell();
  cell1.appendChild(title1);
  cell1.appendChild(avg);

  var cell2 = row.insertCell();
  cell2.appendChild(title2);
  cell2.appendChild(wonTournamets);

  var cell3 = row.insertCell();
  cell3.appendChild(title3);
  cell3.appendChild(allTournaments);

  var cell4 = row.insertCell();
  cell4.appendChild(title4);
  cell4.appendChild(allExhibitions);

  statsContainer.appendChild(tbody);

  return statsContainer;
}

function writeAllEvents(athleteId){
  var eventsContainer = document.createElement('div');
  eventsContainer.setAttribute("id","eventList");
  var tbody = document.createElement('table');
  var listToShow = getAllEventsByAthleteId(athleteId);
  var title = document.createElement('thead');
  var td1=document.createElement('th'),
      td2=document.createElement('th'),
      td3=document.createElement('th'),
      td4=document.createElement('th'),
      td5=document.createElement('th');

  var tTournamentName,
      tplaceName,
      tbeginDay,
      tendDay,
      tKind;
  tTournamentName=document.createTextNode("Nombre del torneo");
  tplaceName = document.createTextNode("Nombre del lugar");
  tbeginDay =  document.createTextNode("Fecha de inicio");
  tendDay = document.createTextNode("Fecha de finalización");
  tKind = document.createTextNode("Tipo de torneo");
  td1.appendChild(tTournamentName);
  td2.appendChild(tplaceName);
  td3.appendChild(tbeginDay);
  td4.appendChild(tendDay);
  td5.appendChild(tKind);
  title.appendChild(td1);
  title.appendChild(td2);
  title.appendChild(td3);
  title.appendChild(td4);
  title.appendChild(td5);



  tbody.appendChild(title);
  for(var i = 0; i < listToShow.length;i++){


    var row = tbody.insertRow();
    var columnEventName = row.insertCell(),
         columnPlaceName = row.insertCell(),
        columSartDate =row.insertCell(),
        columEndDate =row.insertCell(),
        columKindEvent =row.insertCell();


      columnEventName.innerHTML=listToShow[i].name;
       columnPlaceName.innerHTML=listToShow[i].nombreLugar;
      columSartDate.innerHTML =listToShow[i].begin_day;
      columEndDate.innerHTML = listToShow[i].end_day;
      columKindEvent.innerHTML = listToShow[i].tipoEvento;


  }
  eventsContainer.appendChild(tbody);
  return eventsContainer;
}



function showReportByAthleteId(athleteId){
  
  var listInfo= getAllInfoAthleteAllEvents(athleteId);
console.log(listInfo);

if (listInfo.length == 0) {
  console.log("Este atleta no tiene particiapaciones en eventos aun");
  document.getElementById('titulo_Principal').innerHTML="Este atleta no tiene particiapaciones en eventos.";


}else {
   document.getElementById('titulo_Principal').innerHTML="Historial del estudiante";


  var container = document.querySelector('#generalContainer');
  container.innerHTML = '';
  container.appendChild(createCanvas());
  var statsContainer = writeGeneralStatitics(athleteId);
  var eventsContainer = writeAllEvents(athleteId);
  container.appendChild(statsContainer);
  h3 = document.createElement('h3');
  dividerTitle = document.createTextNode("Eventos en los que se ha inscrito");
  h3.appendChild(dividerTitle);
  container.appendChild(h3);
  container.appendChild(eventsContainer);
  drawTournamentCharts(athleteId);

  
}
  
}




function goBackPage(){


window.history.back();


}


function getUrlVars() {
     var vars = {};
     var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
          vars[key] = value;
     });

     return vars;
}

