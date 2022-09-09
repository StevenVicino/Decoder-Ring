// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
const encrypt ={//An encrypt object used when encoding
  'a':11, 'b':21, 'c':31, 'd':41, 'e':51, 'f':12, 'g':22, 'h':32, 'i':42, 'j':42, 'k':52, 
  'l':13, 'm':23, 'n':33, 'o':43, 'p':53, 'q':14, 'r':24, 's':34, 't':44, 'u':54,
  'v':15, 'w':25, 'x':35, 'y':45, 'z':55                
};
const decrypt ={//A decrypt object used when decoding
  'a':'11', 'b':'21', 'c':'31', 'd':'41', 'e':'51', 'f':'12', 'g':'22', 'h':'32', "(i/j)":'42', 'k':'52', 
  'l':'13', 'm':'23', 'n':'33', 'o':'43', 'p':'53', 'q':'14', 'r':'24', 's':'34', 't':'44', 'u':'54',
  'v':'15', 'w':'25', 'x':'35', 'y':'45', 'z':'55'                
};


  function polybius(input, encode = true) {
    let output =[];
    if(encode === true){//Following code runs when we are encoding
      const inputLowercase = input.toLowerCase();//Changes input to lowercase
    for(let i = 0; i < inputLowercase.length; i++){//Loops through lowercase input
      for(let [index,value] of Object.entries(encrypt)){
        //Loops through the keys and the values of encrypt
        if(!Object.keys(encrypt).includes(inputLowercase[i])){
          //If the keys of encrypt does not include the lowercase input character, add that character to output array
          output.push(inputLowercase[i]);
          break;
        }
       else if(inputLowercase[i].includes(index)){
        //If the lowercase input character includes the key of encrypt, push the associated value
          output.push(value)
        }
      }
    }
    const outputString = output.toString()
    const split = outputString.split(",").join("");
    //Turns the output to a string, removes the commas and removes the separating spaces while keeping the spaces that were intentionally pushed into output
    return split
  }
  else if(encode === false){//Following code runs while we are decoding
    let inputByTwo = input.match(/[0-9]{2}|[a-z]|\s/g);//Creates a new variable that pairs all every two characters of input together, ignoring spaces
    let noSpaces = input.replace(/ /g,'');//Creates a new variable of input with spaces removed
    if(noSpaces.length%2 !== 0){//Returns false if there is an odd number of characters in input, ignoring spaces
      return false;
    }
    else{
    for(let i = 0; i < inputByTwo.length; i++){//Loops through inputByTwo
      for(let [index,value] of Object.entries(decrypt)){//Loops through the keys and values of decrypt
        if(!Object.values(decrypt).includes(inputByTwo[i])){
           //If the keys of decrypt does not include the lowercase input character, add that character to output array
          output.push(inputByTwo[i]);
          break;
        }
        else if(inputByTwo[i].includes(value)){
          //If the lowercase input character includes the key of encrypt, push the associated value
          output.push(index)
        }
        }
      }
  }
  const outputString = output.toString()
  const split = outputString.split(",").join("");
  //Turns the output to a string, removes the commas and removes the separating spaces while keeping the spaces that were intentionally pushed into output
  return split
}
  }
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
