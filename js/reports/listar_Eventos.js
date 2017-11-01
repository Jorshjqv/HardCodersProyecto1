llenarTablaEventos();
//Llamar a los metodos de la capa de negocio de  Eventos
function llenarTablaEventos(){
    
//      var eventsList = getAllEvents();
    //ID_event,NOMBRE**,FECHA INICIO**,FECHA FIN**,COSTO DE INSCRIPCION**,ID_Lugar**,EENTRADAS DISPONIBLES**,PRECIO ENTRADA**,ENTRADAS VENDIDAS,Tipo evento,Estado (ACTVO)//
        var eventsList = obtenerEventos();
     
        var stadium;

    
                        
                        
            var tbody = document.querySelector('#eventsList tbody');
            tbody.innerHTML= '';
        for(var i=0; i < eventsList.length; i++){
           
            if(eventsList[i][10] === true){
                
                
                stadium = obtenerEstadio(eventsList[i][5]);
                 var row = document.createElement('tr');
                 var columnNameEvent = document.createElement('td'),
                     calumnStartDate = document.createElement('td'),
                     calumnEndDate = document.createElement('td'),
                     columnPlace = document.createElement('td'),
                     columnKindEvent = document.createElement('td'),
                     spaceShowReportEvent = document.createElement('td'),
                     showReportEventBtn = document.createElement('button');
                     showReportEventBtn.classList.add('btnList');
                     showReportEventBtn.classList.add('btnImportant');
                     showReportEventBtn.addEventListener('click',mostrarReporte);
                   
                     row.id=eventsList[i][0];
                
                var nodoNameEvent=document.createTextNode(eventsList[i][1]),
                    nodoStartDate=document.createTextNode(eventsList[i][2]),
                    nodoEndDate=document.createTextNode(eventsList[i][3]),
                    nodoPlace=document.createTextNode(stadium),
                    nodoKindEven=document.createTextNode(eventsList[i][8]),
                    nodoReportEventBtn=document.createTextNode('Ver Reporte');
                
                    columnNameEvent.appendChild(nodoNameEvent),
                    calumnStartDate.appendChild(nodoStartDate),
                    calumnEndDate.appendChild(nodoEndDate),
                    columnPlace.appendChild(nodoPlace),
                    columnKindEvent.appendChild(nodoKindEven),
                    showReportEventBtn.appendChild(nodoReportEventBtn),
                    spaceShowReportEvent.appendChild(showReportEventBtn);
                    
                    row.appendChild(columnNameEvent),
                    row.appendChild(calumnStartDate),
                    row.appendChild(calumnEndDate),
                    row.appendChild(columnPlace),
                    row.appendChild(columnKindEvent),
                    row.appendChild(showReportEventBtn);
                
                    tbody.appendChild(row);
                
                     
                     
               }
        
            
            
        }
                         
    
    
}

function mostrarReporte(){
    
       
         var tr = this.parentElement;
         var idEvent=tr.id;
       // var isEventBegin= validateDate(idEvent);
       // console.log(isEventBegin);
     //   var today= new Date();
     // var stringToday= today.toString();
     // console.log(stringToday);

        window.location.href='../../Views/Reports/event_report.html?id'+'='+idEvent;
    
}
    
function obtenerEstadio(pIDStadium){
    var nameEstadium;
     //Array de lugares//
        var arrPlace = obtenerLugares();
        console.log(arrPlace);
    
    for(var i=0;i<arrPlace.length;i++){
        
        if(pIDStadium == arrPlace[i][0]){
            
           nameEstadium = arrPlace[i][1];
           
           }
        
    }
    return nameEstadium;
}
 function validateDate(pid){
     var listEvent= obtenerEventos();
     var existError;
     var today;
     var datebegin;


   for (var i = 0; i < listEvent.length; i++) {

        if(pid == listEvent[i][0]) {
        console.log("Estoy en el for");
        today= new Date();
        datebegin = listEvent[i][2];
        // console.log(today);
        // console.log(datebegin);
        // if(Date.parse(datebegin) < Date.parse(today)){
        //     console.log("No ha empezado");
        // }else {
        //      console.log("ya empezado");
        // }

        }
       
   }


   today =  new Date();
   v_today= today.toLocaleDateString();
   console.log(v_today);
   console.log(datebegin);
if (Date.parse(v_today) > Date.parse(datebegin)) {
    console.log('El evento no ha empezado');
}
    return existError;

 }
