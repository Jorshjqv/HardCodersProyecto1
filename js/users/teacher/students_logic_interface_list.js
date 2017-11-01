//Autor Jose Solano

fillUsersList();

function fillUsersList() {//begin of fillUsersList
	var userInfo = getUserName(); 
	var idUser = getUserIdByEmail(userInfo[0]);
	var getTeacherID = getTeacherToModify(idUser[0].id_user); //OBTERN USER ID DE LA PERSONA LOGUEADA
	var elemetstoShow=  getStudentsByTeacher(getTeacherID[0].id_teacher);
	var tbody = document.querySelector('#tableUsersList tbody');

	tbody.innerHTML="";

	var usersList = [];
		
	for (var i = 0; i < elemetstoShow.length; i++) {
		if(elemetstoShow[i].status != 0 ){
			usersList.push(elemetstoShow[i]);
		}
	};
		if (usersList.length == 0) {
		printMessageError("No se han agregado estudiantes al sistema...");
		}
		else
		{
		for (var i = 0; i < usersList.length; i++) {//begin of for
			
			var trow= tbody.insertRow(i);
			
			var cellUserImage= trow.insertCell();
			var cellNameUser= trow.insertCell();
			var cellEmailUser= trow.insertCell();
			var cellUserType= trow.insertCell();
			var cellAcademy= trow.insertCell();
			var cellLevel= trow.insertCell();
			var cellEdit= trow.insertCell();
			var cellDelete= trow.insertCell();
			var cellShowProfil= trow.insertCell();
	


			var editButton= document.createElement('input');
			var showProfilbtn = document.createElement('input');
			var image= document.createElement('img');

			editButton.type= 'button';
			editButton.value= 'Modificar';
			editButton.name= usersList[i].id_user;
			editButton.id= 'buttonEditUser';
			editButton.classList.add('btnList','btnImportant');
			editButton.addEventListener('click',updateStudents);

			showProfilbtn.type= 'button';
			showProfilbtn.value= 'Ver perfil';
			showProfilbtn.name= usersList[i].id_user;
			showProfilbtn.id= 'showProfil';
			showProfilbtn.classList.add('btnList','btnImportant');
			showProfilbtn.addEventListener('click',showUserProfi);


			var fileImg= getUserImageName(usersList[i].user_mail);
			image.src= '../../images/users/' + fileImg;
			image.classList.add('lenghtImage');
			cellUserImage.classList.add('td-aligment');

			
			cellNameUser.innerHTML= usersList[i].user_first_name+" "+usersList[i].user_lastname1;
			cellEmailUser.innerHTML= usersList[i].user_mail;
			cellUserType.innerHTML= usersList[i].user_age;
			cellAcademy.innerHTML= usersList[i].name;
			cellLevel.innerHTML= usersList[i].name_category_level;


			cellUserImage.appendChild(image);
			cellShowProfil.appendChild(showProfilbtn);
			cellEdit.appendChild(editButton);
		}
	}
}


