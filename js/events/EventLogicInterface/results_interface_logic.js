main();

function main() {
	console.log(getURLParameters().get('id'));
	//iterar a traves de todas las categorias del evento  que se trajo por ID
		//generar generateCategoryBox(arrayCategoriesInThisEvent[i][4] y [i][5])
		//writeIntoContainer(la caja de arriba)

	//llenar todos los campos segun corresponda con fillCategoryInputs
}

function getURLParameters() {
	var parameters = [];
	var currentURL = (new URL(document.location));
	parameters = currentURL.searchParams;
    return parameters;
}

function writeIntoContainer(DOMelement){
	var container = document.getElementById('pointsInputsContainer');
	container.appendChild(DOMelement);
}

function fillCategoryInputs(categoryBox){
   var idToEdit = Number(getURLParameters().get('id'));
}

function saveResult(athleteId,eventid,points){
  var inputPoints = document.getElementByName('resultsUser')
  setResult(athleteId,eventid,inputPoints.value)
}
function generateLabels(athleteId,categoryBox){
  var label = document.createElement('label')
  label.setAttribute("for","resultsUser")
  label.innerText=getAthletebyId(athleteId)[1] + " " + getAthletebyId(athleteId)[2]

  var inputField = document.createElement('input');
  inputField.setAttribute("type","number")
  inputField.setAttribute("name","resultsUser")
  inputField.setAttribute("id",athleteId)

  categoryBox.appendChild(label);
  categoryBox.appendChild(inputField);
  return categoryBox;
}

function generateCategoryBox(categoryWeightId, categoryAgeId){
  var categoryContainer = document.createElement('div');
  var title = document.createElement('h3');
  var textAge = getCategoryNamebyCategoryId(categoryAgeId,1)
  var textWeigth = getCategoryNamebyCategoryId(categoryWeightId,2)
  var titleText = document.createTextNode(textAge + " " + textWeigth);
  title.appendChild(titleText);
  categoryContainer.appendChild(title);
  return categoryContainer;
}
