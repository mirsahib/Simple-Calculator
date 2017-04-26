function add () {
	// body...
	var firstNum = parseFloat(document.getElementById('first').value);
	var secondNum = parseFloat(document.getElementById('second').value);
	var result
	if(document.getElementById('op1').checked){
		result = parseFloat(firstNum+secondNum);
	}else if(document.getElementById('op2').checked){
		result = parseFloat(firstNum-secondNum);
	}else if(document.getElementById('op3').checked){
		result = parseFloat(firstNum*secondNum);
	}else if(document.getElementById('op4').checked){
		result = parseFloat(firstNum / secondNum);
	}else{
		if(document.getElementById('op5').checked){
			result = parseFloat(firstNum % secondNum);
		}
	}
	
	document.getElementById('demo').innerHTML = 'Sum = '+result;
}