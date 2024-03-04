// To get the input field 
const input = document.getElementById("input"); 

// To get the warning text
const errMsg = document.getElementById("error"); 

// To add the event listener to input 
input.addEventListener("keyup", function(event) { 

	// If capslock is pressed, display the warnText 
	if (event.getModifierState("CapsLock")) { 
        errMsg.style.display = "block"; 
	} else { 
        errMsg.style.display = "none"; 
	} 
});
