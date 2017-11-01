/*Autor Jose Solano*/
var eventSelected = getUrlVars();
loadAssignment(eventSelected);


document.querySelector("#addAca").addEventListener('click', addAcade);
document.querySelector("#addCate").addEventListener('click', addCate);
document.querySelector("#addOrg").addEventListener('click', addAOrg);
document.querySelector("#addSpo").addEventListener('click', addSpo);
document.querySelector("#sponsor").addEventListener('change', loadProducts);
var btnAssing = document.querySelector("#assingEvent");
btnAssing.addEventListener('click', saveAssing);
btnAssing.setAttribute('name', eventSelected.id);


function getUrlVars() {
     var vars = {};
     var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
          vars[key] = value;
     });
     return vars;
}


function loadAssignment (idEvent) {
	var allEvents = getAllEvents();
	var eventPassed;
	for (var i = 0; i < allEvents.length; i++) {
		if (allEvents[i][0] ==  idEvent.id) {
			eventPassed = allEvents[i];
		};
	};
	if(eventPassed[8] == "Exhibición"){
		document.querySelector("#add").addEventListener('click', adddInput);
		var divEx = document.querySelector("#exhibicion"); 
		divEx.classList.add("showInvite");
	}
	fillForm(eventPassed);

}

function adddInput(){
	var newInput = document.createElement('input');
	var container = document.querySelector('#newInput');
	newInput.type = 'text';
	newInput.placeholder="Correo";
	newInput.classList.add("invitado");
	container.appendChild(newInput);
}

function fillForm (eventGotit) {
	var labelNameE = document.querySelector("#eventName");
	var labelplace = document.querySelector("#place");
 	labelNameE.value = eventGotit[1]; 
 	labelplace.value = getEventPlace(eventGotit[5]);

 	setAcademiSelect();
 	setCategory();
 	setOrganization();
 	setSponsor();

}

function setAcademiSelect(){
	var selecAcade = document.querySelector("#academies");
	var allAcademies = getAllAcademies();
	var optionType = document.createElement('option');
  	optionType.value = '';
  	optionType.text = 'Seleccione una academia';
  	selecAcade.appendChild(optionType);

  for(var i = 0; i < allAcademies.length; i++){
    var opcion = document.createElement('option');
    opcion.value = allAcademies[i][0];
    opcion.text = allAcademies[i][1];
    selecAcade.appendChild(opcion);
  }
}

function loadProducts(){
 var selecproducts = document.querySelector("#producto");
 while (selecproducts.firstChild) {
    selecproducts.removeChild(selecproducts.firstChild);
}
var optionType = document.createElement('option');
  	optionType.value = '';
  	optionType.text = 'Productos';
  	selecproducts.appendChild(optionType);

 var getProductos =getAllElementsOnEvent('arrProdu');
 for(var i = 0; i < getProductos.length; i++){
 	if(this.value == getProductos[i][1]){
    var opcion = document.createElement('option');
    opcion.value = getProductos[i][0];
    opcion.text = getProductos[i][2];
    selecproducts.appendChild(opcion);
	}
  }

}

