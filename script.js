function onesDigit(n) {
  // your code here
	
	let last = n%10;

	return last;
	
}

// Do not change the code below

const n = prompt("Enter Number:");
alert(onesDigit(n));
