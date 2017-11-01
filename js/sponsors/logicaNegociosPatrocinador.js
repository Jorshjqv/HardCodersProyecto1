//--------------------registrar sponsor------------------------------------
function insertSponsor(plist_sponsors){

  var request = $.ajax({
    url:'../../php/db_interface/sponsors_db_interface.php',
    dataType: 'json',
    async: false,
    method: 'post',
    data:{ 'psocial': plist_sponsors[0],
          'pname':plist_sponsors[1],
          'pdescription' :plist_sponsors[2],
          'function':'addSponsors'
    }
  });

}

//----------------------listar patrocinadores--------------------
function getSponsorsList(){
  var sponsorList = [];

 var request = $.ajax({
    url:'../../php/db_interface/sponsors_db_interface.php',
    dataType: 'json',
    async: false,
    method: 'post',
    data:{
      'function' : 'getAllSponsors'
    }
   });
  request.done(function(data){
    sponsorList = data;
  });
   request.fail(function(){
    //console.log('Error de conexion a la BD');
  });
  return sponsorList;

}

//--------- modificar sponsor---------------------
function modSponsor(pSponsorUpdate){
  var request = $.ajax({
    url:'../../php/db_interface/sponsors_db_interface.php',
    dataType: 'json',
    async: false,
    method: 'post',
    data:{
      'business_name':pSponsorUpdate[1],
      'name_company':pSponsorUpdate[2],
      'description':pSponsorUpdate[3],
      'id_sponsor':pSponsorUpdate[0],
      'function':'updateSponsors'
    }
    });
}

//---------------create producto-------------
function addProduct(pProduct){

  var request = $.ajax({
      url:'../../php/db_interface/sponsors_db_interface.php',
      dataType: 'json',
      async: false,
      method: 'post',
      data:{
          'id_sponsor': pProduct[0],
          'name_product':pProduct[1],
          'description':pProduct[2],
          'function':'insertProduct'
      }
  });
}
//--------------modificar producto--------------------
function modProduct(pProduct){
  var request = $.ajax({
    url:'../../php/db_interface/sponsors_db_interface.php',
    dataType: 'json',
    async: false,
    method: 'post',
    data:{
      'name_product':pProduct[1],
      'description':pProduct[2],
      'id_product':pProduct[0],
      'function' : 'modifyProduct'
    }
  });
}
//----------------------delete sponsor-----------------
function deleteSponsor(pId){
  //ajax uptate
  var request = $.ajax({
    url:'../../php/db_interface/sponsors_db_interface.php',
    dataType: 'json',
    async: false,
    method: 'post',
    data:{
      'id_sponsor':pId,
      'function' : 'deleteSponsor'
    }
  });
  //fillSponsorTable();
}

//-----------------listar productos patrocinador--------------
function getProductsBySponsor(sponsorId){
  var productList = [];
  var request = $.ajax({
    url:'../../php/db_interface/sponsors_db_interface.php',
    dataType: 'json',
    async:false,
    method: 'post',
    data:{
      'function' : 'getSponsorProducts',
      'id_sponsor' : sponsorId
    }
  });
  request.done(function(data){
    productList = data;
  });
  request.fail(function(){
    //console.log('Error de conexion a la BD');
  });

  return productList;

}
function getAllProducts(){
  var products = [];
  var request = $.ajax({
    url:'../../php/db_interface/sponsors_db_interface.php',
    dataType: 'json',
    async:false,
    method: 'post',
    data:{
      'function' : 'getAllProducts',
    }
  });
  request.done(function(data){
    products = data;
  });
  request.fail(function(){
    //console.log('Error de conexion a la BD');
  });

  return products;
}

function deleteProduct(id){
  var request = $.ajax({
    url:'../../php/db_interface/sponsors_db_interface.php',
    dataType: 'json',
    async: false,
    method: 'post',
    data:{
      'id_product':id,
      'function' : 'deleteProduct'
    }
  });


}

function getNextSponsorId(){
  var nextId = -1;
  var sponsors = getSponsorsList();
  nextId = sponsors[sponsors.length - 1].id_sponsor;
  return nextId;
}

function searchSponsorById(pId){
  var sponsorList = getSponsorsList();
  var foundSponsor = [];
  for(var i = 0; i < sponsorList.length; i++){
    if(sponsorList[i].id_sponsor == pId && sponsorList[i].status == 1){
      foundSponsor = sponsorList[i];
    }
  }
  return foundSponsor;
}

function getCurrentProduct(){
  var arrProducts =  getAllProducts();
  var prodId = getUrlVars()['id'];
  var productInfo = [];
  for(var i = 0; i < arrProducts.length; i++){
    if(arrProducts[i].id_product == prodId && arrProducts[i].status == 1){
      productInfo = arrProducts[i];
    }
  }
  return productInfo;
}