function setCategory(){
	var selecAge = document.querySelector("#edad");
	var selecCate = document.querySelector("#peso");

	var allAge = getAllAgeCategories();
	var optionType = document.createElement('option');
  	optionType.value = '';
  	optionType.text = 'Edades';
  	selecAge.appendChild(optionType);

  for(var i = 0; i < allAge.length; i++){
    var opcion = document.createElement('option');
    opcion.value = allAge[i][0];
    opcion.text = allAge[i][1];
    selecAge.appendChild(opcion);
  }

  var weightCategories = getAllWeighCategories();
  var optionType = document.createElement('option');
  	optionType.value = '';
  	optionType.text = 'Pesos';
  	selecCate.appendChild(optionType);

  for(var i = 0; i < weightCategories.length; i++){
    var opcion = document.createElement('option');
    opcion.value = weightCategories[i][0];
    opcion.text = weightCategories[i][1];
    selecCate.appendChild(opcion);
  }

}
function setOrganization(){
	var selecOrg = document.querySelector("#org");
	var allOrg = getAllOrgs();
	var optionType = document.createElement('option');
  	optionType.value = '';
  	optionType.text = 'Organizaciones';
  	selecOrg.appendChild(optionType);

  for(var i = 0; i < allOrg.length; i++){
    var opcion = document.createElement('option');
    opcion.value = allOrg[i][0];
    opcion.text = allOrg[i][1];
    selecOrg.appendChild(opcion);
  }
}
function setSponsor(){
	var selecSpo = document.querySelector("#sponsor");
	var allOrg = getSponsors();
	var optionType = document.createElement('option');
  	optionType.value = '';
  	optionType.text = 'Patrocinadores';
  	selecSpo.appendChild(optionType);

  for(var i = 0; i < allOrg.length; i++){
    var opcion = document.createElement('option');
    opcion.value = allOrg[i][0];
    opcion.text = allOrg[i][1];
    selecSpo.appendChild(opcion);
  }
}

function addAcade () {
	var idaca=document.querySelector("#academies").value;
	if(validateBlanck(document.querySelector("#academies"))){ return };

	var divAcademy = document.querySelector("#selectedA");

	var academy = [eventSelected.id, idaca ];
	var academyToShow = getEventAcademy(idaca);
	academyOnEvent(academy);

	inserteText(divAcademy, academyToShow);
}

function inserteText(divAcademy, message){
	var divRow = document.createElement("div");
	var text = document.createTextNode(message);
	var btn = document.createElement("button");
	var pTag = document.createElement("P");

	divRow.classList.add("inRow"); 
	message = message.replace(/ +/g, "");
	divRow.setAttribute('id',message.trim());
	btn.setAttribute('name',message.trim());
	btn.innerHTML = 'Eliminar';
	btn.addEventListener('click', deleteElemenformEvent)

	pTag.appendChild(text); 
	divRow.appendChild(pTag);
	divRow.appendChild(btn);
	divAcademy.appendChild(divRow);
}

function addCate () {
	var divCate = document.querySelector("#selectedCate");
	var idAge = document.querySelector("#edad").value;
	var idWeight = document.querySelector("#peso").value;
	if(validateBlanck(document.querySelector("#edad"))){ return };
	if(validateBlanck(document.querySelector("#peso"))){ return };	
	var man = document.querySelector("#man");
	var woman = document.querySelector("#woman");
	if(!man.checked && !woman.checked){
		printMessageError();
		return;
	}
	var gen;
	if(woman.checked){
		gen = woman.value;
	}
	else{
		gen = man.value;
	}
	if(woman.checked && man.checked){
		var gen = man.value + " " +woman.value;
	}
	var cate = [eventSelected.id, idWeight, idAge, gen];
	var cateToshow = getEventAgeCategory(idAge);
	var cateWeToShow = getEventWieghtCategory(idWeight);
	cateOnEvent(cate);

	inserteText(divCate, gen + " " + cateToshow + " " + cateWeToShow);
}

function addAOrg () {
	var divOrg = document.querySelector("#selectedOrg");
	var idOrg = document.querySelector("#org").value;
	if(validateBlanck(document.querySelector("#org"))){ return };

	var org = [eventSelected.id, idOrg];
	var getorg =getOrgsOnEvent(idOrg);
	orgOnevent(org);
	inserteText(divOrg,getorg);
}

function addSpo () {
	var divSpo = document.querySelector("#selectedSpo");
	var idSponsor = document.querySelector("#sponsor").value;
	var idProduct = document.querySelector("#producto").value;
	var money = document.querySelector("#dinero").value;

	if(validateBlanck(document.querySelector("#sponsor"))){ return };
	if(validateBlanck(document.querySelector("#producto"))){ return };
	if(validateBlanck(document.querySelector("#dinero"))){ return };


	var text =getSponsorsOnEvent(idSponsor);
	var product= getProducName(idProduct);
	var sponsor = [eventSelected.id, idSponsor, money];
	var arrProdu =getAllElementsOnEvent('arrProduOnEvent')
	var eachProct = [eventSelected.id, idProduct, idSponsor];
	arrProdu.push(eachProct);
	saveOnLocalStorage('arrProduOnEvent', arrProdu);
	spoOnEvent(sponsor);
	inserteText(divSpo,text+" " +product);
}

