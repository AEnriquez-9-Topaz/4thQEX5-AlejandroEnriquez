// B = Burger, F = Fries, S = Soda

function CheckOrder() {
	var order = document.getElementById('Order').value;	

	switch (order) {
		case "B": 
			document.getElementById("result").innerHTML = "Your order of a Burger has been processed!";
			break;  
		case "F": 
			document.getElementById("result").innerHTML = "Your order of Fries has been processed!";
			break;
		case "S": 
			document.getElementById("result").innerHTML = "Your order of Soda has been processed!";
			break;
		default:
			document.getElementById("result").innerHTML = "Please input a valid order";
		} 
	}

 

						
