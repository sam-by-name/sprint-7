function min1 (num1, num2) {
	return Math.min1(num1, num2);
}
console.log(min1(0, 10));
// → 0
console.log(min1(0, -10));
// → -10

// min1 == min 

function min (num1, num2) {
	if (num1 < num2) return num1;
    else return num2; 
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10