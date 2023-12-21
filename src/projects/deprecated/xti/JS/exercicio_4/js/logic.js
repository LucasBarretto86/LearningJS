/*
	Descrição: Funcionamento de selação de assento do cine capiroto.
	Author: Lucas Barretto e Silva
	
*/

var seatsBoard;
var seatsPositions;
var seats = [
	{available: true,	selected: false},
	{available: true,	selected: false},
	{available: false,	selected: false},
	{available: true,	selected: false},
	{available: true,	selected: false},
	{available: true,	selected: false}
]; 			 

window.onload = function(){
	seatsBoard = document.getElementById("seats_display");
	seatsPositions = seatsBoard.getElementsByTagName("img");
	document.getElementById("button_confirm").onclick = seatConfirm;
	seatsLoad();

	for (var i = 0; i < seatsPositions.length; i++) {
		seatsPositions[i].onclick = seatSelect(i);
	}
}


function checkSeatsStatus(seat){
	alert("Seat " + seat);
}

function seatsLoad(){
	for(var i = 0; i < seatsPositions.length; i++){
		seats[i].value = seatsPositions[i].value;
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

function seatSelect (seat){
	return function () {
		for( var i = 0; i < seats.length; i++ ){
			if(seat == i) {
				if(seats[seat].available){
					seats[seat].selected = true;
				} else {
					alert("Assento ocupado mané!");
				}
			} else {
				seats[i].selected = false;
			}	
		}
		seatsLoad();
	}	
	
}

function seatConfirm (){
		for(var i = 0; i < seats.length; i++){
			if(seats[i].selected && seats[i].available) {
				seats[i].available = false;		
			}
		}
}


