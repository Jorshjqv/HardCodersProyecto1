var arrEvent = [[1, "Juegos Nacionales","01/12/2017","03/12/2017",2000,1,100,1000,"Torneo",50,true,true,false, false],
								[2, "Copa ITF","01/12/2017","03/12/2017",2000,1,100,1000,"Fogueo",50,true,true, false,false],
								[3, "Exhibición Estadio Nacional","01/12/2017","03/12/2017",2000,1,100,1000,"Exhibición",50,true,true, false,false]];
								
var arrSponsorOnEvent = [[1,1, 10000, 'Dinero'],
                         [2,2,50000, 'Dinero'],
						 [3,3, 'dsdsds', 'Especie'],
						 [1,1, 'dasdsada', 'Equipo'],
					 	 [1,1, 540545, 'Dinero']];
						 
function agregarEvento(){
		localStorage.setItem('arrEvent', JSON.stringify(arrEvent));
	}
	
function agregarSponsorOnEvent(){
		localStorage.setItem('arrSponsorOnEvent', JSON.stringify(arrSponsorOnEvent));
	}