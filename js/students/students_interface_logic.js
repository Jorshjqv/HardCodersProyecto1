
//--------------------------Activated all functions

//activate fillStudentsList function
if (document.querySelector('#tableUsersList tbody')!=null){
	fillStudentsList();
}

//activate all insert_user functions
if (window.location.href.match('insert_student.html')!= null) {

	var idSelectAcademy = document.getElementById("selectAcademyUser");
	var dataAcademy = [[1,"Ale Kwan"],[2,"World Class"],[3,"Chon Kwon"],[4,"Dragon Azul"]];
	getOptionsArrange(idSelectAcademy,dataAcademy);

	var idSelectBelt = document.getElementById("selectBeltCategoryUser");
	var dataBelt = [[1,"KUP grado 1"],[2,"KUP grado 2"],[3,"KUP grado 3"],[4,"KUP grado 4"]];
	getOptionsArrange(idSelectBelt,dataBelt);

	var idSelectAge = document.getElementById("selectAgeCategoryUser");
	var dataAge = [[1,"Pre benjamín"],[2,"Benjamín"],[3,"Alevín"],[4,"Infantil"]];
	getOptionsArrange(idSelectAge,dataAge);

	var idSelectWeight = document.getElementById("selectWeightCategoryUser");
	var dataWeight = [[1,"Mosca"],[2,"Gallo"],[3,"Pluma"],[4,"Ligero"]];
	getOptionsArrange(idSelectWeight,dataWeight);

}

//activate all list_users functions
if (window.location.href.match('list_students.html')!= null) {

	fillStudentsList();
	document.querySelector('#buttonDelUser').addEventListener('click', eliminateStudent);

}

//activate insert button
if (document.querySelector("#buttonSaveStudent")!= null) {

	document.querySelector('#buttonSaveStudent').addEventListener('click', studentRegistration);


}

//------------------Insert User

function studentRegistration() {//begin of studentRegistration

	//variable declaration
	var nIdUser = 0;
	var sNameUser = '';
	var sSecondNameUser = '';
	var nBirthUser = 0;
	var nAgeUser = 0;
	var sEmailUser ='';
	var nUserType =0;
	var sGenderUser ='';
	var sPasswordUser =''
	var nAcademyUser = 0;
	var bStateUser = true;
	var nWeightUser = 0;
	var nHeightUser = 0;
	var nTournamentWonUser = 0;
	var nExhibitionsUser = 0;
	var nTournamentParticpatedUser = 0;
	var nWeightCategoryUser = 0;
	var nAgeCategoryUser= 0;
	var nBeltUser = 0;
	var nTelUser = 0;
	var nIdTypeUser = '';
	var passwordLenght= 5;
	//arrange User
	var arrUser = [];

	//eliminated all previous messages

	deleteAllMessages();

	//reading all variables
	if (validateInputFields()== true && ValidateAllLeft()== true ) {


		nIdUser= Number(document.querySelector('#numIdentificationUser').value);
		sNameUser= document.querySelector('#txtNameUser').value;
		sSecondNameUser= document.querySelector('#txtSecondNameUser').value;
		nBirthUser= document.querySelector('#dateBirthUser').value;
		nAgeUser= getAge(document.querySelector("#dateBirthUser").value); //function
		sEmailUser= document.querySelector('#txtEmailUser').value;
		nUserType= document.querySelector('#selectTypeUser').value;
		sGenderUser= document.querySelector('input[name="genderUser"]:checked').value;
		sPasswordUser= randomPassword(passwordLenght);
		nAcademyUser= document.querySelector('#selectAcademyUser').value
		bStateUser= true;
		nWeightUser= document.querySelector('#numWeightUser').value;
		nHeightUser= document.querySelector('#numHeightUser').value;
		nTournamentWonUser= document.querySelector('#numTournamentWonUser').value;
		nExhibitionsUser= document.querySelector('#numExhibitionsUser').value;
		nTournamentParticpatedUser= document.querySelector('#numTournamentParticipatedUser').value;
		nWeightCategoryUser= document.querySelector('#selectWeightCategoryUser').value
		nAgeCategoryUser= document.querySelector('#selectAgeCategoryUser').value
		nBeltUser= document.querySelector('#selectBeltCategoryUser').value
		nTelUser= document.querySelector('#numTelUser').value;
		nIdTypeUser= document.querySelector('input[name="userIdentification"]:checked').value

		//filling arrUser arrange
		arrUser.push(nIdUser,sNameUser,sSecondNameUser,nBirthUser,nAgeUser,sEmailUser,nUserType,sGenderUser,sPasswordUser,nAcademyUser,bStateUser,nWeightUser,nHeightUser,nTournamentWonUser,nExhibitionsUser,nTournamentParticpatedUser,nWeightCategoryUser,nAgeCategoryUser,nBeltUser,nTelUser,nIdTypeUser);
		insertUser(arrUser);

		window.open('../../views/students/list_students.html', '_self');

		deleteAllMessages();

	}else {

		ValidateAllLeft();
		validateInputFields();
		printMessageError();

	}

}//end of studentRegistration

//--------------------------Table

