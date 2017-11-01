//Autor Jose Solano
var doc = document;
loadUserType();
getAcademies();
loadLeveCategory();
fillAllInputs();
updateCategoryAge();
addEvents();

function loadUserType(){
	var userTypes = getuserTypeDB();
	var selectType = document.querySelector("#selectTypeUser");
	var dFaultoption = document.createElement('option');
	dFaultoption.innerHTML = "--Seleccione un tipo de usuario--"
	dFaultoption.value = '';
	selectType.appendChild(dFaultoption);
	for (var i = 0; i < userTypes.length; i++) {
		var option = document.createElement('option');
		option.value = userTypes[i].id_user_type;
    	option.innerHTML = userTypes[i].name_user_type;
    	selectType.appendChild(option);
	};

}

function addEvents(){
	var doc = document;
	doc.querySelector("#WeightUser").addEventListener('change', uptadeCategoryWeight);
	doc.querySelector("#dateBirthUser").addEventListener('change', updateCategoryAge);
	doc.querySelector("#selectAcademyUser").addEventListener('change', showTeacher);
	doc.querySelector("#UpdateLevel").addEventListener('click',upDateStudentLevel);
	lockinputs();
	var dFaultoption = doc.createElement('option');
	dFaultoption.innerHTML = "--Seleccione un profesor--"
	dFaultoption.value = '';
	doc.querySelector("#selectTeacherUser").appendChild(dFaultoption);
	doc.querySelector("#buttonModifyUser").addEventListener('click', updateUser);
}


function fillAllInputs(){
	var userId= getUrlVars();
	var userInfo = getUserToModify(userId.id);
	doc.querySelector("#buttonModifyUser").name =userId.id; 
	showForm(userInfo[0].UserType_id_user_type);
	doc.querySelector("#numIdentificationUser").value = userInfo[0].user_identification;
	doc.querySelector("#numIdentificationUser").disabled = true;
	
	doc.querySelector("#txtNameUser").value = userInfo[0].user_first_name +" " + userInfo[0].user_second_name;
	doc.querySelector("#txtSecondNameUser").value = userInfo[0].user_lastname1 +" " + userInfo[0].user_lastname2;
	var radioBtns =  $(".min-radio ");
	for (var i = 0; i < radioBtns.length; i++) {
		if(radioBtns[i].value == userInfo[0].user_gender){
			radioBtns[i].checked = true;
		}
	};
	
	doc.querySelector("#numTelUser").value = userInfo[0].phone;
	var radioTypIdBtns =  $(".typeID");
	for (var i = 0; i < radioTypIdBtns.length; i++) {
		if(radioTypIdBtns[i].getAttribute('data-length') == userInfo[0].user_identification.length){
			radioTypIdBtns.checked = true;
			break;
		}
	};

	doc.querySelector("#txtEmailUser").value = userInfo[0].user_mail;
	doc.querySelector("#txtEmailUser").disabled = true;
	doc.querySelector("#dateBirthUser").value = userInfo[0].dateBirth;
	doc.querySelector("#selectTypeUser").value = userInfo[0].UserType_id_user_type;
	doc.querySelector("#selectTypeUser").disabled = true;

	if(userInfo[0].UserType_id_user_type == 3){
	var teacher = getTeacherToModify(userId.id);
	doc.querySelector("#selectAcademyUser").value = teacher[0].Academy_id_academy;

	}else if (userInfo[0].UserType_id_user_type == 4){
		var student = getStudentToModify(userId.id);
		doc.querySelector("#selectAcademyUser").value = student[0].Academy_id_academy;
		showTeacher();
		doc.querySelector("#numHeightUser").value = student[0].height;
		doc.querySelector("#categoryLevel").value = student[0].CategoryLevel_id_category_level;
		doc.querySelector("#categoryLevel").disabled = true;
		doc.querySelector("#selectTeacherUser").value = student[0].Teacher_id_teacher;
		doc.querySelector("#WeightUser").value = student[0].weight;
		uptadeCategoryWeight();
		doc.querySelector("#numExhibitionsUser").value = student[0].exibitions_participated;
		doc.querySelector("#numTournamentWonUser").value = student[0].won_tornaments;
		doc.querySelector("#numTournamentParticipatedUser").value = student[0].tornaments_participated;
	}


}

function showForm(currentUser){
	doc.querySelector("#buttonModifyUser").setAttribute('data-userType', currentUser);
  if(currentUser == 3){
		doc.querySelector("#teacherSelect").style.display = "block";
		doc.querySelector("#studentFormUserLeft").style.display = "none";
		doc.querySelector("#studentFormUserRight").style.display = "none";
	}else if(currentUser == 4){
		doc.querySelector("#studentFormUserLeft").style.display = "block";
		doc.querySelector("#studentFormUserRight").style.display = "block";
		doc.querySelector("#teacherSelect").style.display = "block";

	}else{
		doc.querySelector("#studentFormUserLeft").style.display = "none";
		doc.querySelector("#studentFormUserRight").style.display = "none";
		doc.querySelector("#teacherSelect").style.display = "none";
	}
}

