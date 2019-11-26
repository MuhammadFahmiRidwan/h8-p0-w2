// Tugas 1
function shoutOut() {
    return "Halo Function"
}

console.log(shoutOut()) // Menampilkan "Halo Function!" di console



// Tugas 2
var nilai1, nilai2; 
var num1 = 5;
var num2 = 6;

function calculateMultiply(nilai1, nilai2) {
    var  result
    result = nilai1*nilai2
    return result
}


var hasilPerkalian = calculateMultiply(num1,num2);
console.log(hasilPerkalian); // Menampilkan angka 30


// Tugas 3


var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var cname, cage, caddress, chobby;

function processSentence(cname, cage, caddress, chobby) {
    var sentenceresult
    return "Nama saya " + cname + " Umur saya " + cage + " Alamat saya di " + caddress + " dan saya punya hobby yaitu " + chobby
}

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence); // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro,