// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  function substitution(input, alphabet, encode = true) {
    let output = [];
    inputLowercase = input.toLowerCase();//Changes input to lowercase
    const hasRepeats = new Set(alphabet);//Creates an object of the unique characters of alphabet
  if(!alphabet || alphabet.length !== 26){
    //If there is not alphabet or if there are less than 26 characters in alphabet, return false
    return false
  }
  if(hasRepeats.size < alphabet.length){
    //Returns false if there are repeat characters in alphabet by checking the size of hasRepeats to the length of alphabet
    return false
  }
  else if(encode === true){//Following code runs if we are encoding
    const encrypt ={
      'a':alphabet[0], 'b':alphabet[1], 'c':alphabet[2], 'd':alphabet[3], 'e':alphabet[4], 'f':alphabet[5], 'g':alphabet[6], 'h':alphabet[7], 'i':alphabet[8], 'j':alphabet[9], 'k':alphabet[10], 
      'l':alphabet[11], 'm':alphabet[12], 'n':alphabet[13], 'o':alphabet[14], 'p':alphabet[15], 'q':alphabet[16], 'r':alphabet[17], 's':alphabet[18], 't':alphabet[19], 'u':alphabet[20],
      'v':alphabet[21], 'w':alphabet[22], 'x':alphabet[23], 'y':alphabet[24], 'z':alphabet[25]                
    };//encrypt is an object that assigns the regular alphabet to the given alphabet by index number
    for(let i = 0; i < inputLowercase.length; i++){//Loops through lowercase input
      for( let [index, value] of Object.entries(encrypt)){//Loops through the keys and values of encrypt
        if(!Object.keys(encrypt).includes(inputLowercase[i])){
          //If none of the keys of encrypt include the lowercase input character, add the input character to the output array
          output.push(inputLowercase[i]);
          break;
        }
       else if(inputLowercase[i].includes(index)){
        //If the lowercase input character includes the key of encrypt, add the associated value to output
          output.push(value)
        }
      }
    }
    //Change output to a string and then removes commas and separating spaces while keeping intentionally added spaces
    const outputString = output.toString()
    const split = outputString.split(",").join("");
    return split
  }
  else if(encode === false){//Following code runs if we are decoding
    const encrypt ={//encrypt is an object that assigns the regular alphabet to the given alphabet by index number
      'a':alphabet[0], 'b':alphabet[1], 'c':alphabet[2], 'd':alphabet[3], 'e':alphabet[4], 'f':alphabet[5], 'g':alphabet[6], 'h':alphabet[7], 'i':alphabet[8], 'j':alphabet[9], 'k':alphabet[10], 
      'l':alphabet[11], 'm':alphabet[12], 'n':alphabet[13], 'o':alphabet[14], 'p':alphabet[15], 'q':alphabet[16], 'r':alphabet[17], 's':alphabet[18], 't':alphabet[19], 'u':alphabet[20],
      'v':alphabet[21], 'w':alphabet[22], 'x':alphabet[23], 'y':alphabet[24], 'z':alphabet[25]                
    };
    for(let i = 0; i < inputLowercase.length; i++){//Loops through lowercase input
      for( let [index, value] of Object.entries(encrypt)){//Loops through the keys and values of encrypt
        if(!Object.values(encrypt).includes(inputLowercase[i])){
          output.push(inputLowercase[i]);
          //If none of the keys of encrypt include the lowercase input character, add the input character to the output array
          break;
        }
       else if(inputLowercase[i].includes(value)){
        //If the lowercase input character includes the key of encrypt, add the associated value to output
          output.push(index)
        }
      }
    }
    const outputString = output.toString()
    const split = outputString.split(",").join("");
    //Change output to a string and then removes commas and separating spaces while keeping intentionally added spaces
    return split
  }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