function updateUser(){
    var userToSave = this.getAttribute("data-usertype");
	var status = validateForm(userToSave);
	if(!status){ return; }
	var arrCommonData = [];
	var radioInputs = document.querySelectorAll('.gender input[type=radio]');
	var showingInputs = $(".general");
	for (var i = 0; i < showingInputs.length; i++) {
		arrCommonData.push(showingInputs[i].value);
	}
	for(var i= 0; i < radioInputs.length; i++){
		if(radioInputs[i].checked){
			arrCommonData.push(radioInputs[i].value);
			break;
		}
	}
	UpdateUserData(arrCommonData, this.name);
	if(userToSave == 3 ){
		var arrTeacher = [];
		var showingInputs = $(".teacher").val();
		arrTeacher  = [showingInputs, this.name];
		UpdateTeacher(arrTeacher);
	}else if(userToSave == 4){

		var showingInputs = $(".student");
		var studentArr = [];
		for (var i = 0; i < showingInputs.length; i++) {
		studentArr.push(showingInputs[i].value);
	}
		studentArr.push(showingInputs[3].name); //Age
		studentArr.push(showingInputs[4].name);//weight
		
		UpdateAthelte(studentArr, this.name);
	}
	if($("#imageUser").val() != ""){
		SaveImage();
	}
Redirect();

}

function uptadeCategoryWeight(){
	var weight = Number(doc.querySelector("#WeightUser").value);
	var userCategory =  getUserWeightCate(weight);
	document.querySelector("#categoryWeight").value = userCategory[0].name_category_weight;
	document.querySelector("#categoryWeight").name = userCategory[0].id_category_weight;
}

function updateCategoryAge(){
	var age = parseInt(doc.querySelector("#dateBirthUser").value);
	var currentYear = new Date().getFullYear()
	var ageUser =  currentYear - age;
	if(ageUser < 4 || ageUser > 100){
	document.querySelector("#categoryAge").value = 'No apto para competir';
	document.querySelector("#categoryAge").name = '0';
	return;
	}
	var categoryAge = getCategoryAge(ageUser);
	
	if(categoryAge.length > 0)
	{
	document.querySelector("#categoryAge").value = categoryAge[0].name_category;
	document.querySelector("#categoryAge").name = categoryAge[0].id_category_age;
	document.querySelector("#categoryAge").setAttribute('data-age', ageUser);

	}

}
function showTeacher(){
	var doc = document;
	var selectType = doc.querySelector("#selectTeacherUser");
	selectType.disabled = false;
	cleanElement(selectType);

	var dFaultoption = doc.createElement('option');
	dFaultoption.value = '';
	dFaultoption.innerHTML = "--Seleccione un profesor--"
	doc.querySelector("#selectTeacherUser").appendChild(dFaultoption);

	var getTeacher = getTeachersForAcademy(doc.querySelector("#selectAcademyUser").value);
	for (var i = 0; i < getTeacher.length; i++) {
		var option = doc.createElement('option');
		option.value = getTeacher[i].id_teacher;
    	option.innerHTML = getTeacher[i].user_first_name + " " + getTeacher[i].user_lastname1;
    	selectType.appendChild(option);
	};
}

function cleanElement (element){
	while (element.firstChild) {
    element.removeChild(element.firstChild);
}
}

function lockinputs () {
	var doc = document;
	doc.querySelector("#categoryAge").disabled = true;
	doc.querySelector("#categoryWeight").disabled = true;
	doc.querySelector("#selectTeacherUser").disabled = true;
}

