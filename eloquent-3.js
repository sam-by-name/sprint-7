function min1 (num1, num2) {
  return Math.min1(num1, num2);    // Math.Min is an inbuilt JavaScript function that checks for/returns the lower number
}                                  // Given to it in the Parentheses that come after it.
console.log(min1(0, 10));
console.log(min1(0, -10));


// min1 == min but min is what is was asked to do.

function min (num1, num2) {        // The variables here should do a decent job of explaining themselves
  if (num1 < num2) return num1;    // If 'num1' is less than 'num2' then return 'num1'
  else return num2;                // If the function reached here then num2 was bigger, so it returns it instead.
}

console.log(min(0, 10));
console.log(min(0, -10));


/////////////////////////////////////////////////////////////////////////////////////////////////////////
//   Round 1

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


//    Round 2
function countBs(string) {            // Rewritten too call function 'countChar' to do its bidding
  return countChar(string, "B");      // 'countBs' calls 'countChar' and declares the 2nd binding as 'B'
}

function countChar(string, char) {          // This function loops through the given string (1st binding) 
  let count = 0;                            // in search of the number of instances of the given character (2nd binding)
  for (let i = 0; i < string.length; i++) { 
    if (string[i] == char) {
  	count++;                                // Each time it finds one it logs it in the "count" variable
    }
  }
  return count;                             // Return "count" when the loop has finished.
}
console.log(countBs("BBC"));                  // 2
console.log(countChar("kakkkkkkerlak", "k")); // 8


////////////////////////////////////////////////////////////////////////////////////////////////////////
// Round one! works but is not using recursion.

function isEven(isNum) {
  if ((isNum) %2 == 0) {
    return true;
  } else{
    return false;
  }
}
console.log(isEven(50000));
// → true
console.log(isEven(750));
// → false
console.log(isEven(-999));
// → false

//Round two (actually Round <5)

let isItEven = (x) => {                  // Declare function 'isItEven' with binding of 'x'.
  if (x == 0) return true;               // If 'x' ever equals 0 then the original input to 'x' was an even number.
    else if (x == 1) return false;       // If 'x' ever equals 1 then the original input to 'x' was and odd number.
    else if (x < 0) return isItEven(-x); // If 'x' is less than 0 then return isItEven with a positive version of 'x'.
    else return isItEven(x -2) ;         // Now the recursive part, if the function reaches here, 
  }                                      // recall 'isItEven' but 'x' now has 2 less than before.  
  
  console.log(isItEven(90));     //true
  console.log(isItEven(75999));  //false
  console.log(isItEven(-1990));  //true