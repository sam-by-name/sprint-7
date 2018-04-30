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



////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*   Round 1
function countBs(string) {                  
    let count = 0;
    for (let i = 0; i < string.length; i++) {
      if (string[i] == "B") {
      count ++;
      }
    }
    return count;
  }
  console.log(countBs("BBC"));
*/


//    Round 2
function countBs(string) {            // rewritten to call function countChar to do its bidding
  return countChar(string, "B");
}

// This function loops through the given string (1st binding) 
// in search of the number of instances of the given character (2nd binding)

function countChar(string, char) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == char) {
  	count++;
    }
  }
  return count;
}
console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkkkkkerlak", "k"));
// → 8
  