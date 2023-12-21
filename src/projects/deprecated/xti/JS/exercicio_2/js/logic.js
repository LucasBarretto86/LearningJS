/*
	Descrição: Funcionamento de selação de assento do cine capiroto.
	Author: Lucas Barretto e Silva
	
*/


window.onload = function(){
	
	seatsLoad();
	
}

var seats = [
	{id:"a1",	available: true,	selected: false},
	{id:"a2",	available: true,	selected: false},
	{id:"a3",	available: true,	selected: false},
	{id:"a4",	available: true,	selected: false},
	{id:"a5",	available: true,	selected: false},
	{id:"a6",	available: true,	selected: false}
]; 			 

function seatsLoad(){
	var seatsPositions = document.getElementsByClassName("seat_image");
	
	for(var i = 0; i < seatsPositions.length; i++){
		seats[i].id = seatsPositions[i].id;
		seatsPositions[i].value = seats[i].available;
		
		if(seats[i].available) {
			if(seats[i].selected){
				seatsPositions[i].src = "css/img/seat_selected.png";	
			} else {
				seatsPositions[i].src = "css/img/seat_available.png";	
			}
		} else {
			seatsPositions[i].src = "css/img/seat_unavailable.png"
		}	
	}
}	

function seatSelect (id){
	var seat = document.getElementById(id);

	if(seat.value == true) {
		for( var i = 0; i < seats.length; i++ ){
			if(seats[i].id == seat.id){
				seats[i].selected = true;
				break;
			} else {
				seats[i].selected = false;
			}
		}
		seatsLoad();
	} else {
		alert("Assento já ocupado, mané!");
	}
}

function seatConfirm (){
	for(var i = 0; i < seats.length; i++){
		if(seats[i].selected && seats[i].available) {
			seats[i].available = false;		
		}
	}
	seatsLoad();
}


