if (document.querySelector('#addBtn') != null) {
	document.querySelector('#addBtn').addEventListener('click',
												getInsertData);
}

if (document.querySelector('#academies') != null) {
	fillInterface();
}

if (document.querySelector('#viewAcademy') != null) {
	var idToEdit = Number(getURLParameters().get('id'));
	fillEditInputs();
	fillStudentsTable(idToEdit);
}

if (document.querySelector('#editAcademy') != null) {
	var idToEdit = Number(getURLParameters().get('id'));
	fillEditInputs();
	document.querySelector('#editBtn').addEventListener('click',
												function(){
													saveNewData(idToEdit);
												}
											);
}


function getInsertData(){
  var academyInfo = [];

  nombre 	= document.querySelector('#nombre').value;
  ubicacion 		= document.querySelector('#ubicacion').value;
  telefono 		= document.querySelector('#telefono').value;
  perscontact	 	= document.querySelector('#perscontact').value;
  email		= document.querySelector('#email').value;


	if (validateAllInputs()) {
		academyInfo.push(nombre,
						ubicacion,
						telefono,
						perscontact,
						email);
		//return academyInfo;
		addAcademy(academyInfo);
		window.location.replace("./show_academies.php");
	}
}

function validateAllInputs(){
	var returnBool = true;
	var allInputs = document.querySelectorAll('input');
	for (var i = 0; i < allInputs.length; i++) {
		if (allInputs[i].required){
			if (!validateText(allInputs[i].value)) {
				returnBool = false;
				showError(allInputs[i]);
			}
		}
		else if (allInputs[i].getAttribute("type")=="number") {
			if (!validateNumber(allInputs[i].value)) {
				returnBool = false;
				showError(allInputs[i]);
			}
		}
		else if (allInputs[i].getAttribute("id")=="email") {
			if (!validateEmail(allInputs[i].value)) {
				returnBool = false;
				showError(allInputs[i]);
			}
		}
	}
	if (!returnBool){
			printMessageError("Revise los campos indicados");
	}
	return returnBool;
}

function fillInterface(){
  var academies = getAcademiesList();

  var dataNames = [	"id",
					"name",
					"direction",
					"phone",
					"contactperson",
					"email"];

  var container = document.querySelector('#academies');
  container.innerHTML = '';

	var table = document.createElement('table');
  var tbody = document.createElement('tbody');
	var header = document.createElement('thead');

	header.insertRow();
	title1cell = document.createElement('th');
	title1 = document.createTextNode("Nombre");
	title1cell.appendChild(title1);

	title2cell = document.createElement('th');
	title2 = document.createTextNode("Ubicación");
	title2cell.appendChild(title2);

	title3cell = document.createElement('th');
	title3 = document.createTextNode("Teléfono");
	title3cell.appendChild(title3);

  title4 = document.createTextNode("Contacto");
  title4cell = document.createElement('th');
  title4cell.appendChild(title4);

  title5cell = document.createElement('th');
  title5 = document.createTextNode("Correo");
  title5cell.appendChild(title5);

	thEmpty1 = document.createElement('th');
	thEmpty2 = document.createElement('th');
	thEmpty3 = document.createElement('th');

	header.appendChild(title1cell);
	header.appendChild(title2cell);
	header.appendChild(title3cell);
  header.appendChild(title4cell);
  header.appendChild(title5cell);
	header.appendChild(thEmpty1);
	header.appendChild(thEmpty2);
	header.appendChild(thEmpty3);
	tbody.appendChild(header);

  for(var i = 0; i < academies.length;i++){

	var rowIndex = 0;
	if (academies[i].status==1){

		var row = tbody.insertRow(rowIndex);
		rowIndex++;

		row.setAttribute("name", academies[i].name); //name index

		var dataIndex = 0;
		var cellIndex = 0;

		var newCell = row.insertCell(cellIndex);
		text = document.createTextNode(academies[i].name);
		newCell.appendChild(text);
		cellIndex++;

		var newCell = row.insertCell(cellIndex);
		text = document.createTextNode(academies[i].direction);
		newCell.appendChild(text);
		cellIndex++;

		var newCell = row.insertCell(cellIndex);
		text = document.createTextNode(academies[i].phone);
		newCell.appendChild(text);
		cellIndex++;

		var newCell = row.insertCell(cellIndex);
		text = document.createTextNode(academies[i].contact_person);
		newCell.appendChild(text);
		cellIndex++;

		var newCell = row.insertCell(cellIndex);
		text = document.createTextNode(academies[i].person_email);
		newCell.appendChild(text);
		cellIndex++;

		viewCell = row.insertCell(cellIndex++);
		editCell = row.insertCell(cellIndex++);
		deleteCell = row.insertCell(cellIndex++);

		viewBtn = createViewBtn(academies[i].id_academy);
		viewBtn.addEventListener('click',function(){
			sendtoView(this.getAttribute('id'));
		})
		editBtn = createEditBtn(academies[i].id_academy);
		editBtn.addEventListener('click',function(){
			sendToEdit(this.getAttribute('id'));
		})
		deleteBtn = createDeleteBtn(academies[i].id_academy);
		deleteBtn.addEventListener('click',function(){
			hideDiv(this.getAttribute('id'));
		})

		viewCell.appendChild(viewBtn);
		editCell.appendChild(editBtn);
		deleteCell.appendChild(deleteBtn);
	}
  }
	table.appendChild(header);
	table.appendChild(tbody);
  container.appendChild(table);
}

