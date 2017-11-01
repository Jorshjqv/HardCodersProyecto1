function validateText(TextToValidate) {
	var returnBool = true;
	if (TextToValidate == "") {
        returnBool = false;
    }
	return returnBool;
}

function validateNumber(NumberToValidate){
	var returnBool = true;
	if (isNaN(NumberToValidate) || NumberToValidate < 1 || NumberToValidate > 99999999) {
        returnBool = false;
    }
	return returnBool;
}

function validateEmail(EmailToValidate){
	var atPos = EmailToValidate.indexOf("@");
  var dotPos = EmailToValidate.lastIndexOf(".");
	var returnBool = true;
    if (atPos<1 || dotPos<atPos+2 || dotPos+2>=EmailToValidate.length) {
        returnBool = false;
    }
	return returnBool;
}
