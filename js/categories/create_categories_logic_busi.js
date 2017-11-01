
function agregarCategoria(pNuevaCat){
	var listaCategorias = obtenerListaCategorias();
	listaCategorias.push(pNuevaCat);
	localStorage.setItem('listaCategoriasLS', JSON.stringify(listaCategorias));
	window.location.href = "../../views/categories/list_categories.html";
}

function obtenerListaCategorias(){
	var listaCategorias = JSON.parse(localStorage.getItem('listaCategoriasLS'));
	if(listaCategorias == null){
		listaCategorias = [];
	}

	return listaCategorias;
}

function modificarCategoria(pCategoriaMod){
	var listaCategorias = obtenerListaCategorias();

	for(var i=0; i<listaCategorias.length;i++){
		if(listaCategorias[i][0] == pCategoriaMod[0]){
			listaCategorias[i] = pCategoriaMod;
		}
	}
	localStorage.setItem('listaCategoriasLS', JSON.stringify(listaCategorias));
	window.location.href = "../../views/categories/list_categories.html";

}

agregarEdad();
agregarCinta();
agregarPeso();

function agregarEdad(){
	var arrEdades = [[1,'Infantil',4,12,'Junior',true],
				[2,'Cadete',12,18,'Adolescente',true],
				[3,'Elite',17,23,'Adulto joven',true],
				[4,'Senior',23,100,'Adulto',true]]; 


	localStorage.setItem('arrCategoryAge',JSON.stringify(arrEdades));
}

function agregarPeso(){
	var arrPesos = [[1,'pluma',0,51,'il-Yang',true],
				[2,'gallo',51,60,'i-Yang',true],
				[3,'super gallo',60,66,'O-Yang',true],
				[4,'welter',66,74,'sam-yang',true],
				[5,'pesado',74,500,'siu-yang',true]];    
	
	localStorage.setItem('arrCategoryWeight',JSON.stringify(arrPesos));
}

function agregarCinta(){
	var arrCintas = [[1,'blanca','primera cinta',true],
				[2,'amarilla','3 torneos',true],
				[3,'verde','4 torneos',true],
				[4,'azul','5 torneos',true],
				[5,'roja','6 torneos',true],
				[6,'negra','7 torneos y 3 exhibiciones',true]];
	
	localStorage.setItem('arrCategoryLevel',JSON.stringify(arrCintas));
} 

function obtenerArrEdad(){
	var arrEdad = JSON.parse(localStorage.getItem('arrCategoryAge'));
	if(arrEdad == null){
		arrEdad = [];
	}

	return arrEdad;
}

function obtenerArrPeso(){
	var aPeso = JSON.parse(localStorage.getItem('arrCategoryWeight'));
	if(aPeso == null){
		aPeso = [];
	}
	return aPeso;
}

function obtenerArrCinta(){
	var aCinta = JSON.parse(localStorage.getItem('arrCategoryLevel'));
	if(aCinta == null){
		aCinta = [];
	}
	return aCinta;

}

function validateText(x) {
	var returnBool = true;
	if (x == "") {
        returnBool = false;
    }
	return returnBool;
}

function buscarCatPorCodigo(pCod){
	var listaCategorias = obtenerListaCategorias();
	var catEncontrada =[];

	for(var i=0; i<listaCategorias.length; i++){
		if(listaCategorias[i][0] ==pCod){
			catEncontrada = listaCategorias[i];
		}
	}
	return catEncontrada;
}

function inactivar(id){
    var sCod = id;
   
    var listaCategorias = obtenerListaCategorias();

    for(var i=0; i<listaCategorias.length; i++){
    	if(listaCategorias[i][0] == sCod){
    		listaCategorias[i][6] = false;
    	}
    }
    localStorage.setItem('listaCategoriasLS',JSON.stringify(listaCategorias));
    llenarTablaCategorias();
}

function validateText(x) {
	var returnBool = true;
	if (x == "") {
        returnBool = false;
    }
	return returnBool;
}

function validateNumber(NumberToValidate){
	var returnBool = true;
	if (isNaN(NumberToValidate) || NumberToValidate < 1 ) {
        returnBool = false;
    }
	return returnBool;
}

function validateEmail(EmailToValidate){
	var atPos = EmailToValidate.indexOf("@");
    var dotPos = EmailToValidate.lastIndexOf(".");
	var returnBool = true;
    if (atPos<1 || dotPos<atPos+2 || dotPos+2>=x.length) {
        returnBool = false;
    }
	return returnBool;
}


function validateAllInputs(){
	var returnBool = true;
	var allInputs = document.querySelectorAll('input, textarea');
	for (var i = 0; i < allInputs.length; i++) {
		if (allInputs[i].required){
			if (!validateText(allInputs[i].value)) { 
				returnBool = false;
				showError(allInputs[i]);
				printMessageError();
			}else{
				allInputs[i].classList.remove('errorInput');
			}
		}
	}
	return returnBool;
}



function validateOptions(){
	 slts = document.querySelectorAll('.sltOption');

 var returnBool = true;
 for(var i=0; i<slts.length;i++ ){
 	if(!validateText(slts[i].options[slts[i].selectedIndex].text)){
 		returnBool = false;
				showError(allInputs[i]);
				printMessageError();
 	}

 }
 return returnBool;
}

function obtenerCatModificar(){
	var catModificar = JSON.parse(localStorage.getItem('catModificarLS'));
	if(catModificar == null){
		catModificar = [];
	}
	return catModificar;
} 