function validateForm(typeUser){
	var error = false, status = true;
	var showingInputs = $("input[type=text]:visible,input[type=number]:visible,input[type=date]:visible,input[type=email]:visible, select:visible");
	for (var i = 0; i < showingInputs.length; i++) {
		if(showingInputs[i].value == ''){
			showError(showingInputs[i]);
			error = true;
		}
		else{
			removeError(showingInputs[i]);
		}
	};
	var email = validateEmail(document.querySelector("#txtEmailUser").value); 
	var failMail = false;
	var isRadius = validateForRadios();
	if(!isRadius || error ){
		printMessageError("¡Error!, Campos incompletos");
		status = false;
	}
	if (!email) {
		printMessageError("¡Error!, Formato incorrecto en el email");
		showError(document.querySelector("#txtEmailUser"));
		status = false;	
		failMail = true;

	}else{
		removeError(document.querySelector("#txtEmailUser"));
	}
	
		var age = document.querySelector("#categoryAge").name;
		if(age == 0){
		printMessageError("¡Error!, La fecha de nacimiento no gnenera una edad valida");
		showError(document.querySelector("#categoryAge"));
		showError(document.querySelector("#dateBirthUser"));
		status = false;	
		}
		else
		{
		removeError(document.querySelector("#categoryAge"));
		removeError(document.querySelector("#dateBirthUser"));	
		}
	var userIDType = $(".typeID");
	for (var i = 0; i < userIDType.length; i++) {
		if(userIDType[i].checked){
			var lentNum = userIDType[i].getAttribute("data-length")
			if(lentNum != document.querySelector("#numIdentificationUser").value.length){
				printMessageError("¡Error!, La identificación de tipo "+ userIDType[i].value + " requiere mínimo de " + lentNum + " dígitos");
				showError(document.querySelector("#numIdentificationUser"));
				status = false;	
			}else
			{
			removeError(document.querySelector("#numIdentificationUser"));
		    }
		}
	};

	var cellphone = $("#numTelUser");
	if(cellphone.val().length !== 8 ){
		        printMessageError("¡Error!, El número de teléfono requiere de 8 dígitos");
				showError(document.querySelector("#numTelUser"));
				status = false;	
	}else
	{
		removeError(document.querySelector("#numTelUser"));
	}

	return status;
}
function validateForRadios() {
	var validated = true;
	var num = 0;
	var radioInputs = document.querySelectorAll('.gender input[type=radio]');
	for(var i= 0; i < radioInputs.length; i++){
		if(radioInputs[i].checked){
			num++;
		}
	}
   if(num === 0){
   	validated = false;
   }

	return validated;
}
function getAcademies(){
	var academies = getAcademyDB();
	var selectType = document.querySelector("#selectAcademyUser");
	var dFaultoption = document.createElement('option');
	dFaultoption.value = '';
	dFaultoption.innerHTML = "--Seleccione una academia--"
	selectType.appendChild(dFaultoption);
	for (var i = 0; i < academies.length; i++) {
		var option = document.createElement('option');
		option.value = academies[i].id_academy;
    	option.innerHTML = academies[i].name;
    	selectType.appendChild(option);
	};
}
function loadLeveCategory(){
	var levels = getCategoryLevel();
	var selectType = document.querySelector("#categoryLevel");
	var dFaultoption = document.createElement('option');
	dFaultoption.innerHTML = "--Seleccione una cinta--"
	dFaultoption.value = '';
	selectType.appendChild(dFaultoption);
	for (var i = 0; i < levels.length; i++) {
		var option = document.createElement('option');
		option.value = levels[i].id_category_level;
    	option.innerHTML = levels[i].name_category_level;
    	selectType.appendChild(option);
	};
}

function upDateStudentLevel(){
	var updtadeLevel = doc.querySelector("#categoryLevel");
	var tornamentParticipation = Number(doc.querySelector("#numTournamentParticipatedUser").value);
	var exParticipation = Number(doc.querySelector("#numExhibitionsUser").value);
	var getCurrentLevel = Number(updtadeLevel.value);

	if(getCurrentLevel == 1){
		if(tornamentParticipation>=3){
			updtadeLevel.value = getCurrentLevel + 1;
			printSuccessError("El estudiante ha subido a cinta a Amarilla");
		}
		else{
			printMessageError("Se requieren mínimio 3 torneos para subir a cita Amarilla");
		}
	}
	else if(getCurrentLevel == 2){
		if(tornamentParticipation>=4){
			updtadeLevel.value = getCurrentLevel + 1;
			printSuccessError("El estudiante ha subido a cinta a Verde");
		}
		else{
			printMessageError("Se requieren mínimio 4 torneos para subir a cita Verde");
		}
	}
	else if(getCurrentLevel == 3){
		if(tornamentParticipation>=5){
			updtadeLevel.value = getCurrentLevel + 1;
			printSuccessError("El estudiante ha subido a cinta a Azul");
		}
		else{
			printMessageError("Se requieren mínimio 5 torneos para subir a cita Azul");
		}
	}
	else if(getCurrentLevel == 4){
		if(tornamentParticipation>=6){
			updtadeLevel.value = getCurrentLevel + 1;
			printSuccessError("El estudiante ha subido a cinta a Roja");
		}
		else{
			printMessageError("Se requieren mínimio 6 torneos para subir a cita Roja");
		}
	}
	else if(getCurrentLevel == 5){
		if(tornamentParticipation>=7 && exParticipation >= 3){
			updtadeLevel.value = getCurrentLevel + 1;
			printSuccessError("El estudiante ha subido a cinta a Negra");
		}
		else{
			printMessageError("Se requieren mínimio 7 torneos y 3 exhibiciónes para subir a cita Negra");
		}
	}
	else if(getCurrentLevel == 6){
			printMessageError("El estudiante ha alcanzado el máximo nivel de cintas");
			updtadeLevel.disabled = true;
	}
}