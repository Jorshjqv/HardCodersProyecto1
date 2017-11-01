//Autor Jose Solano
var doc = document;

function loadConfig(){

	var selectAcademy = doc.querySelector("#academy");
	var selectOrg = doc.querySelector("#orgs");
	var selectCate = doc.querySelector("#category");
	var selectSponsor = doc.querySelector("#sponsor");

	academies(selectAcademy);
	organizations(selectOrg);
	categories(selectCate);
	sponsors(selectSponsor);
	doc.querySelector("#SaveConfig").addEventListener('click', saveConfiguration);

}


function academies(selectAcademy){
	var academy = getAcademiesList();

		for (var i = 0; i < academy.length; i++) {
			var opt = doc.createElement("option");
			opt.innerHTML = academy[i].name;
			opt.value = academy[i].id_academy;
			selectAcademy.appendChild(opt);
		};

	 $('.js-multiselect').multiselect({
        right: '#js_multiselect_to_1000',
        rightSelected: '#js_right_Selected_1000',
        leftSelected: '#js_left_Selected_1000'
    });
}

function organizations(selectAcademy){
	var org = getOrganizations();

		for (var i = 0; i < org.length; i++) {
			var opt = doc.createElement("option");
			opt.innerHTML = org[i].name_organization;
			opt.value = org[i].id_organization;
			selectAcademy.appendChild(opt);
		};

	 $('.js-multiselect_400').multiselect({
        right: '#js_multiselect_to_400',
        rightSelected: '#js_right_Selected_400',
        leftSelected: '#js_left_Selected_400'
    });
}

function categories(selectCate){

	var gender = ["Masculino", "Femenino"];
	var age = categoryAges();
	var weight = categoryWeight();
	var level = categoryLevels();

	for (var i = 0; i < gender.length; i++) {
		for (var j = 0; j < age.length; j++) {
			for (var c = 0; c < weight.length; c++) {
				for (var d = 0; d < level.length; d++) {
					var opt = doc.createElement("option");
					opt.innerHTML = weight[c].name_category_weight + " " + age[j].name_category + " " + level[d].name_category_level + " "+  gender[i];
					opt.value =  "[" + weight[c].id_category_weight + "," + age[j].id_category_age + "," + level[d].id_category_level+ "," + '"' +gender[i]+ '"' + "]";
					selectCate.appendChild(opt);
				};
			};
		};
	};
	$('.js-multiselect_100').multiselect({
        right: '#js_multiselect_to_100',
        rightSelected: '#js_right_Selected_100',
        leftSelected: '#js_left_Selected_100'
    });

}

function sponsors(selectAcademy){
	doc.querySelector("#js_right_Selected_200").addEventListener('click', updataProducts);
	doc.querySelector("#js_left_Selected_200").addEventListener('click', updataProducts);

	var sponsorsToShow = getSponsorsList();
	for (var i = 0; i < sponsorsToShow.length; i++) {
		var opt = doc.createElement("option");
		opt.innerHTML = sponsorsToShow[i].name_commpany;
		opt.value = sponsorsToShow[i].id_sponsor;
		selectAcademy.appendChild(opt);
	};
	$('.js-multiselect_200').multiselect({
        right: '#js_multiselect_to_200',
        rightSelected: '#js_right_Selected_200',
        leftSelected: '#js_left_Selected_200'
    });
}


function updataProducts(){
	setTimeout(ShowProduct, 10);
}

function ShowProduct(){
	var sponsor = $('#js_multiselect_to_200 option');
	var selectp1  = doc.querySelector("#product");
	var selectp2  = doc.querySelector("#js_multiselect_to_300");
	removeChilds(selectp1);
	removeChilds(selectp2);

	if(sponsor.length > 0){
		var select = doc.querySelector("#product");
		for (var i = 0; i < sponsor.length; i++) {
			var products = getProductBySposorID(sponsor[i].value);
					for (var j = 0; j < products.length; j++) {
						var opt = doc.createElement("option");
						opt.innerHTML = products[j].name_product;
						opt.value = '[' + products[j].id_product + ',' + sponsor[i].value + ']';
						select.appendChild(opt);
					};
		};
		$('.js-multiselect_300').multiselect({
        right: '#js_multiselect_to_300',
        rightSelected: '#js_right_Selected_300',
        leftSelected: '#js_left_Selected_300'
    });
	} 
}



function removeChilds(element){
	while (element.firstChild) {
   		 element.removeChild(element.firstChild);
	}
}

function saveConfiguration(){
	var currentEvent = getEvent(); 
	var acdemiesOnevent = $("#js_multiselect_to_1000 option");
	var organizations = $("#js_multiselect_to_400 option");
	var categories = $("#js_multiselect_to_100 option");
	var sponsors = $("#js_multiselect_to_200 option");
	var products = $("#js_multiselect_to_300 option");
	var check = [acdemiesOnevent, organizations, categories, sponsors, products];

	for (var i = 0; i < check.length; i++) {
		if (check[i].length === 0) {
			onEventsAlert();
			printMessageError("Error, Debe de seleccionar al menos un elemento.");

			if(i == 0){
				showError(doc.querySelector('#js_multiselect_to_1000'));
			}
			else{
				removeError(doc.querySelector('#js_multiselect_to_1000'));
			}
			if (i==1) {
				showError(doc.querySelector('#js_multiselect_to_400'));
			}else{
				removeError(doc.querySelector('#js_multiselect_to_400'));
			}
			if (i==2) {
				showError(doc.querySelector('#js_multiselect_to_100'));
			}else{
				removeError(doc.querySelector('#js_multiselect_to_100'));
			}
			if (i==3) {
				showError(doc.querySelector('#js_multiselect_to_200'));
			}else{
				removeError(doc.querySelector('#js_multiselect_to_200'));
			}
			if (i==4) {
				showError(doc.querySelector('#js_multiselect_to_300'));
			}else{
				removeError(doc.querySelector('#js_multiselect_to_300'));
			}
		
		setTimeout(hideAlert, 3000);
		return;
		};
	}
	CleanElementsOnEvent(currentEvent[0].result);
	for (var i = 0; i < acdemiesOnevent.length; i++) {
	
		saveAcademiesOnEvent(currentEvent[0].result, acdemiesOnevent[i].value);			
	};
	for (var i = 0; i < organizations.length; i++) {
	
		SaveOrgOnevent(currentEvent[0].result, organizations[i].value);
		
	};
	for (var i = 0; i < categories.length; i++) {
		
		SaveCategoriesOnevent(currentEvent[0].result, JSON.parse(categories[i].value));
	};
	for (var i = 0; i < sponsors.length; i++) {
		SaveSponsorOnEvent(currentEvent[0].result, sponsors[i].value);
	};
	for (var i = 0; i < products.length; i++) {
		SaveProductOnEvent(currentEvent[0].result, JSON.parse(products[i].value));
	};
	updateConfigEvent(currentEvent[0].result);
	
	onEventsAlert();
	printSuccessError("La configuración fue registrada correctamente");
	loadCategoriesOnEvent();
	document.querySelector("#t2").style.pointerEvents = "none";
	document.querySelector("#t3").style.pointerEvents = "";
	setTimeout(hideAlert, 4000);
}