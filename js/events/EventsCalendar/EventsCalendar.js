    $('#calendar').fullCalendar({
        events: getEventsList(),
         eventClick: function() {
            showModal(this);
         },
         locale: 'es'
    });

var modal = document.getElementById('sellEvent');

var span = document.getElementsByClassName("close")[0];

var cost , priceEvent, avaliableOnEvent, soldEvent, updateEvent =[]; 
document.querySelector('#btnComprar').addEventListener('click', confirBought);
document.querySelector('#btnCancelar').addEventListener('click', cancel);
var eventVal;

var showModal = function(enventClicked) {
    var parentElement = document.querySelector("#VariableContent");
    parentElement.classList.add('divOverflow');
    while (parentElement.firstChild) {
    parentElement.removeChild(parentElement.firstChild);
    }
    var divHeader = document.createElement("div");
    var divTitle = document.createElement("h1");
    var divContet = document.createElement("div");
    var divRight = document.createElement("div");
    var divleft =  document.createElement("div");
    var place = document.createElement("label");
    var available = document.createElement("label");
    var price = document.createElement("label");
    var type = document.createElement("label");
    var sold = document.createElement("label");
    var sell = document.createElement("input");
    var mail = document.createElement("input");
    sell.setAttribute('id', 'ToBuy');
    mail.setAttribute('id', 'mail');
    var cant = document.createElement("label");
    var buy = document.createElement("label");
    sell.addEventListener('change', updateCost);
    var result = document.createElement("input");
    result.disabled = true;
    result.classList.add('price-input');
    cost = result;
    var mapG = document.createElement("div");
    mapG.setAttribute("id", "map");

    divHeader.classList.add('modal-header');
    divContet.classList.add('contet');

    var spanElemet = enventClicked.getElementsByTagName('span');
    eventVal = spanElemet[0].innerHTML;
    var allPlaces = getPlaceByEvent(eventVal);


    var divGroup = document.createElement('div');
    divGroup.classList.add('buy');
    var label = document.createElement("label");
    place.innerHTML = "Lugar: ";
    label.innerHTML =  allPlaces[0].name;
    divGroup.appendChild(place);
    divGroup.appendChild(label);
    divRight.appendChild(divGroup);
    var divGroup = document.createElement('div');
    divGroup.classList.add('buy');
    var label = document.createElement("label");    
    type.innerHTML = "Evento de tipo:";
    label.innerHTML =  allPlaces[0].eventtypename;
    divGroup.appendChild(type);
    divGroup.appendChild(label);
    divRight.appendChild(divGroup);

    var divGroup = document.createElement('div');
    divGroup.classList.add('buy');
    var label = document.createElement("label");

    

    available.innerHTML = "Entradas disponibles:" ;
    label.innerHTML =  allPlaces[0].available_tickets;
    label.setAttribute('id', 'available');


    divGroup.appendChild(available);
    divGroup.appendChild(label);
    divRight.appendChild(divGroup);
    avaliableOnEvent = allPlaces[0].available_tickets;

    var label = document.createElement("label");

    price.innerHTML = "Precio de entrada:";
    label.innerHTML = "₡ " + allPlaces[0].ticket_price;

    var divGroup = document.createElement('div');
    divGroup.classList.add('buy');
    divGroup.appendChild(price);
    divGroup.appendChild(label);
    divRight.appendChild(divGroup);
    priceEvent =  allPlaces[0].ticket_price;


    var divGroup = document.createElement('div');
    divGroup.classList.add('buy');
    var label = document.createElement("label");

    sold.innerHTML = "Entradas vendidas:";
    label.innerHTML = allPlaces[0].sold_tickets;
    label.setAttribute('id', 'sold');

    divGroup.appendChild(sold);
    divGroup.appendChild(label);
    divRight.appendChild(divGroup);
    soldEvent = allPlaces[0].sold_tickets;

    var divGroup = document.createElement('div');
    divGroup.classList.add('buy');

    cant.innerHTML = "Cantidad a comprar: ";
    sell.type = "Number";
    sell.setAttribute('min', '0');
    sell.setAttribute('max', allPlaces[0].available_tickets);
    divGroup.appendChild(cant);
    divGroup.appendChild(sell);
    divRight.appendChild(divGroup);

    

    var divGroup = document.createElement('div');
    divGroup.classList.add('buy');
    buy.innerHTML = "Total a pagar: ₡";
    divGroup.appendChild(buy);
    divGroup.appendChild(result);
    divRight.appendChild(divGroup);

    divTitle.innerHTML = eventVal;
    divHeader.appendChild(divTitle);
    divHeader.setAttribute('eventid', allPlaces[0].id_event);

 var divGroup = document.createElement('div');
    divGroup.classList.add('buy');
    var label = document.createElement("label");
    label.innerHTML =  "Correo electrónico:";
    divGroup.appendChild(label);
    divGroup.appendChild(mail);
    divRight.appendChild(divGroup);

    divRight.classList.add('info-colum')
    divContet.appendChild(divRight);
    divleft.appendChild(mapG);
    var alert = document.createElement('div');
    alert.classList.add('normal');
    alert.setAttribute('id', 'alert');


    parentElement.appendChild(divHeader);
    parentElement.appendChild(alert);
    parentElement.appendChild(divRight);
    parentElement.appendChild(divleft);
 
    setTimeout(initMap, 50);

     modal.style.display = "block";
}
function updateCost(){
    var ticketsWished = Number(document.querySelector('#ToBuy').value);
    var result =  Number(priceEvent) * ticketsWished;
    var lessTickests =  Number(avaliableOnEvent) - ticketsWished;
    updateEvent = [lessTickests, ticketsWished, result];
    cost.value = result;
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function cancel(){
     modal.style.display = "none";
}

function confirBought(){
    var mail = document.querySelector("#mail");
    var cantToBuy =document.querySelector("#ToBuy");
    if(Number(cantToBuy.value) <= 0){
     $("#alert").show('slow');
    showError(cantToBuy);
    printMessageError("Debe de comprar al menos una entrada");
    setTimeout(function(){
    $("#alert").hide('slow');

    }, 3000);
    return;
    }
    else{
        removeError(cantToBuy);
    }
    if(!mail.value == ""){
    var passwordForEvent = randomPasswordEvent(6);
    var sold = $("#ToBuy").val();

    sendMailToClient(passwordForEvent,mail.value, $(".modal-header").find("h1").text(), sold);
    var eventId = $(".modal-header").attr("eventid");
    var availableTickets = Number($("#available").text()) - Number(sold);
    sold =  Number(sold) + Number($("#sold").text());
    UpdateEvent(eventId, sold, availableTickets);

    modal.style.display = "none";
   }else{
    $("#alert").show('slow');
    showError(mail);
    printMessageError("Debe de digitar su correo electrónico");
    setTimeout(function(){
    $("#alert").hide('slow');

    }, 3000);
   }
}