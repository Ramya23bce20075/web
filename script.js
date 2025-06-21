function checkFraud() {
	const amount = parseFloat(document.getElementById("amount").value);
	const riskScore = parseInt(document.getElementById("riskScore").value);

	let isFraud=false;

	if (amount>1000) isFraud=true;
	if (riskScore>75) isFraud =true;

	const resultDiv = document.getElementById("result");

	if (isFraud){
		result.textContent = " This payment is likely fraudulent.";
		result.style.color="red";
	}else{
		result.textContent = " This payment seems safe";
		result.style.color="green";
	}
}