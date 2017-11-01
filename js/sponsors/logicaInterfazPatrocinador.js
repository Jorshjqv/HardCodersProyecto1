//comienzo listar
fillForm();


//fin listar
//delete sponsor

//end delete
//comienzo crear
//document.querySelector('#btnInsertSponsor').addEventListener('click', getRegistryData); //function for click event to add sponsor



function getRegistryData(){
  //data read / write function
  var sponsorInfo = [];
  var validField = true;
  //var form = document.querySelector('#createSponsor');
  //var p = document.createElement('p');
  //var alert = document.querySelector('#alert');

  var socialReason = document.querySelector('#txtSocialReason').value;
  var sponsorName = document.querySelector('#txtSponsorName').value;
  var description = document.querySelector('#txtDescription').value;

  validField = validateSponsorFields();
  if(validField){
    alert.innerHTML = ' ';
    sponsorInfo.push(socialReason, sponsorName, description);
    insertSponsor(sponsorInfo);
    getProducts();

    window.open('../../views/sponsors/list_sponsors.php', '_self');
  }else{
    alert.innerHTML = ' ';
    var inputs = document.querySelectorAll('input:required');
    for(var i = 0; i < inputs.length; i++){
      inputs[i].classList.remove('errorInput');
      if(inputs[i].value == ''){
        printMessageError('Por favor complete los espacios para poder continuar');
        showError(inputs[i]);
      }
    }

  }
}
  /*
  function fillSponsorList(){
  var sponsorList = getSponsorList();
  var dataList = document.querySelector('#lstTypes');

  for(var i = 0; i < sponsorList.length; i++){
  if(sponsorList[i][4] == active){
  var optionElement = document.createElement('option');

  optionElement.value = sponsorList[i][5];
  optionElement.text = i;

  dataList.appendChild(optionElement);
}

}
}
*/
/*
function imgToString(img){
//function to convert uploaded image file to string, to save it in localStorage
var canvas = document.createElement("canvas");
canvas.width = img.width;
canvas.height = img.height;

var ctx = canvas.getContext("2d");
ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

var dataURL = canvas.toDataURL("img/png");

return dataURL.replace(/^data:image\/(png|jpg);base64,/,"");
}
*/
//fin crear
//inicio Modificar

//document.querySelector('#btnModSave').addEventListener('click', modSaveInfo);
//fillForm();

//modifiy sponsor form
function fillForm(){
  var id = getUrlVars()['id'];
  var sponsorInfo = searchSponsorById(id);
  //dropdownSponsorType();
  showProductsToMod();
  document.querySelector('#txtSocialReason').value = sponsorInfo.name_anonimus_society;
  document.querySelector('#txtSocialReason').disabled = true;
  document.querySelector('#txtSponsorName').value = sponsorInfo.name_commpany;
  document.querySelector('#txtSponsorName').disabled = true;
  document.querySelector('#txtDescription').value = sponsorInfo.description;
  document.querySelector('#txtDescription').disabled = true;
  //document.querySelector('#sponsorLogo').src = "../../images/general/sponsors/" + getImgSrcPNG(sponsorInfo[0]);
  //document.querySelector('#logoImg').src = sponsorInfo[4];
}

function enableEdit(){
  document.querySelector('#txtSocialReason').disabled = false;
  document.querySelector('#txtSponsorName').disabled = false;
  document.querySelector('#txtDescription').disabled = false;
}
// Inicio buscar
//document.querySelector('#btnSearchSponsor').addEventListener('click', showSearchedSponsor);

//fin buscar

//------------------------modify--------------
function modSaveInfo(){
  var idSponsor = getUrlVars()['id'];
  var sponsorInfo = [];
  var btnSave = document.querySelector('#btnModSave');
  var id = getUrlVars()['id'];
  var alert = document.querySelector('#alert');
  alert.innerHTML = '';
  if(document.querySelector('#txtSocialReason').disabled === true){
    enableEdit();
    btnSave.value = "Modificar";
  }else{
    var socialReason = document.querySelector('#txtSocialReason').value;
    var sponsorName = document.querySelector('#txtSponsorName').value;
    //var sponsorLogo = document.querySelector('#modLogo').value;
    var description = document.querySelector('#txtDescription').value;
    if(validateModFields()){
      alert.innerHTML = '';
      sponsorInfo.push(idSponsor, socialReason, sponsorName, description);
      modSponsor(sponsorInfo);
      document.querySelector('#txtSocialReason').disabled = true;
      document.querySelector('#txtSponsorName').disabled = true;
      document.querySelector('#txtDescription').disabled = true;
      //document.querySelector('#sponsorType').disabled = true;
      btnSave.value = 'Modificar';
      window.location.href = '../../views/sponsors/list_sponsors.php';
    }else{
      alert.innerHTML = '';
      var inputs = document.querySelectorAll('input');
      for(var i = 0; i < inputs.length; i++){
        if(inputs[i].value == ''){
          alert.innerHTML = '';
          showError(inputs[i]);
        }
      }
      printMessageError('Por favor, no deje espacios sin completar.');
    }


  }
}
//fin modificar

