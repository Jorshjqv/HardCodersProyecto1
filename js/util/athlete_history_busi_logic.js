function getAthletebyId(id){
  usersList= JSON.parse(localStorage.getItem('arrUser'));
  var returnUser = [];
  for (var i = 0; i < usersList.length; i++) {
    if(usersList[i][10] == true) { //is active
      if (usersList[i][6] == 4){ //is athlete
        if (usersList[i][0] == id){ //matches the parameter id
          returnUser = usersList[i];
        }
      }
    }
  }
  return returnUser;
}

function generateEventNamesList(events){
  var names = [];
  for (var i = 0; i < events.length; i++){
      names.push(events[i][1]);
  }
  return names;
}

function getEventById(id){
  var eventsList = JSON.parse(localStorage.getItem('arrEvent'));
  var returnEvent = '';
  for (var i = 0; i < eventsList.length; i++){
    if (eventsList[i][0]==id){
      returnEvent = eventsList[i];
    }
  }
  return returnEvent;
}

function getWonTournamentsByAthleteId(id){
  var participationList = getAllParticipationListByAthleteId(id);
  var returnList = [];
  for (var i = 0; i < participationList.length; i++){
    if (getEventById(participationList[i][1])[8]=="Torneo"){
      if (participationList[i][8]==4){
        returnList.push(getEventById(participationList[i][1]));
      }
    }
  }
  return returnList;
}

function getAllTournamentsByAthleteId(id){
  var participationList = getAllParticipationListByAthleteId(id);
  var returnList = [];
  for (var i = 0; i < participationList.length; i++){
    if (getEventById(participationList[i][1])[8]=="Torneo"){
      returnList.push(getEventById(participationList[i][1]));
    }
  }
  return returnList;
}

function getAllExhibitionsByAthleteId(id){
  var participationList = getAllParticipationListByAthleteId(id);
  var returnList = [];
  for (var i = 0; i < participationList.length; i++){
    if (getEventById(participationList[i][1])[8]=="Exhibición"){
      returnList.push(getEventById(participationList[i][1]));
    }
  }
  return returnList;
}

function getAllParticipationListByAthleteId(id){
  var eventsList = JSON.parse(localStorage.getItem('arrParticipationOnEvent'));
  var returnAthleteonEvents = [];
  for (var i = 0; i < eventsList.length; i++){
    if (eventsList[i][2]==id){
      returnAthleteonEvents.push(eventsList[i]);
    }
  }
  return returnAthleteonEvents;
}

function getAllEventsByAthleteId(id){
  var participationList = getAllParticipationListByAthleteId(id);
  var returnList = [];
  for (var i = 0; i < participationList.length; i++){
      returnList.push(getEventById(participationList[i][1]));
  }
  return returnList;
}

function calcAveragePointsByAthleteId(id){
   var participationList = getAllParticipationListByAthleteId(id);
   var pointsCounter = 0;
   var tournamentCounter = 0;
   for (var i = 0; i < participationList.length; i++){
     if (getEventById(participationList[i][1])[8]=="Torneo"){
       pointsCounter = pointsCounter + participationList[i][8];
       tournamentCounter++;
     }
   }
   var avg = pointsCounter / tournamentCounter;
   return avg;
}

function generateChartDataset(athleteId) {
  var eventsList = getAllTournamentsByAthleteId(athleteId);
  var participationList = getAllParticipationListByAthleteId(athleteId)
  var pointsArray = [];
  var datesArray = [];
  for (var i = 0; i < eventsList.length; i++) {
    if(eventsList[i][0]==participationList[i][1]){
      pointsArray.push(Number(participationList[i][8]));
      datesArray.push(eventsList[i][2]);
    }
  }
  var returnArray = [datesArray,pointsArray];
  return returnArray;
}

function getAthletesByAcademy(academyId){
  var athletesList = getAllAthletes();
  var returnAthletes = [];
  for (var i = 0; i < usersList.length; i++) {
    if(usersList[i][10] == true) { //is active
      if (usersList[i][6] == 4){ //is athlete
        if (usersList[i][9] == academyId){ //matches the parameter id
          returnAthletes.push(usersList[i]);
        }
      }
    }
  }
  return returnAthletes;
}

function getAllAthletes(){
  usersList= JSON.parse(localStorage.getItem('arrUser'));
  var returnAthletes = [];
  for (var i = 0; i < usersList.length; i++) {
    if(usersList[i][10] == true) { //is active
      if (usersList[i][6] == 4){ //is athlete
        returnAthletes.push(usersList[i]);
      }
    }
  }
  return returnAthletes;
}
