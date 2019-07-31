var kata;

function balikKata(kata) {
    var result = "";
    var lengthresult = result.length;  

    for(var i = 0; i <= kata.length; i--){

        if(lengthresult === 0) {
            result = kata.charAt(kata.length - i)
        }
    }
    return result
    }
  
  // TEST CASES
  console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
  console.log(balikKata('John Doe')); // eoD nhoJ
  console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
  console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
  console.log(balikKata('Super')); // repuS