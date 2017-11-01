//array getters
/*
function getEvents(){
  events = JSON.parse(localStorage.getItem('arrEvent'));
  if(events == null){
    events = [];
  }
  return events;
}

function getAssignedEvent(){
  asignedEvents = JSON.parse(localStorage.getItem('arrAsingEvent'));
  if(asignedEvents == null){
    asignedEvents = [];
  }
  return asignedEvents;
}

function getSponsorEventInfo(){
  var arrSponsorsEvent = JSON.parse(localStorage.getItem('arrSponsorOnEvent'));
  if(arrSponsorsEvent == null){
    arrSponsorsEvent = [];
  }
  return arrSponsorsEvent;
}

function getParticipationOnEvent(){
  var arrParticipationOnEvent = JSON.parse(localStorage.getItem('arrParticipationOnEvent'));
  if(arrParticipationOnEvent == null){
    arrParticipationOnEvent = [];
  }
  return arrParticipationOnEvent;
}
*/
function getSoldTickets(){
  var currentEvent = getCurrentEvent();
  var ticketsSold = currentEvent.sold_tickets;
  return ticketsSold;
}

function getUrlVars() {
  var vars = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
    vars[key] = value;
  });
  return vars;
}

function getCurrentEvent(){
  var id = getUrlVars()['id'];
  var events = getAllEvents();
  var currentEvent = [];
  for(var i = 0; i < events.length; i++){
    if(events[i].id_event == id){
      currentEvent = events[i];
    }
  }
  return currentEvent;
}

function getTotalSoldTickets(){
  var currentEvent = getCurrentEvent();
  var ticketsSold = getSoldTickets();
  var ticketPrice = currentEvent.ticket_price;
  var total = ticketsSold * ticketPrice;

  return total;
}

function getTotalInscriptions(){
  var participation = getAllAthetlesOnevent(getCurrentEvent.id_event).length;
  var inscriptionAmount = getCurrentEvent().inscription_price;
  var total = participation * inscriptionAmount;

  return total;

}
/*
function getSponsorshipTypes(){
  var types = JSON.parse(localStorage.getItem('arrTiposPatrocinio'));
  return types;
}
*/
/*
function getTotalSponsorships(){
  var idEvent = getCurrentEvent()[0];
  var sponsorsEvent = getSponsor(idEvent);
  var total = 0;
  for(var i = 0; i < sponsorsEvent.length; i++){
    if(sponsorsEvent[i][3] == types[0]){
      total += sponsorsEvent[i].;
    }
  }
  return total;
}
*/

function getTotalAmount(){
  var totalAmountTickets = getTotalSoldTickets();
  var totalAmountInscriptions = getTotalInscriptions();
  var total = totalAmountTickets + totalAmountInscriptions + totalAmountSponsorships;
  return total;
}
/*
function getSponsorProdsEvent(){
  var eventProducts = JSON.parse(localStorage.getItem('arrProductOnEvent'));
  var currentEvent = getCurrentEvent();
  var currentEventProducts = [];
  for(var i = 0; i < eventProdtucts.length; i++){
    if(eventProducts[i][0] == currentEvent[0]){
      currentEventProducts.push(eventProducts[i]);
    }
  }
  return currentEventProducts;
}


*/
