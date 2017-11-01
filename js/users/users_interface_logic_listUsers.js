//Autor Jose Solano

fillUsersList();

function fillUsersList() {//begin of fillUsersList

	var elemetstoShow=  getAllUsers();
	var tbody = document.querySelector('#tableUsersList tbody');

	tbody.innerHTML="";

	var usersList = [];
		
	for (var i = 0; i < elemetstoShow.length; i++) {
		if(elemetstoShow[i].status != 0 ){
			usersList.push(elemetstoShow[i]);
		}
	};
		if (usersList.length == 0) {
		printMessageError("No se han agregado usuarios al sistema...");
		}
		else
		{
		for (var i = 0; i < usersList.length; i++) {//begin of for
			
			var trow= tbody.insertRow(i);
			
			var cellUserImage= trow.insertCell();
			var cellNameUser= trow.insertCell();
			var cellEmailUser= trow.insertCell();
			var cellUserType= trow.insertCell();
			var cellEdit= trow.insertCell();
			var cellDelete= trow.insertCell();


			var editButton= document.createElement('input');
			var delButton= document.createElement('input');
			var image= document.createElement('img');

			editButton.type= 'button';
			editButton.value= 'Modificar';
			editButton.name= usersList[i].id_user;
			editButton.id= 'buttonEditUser'
			editButton.classList.add('btnList','btnImportant');
			editButton.addEventListener('click',updateUsers)

			delButton.type= 'button';
			delButton.value= 'Eliminar';
			delButton.name= usersList[i].id_user;
			delButton.id= 'buttonDelUser';
			delButton.classList.add('btnList','btnImportant');
			delButton.addEventListener('click',deleteUser);

			var fileImg= getUserImageName(usersList[i].user_mail);
			image.src= '../../images/users/' + fileImg;
			image.classList.add('lenghtImage');
			cellUserImage.classList.add('td-aligment');

			
			cellNameUser.innerHTML= usersList[i].user_first_name+" "+usersList[i].user_lastname1;
			cellEmailUser.innerHTML= usersList[i].user_mail;
			cellUserType.innerHTML= usersList[i].name_user_type;

			cellUserImage.appendChild(image);
			cellEdit.appendChild(editButton);
			cellDelete.appendChild(delButton);
		}
	}
}