function sendToEdit(id){
	console.log("editando" + id);
	window.location.href = "./modify_academy.php?id=" + id;
}

function sendtoView(id){
	window.location.href = "./view_academy.php?id=" + id;
}

function sendToViewStudent(id){
	window.location.href = "../profile/perfil_personal.php?id=" + id;
}

function saveNewData(id){
	if(getAllNewEditValues().length > 0){
		editAcademy(id,getAllNewEditValues());
		window.location.replace("./show_academies.php");
	}
}

function hideDiv(id) {
	showModal(id, inactivateAcademy);
}

function getURLParameters() {
	var parameters = [];
	var currentURL = (new URL(document.location));
	parameters = currentURL.searchParams;
  return parameters;
}

function fillEditInputs(){
	var idToEdit = Number(getURLParameters().get('id'));
	if (getURLParameters().get('id')==null){
		window.location.replace("./show_academies.php");
	}
	var academyToEdit = getAcademybyId(idToEdit);
	document.getElementById('nombre').value = academyToEdit[0].name;
	document.getElementById('ubicacion').value = academyToEdit[0].direction;
	document.getElementById('telefono').value = academyToEdit[0].phone;
	document.getElementById('perscontact').value = academyToEdit[0].contact_person;
	document.getElementById('email').value = academyToEdit[0].person_email;
}

function fillStudentsTable(id){
	var tablebody = document.getElementById('tableStudentsOnAcademy');
	var students = getStudentsByAcademyId(id);
	for(var i = 0; i < students.length;i++){

	  var rowIndex = 0;
	  var row = tablebody.insertRow(rowIndex);
	  rowIndex++;

	  row.setAttribute("name", students[i].name); //name index

	  var dataIndex = 0;
	  var cellIndex = 0;

	  var newCell = row.insertCell(cellIndex);
	  text = document.createTextNode(students[i].user_first_name + " " + students[i].user_lastname1);
	  newCell.appendChild(text);
	  cellIndex++;

	  var newCell = row.insertCell(cellIndex);
	  text = document.createTextNode(students[i].user_mail);
	  newCell.appendChild(text);
	  cellIndex++;

	  viewCell = row.insertCell(cellIndex++);
	  viewBtn = createViewBtn(students[i].id_user);
	  viewBtn.addEventListener('click',function(){
	    sendToViewStudent(this.getAttribute('id'));
	  })
	  viewCell.appendChild(viewBtn);
	}
}

function getAllNewEditValues() {
	var newValues = [];
	if (validateAllInputs()){
		newValues.push(document.getElementById('nombre').value);
		newValues.push(document.getElementById('ubicacion').value);
		newValues.push(document.getElementById('telefono').value);
		newValues.push(document.getElementById('perscontact').value);
		newValues.push(document.getElementById('email').value);
	}
	return newValues;
}
