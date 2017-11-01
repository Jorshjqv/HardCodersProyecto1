function showError(inputError){
    inputError.classList.add('errorInput');
}

function printMessageError(CustomAlert){
	var notify = document.getElementById('alert');
  clean(notify);
    var textN = document.createTextNode(CustomAlert);
    var pTag = document.createElement("P");
	pTag.appendChild(textN);
    notify.appendChild(pTag);
    notify.classList.add('error');
}

function deleteAllMessages(){
  var notify = document.getElementById('alert');
  notify.innerHTML = '';
}

function clean (element){
  element.classList.remove('error');
  element.classList.remove('success');
  while (element.firstChild) {
    element.removeChild(element.firstChild);
}
}

function removeError(inputError){
    inputError.classList.remove('errorInput');
}

function printSuccessError(CustomAlert){
  var notify = document.getElementById('alert');
  clean(notify);
    var textN = document.createTextNode(CustomAlert);
    var pTag = document.createElement("P");
  pTag.appendChild(textN);
    notify.appendChild(pTag);
    notify.classList.add('success');
}

function onEventsAlert(){
  $("#alertContainer").show('slow');
}
function hideAlert(){
$('#alertContainer').hide('slow');
}

function showRadioInputsError(group){
  var missingInputs = $(":radio[name='"+group+"']");
  var labelsForInput = missingInputs.parent().find("label")
  labelsForInput.addClass("miss");
}

function removeRadioInputsError(group){
  var missingInputs = $(":radio[name='"+group+"']");
  var labelsForInput = missingInputs.parent().find("label")
  labelsForInput.removeClass("miss");
}