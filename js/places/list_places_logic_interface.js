fillTable();



function fillTable(){

		var listPlaces= get_list_places();
		var tbody = document.querySelector('#tablePlaces tbody');
		var cantPlace=listPlaces.length;
		tbody.innerHTML= '';


		for (var i = 0; i < cantPlace; i++) {
			
			if(listPlaces[i].status == 1){
			var row = tbody.insertRow();

			var columnName = row.insertCell(),
				columnAddress = row.insertCell(),
				columnPhone = row.insertCell(),
				columnContacPersone= row.insertCell(),
				columnEmail = row.insertCell(),
				columnSpaceBtnShow =row.insertCell(),
				columnSpaceBtnEdit = row.insertCell(),
				columnSpaceBtnDelete = row.insertCell();

			var showPlacebtn = document.createElement('input'),
				editbtn = document.createElement('input'),
				deletebtn = document.createElement('input');

				showPlacebtn.addEventListener('click',showInfoPlace);
				showPlacebtn.classList.add('btnList');
				showPlacebtn.classList.add('btnImportant');
				showPlacebtn.type = 'button';
				showPlacebtn.value = 'Ver';
				showPlacebtn.id = "showInfo";
				editbtn.addEventListener('click',editInfoPlace);
				editbtn.type = 'button';
				editbtn.value = 'Modificar';
				editbtn.classList.add('btnList');
				editbtn.classList.add('btnImportant');
				editbtn.id = 'editInfobtn';
				deletebtn.addEventListener('click',deletePlace);
				deletebtn.type='button';
				deletebtn.value='Eliminar';
				deletebtn.classList.add('btnList');
				deletebtn.classList.add('btnImportant');

				row.id = listPlaces[i].id_place;

				columnName.innerHTML = listPlaces[i].name;
				columnAddress.innerHTML = listPlaces[i].ubication;
				columnPhone.innerHTML = listPlaces[i].person_phone;
				columnContacPersone.innerHTML = listPlaces[i].contact_person;
				columnEmail.innerHTML = listPlaces[i].person_mail;
				columnSpaceBtnShow.appendChild(showPlacebtn);
				columnSpaceBtnEdit.appendChild(editbtn);
				columnSpaceBtnDelete.appendChild(deletebtn);













			}
		}


	
	}
function showInfoPlace(){

		var tr = this.parentElement.parentElement;
        var idPlace=tr.id;
        window.location.href='../../Views/places/view_place.php?id'+'='+idPlace;




}
function editInfoPlace() {

		var tr = this.parentElement.parentElement;
        var idPlace=tr.id;
        window.location.href='../../Views/places/edit_place.php?id'+'='+idPlace;
	
}
function deletePlace(){
		var tr = this.parentElement.parentElement;
        var idPlace=tr.id;
        showModal(idPlace, hidePlace);
      



}

function hidePlace(pIdPlace){

	if(!isCacelled){  
       delete_Place(pIdPlace);
       fillTable();
        
    }

}