function saveAssing () {
	var specifCategory = getAllElementsOnEvent('arrParticipationCategories'), spcifcAca = [], specifcOrg =[], specifcSpon =[];
	var isExhibicion = document.querySelector("#invite").checked;
	if(isExhibicion){
		var email = document.querySelector("#minOneMail");
		if(validateBlanck(email)){
			printMessageError();
			return;
		}
		var allMails = getAllElementsOnEvent('arrExhibicionUser');
		var mails = [eventCreated.id, email.value];
		allMails.push(mails);
		saveOnLocalStorage('arrExhibicionUser', allMails)
	}
	var allElementsAssinedCate = getAllElementsOnEvent('cateOnEvent');
	var allElementsAssinedAcadem = getAllElementsOnEvent('academyOnEve');
	var allElementsAssinedOrg = getAllElementsOnEvent('OrgOnEvent');
	var allElementsAssinedSpon = getAllElementsOnEvent('sponsorOnEvent');

	for (var i = 0; i < allElementsAssinedCate.length; i++) {
		if (allElementsAssinedCate[i][0] == this.name) {
			specifCategory.push(allElementsAssinedCate[i]);
		};
	};
		for (var i = 0; i < allElementsAssinedAcadem.length; i++) {
		if (allElementsAssinedAcadem[i][0] == this.name) {
			spcifcAca.push(allElementsAssinedAcadem[i]);
		};
	};
		for (var i = 0; i < allElementsAssinedOrg.length; i++) {
		if (allElementsAssinedOrg[i][0] == this.name) {
			specifcOrg.push(allElementsAssinedOrg[i]);
		};
	};
		for (var i = 0; i < allElementsAssinedSpon.length; i++) {
		if (allElementsAssinedSpon[i][0] == this.name) {
			specifcSpon.push(allElementsAssinedSpon[i]);
		};
	};

	if(specifCategory.length == 0 || spcifcAca.length == 0 ||
		specifcOrg.length == 0 || specifcSpon.length == 0){
			printMessageError();
		return
	}
		var allEvents = getAllEvents();
		for (var i = 0; i < allEvents.length; i++) {
			if(allEvents[i][0] == this.name){
				allEvents[i][11] = true;
			}
		};
		saveOnLocalStorage('arrEvent', allEvents);
		
		saveOnLocalStorage('arrParticipationCategories', specifCategory);
		var finalArr =[];

		var assigElemtstoEvent = getAllElementsOnEvent('arrAsingAcadeEvent');
		for (var i = 0; i < spcifcAca.length; i++) {
			var arrtoPush = [++assigElemtstoEvent.length, this.name, spcifcAca[i][1],true];
			assigElemtstoEvent.push(arrtoPush);
		};
		saveOnLocalStorage('arrAsingAcadeEvent', assigElemtstoEvent);

		var assigOrgaEvent = getAllElementsOnEvent('arrOrgOnEnvet');
		for (var i = 0; i < allElementsAssinedOrg.length; i++) {
			var arrtoPush = [++assigOrgaEvent.length, this.name, allElementsAssinedOrg[i][1],true];
			finalArr.push(arrtoPush);

		};
		saveOnLocalStorage('arrOrgOnEnvet', arrtoPush);
		Redirect();
}

function deleteElemenformEvent(){
	var idElement = "#"+ this.name;
	var divParrent = document.querySelector(idElement).parentElement;
	var deleteDiv =document.querySelector(idElement);
	divParrent.removeChild(deleteDiv);
	deleteFormLS(divParrent);
}

function validateBlanck(divToCheck)
{
	if(!validateText(divToCheck.value)){
		showError(divToCheck);
		return true;
	}
	return false;
}

function deleteFormLS(parentDiv){

}