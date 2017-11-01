//function to get id from url
function getUrlVars() {
     var vars = {};
     var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
          vars[key] = value;
     });
     return vars;
}

/*New functions for php handling*/

function registerOrganization(organizationData){
  var request = $.ajax({
    url: '../../php/db_interface/organizations_db_interface.php',
    dataType: 'json',
    async: false,
    method: 'post',
    data:{
      'pname': organizationData[0],
      'pdescription': organizationData[1],
      'plegal_document': organizationData[2],
      'porganization_type':organizationData[3],
	    'function': 'registerOrganization'
    }
  });
  request.done(function(data){

	});
  request.fail(function(){
    //	console.log('Error de conexión');
  });
}

function getOrganizationType(){
  var types = [];
	var request = $.ajax({
	  url: '../../php/db_interface/organizations_db_interface.php',
		dataType: 'json',
		async: false,
		method: 'post',
		data:{
			'function': 'getOrganizationType'
		}
	});
	request.done(function(data){
		types = data;
/*
		for(var i = 0; i < types.length; i++){
			console.log(types[i]);
		}
*/
	});
	request.fail(function(){
	});

	return types;
}

function getOrganizations(){
	var organizations = [];
	var request = $.ajax({
		url:'../../php/db_interface/organizations_db_interface.php',
		dataType: 'json',
		async: false,
		method: 'post',
		data: {
			'function': 'getAllOrganizations'
		}
	});
	request.done(function(data){
		organizations = data;
	});
	request.fail(function(){
		console.log("Conexion fallida");
	});
	return organizations;
}

function getOrganizationByName(pname){
	var organization = [];
	var request = $.ajax({
		url: '../../php/db_interface/organizations_db_interface.php',
		dataType: 'json',
		async: false,
		method: 'post',
		data: {
			'pname': pname,
			'function': 'getOrganizationByName'
		}
	});
	request.done(function(data){
		organization = data;
	});
	request.fail(function(){

	});
	return organization;
}


function updateOrganization(organizationInfo){
	var request = $.ajax({
		url: '../../php/db_interface/organizations_db_interface.php',
		dataType: 'json',
		async: false,
		method: 'post',
		data: {
			'function': 'updateOrganization',
            'pid': organizationInfo[0],
			'pname': organizationInfo[1],
			'pdescription': organizationInfo[2],
			'ptype': organizationInfo[3],
		}
	});
	request.done(function(data){

	});
	request.fail(function(){

	});
}

function deactivateOrganization(id){
	var request = $.ajax({
		url: '../../php/db_interface/organizations_db_interface.php',
		dataType: 'json',
		async: false,
		method: 'post',
		data: {
			'function': 'deleteOrganization',
      'pid': id
		}
	});
	request.done(function(data){

	});

	request.fail(function(){

	});
}
