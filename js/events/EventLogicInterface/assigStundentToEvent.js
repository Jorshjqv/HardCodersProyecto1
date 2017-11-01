
var elementeclicked = getUrlVars()["id"];
var btnClose = document.querySelector("#closeIns");

btnClose.addEventListener('click', closeInscription);
btnClose.setAttribute('name', elementeclicked);
loadtable();


function loadtable () {
  var id = elementeclicked;
  var academiesOnEvent = getAllAcademiesOnEvents(id);
  var studentsForEvent =[];

  for (var i = 0; i < academiesOnEvent.length; i++) {
        var studentsForEvent = getAllStudentsForAcdemy(academiesOnEvent[i])  
  };
  var tbody = document.querySelector('#events tbody');
  var studentsForEventToShow = [];

  var getCategoriesOnEvent = getCategoryByEventID(id);

for (var i = 0; i < studentsForEvent.length; i++) {
    if(studentsForEvent[i][10] === true ){
        for (var j = 0; j < getCategoriesOnEvent.length; j++) {
           if(getCategoriesOnEvent[j][1] == studentsForEvent[i][17] && getCategoriesOnEvent[j][2] == studentsForEvent[i][16]){
            studentsForEventToShow.push(studentsForEvent[i]);
           }
        };
    }
    };

  tbody.innerHTML = '';

  for(var i = 0; i < studentsForEventToShow.length; i++){

    var newRow = tbody.insertRow(i);
    var eventName = newRow.insertCell();
    var dateBe = newRow.insertCell();
    var place = newRow.insertCell();
    var type = newRow.insertCell();
    var btns = newRow.insertCell();
    if(!studentsForEventToShow[i][20]){

    var btnDelete = document.createElement('input');
    btnDelete.type = 'button';
    btnDelete.value = 'Agregar a evento';
    btnDelete.name = studentsForEventToShow[i][0];
    btnDelete.classList.add('btnList');
    btnDelete.classList.add('btnImportant');
    btnDelete.addEventListener('click', studentsForEventAction);
    btns.appendChild(btnDelete);
    }
    else if(studentsForEventToShow[i][20]){
    var btnDelete = document.createElement('input');
    btnDelete.type = 'button';
    btnDelete.value = 'Eliminar de evento';
    btnDelete.name = studentsForEventToShow[i][0];
    btnDelete.classList.add('btnList');
    btnDelete.classList.add('btnImportant');
    btnDelete.addEventListener('click', delstudentsForEvent);
    btns.appendChild(btnDelete);
    
    }

    eventName.innerHTML = studentsForEventToShow[i][1];
    dateBe.innerHTML = getCategoryName(studentsForEventToShow[i][17] , 'arrCategoryAge');
    place.innerHTML = getCategoryName(studentsForEventToShow[i][16] , 'arrCategoryWeight');
    type.innerHTML = getCategoryName(studentsForEventToShow[i][9] , 'arrAcademy');
   
  }
}
function getUrlVars() {
     var vars = {};
     var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
          vars[key] = value;
     });
     return vars;
}
function studentsForEventAction() {
    addStudentToEvent(elementeclicked, this.name);
}
function delstudentsForEvent() {
    delStudentToEvent(elementeclicked, this.name);
}