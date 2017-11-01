var botonGuardar = document.querySelector('#btnGuardarCatMod');
botonGuardar.addEventListener('click',obtenerDatosModCategoria);

function obtenerDatosModCategoria(){

	llenarFormularioCrear();

	
	var sNombre = "",
		sDescripcion = "",
		sRango = "",
		sEdad = "",
		sPeso = "",
		aInfoModificar = [],
		aInfoValidar = [],
		aInputsError = [];


	var cod = document.querySelector('#txtCodigo').value;
	sNombre = document.querySelector('#txtNombre').value;
    sDescripcion = document.querySelector('#txtDescripcion').value;
    r = document.querySelector('#sltCategoriaRango');
    sRango = r.options[r.selectedIndex].text;
    e = document.querySelector('#sltCategoriaEdad');
    sEdad = e.options[e.selectedIndex].text;
    p = document.querySelector('#sltCategoriaPeso');
    sPeso = p.options[p.selectedIndex].text;

    aInfoValidar.push(sRango,sEdad,sPeso);
    aInputsError.push(r,e,p);
    

    for(var i=0; i<aInfoValidar.length;i++){
    	if(aInfoValidar[i] == ''){
    		showError(aInputsError[i]);
    		printMessageError();
    	}
    }

    if(validateAllInputs()){
    	aInfoModificar.push(cod,sNombre,sDescripcion,sRango,sEdad,sPeso);
    	modificarCategoria(aInfoModificar);
    }



}


	llenarFormularioModificar();

function llenarFormularioModificar(){
	var cat = obtenerCatModificar();

	document.querySelector('#txtCodigo').value = cat[0];
	document.querySelector('#txtNombre').value = cat[1];
    document.querySelector('#txtDescripcion').value = cat[2];
	var inputEdad = document.querySelector('#sltCategoriaEdad');
	var inputRango = document.querySelector('#sltCategoriaRango');
	var inputPeso =  document.querySelector('#sltCategoriaPeso');

	var aEdades = obtenerArrEdad();
	var aPesos = obtenerArrPeso();
	var aCintas = obtenerArrCinta();

	dropDownFill(aEdades,inputEdad);
	dropDownFill(aPesos,inputPeso);
	dropDownFill(aCintas,inputRango);

	var cat = obtenerCatModificar();
	var cinta = cat[3];
	switch(cinta){
		case 'blanca':
			sltIndex = 0;
			break;
		case 'amarilla':
			sltIndex = 1;
			break;
		case 'verde':
			sltIndex = 2;
			break;
		case 'azul':
			sltIndex = 3;
			break;
		case 'roja':
			sltIndex = 4;
			break;
		case 'negra':
			sltIndex = 5;
			break;
	}
	document.querySelector('#sltCategoriaRango').selectedIndex = sltIndex;
	var edad = cat[4];

	switch(edad){
		case 'Infantil':
			index = 0;
			break;
		case 'Cadete':
			index = 1;
			break;
		case 'Elite':
			index = 2;
			break;
		case 'Senior':
			index = 3;
			break;
	}
	document.querySelector('#sltCategoriaEdad').selectedIndex= index;
	var peso = cat[5];

	switch(peso){
		case 'pluma':
			sltIndex = 0;
			break;
		case 'gallo':
			sltIndex = 1;
			break;
		case 'super gallo':
			sltIndex = 2;
			break;
		case 'welter':
			sltIndex = 3;
			break;
		case 'pesado':
			sltIndex = 4;
			break;
	}
	document.querySelector('#sltCategoriaPeso').selectedIndex = sltIndex;



}

//llenarTablaModificar();



function dropDownFill(pCollection,pInput){
	for(var i=0; i<pCollection.length; i++){
		var opt = document.createElement('option');
		opt.value = pCollection[i][0];
		opt.name = pCollection[i][1];
		opt.innerHTML= pCollection[i][1];
		pInput.appendChild(opt);
	}
}

