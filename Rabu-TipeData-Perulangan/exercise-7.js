// 1. Menyusun Barisan Bintang
var rows1 = 5

for(var i = 0; i < rows1; i++) {
  console.log("*")
}

var arsiteks = ""
var rows2 = 5

// 2. Menyusun Barisan Bintang Dengan Nested Looping
for(var i = 0; i < rows2; i++) {
  for(var j = 0; j < rows2; j++){
    arsiteks += "*"
  }
  arsiteks += "\n"
}
console.log(arsiteks)

// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
var arsiteks = ""
var rows3 = 5

for(var i = 0; i < rows3; i++){
  for(var j =0; j <= i; j++ ){
  arsiteks += "*"
  }
  arsiteks += "\n"
}
console.log(arsiteks)