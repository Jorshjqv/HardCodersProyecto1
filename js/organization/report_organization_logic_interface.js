document.querySelector('#searchBar').addEventListener('keyup', searchOrganizationByName);

function llenarTabla(){
	var listaOrganizaciones = getOrganizations();
	var	nCantOrganizaciones = listaOrganizaciones.length;
	var	tbody = document.querySelector('#tblOrganizaciones tbody');
	var tamannoPagina=4;


	tbody.innerHTML = '';
	for(var i=0; i<nCantOrganizaciones; i++){
		if(listaOrganizaciones[i].status == 1){
			var fila = tbody.insertRow();

			var celdaNombre = fila.insertCell(),
			celdaTipo = fila.insertCell(),
			celdaDescripcion = fila.insertCell(),
			celdaId = fila.insertCell(),
			celdaModificar = fila.insertCell(),
			celdaEliminar = fila.insertCell();

      var legalDocument = listaOrganizaciones[i].legal_document;
			if(legalDocument == 1){
				legalDocument = "N/A";
			}
			var botonModificar = document.createElement('input'),
			botonEliminar = document.createElement('input');

			botonEliminar.type ='button';
			botonEliminar.value = 'Eliminar';
			botonEliminar.name = listaOrganizaciones[i].id_organization;
			botonEliminar.classList.add('btnEliminarOrga');
			botonEliminar.classList.add('btn');
			botonEliminar.classList.add('btnImportant');
			botonEliminar.addEventListener('click',removeOrganization);

			botonModificar.type = 'button';
			botonModificar.value = 'Modificar';
			botonModificar.name = listaOrganizaciones[i].id_organization;
			botonModificar.classList.add('btnModificarOrga');
			botonModificar.classList.add('btn');
			botonModificar.classList.add('btnImportant');
			botonModificar.addEventListener('click',sendToModifyOrganizationScreen);

			celdaNombre.innerHTML = listaOrganizaciones[i].name_organization;
			celdaTipo.innerHTML = getOrganizationTypeName(listaOrganizaciones[i].OrganizationType_id_organization_type);
			celdaId.innerHTML = legalDocument;
			celdaDescripcion.innerHTML = listaOrganizaciones[i].description;
			celdaEliminar.appendChild(botonEliminar);
			celdaModificar.appendChild(botonModificar);



		}
	}
}
llenarTabla();

function removeOrganization(){
  showModal(this.name, destroyElementOrganization);
}


function getOrganizationTypeName(pId){
	var types = getOrganizationType();
	var name = ' ';
	for(var i = 0; i < types.length; i++){
		if(types[i].id_organization_type == pId){
			name = types[i].name_organization_type;
		}
	}
	return name;
}

function sendToModifyOrganizationScreen(){
	var id = this.name;
	window.location.href = "../../views/organization/update_organization.php?id=" + id;
}

function removeOrganization(){
  var id = this.name;
  showModal(id, destroyElementOrganization);
}

function destroyElementOrganization(id){
  if(!isCacelled){
		deactivateOrganization(id);
  }
  llenarTabla();
}

function getOrganizationById(){
	var id = getUrlVars()['id'];
	var organizations = getOrganizations();
	var organizationInfo = [];
	for(var i = 0; i < organizations.length; i++){
		if(organizations[i].id_organization == id){
			organizationInfo = organizations[i];
		}
	}
	return organizationInfo;
}

function searchOrganizationByName(){
	var searchBar = document.querySelector('#searchBar');
	console.log(searchBar.value)
	if(searchBar.value != null || searchBar.value != ' ' || searchBar.value != ''){
		var organization = getOrganizationByName(searchBar.value);
	}
	var notify = document.querySelector('#alert');

	if(organization == null){
		notify.innerHTML = ' ';
		printMessageError('¡Error! El nombre no corresponde con la informacion registrada...');
		llenarTabla();
	}
	else{
		var tbody = document.querySelector('#tblOrganizaciones tbody');

		tbody.innerHTML = ' ';
		for(var i  = 0; i < organization.length; i++){
			var fila = tbody.insertRow(),
			celdaCod = fila.insertCell(),
			celdaNombre = fila.insertCell(),
			celdaTipo = fila.insertCell(),
			celdaDescripcion = fila.insertCell(),
			celdaId = fila.insertCell(),
			celdaModificar = fila.insertCell(),
			celdaEliminar = fila.insertCell();


			var botonModificar = document.createElement('input'),
			botonEliminar = document.createElement('input');

			botonEliminar.type ='button';
			botonEliminar.value = 'Eliminar';
			botonEliminar.name = organization[i].id_organization;
			botonEliminar.classList.add('btnEliminarOrga');
			botonEliminar.classList.add('btn');
			botonEliminar.classList.add('btnImportant');
			botonEliminar.addEventListener('click',removeOrganization);

			botonModificar.type = 'button';
			botonModificar.value = 'Modificar';
			botonModificar.name = organization[i].id_organization;
			botonModificar.classList.add('btnModificarOrga');
			botonModificar.classList.add('btn');
			botonModificar.classList.add('btnImportant');
			botonModificar.addEventListener('click',sendToModifyOrganizationScreen);

			celdaCod.innerHTML = organization[i].id_organization;
			celdaNombre.innerHTML = organization[i].name_organization;
			celdaTipo.innerHTML = getOrganizationTypeName(organization[i].OrganizationType_id_organization_type);
			celdaId.innerHTML = organization[i].legal_document;
			celdaDescripcion.innerHTML = organization[i].description;
			celdaEliminar.appendChild(botonEliminar);
			celdaModificar.appendChild(botonModificar);
		}

	}
}

function printMessageError(pMsg){
  var notify = document.getElementById('alert');
  var textN = document.createTextNode(pMsg);
  var pTag = document.createElement("P");
  pTag.appendChild(textN);
  notify.appendChild(pTag);
  notify.classList.add('error');
}

/*
function llenarTablaBuscar(pOrganizacion){
var	tbody = document.querySelector('#tblOrganizaciones');
tbody.innerHTML = '';
var fila = tbody.insertRow();
var celdaCod = fila.insertCell(),
celdaNombre = fila.insertCell(),
celdaTipo = fila.insertCell(),
celdaId = fila.insertCell(),
celdaDescripcion = fila.insertCell();
//celdaModificar = fila.insertCell(),
//celdaEliminar = fila.insertCell();

var botonModificar = document.createElement('input'),
botonEliminar = document.createElement('input');

botonEliminar.type ='button';
botonEliminar.value = 'Eliminar';
botonEliminar.name = pOrganizacion[0];
botonEliminar.classList.add('btnEliminarOrga');
botonEliminar.addEventListener('click',inactivar);

botonModificar.type = 'button';
botonModificar.value = 'Modificar';
botonModificar.name = pOrganizacion[0];
botonModificar.classList.add('btnModificarOrga');
botonModificar.addEventListener('click',modificar);

celdaCod.innerHTML = pOrganizacion[0];
celdaNombre.innerHTML = pOrganizacion[1];
celdaTipo.innerHTML = pOrganizacion[2];
celdaId.innerHTML = pOrganizacion[3];
celdaDescripcion = pOrganizacion[4];
//celdaEliminar.appendChild(botonEliminar);
//celdaModificar.appendChild(botonModificar);

}
*/
