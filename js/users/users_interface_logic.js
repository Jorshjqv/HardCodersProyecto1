//Autor Jose Solano

loadUserType();
addEvents();
showForm();
getAcademies();
loadLeveCategory();

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
	doc.querySelector("#selectTypeUser").addEventListener('change', showForm);
	doc.querySelector("#WeightUser").addEventListener('change', uptadeCategoryWeight);
	doc.querySelector("#dateBirthUser").addEventListener('change', updateCategoryAge);
	doc.querySelector("#selectAcademyUser").addEventListener('change', showTeacher);
	lockinputs();
	var dFaultoption = doc.createElement('option');
	dFaultoption.innerHTML = "--Seleccione un profesor--"
	dFaultoption.value = '';
	doc.querySelector("#selectTeacherUser").appendChild(dFaultoption);
	doc.querySelector("#buttonSaveUser").addEventListener('click', saveUser);
}

function showForm(){
	var doc = document;
	var currentUser = doc.querySelector("#selectTypeUser").value;
	 doc.querySelector("#buttonSaveUser").setAttribute('data-userType', currentUser);

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
function uptadeCategoryWeight(){
	var weight = Number(this.value);
	var userCategory =  getUserWeightCate(weight);
	document.querySelector("#categoryWeight").value = userCategory[0].name_category_weight;
	document.querySelector("#categoryWeight").name = userCategory[0].id_category_weight;
}

function updateCategoryAge(){
	var age = parseInt(this.value);
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

	var getTeacher = getTeachersForAcademy(this.value);
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
function lockinputs () {
	var doc = document;
	doc.querySelector("#categoryAge").disabled = true;
	doc.querySelector("#categoryWeight").disabled = true;
	doc.querySelector("#selectTeacherUser").disabled = true;
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
function saveUser(){
	var doc = document;
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
	SaveUserData(arrCommonData);
	if(userToSave == 3 ){
	
		var arrTeacher = [];
		var showingInputs = $(".teacher").val();
		var getCurrent = getUserId(doc.querySelector('#numIdentificationUser').value);
		arrTeacher  = [showingInputs, getCurrent[0].id_user];
		SaveTeacher(arrTeacher);
	}else if(userToSave == 4){

		var getCurrent = getUserId(doc.querySelector('#numIdentificationUser').value);
		var showingInputs = $(".student");
		var studentArr = [];
		for (var i = 0; i < showingInputs.length; i++) {
		studentArr.push(showingInputs[i].value);
	}
		studentArr.push(showingInputs[3].name); //Age
		studentArr.push(showingInputs[4].name);//weight
		studentArr.push(getCurrent[0].id_user);//Id User
		
		SaveAthelte(studentArr);
	}
	
	SaveImage();
	Redirect();
}

function validateForm(typeUser){
	var error = false, status = true;
	var showingInputs = $("input[type=text]:visible,input[type=number]:visible,input[type=file]:visible,input[type=date]:visible,input[type=email]:visible, select:visible");
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
	var mailExists = checkmail($("input[type=email]").val());
	if(mailExists.length > 0){
		printMessageError("¡Error!, El email digitado ya existe");
		showError(document.querySelector("#txtEmailUser"));
		status = false;		
	}else if(mailExists.length == 0 && !failMail){
		removeError(document.querySelector("#txtEmailUser"));
	}
	
		var age = document.querySelector("#categoryAge").name;
		if(age == 0){
		printMessageError("¡Error!, La fecha de nacimiento no genera una edad valida");
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
	var isValidID = checkUserId($("#numIdentificationUser").val());
	if(isValidID.length > 0){
				printMessageError("¡Error!, El número de identificación ya existe");
				showError(document.querySelector("#numIdentificationUser"));
				status = false;	
	}else
	{
		removeError(document.querySelector("#numIdentificationUser"));
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