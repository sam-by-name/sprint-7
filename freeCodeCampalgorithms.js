//how to find the longest word in a string

function findLongestWord(str) { 
  var arr = str.split(' '); {                   // split string into an array
    var arrLength = [];                         
    for (var i = 0; i < arr.length; i++) {      // get word length of each string in the array, assign to arrLength 
      arrLength.push (arr[i].length); {
        arrLength.sort(function(a, b) {
          return b - a;  
        }); 
      }
    }
  return arrLength[0];   
  }
}



findLongestWord("The quick brown fox jumped over the lazy dog");
/*
turn into an array
determine length of each index
sort order by value high - low
print first index of the array*/










function repeatStringNumTimes(str, num) {
  var multStr = str;
  var longer = "";
  for (var i = 0; i < num; i++) {
    longer += str;    
  }
  //str = str * num;// repeat after me
  return longer;
}

repeatStringNumTimes("abc", 3);





