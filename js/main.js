/* jslint browser:true */
"use strict";

function validateForm() {
	var status = true;
	var x;
	var i;

	//reset the form
	var requiredSection = ['fullName', 'phoneNumber', 'payment', 'ccNumber', 'vehicle'];
	for (i = 0; i < requiredSections.length; i++;) {
		document.getElementById(requiredSections[i]).className = "";
	} // end loop
	//test for full name
	x = document.forms.myForm.name.value;
	if (x === null || x === "") {
		status = false;
		document.getElementById('fullName').className = "error";
	}
	// check for the phone number
	x = document.forms.myForm.phone.value;
	x = x.replace(/-/g, '');
	document.forms.myForm.phone.value = x;
	if (x.length < 10 || x.length > 15) {
		status = false;
		document.getElementById('phoneNumber').className = "error";
	}
	//check the payment method
	var foundCheckes = false;
	x = document.getElementsByName('payMethod');

	for (i = 0; i < x.length; i++) {
		if (x[i].checked) {
			foundChecked = true;
			break;
		} // end if
	} // end for loop
	console.log(foundChecked);
	if (foundChecked === false) {
		status = false;
		document.getElementById('payment').className = "error";
	}
	// check for the cc number
	x = document.forms.myForm.ccNumber.value;
	x = x.replace(/ /g, '');

	if (x.length < 14 || x.length > 19) {
		status = false;
		document.getElementById('ccNumber').className = "error";
	}
	// check the auto type
	x = document.forms.myForm.vehicle.selectedIndex;
	if (x === 0) {
		status = false;
		document.getElementById('ccNumber').className = "error";
	}
	if (status === false) {
		document.getElementById('formProblems').className = "error";
	}
	return status;
} //end of the form
