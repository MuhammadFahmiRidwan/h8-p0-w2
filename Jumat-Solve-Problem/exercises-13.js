function xo(str) {
    let resultX = ''
    let resultY = ''

    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'x') {
            resultX = resultX + 1
        }
        else {
            resultY = resultY + 1
        }
    }
    if (resultX === resultY) {
        return true
    }
    else { 
        return false
    }
  }
  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true