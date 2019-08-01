// Loopnig Menggunakan While 
console.log('loop pertama')
// Looping pertama
var jumlah = 1;
while(jumlah <= 20) {
  if (jumlah %2 == 0) {
  console.log(jumlah + " - I love coding"); 
  }
  jumlah++; 
}

console.log('loop kedua')
// Looping kedua
var jumlah = 20;
while(jumlah >= 1) {
  if (jumlah %2 == 0) {
  console.log(jumlah + " - I will become full stack developer"); 
  }
  jumlah--; 
}



// Looping Menggunakan For

console.log('loop pertama')
// Looping pertama
for(var i = 1; i <= 20; i++) {
    console.log(i + ' - I love Coding')
}

console.log('loop kedua')
// Looping kedua
for(var i = 20; i >= 1; i--) {
  console.log(i + ' - I will become full stack developer')
}

// Angka Ganjil dan Genap
// Looping 1
for(var inc = 1; inc <= 100; inc+=2){
  if( inc %3 == 0){
    console.log(inc + " kelipatan 3")
  }
  else{
    console.log(inc + ' ""')
  }
}
  
for(var inc2 = 1; inc2 <= 100; inc2+=5){
  if( inc2 %6 == 0){
    console.log(inc2 + " kelipatan 6")
  }
  else{
    console.log(inc2 + ' ""')
  }
}
  
for(var inc3 = 1; inc3 <= 100; inc3+=9){
  if( inc3 %10 == 0){
    console.log(inc3+ " kelipatan 10")
  }
  else{
    console.log(inc3 + ' ""')
  }
}