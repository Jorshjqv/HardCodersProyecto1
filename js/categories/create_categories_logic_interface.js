var botonAgregar = document.querySelector('#btnGuardarCat');
botonAgregar.addEventListener('click', obtenerDatosCrear);

function obtenerDatosCrear(){
	var sNombre = '',
		sDescripcion = '',
		sRango = '',
		sEdad = '',
		sPeso = '',
		aInfoCat = [],
		bEstado = true;

	sNombre = document.querySelector('#txtNombre').value;
	sDescripcion = document.querySelector('#txtDescripcion').value;
	r = document.querySelector('#sltCategoriaRango');
	sRango= r.options[r.selectedIndex].text;
	e = document.querySelector('#sltCategoriaEdad');
	sEdad = e.options[e.selectedIndex].text;
	p = document.querySelector('#sltCategoriaPeso');
	sPeso = p.options[p.selectedIndex].text;

	var id = 1;
	var aCats = obtenerListaCategorias();
	var cant = aCats.length;
	id += cant;

	if(validateAllInputs()){
		aInfoCat.push(id,sNombre,sDescripcion,sRango,sEdad,sPeso,bEstado);
		agregarCategoria(aInfoCat);

	}
}


llenarFormularioCrear();

function llenarFormularioCrear(){
	var inputEdad = document.querySelector('#sltCategoriaEdad');
	var inputRango = document.querySelector('#sltCategoriaRango');
	var inputPeso =  document.querySelector('#sltCategoriaPeso');

	var aEdades = obtenerArrEdad();
	var aPesos = obtenerArrPeso();
	var aCintas = obtenerArrCinta();

	dropDownFill(aEdades,inputEdad);
	dropDownFill(aPesos,inputPeso);
	dropDownFill(aCintas,inputRango);
}

function dropDownFill(pCollection,pInput){
	for(var i=0; i<pCollection.length; i++){
		var opt = document.createElement('option');
		opt.value = pCollection[i][0];
		opt.name = pCollection[i][1];
		opt.innerHTML= pCollection[i][1];
		pInput.appendChild(opt);
	}
}

function showError(inputError){
    inputError.classList.add('errorInput');
}

function printMessageError(){
	var notify = document.getElementById('alert');
    var textN = document.createTextNode("¡Error! Verifique los campos");
    var pTag = document.createElement("P");
	pTag.appendChild(textN);                                          
    notify.appendChild(pTag);
    notify.classList.add('error');
}






