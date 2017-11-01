var paramId = Number(getURLParameters().get('id'));
fillReportInterface(getAllCategoriesOnEventByEventId(paramId));

function renderCategoriesTableHeader(categoryArray){
  var thead = document.createElement('thead');
  var header = document.createElement('tr');

  var th1 = document.createElement('th');
  th1.innerHTML = "Nombre";

  var th2 = document.createElement('th');
  th2.innerHTML = "Posición";

  var th3 = document.createElement('th');
  th3.innerHTML = "Puntos";
  header.appendChild(th1);
  header.appendChild(th2);
  header.appendChild(th3);
  thead.appendChild(header);
  return thead;
}

function renderCategoriesTableTitleCaption(categoryArray){
  var titleCaption = document.createElement('caption');
  titleCaption.classList.add("title_category");
  titleCaption.innerHTML = categoryArray.gender + " "
                          + categoryArray.name_category + " "
                          + categoryArray.name_category_level + " "
                          + categoryArray.name_category_weight;

  return titleCaption;
}

function renderAthletesOnCategoryTableBody(age,level,weight,gender){
  var atheletsList = getAthleteOnCategoryAndEvent(paramId,age,level,weight,gender)
  var tbody = document.createElement('tbody');
  for (var i = 0; i < atheletsList.length; i++){
    var athleteRecord = document.createElement('tr');
    var td1 = document.createElement('td');
    td1.innerHTML = atheletsList[i].user_first_name + " " + atheletsList[i].user_lastname1;
    var td2 = document.createElement('td');
    td2.innerHTML = atheletsList[i].points_on_event;
    var td3 = document.createElement('td');
    td3.innerHTML = atheletsList[i].position_on_event;
    athleteRecord.appendChild(td1);
    athleteRecord.appendChild(td2);
    athleteRecord.appendChild(td3);
    tbody.appendChild(athleteRecord)
  }
  return tbody
}

function fillReportInterface(categoriesList){

  for (var i = 0; i < categoriesList.length; i++){

    var table = document.createElement("table");
    var containerdiv = document.createElement("div");
    table.appendChild(renderCategoriesTableTitleCaption(categoriesList[i]));

    table.appendChild(renderCategoriesTableHeader(categoriesList[i]));

    table.appendChild(renderAthletesOnCategoryTableBody(
      categoriesList[i].id_category_age,
      categoriesList[i].id_category_level,
      categoriesList[i].id_category_weight,
      categoriesList[i].gender
    ));
    table.classList.add("eventReport")
    containerdiv.appendChild(table);
    if (i%2==0){
      containerdiv.classList.add("rigt_report");
    }
    else {
      containerdiv.classList.add("left_report");
    }
    var genContainer = document.getElementById('generalCategoriesContainer');
    genContainer.appendChild(containerdiv);
  }
}