function fillStudentsList() {//begin of fillStudentsList

	var usersList=  getUsersList();
	var tbody = document.querySelector('#tableUsersList tbody');
	var notify = document.getElementById('alert');

	tbody.innerHTML="";

	if (usersList.lenght== 0) {

		notify.innerHTML= '';
		var message= document.createElement('p');
		message.innerHTML= "No se han agregado usuarios al sistema..."
		notify.classList.add('error');
		notify.appendChild(message);

	}else {

		for (var i = 0; i < usersList.length; i++) {//begin of for
			//tbody listar usuarios
			var trow= tbody.insertRow(i);

			//variable declaration

			var cellNameUser= trow.insertCell();
			var cellUserImage= trow.insertCell();
			var cellGenderUser= trow.insertCell();
			var cellEmailUser= trow.insertCell();
			var cellEdit= trow.insertCell();
			var cellDelete= trow.insertCell();


			var editButton= document.createElement('input');
			var delButton= document.createElement('input');
			var image= document.createElement('img');

			editButton.type= 'button';
			editButton.value= 'Modificar';
			editButton.name= usersList[i][0];
			editButton.id= 'buttonEditUser'
			editButton.classList.add('btnList','btnImportant');
			editButton.addEventListener('click',sendToModScreen)

			delButton.type= 'button';
			delButton.value= 'Eliminar';
			delButton.name= usersList[0][i];
			delButton.id= 'buttonDelUser';
			delButton.classList.add('btnList','btnImportant');
			delButton.addEventListener('click',eliminateStudent);

			var fileImg= getImgSrcPNG(usersList[i][0]);
			image.src= '../../images/general' + fileImg;

			//agregar en tabla html

			cellNameUser.innerHTML= usersList[i][1]+" "+usersList[i][2];
			cellGenderUser.innerHTML= usersList[i][7];
			cellEmailUser.innerHTML= usersList[i][6];

			cellUserImage.appendChild(image);
			cellEdit.appendChild(editButton);
			cellDelete.appendChild(delButton);


		}//end of for
	}
}//end of fillStudentsList

//------------------Eliminated User

function eliminateStudent() { //begin of eliminateStudent

	showModal(this.name,removeUser);

}//end of eliminatestudent

function removeUser(id){//begin of removeUser

	//storeUserId(id);//currentUserName
	var currentUser = searchUserById(id);

	currentUser[10] = false;

	modifyUser(currentUser);
	fillStudentsList();
}//end of removeUser

//---------------------Modify User

function sendToModScreen(){//begin of sendToModScreen

	var id = this.name;

	storeUserId(searchUserById(id));
	window.open('../../views/users/modify_student.html', '_self');
}//end of sendToModScreen


//--------------------Validate Form

function validateStudent() {//begin of validateStudent

	switch(document.querySelector('#selectTypeUser').value) {
		case "estudiante":
		document.getElementById("selectAcademyUser").required= true;
		document.getElementById("selectBeltCategoryUser").required= true;
		document.getElementById("numExhibitionsUser").required= true;
		document.getElementById("numWeightUser").required= true;
		document.getElementById("numHeightUser").required= true;
		document.getElementById("selectAgeCategoryUser").required= true;
		document.getElementById("selectWeightCategoryUser").required= true;
		document.getElementById("numTournamentWonUser").required= true;
		document.getElementById("numTournamentParticipatedUser").required= true;
		break;
		case "profesor":
		document.getElementById("selectAcademyUser").required= true;
		document.getElementById("selectAcademyUser").required= false;
		document.getElementById("selectBeltCategoryUser").required= false;
		document.getElementById("numExhibitionsUser").required= false;
		document.getElementById("numWeightUser").required= false;
		document.getElementById("numHeightUser").required= false;
		document.getElementById("selectAgeCategoryUser").required= false;
		document.getElementById("selectWeightCategoryUser").required= false;
		document.getElementById("numTournamentWonUser").required= false;
		document.getElementById("numTournamentParticipatedUser").required= false;
		break;
		default:
		document.getElementById("selectAcademyUser").required= false;
		document.getElementById("selectAcademyUser").required= false;
		document.getElementById("selectBeltCategoryUser").required= false;
		document.getElementById("numExhibitionsUser").required= false;
		document.getElementById("numWeightUser").required= false;
		document.getElementById("numHeightUser").required= false;
		document.getElementById("selectAgeCategoryUser").required= false;
		document.getElementById("selectWeightCategoryUser").required= false;
		document.getElementById("numTournamentWonUser").required= false;
		document.getElementById("numTournamentParticipatedUser").required= false;

	}
}//end of validateStudent

function validateInputFields() {//begin of validateInputFields

	var validated = true;
	var formInputs = document.querySelectorAll('input:required');
	for(var i = 0; i < formInputs.length; i++){

		switch(formInputs[i].type) {
			case "number":

				if(validateNumber(formInputs[i].value) == false){
					showError(formInputs[i]);
					validated = false;
			}

			break;
			case "text":

				if(validateText(formInputs[i].value) == false){
					showError(formInputs[i]);
					validated = false;
			}

			break;
			case "email":

				if(validateEmail(formInputs[i].value) == false){
					showError(formInputs[i]);
					validated = false;

			}

			break;

			case "date":

				if(validateDate(formInputs[i].value) == false){
					showError(formInputs[i]);
					validated = false;

			}
		}
	}
	return validated;
}//end of validateInputFields

function ValidateAllLeft(){//begin of ValidateAllLeft

	var validated = true;

	if(validatePhone(document.getElementById("numTelUser").value) == false){

		validated=false;

	}

	if(validateSelect() == false){

		validated=false;

	}

	if(validateForRadios() == false){

		validated=false;

	}

}//end of ValidateAllLeft
