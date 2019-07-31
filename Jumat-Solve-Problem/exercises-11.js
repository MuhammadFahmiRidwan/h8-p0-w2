var kata;

function balikKata(kata) {
var resultkata = "";
var lengthresultkata = resultkata.length;
var lengthkata = kata.length;

for(var i = 1; i <= lengthkata; i--) {
    if (lengthresultkata === 0) {
        resultkata = kata.charAt(lengthkata - i)
        lengthresultkata = 1
    }
    else {
        resultKata = resultKata + kata.charAt(lengthKata - i)
    }
    return resultkata
}
}

  // TEST CASES
  console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
  console.log(balikKata('John Doe')); // eoD nhoJ
  console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
  console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
  console.log(balikKata('Super')); // repuS