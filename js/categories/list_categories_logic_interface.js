
llenarTablaCategorias();
function llenarTablaCategorias(){
	var listaCategorias = obtenerListaCategorias();
	var nCantCategorias = listaCategorias.length;
	var tbody = document.querySelector('#tblCategorias tbody');
	var lista = document.querySelector('#lstCategorias');


	tbody.innerHTML = '';
	for(var i = 0; i<nCantCategorias; i++){
		if(listaCategorias[i][6] == true){
				var fila = tbody.insertRow();
				//alert(lista);

		var celdaNombre = fila.insertCell(),
			celdaDescripcion = fila.insertCell(),
			celdaRango = fila.insertCell(),
			celdaEdad = fila.insertCell(),
			celdaPeso = fila.insertCell(),
			celdaModificar = fila.insertCell(),
			celdaEliminar  = fila.insertCell(),
			botonModificar = document.createElement('input'),
			botonEliminar = document.createElement('input');

		botonModificar.type = 'button';
		botonModificar.value = 'Modificar';
		botonModificar.name = listaCategorias[i][0];
		botonModificar.classList.add('btnModificarCategoria');
		botonModificar.classList.add('btnImportant');
		botonModificar.classList.add('btnList');
		botonModificar.addEventListener('click', modify);

		botonEliminar.type = 'button';
		botonEliminar.value = 'Eliminar';
		botonEliminar.name = listaCategorias[i][0];
		botonEliminar.classList.add('btnEliminarCategoria');
		botonEliminar.classList.add('btnImportant');
		botonEliminar.classList.add('btnList');
	    botonEliminar.addEventListener('click', eliminar);

		celdaNombre.innerHTML = listaCategorias[i][1];
		celdaDescripcion.innerHTML = listaCategorias[i][2];
		celdaRango.innerHTML = listaCategorias[i][3];
		celdaEdad.innerHTML = listaCategorias[i][4];
		celdaPeso.innerHTML = listaCategorias[i][5];
		celdaModificar.appendChild(botonModificar);
		celdaEliminar.appendChild(botonEliminar);	

		var opt = document.createElement('option');
		opt.value = listaCategorias[i][1];
		opt.name = listaCategorias[i][0];
		opt.innerHTML = listaCategorias[i][1];
		//lista.appendChild(opt);


		}


	
	}

}

function eliminar(){
	showModal(this.name, inactivar);
}

function modify(){
	var sCod = this.name;
	var cat = [];
	cat = buscarCatPorCodigo(sCod);

	localStorage.setItem('catModificarLS',JSON.stringify(cat));
	window.location.href = "../../views/categories/update_categories.html"

}





function llenarTablaBuscar(pCategoria){
	var	tbody = document.querySelector('#tblCategorias');
	tbody.innerHTML = '';
	var fila = tbody.insertRow();
	var celdaCod = fila.insertCell(),
		celdaNombre = fila.insertCell(),
		celdaTipo = fila.insertCell(),
		celdaId = fila.insertCell(),
		celdaDescripcion = fila.insertCell();
		celdaCod.innerHTML = pCategoria[0];
		celdaNombre.innerHTML =pCategoria[1];
		celdaTipo.innerHTML = pCategoria[2];
		celdaId.innerHTML = pCategoria[3];
		celdaDescripcion = pCategoria[4];
		//celdaEliminar.appendChild(botonEliminar);
		//celdaModificar.appendChild(botonModificar);

}

function seleccionarCatBuscar(){
	var sNombre = document.querySelector('#srchCat').value;
	var listaCategorias = obtenerListaCategorias();
	var catSeleccionada = [];
	for(var i=0; i<listaCategorias.length;i++){
		if(listaCategorias[i][1] == sNombre){
			catSeleccionada = listaCategorias[i];
		}
	}

	llenarTablaBuscar(catSeleccionada);
}



