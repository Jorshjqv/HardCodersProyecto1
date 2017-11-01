//Autor Jose Solano
var doc = document;


doc.querySelector("#SaveInscription").addEventListener('click', SaveInscription);



function loadCategoriesOnEvent(){
    jQuery('.tabs #tab3' ).show().siblings().hide();
 
     // Change/remove current tab to active
    jQuery('#t3').parent('li').addClass('active').siblings().removeClass('active');

 	var currentEvent = getEvent(); 
 	doc.querySelector("#SaveInscription").setAttribute('data-event',currentEvent[0].result);
	var getAllCategoriesOnEvent = getCategoriesOnEvent(currentEvent[0].result); 
	var categoryContainer = doc.querySelector("#containerCategory");
	clean(categoryContainer);

	for (var i = 0; i < getAllCategoriesOnEvent.length; i++) {
		var divContainer =  doc.createElement('div');
		divContainer.setAttribute('id', 'cateOnEvent'+i);
		var header = doc.createElement('div');
		header.classList.add('form-header');
		var h3Txt = doc.createElement('h3');
		h3Txt.innerHTML = getAllCategoriesOnEvent[i].gender + ' ' + getAllCategoriesOnEvent[i].name_category_weight + ' ' + getAllCategoriesOnEvent[i].name_category + '  Cinta: ' + getAllCategoriesOnEvent[i].name_category_level;
		header.appendChild(h3Txt);
		divContainer.appendChild(header);
		categoryContainer.appendChild(divContainer);

		var selectContainer =  doc.createElement('div');
		selectContainer.classList.add('container');

		var selectDiv =  doc.createElement('div');
		selectDiv.classList.add('select-left');
		
		var ptag = doc.createElement('p');
		ptag.innerHTML = "Estudiantes";

		var select =  doc.createElement('select');
		select.setAttribute('name', 'from[]');		
		select.classList.add('js-multiselect_'+i);		
		select.setAttribute('size', 8);
		select.setAttribute('multiple', 'multiple');
		var getAllCademiesOnEvent = getAcdemiesOnEvent(currentEvent[0].result);

		for (var c = 0; c < getAllCademiesOnEvent.length; c++) {
			var getStudents = getStudentsByCategories(getAllCategoriesOnEvent[i].id_category_level, getAllCategoriesOnEvent[i].id_category_weight, getAllCategoriesOnEvent[i].id_category_age, getAllCategoriesOnEvent[i].gender, getAllCademiesOnEvent[c].Academy_id_academy);
			for (var j = 0; j < getStudents.length; j++) {
				var opt = doc.createElement('option');
				opt.innerHTML = getStudents[j].user_first_name + ' ' + getStudents[j].user_second_name + ' ' + getStudents[j].user_lastname1 + ' ' + getStudents[j].user_lastname2;
				opt.value = getStudents[j].idAthlete;
				select.appendChild(opt);
			};
		};
	

		selectDiv.appendChild(ptag);
		selectDiv.appendChild(select);
		selectContainer.appendChild(selectDiv);



		var selectCenter =  doc.createElement('div');
		selectCenter.classList.add('select-center');

		var btnAdd =  doc.createElement('button');
		btnAdd.setAttribute('type', 'button');
		btnAdd.setAttribute('id', 'js_right_Selected_'+i);
		btnAdd.classList.add('btn');
		btnAdd.classList.add('add');


		var btnRemove =  doc.createElement('button');
		btnRemove.setAttribute('type', 'button');
		btnRemove.setAttribute('id', 'js_left_Selected_'+i);
		btnRemove.classList.add('btn');
		btnRemove.classList.add('remove');


		selectCenter.appendChild(btnAdd);
		selectCenter.appendChild(btnRemove);
		selectContainer.appendChild(selectCenter);

		var selectRight =  doc.createElement('div');
		selectRight.classList.add('select-right');

		var ptag = doc.createElement('p');
		ptag.innerHTML = "Estudiantes agregados";

		var selectTo =  doc.createElement('select');
		selectTo.setAttribute('name', 'to[]');
		selectTo.setAttribute('id', 'js_multiselect_to_' + i);
		selectTo.setAttribute('size', 8);
		selectTo.setAttribute('multiple', 'multiple');
		selectTo.classList.add('getValues');

		selectRight.appendChild(ptag);
		selectRight.appendChild(selectTo);
		selectContainer.appendChild(selectRight);

		categoryContainer.appendChild(selectContainer);

 	    $('.js-multiselect_'+i).multiselect({
 	   	right: '#js_multiselect_to_'+i,
        rightSelected: '#js_right_Selected_'+i,
        leftSelected: '#js_left_Selected_'+i
 	    });
	};
}



function SaveInscription(){

	var getAllTheSelects =  $(".getValues");
	var allCategories =  [];

	for (var i = 0; i < getAllTheSelects.length; i++) {
		var category = [];
		$("#"+getAllTheSelects[i].getAttribute('id') +  " option").each(
			function(){
				category.push($(this).val());
			});
		allCategories.push(category);		
	};
	
	var validation = ValidateInscription(allCategories);
	
	if(!validation){ return	}
	var eventId = this.getAttribute('data-event');
 	CleanAthe(eventId);

	var eventType = getEventTypeByEventId(eventId);
	var isParticipation = eventType[0].EventType_id_event_type == 1 || eventType[0].EventType_id_event_type ==  2 ? eventType[0].EventType_id_event_type : 0;
	for (var i = 0; i < allCategories.length; i++) {
		for (var j = 0; j < allCategories[i].length; j++) {
			SaveAtheleOnEvent(eventId, allCategories[i][j]);
			if(isParticipation != 0){
				updateUserParticipation(isParticipation, allCategories[i][j]);
			}
		};
	};
	loadStudentsOnEvent();
	toWeightCeremony();
	printSuccessError("Los estudiantes fueron inscritos correctamente");
	onEventsAlert();
	var mails = GetMailParticipants(eventId);
 	var allInfo = getInfoRegistred(eventId);

	for (var i = 0; i < mails.length; i++) {
		sendInvitation(allInfo[0].begin_hour, mails[i].user_mail, mails[i].user_first_name, allInfo[0].name , allInfo[0].begin_day);
	};
	setTimeout(hideAlert, 4000);
	document.querySelector("#t3").style.pointerEvents = "none";
	document.querySelector("#t4").style.pointerEvents = "";
}

function ValidateInscription(allCategories){
	var status = true;
	for (var i = 0; i < allCategories.length; i++) {
		if(allCategories[i].length > 5){
			printMessageError("¡Error!, No puede ingresar más de 5 estudiantes dentro de una misma categoría");
			onEventsAlert();
			setTimeout(hideAlert, 5000);
			showError(doc.querySelector("#js_multiselect_to_"+i));
		return false;
		}else{
			removeError(doc.querySelector("#js_multiselect_to_"+i));
		}
	};

	return status;
}

function toWeightCeremony(){
	jQuery('.tabs #tab4' ).show().siblings().hide();
 
        // Change/remove current tab to active
    jQuery('#t4').parent('li').addClass('active').siblings().removeClass('active');	
}