//---------------start pProduct functions--------------
function addNewProduct(){
  var formColumnLeft = document.querySelector('#prodColumnLeft');
  var formColumnRight = document.querySelector('#prodColumnRight');
  var divGroup1 = document.createElement('div');
  var divGroup2 = document.createElement('div');
  var nameLbl = document.createElement('label');
  var descLbl = document.createElement('label');
  var inputName = document.createElement('input');
  var inputDesc = document.createElement('input');
  nameLbl.for = 'txtProductName';
  nameLbl.innerHTML = 'Nombre';
  descLbl.for = 'txtProductDesc';
  descLbl.innerHTML = 'Descripción';
  inputName.required = true;
  inputDesc.required = true;

  divGroup1.classList.add('group');
  divGroup2.classList.add('group');
  inputName.classList.add('prodName');
  inputDesc.classList.add('prodDesc');


  formColumnLeft.appendChild(divGroup1);
  formColumnRight.appendChild(divGroup2);
  divGroup1.appendChild(nameLbl)
  divGroup1.appendChild(inputName);
  divGroup2.appendChild(descLbl);
  divGroup2.appendChild(inputDesc);
}

function getProducts(){
  //var arrProducts = document.querySelectorAll('.prodName, .prodDesc');
  var idSponsor = getNextSponsorId();
  var productName = document.querySelectorAll('.prodName');
  var productDesc = document.querySelectorAll('.prodDesc');

  for(var i = 0; i < productName.length; i++){
    var newProduct = [];
    newProduct.push(idSponsor, productName[i].value, productDesc[i].value);

    addProduct(newProduct);
  }
}

function showProductsToMod(sponsorId){
  var sponsorId = getUrlVars()['id'];
  var sponsorProducts = getProductsBySponsor(sponsorId);
  var tbody = document.querySelector('#tblModProducts tbody');
  for(var i = 0; i < sponsorProducts.length; i++){
    if(sponsorProducts[i].status != 0){
      var row = tbody.insertRow();
      var cellProdName = row.insertCell();
      var cellProdDescription = row.insertCell();
      var cellEdit = row.insertCell();
      var cellDelete = row.insertCell();

      var btnModProduct = document.createElement('input');
      btnModProduct.type = 'button';
      btnModProduct.value = 'Modificar';
      btnModProduct.name = sponsorProducts[i].id_product;
      btnModProduct.classList.add('btn');
      btnModProduct.classList.add('btnImportant')
      btnModProduct.addEventListener('click', showProdModScreen);

      var btnDeleteProduct = document.createElement('input');
      btnDeleteProduct.type = 'button';
      btnDeleteProduct.value = 'Eliminar';
      btnDeleteProduct.name = sponsorProducts[i].id_product;
      btnDeleteProduct.classList.add('btn');
      btnDeleteProduct.classList.add('btnImportant');
      btnDeleteProduct.addEventListener('click', removeProduct);

      var inputName = document.createElement('input');
      inputName.id = 'txtProdName';
      inputName.type = 'text';
      inputName.value = sponsorProducts[i].name_product;
      inputName.disabled = true;

      var txtDescription = document.createElement('input');
      txtDescription.id = 'txtProdDesc';
      txtDescription.type = 'text';
      txtDescription.value = sponsorProducts[i].description;
      txtDescription.disabled = true;

      cellProdName.appendChild(inputName);
      cellProdDescription.appendChild(txtDescription);
      // cellEdit.appendChild(btnModProduct);
      // cellDelete.appendChild(btnDeleteProduct);
    }



  }
}

function showProdModScreen(){
  var id = this.name;
  window.location.href = '../../views/sponsors/modificar_producto.php?id=' + id;
}

function removeProduct(){
  showModal(this.name, destroyElementProduct);
}

function destroyElementProduct(id){
  if(!isCacelled){
    deleteProduct(id);
  }
  sponsorId = getUrlVars()['id'];
  window.location.href = '../../views/sponsors/update_sponsors.php?id=' + sponsorId;
}


//end product functions
//validation functions
function validateSponsorFields(){
  var validated = true;
  var txtInputs = document.querySelectorAll('input:required');
  for(var i = 0; i < txtInputs.length; i++){
    if(validateText(txtInputs[i].value) == false){
      validated = false;
      break;
    }
  }
  return validated;
}

function validateProducts(){
  var validated = true;
  var txtInputs = document.querySelectorAll('input:required');
  for(var i= 0; i < txtInputs.length; i++){
    if(validateText(txtInputs[i].value) == false){
      validated = false;
      break;
    }
  }
  return validated;
}

function validateModFields(){
  var validated = true;
  var inputs = document.querySelectorAll('input:required');
  for(var i = 0; i < inputs.length; i++){
    if(validateText(inputs[i].value) == false){
      validated = false;
      break;
    }
  }
  return validated;
}

//error messages
function showError(inputError){
  inputError.classList.add('errorInput');
}


function printMessageError(pMsg){
  var notify = document.getElementById('alert');
  var textN = document.createTextNode(pMsg);
  var pTag = document.createElement("P");
  pTag.appendChild(textN);
  notify.appendChild(pTag);
  notify.classList.add('error');
}

//image habdling

function getImgSrcPNG(sponsorId){
  var srcName = sponsorId + '.png';
  return srcName;
}

function getImgSrcJPG(sponsorId){
  var srcName = sponsorId + '.jpg';
  return srcName;
}
/*
function drawLogo(){
var inputImg = document.querySelector('#imgInput');
var div = inputImg.parentElement;
var name = document.querySelector('#idSponsor').value;
var logo = document.createElement('img');
logo.style.width = '75px';
logo.style.height = '55px';
//logo.src = '../../images/general/sponsors/' + getImgSrcPNG(name
logo.src = inputImg.inneHTML;
div.appendChild(logo);
}

document.querySelector('#imgInput').addEventListener('change', drawLogo);
function hideImgInput(){
var input = document.querySelector('#imgInput');
input.classList.add('normal');
}

document.querySelector('#imgInput').addEventListener('load', hideImgInput);
*/
