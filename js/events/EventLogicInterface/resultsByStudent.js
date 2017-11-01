var doc = document;

doc.querySelector("#SaveResult").addEventListener('click', SaveResult);
var eventId;
function loadStudentsResults(){
    jQuery('.tabs #tab5' ).show().siblings().hide();
 
     // Change/remove current tab to active
    jQuery('#t5').parent('li').addClass('active').siblings().removeClass('active');

 	var currentEvent = getEvent(); 
 	eventId = currentEvent[0].result;
 	doc.querySelector("#SaveWeight").setAttribute('data-event',eventId);
	var getAllCategoriesOnEvent = getCategoriesOnEvent(eventId); 
	var categoryContainer = doc.querySelector("#containerResults");
	clean(categoryContainer);
	var battle = 0;


	for (var i = 0; i < getAllCategoriesOnEvent.length; i++) {

		var divContainer =  doc.createElement('div');
		divContainer.setAttribute('id', 'cateOnEventCere'+i);
		divContainer.classList.add('form-body');
		var header = doc.createElement('div');
		header.classList.add('form-header');
		var h3Txt = doc.createElement('h3');
		h3Txt.innerHTML = getAllCategoriesOnEvent[i].gender + ' ' + getAllCategoriesOnEvent[i].name_category_weight + ' ' + getAllCategoriesOnEvent[i].name_category + '  Cinta: ' + getAllCategoriesOnEvent[i].name_category_level;
		header.appendChild(h3Txt);
		divContainer.appendChild(header);
		categoryContainer.appendChild(divContainer);

		var selectContainer =  doc.createElement('div');
		selectContainer.classList.add('column-left');

		var selectContainerRigh =  doc.createElement('div');
		selectContainerRigh.classList.add('column-right');

		
		var allAtheletsOnEvent = getAllAthetlesOnevent(eventId);
		var participatns = [];

		for (var j = 0; j < allAtheletsOnEvent.length; j++) {
			if(allAtheletsOnEvent[j].CategoryLevel_id_category_level ==  getAllCategoriesOnEvent[i].id_category_level && allAtheletsOnEvent[j].CategoryWeight_id_category_weight == getAllCategoriesOnEvent[i].id_category_weight && allAtheletsOnEvent[j].CategoryAge_id_category_age == getAllCategoriesOnEvent[i].id_category_age && allAtheletsOnEvent[j].user_gender == getAllCategoriesOnEvent[i].gender){
			participatns.push(allAtheletsOnEvent[j]);
			}
		};
		for (var p = 0; p < participatns.length; p++) {
			var c = p + 1;
			for (c ; c < participatns.length; c++) {
			

						var selectDiv =  doc.createElement('div');

						selectDiv.classList.add('group');
						selectDiv.classList.add('flexi');


						var opt = doc.createElement('label');


						opt.innerHTML = participatns[p].user_first_name + ' ' + participatns[p].user_lastname1;
						selectDiv.appendChild(opt);

						var input = doc.createElement('input');

						input.type = 'radio';
						input.setAttribute('data-athelte', participatns[p].Athlete_idAthlete);
						input.classList.add('points');
						input.name = "battle-"+ battle;
						selectDiv.appendChild(input);

						var opt1 = doc.createElement('label');

						opt1.innerHTML = participatns[c].user_first_name + ' ' + participatns[c].user_lastname1;
						selectDiv.appendChild(opt1);

						var input1 = doc.createElement('input');

						input1.type = 'radio';
						input1.setAttribute('data-athelte', participatns[c].Athlete_idAthlete);
						input1.classList.add('points');
						input1.name = "battle-"+ battle;
						selectDiv.appendChild(input1);

						if(participatns[p].quit_of_event != 0){
							opt.classList.add('quit');
							input.setAttribute('quit', true);
							input.disabled = true;
							input1.checked = true;
							input1.disabled = true;

						}else if(participatns[c].quit_of_event != 0){
							opt1.classList.add('quit');
							input1.setAttribute('quit', true);
							input1.disabled = true;
							input.checked = true;
							input.disabled = true;
						}

						if(participatns[c].quit_of_event != 0 && participatns[p].quit_of_event != 0){
							opt1.classList.add('quit');
							opt.classList.add('quit');
							input.setAttribute('quit', true);
							input1.setAttribute('quit', true);
							input.disabled = true;
							input1.checked = false;
							input.checked = false;
							input1.disabled = true;
						}
						if(battle % 2 ==0){
							selectContainerRigh.appendChild(selectDiv);
						}
						else{
							selectContainer.appendChild(selectDiv);
						}	
						battle++;					
			};
		};
		if(participatns.length === 0){
			var centerdiv = doc.createElement("div");
			centerdiv.classList.add('center');
			var ptag = doc.createElement("p");
			ptag.innerHTML = "No hay estudiantes inscritos en esta categoría en esta categoría";
			centerdiv.appendChild(ptag);
			divContainer.appendChild(centerdiv);
		}else if(participatns.length === 1){
			var centerdiv = doc.createElement("div");
			centerdiv.classList.add('center');
			var ptag = doc.createElement("p");
			ptag.innerHTML = "Solo hay un estudiante inscrito en esta categoría";
			centerdiv.appendChild(ptag);
			if(participatns[0].quit_of_event != 1){
			var ptag2 = doc.createElement("p");
			ptag2.innerHTML = "El gandor es: " + participatns[0].user_first_name+ " " +participatns[0].user_lastname1;
			centerdiv.appendChild(ptag2);
			divContainer.appendChild(centerdiv);
			saveResultsOnEvent(eventId, participatns[0].Athlete_idAthlete, 1, 1);
		}else {
			var ptag2 = doc.createElement("p");
			ptag2.innerHTML = "El único estudiante  " + participatns[0].user_first_name+ " " +participatns[0].user_lastname1 + " fue descalificado";
			centerdiv.appendChild(ptag2);
			divContainer.appendChild(centerdiv);
		}		
		}

		divContainer.appendChild(selectContainer);
		divContainer.appendChild(selectContainerRigh);		
		categoryContainer.appendChild(divContainer);

	};
}
function SaveResult(){
	var validateResults = validationOnResults();
	if(!validateResults){ return};

	var elementsToSave = $(":radio:checked");
	var results = [];
	for (var i = 0; i < elementsToSave.length; i++) {
		results.push(elementsToSave[i].getAttribute("data-athelte"));
	};

	var nummberOfElements = [];
	var allelements = [];
	while ( 0 < results.length ) {
		var poits = countInArray(results, results[0]);
		nummberOfElements.push(results[0], poits);
		allelements.push(nummberOfElements);
		results = results.remove(results[0]);
		nummberOfElements = [];
	};

	var temp, j;
	for (var i = 0; i < allelements.length; i++) {
		for (j = i + 1; j < allelements.length; j++) {
			if(allelements[i][1] < allelements[j][1]){
				temp = allelements[i];
				allelements[i] = allelements[j];
				allelements[j]= temp;
			}
		};
	}

	for (var i = 0; i < allelements.length; i++) {
		var position = i+1;
		allelements[i].push(position);
	};
	
	CleanResults(eventId);
	for (var i = 0; i < allelements.length; i++) {
		saveResultsOnEvent(eventId, allelements[i][0], allelements[i][1], allelements[i][2]);
	};
	updateFinishEvent(eventId);

	RedirectListEvents();
}
function countInArray(array, what) {
    return array.filter(item => item == what).length;
}

function validationOnResults(){
	var allRadioInputs  =  [];
	var radio_groups = {}
		$(":radio").each(function(){
		    radio_groups[this.name] = true;
		});
	for(group in radio_groups){
    if_checked = !!$(":radio[name='"+group+"']:checked").length;
    if(!if_checked && typeof $(":radio[name='"+group+"']").attr("quit") == "undefined"){
    	allRadioInputs.push(group);
    	onEventsAlert();
    	showRadioInputsError(group);
		printMessageError("Error!, No todos los encuentros tienen resultados.");
		setTimeout(hideAlert, 3000);
    }
    else{
    	removeRadioInputsError(group);
    }
	}
	if (allRadioInputs.length !==0) {
		return false;		
	};
	

	return true;
}

