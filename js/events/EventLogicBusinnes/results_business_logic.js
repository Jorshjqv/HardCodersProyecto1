function setResult(athleteId,eventid,points){
  var partList = getParticipationListByAthleteAndEvent(athleteId,eventid);
  for (var i = 0; i < partList.length; i++){
    if (partList[i][0]==partListid){
      partList[i][8] = Number(points);
      editParticipationList(partList[i][0],partList[i])
      return partList[i];
    }
  }
}

function getParticipationListByAthleteAndEvent(athleteId,eventid){
    var participationList = JSON.parse(localStorage.getItem('arrParticipationOnEvent'));
    var partListAthleteEvent = [];
    for (var i = 0; i < participationList.length; i++){
      if (athleteId==participationList[i][2] && eventid==participationList[i][1]){
        if (getEventById(participationList[i][1])[8]=="Torneo"){
          partListAthleteEvent.push(participationList[i])
        }
      }
    }
    return partListAthleteEvent;
}

function getCategoryNamebyCategoryId(categoryId,categoryType){
  categoriesList = [];
  if (categoryType==1){
    categoriesList = JSON.parse(localStorage.getItem('arrCategoryAge'));
  }
  else if (categoryType==2){
    categoriesList = JSON.parse(localStorage.getItem('arrCategoryWeight'));
  }
  else if (categoryType==3){
    categoriesList = JSON.parse(localStorage.getItem('arrCategoryLevel'));
  }
  for (var i = 0; i < categoriesList.length; i++){
    if (categoryId==categoriesList[i][0]){
      return categoriesList[i][1]
    }
  }
}

function getCategoriesFromEvent(eventId){
  var categoriesList = JSON.parse(localStorage.getItem('arrParticipationCategories'));
  var returnList = [];
  if (categoriesList == null) {
    return returnList;
  }
  for (var i = 0; i < categoriesList.length; i++){
    if (eventId==categoriesList[i][1]){
      if (getEventById(categoriesList[i][1])[8]=="Torneo"){
        returnList.push(categoriesList[i])
      }
    }
  }
  return returnList;
}

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

function editParticipationList(partListid,newData){
  var participationList = JSON.parse(localStorage.getItem('arrParticipationOnEvent'));
  for (var i = 0; i < participationList.length; i++){
    if (partListid==participationList[i][0]){ //id matches
      participationList[i] = newData;
    }
  }
  localStorage.setItem('arrParticipationOnEvent',JSON.stringify(participationList));
}
