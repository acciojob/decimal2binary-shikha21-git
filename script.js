function decimalToBinary(num) {
  //Write you code here
	let binary = "";
	while(num>0){
		let digit = num%2;
		binary = digit+binary;
		num = num/2;
	}
  return binary;
}

window.decimalToBinary = decimalToBinary;
