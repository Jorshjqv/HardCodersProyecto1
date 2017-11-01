/*Autor Jose Solano*/

findEvent();
var id;
function findEvent (){
	var elementeclicked = getUrlVars()["id"];
	id = elementeclicked;
	var allEvents = getAllEvents();

	for (var i = 0; i < allEvents.length; i++) {
		if (allEvents[i][0]== elementeclicked) {
			setValues(allEvents[i]);
		}
	}
}

function setValues(eventFound){
	document.querySelector("#eventName").value = eventFound[1];
	document.querySelector("#dateBegin").value = eventFound[2];
	document.querySelector("#dateEnd").value = eventFound[3];
	document.querySelector("#priceIns").value = eventFound[4];
	document.querySelector("#place").value = eventFound[5];
	document.querySelector("#available").value = eventFound[6];
	document.querySelector("#priceEnter").value = eventFound[7];
	document.querySelector("#evetType").value = eventFound[8];
}

function getUrlVars() {
     var vars = {};
     var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
          vars[key] = value;
     });
     return vars;
}

var btnUpdate = document.querySelector("#upDateEvent");
btnUpdate.addEventListener('click', updateData);
btnUpdate.setAttribute("name",id);