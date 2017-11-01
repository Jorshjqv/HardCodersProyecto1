var doc = document;

doc.querySelector("#SaveWeight").addEventListener('click', SaveWeighCeremony);

function loadStudentsOnEvent(){
    jQuery('.tabs #tab4' ).show().siblings().hide();
 
     // Change/remove current tab to active
    jQuery('#t4').parent('li').addClass('active').siblings().removeClass('active');

 	var currentEvent = getEvent(); 
 	doc.querySelector("#SaveWeight").setAttribute('data-event',currentEvent[0].result);
	var getAllCategoriesOnEvent = getCategoriesOnEvent(currentEvent[0].result); 
	var categoryContainer = doc.querySelector("#containerCeremony");
	clean(categoryContainer);

	for (var i = 0; i < getAllCategoriesOnEvent.length; i++) {

		var divContainer =  doc.createElement('div');
		divContainer.setAttribute('id', 'cateOnEventCere'+i);
		divContainer.classList.add('form-body');
		var header = doc.createElement('div');
		header.classList.add('form-header');
		header.classList.add('weight');		
		header.setAttribute('data-weight', getAllCategoriesOnEvent[i].id_category_weight);
		var h3Txt = doc.createElement('h3');
		h3Txt.innerHTML = getAllCategoriesOnEvent[i].gender + ' ' + getAllCategoriesOnEvent[i].name_category_weight + ' ' + getAllCategoriesOnEvent[i].name_category + '  Cinta: ' + getAllCategoriesOnEvent[i].name_category_level;
		header.appendChild(h3Txt);
		divContainer.appendChild(header);
		categoryContainer.appendChild(divContainer);

		var selectContainer =  doc.createElement('div');
		selectContainer.classList.add('column-left');

		var selectContainerRigh =  doc.createElement('div');
		selectContainerRigh.classList.add('column-right');

		
		var allAtheletsOnEvent = getAllAthetlesOnevent(currentEvent[0].result);
	
		var getAllCademiesOnEvent = getAcdemiesOnEvent(currentEvent[0].result);

		for (var c = 0; c < getAllCademiesOnEvent.length; c++) {
			var getStudents = getStudentsByCategories(getAllCategoriesOnEvent[i].id_category_level, getAllCategoriesOnEvent[i].id_category_weight, getAllCategoriesOnEvent[i].id_category_age, getAllCategoriesOnEvent[i].gender, getAllCademiesOnEvent[c].Academy_id_academy);
			for (var j = 0; j < allAtheletsOnEvent.length; j++) {
				for (var d = 0; d < getStudents.length; d++) {
					if(allAtheletsOnEvent[j].Athlete_idAthlete == getStudents[d].idAthlete){
					
						var selectDiv =  doc.createElement('div');

						selectDiv.classList.add('group');

						var opt = doc.createElement('label');

						opt.innerHTML = getStudents[d].user_first_name + ' ' + getStudents[d].user_lastname1 ;
						selectDiv.appendChild(opt);

						var input = doc.createElement('input');

						input.type = 'number';
						input.setAttribute('data-athelte', getStudents[d].idAthlete);
						input.classList.add('weight-'+ i);
						input.placeholder = 'Kg';
						selectDiv.appendChild(input);
						if(j % 2 ==0){
							selectContainerRigh.appendChild(selectDiv);
						}
						else{
							selectContainer.appendChild(selectDiv);
						}
					}
				};
			};
		};
		divContainer.appendChild(selectContainer);
		divContainer.appendChild(selectContainerRigh);		
		categoryContainer.appendChild(divContainer);

	
		//selectDiv.appendChild(ptag);

	};
}

var studentstoSave = [];

function SaveWeighCeremony(){
	var getCategories = $(".weight");
	var toKo= [];
	var idko = [];
	var studentsSave = [];

	for (var i = 0; i < getCategories.length; i++) {
		var students = [];
		var idWeight = getCategories[i].getAttribute("data-weight");
		var getWeightData = getWeightByID(idWeight);
		var allInputs = $(".weight-" + i);
		for (var c = 0; c < allInputs.length; c++) {
			var values = [];
			values.push(allInputs[c].getAttribute("data-athelte"), allInputs[c].value);
			students.push(values);
			studentsSave.push(values);			
		};
		for (var j = 0; j < students.length; j++) {
			var weightStu = Number(students[j][1]);
			var ko =  weightStu > Number(getWeightData[0].range_end) || weightStu < Number(getWeightData[0].range_begin) ? true : false;
			if(ko){
				toKo.push(allInputs[j].previousSibling.innerHTML);
				idko.push(students[j][0]);
			}
		};
	};
	studentstoSave = studentsSave;
	if (toKo.length > 0) {
		showConfirm(idko, desqualifyStudent, toKo);
	}else{

	for (var i = 0; i < studentstoSave.length; i++) {
		desqualifyStudentOnEvent(studentstoSave[i][0], 0);
	};
		saveWeightCeremonyOnEvent();
	}
}

function desqualifyStudent(students){
	if(typeof students != 'undefined'){
		for (var i = 0; i < students.length; i++) {
			desqualifyStudentOnEvent(students[i],1);
		};
		saveWeightCeremonyOnEvent();
	}
}

function saveWeightCeremonyOnEvent(){
	var currentEvent = getEvent(); 
	CleanWeight(currentEvent[0].result);
	for (var i = 0; i < studentstoSave.length; i++) {
		SaveWeight(studentstoSave[i][0],studentstoSave[i][1], currentEvent[0].result);
	};
	updateWeightEvent(currentEvent[0].result);
	toResults();
	printSuccessError("El pesaje fue registrado correctamente");
	onEventsAlert();
	loadStudentsResults();
	document.querySelector("#t4").style.pointerEvents = "none";
	document.querySelector("#t5").style.pointerEvents = "";
	setTimeout(hideAlert, 4000);
}
function toResults(){
	jQuery('.tabs #tab5' ).show().siblings().hide(); 
        // Change/remove current tab to active
    jQuery('#t5').parent('li').addClass('active').siblings().removeClass('active');	
}