var longitud;
var latitud;
var mapa;
var marker;
function initMap(){
   mapa = new google.maps.Map(document.getElementById('map'), {
           center: {lat: 9.953207, lng: -84.127891},
           scrollwheel: false,
           zoom: 12
         });
        var ltlg = mapa.getCenter();
         map = mapa;
         bounds = ltlg;
     marker = new google.maps.Marker({
           position: ltlg,
           map: mapa
         });
   latitud = marker.getPosition().lat();
   longitud = marker.getPosition().lng();
         mapa.addListener('click', function(e) {

           placeMarkerAndPanTo(e.latLng, mapa, marker, false);
         });
}

function placeMarkerAndPanTo(latLng, mapa, marker, reset) {
  latitud =marker.getPosition().lat();
  longitud = marker.getPosition().lng();
    console.log(latitud);
    console.log(longitud);   
  marker.setPosition(latLng);
  mapa.panTo(latLng);
  if(reset){
      mapa.setZoom(12);
  }
}
