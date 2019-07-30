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
for(var i = 1; i <= 100; i++){
  if( i %3 == 0){
    console.log(i+ " kelipatan 3")
  }
  else{
    console.log(i + ' ""')
  }
}
  
for(var i = 1; i <= 100; i++){
  if( i %6 == 0){
    console.log(i+ " kelipatan 6")
  }
  else{
    console.log(i + ' ""')
  }
}
  
for(var i = 1; i <= 100; i++){
  if( i %10 == 0){
    console.log(i+ " kelipatan 9")
  }
  else{
    console.log(i + ' ""')
  }
}