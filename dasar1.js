//cara membuat variabel
var a = 'a';
let b = 'b';
const c = 'c';

//tipe data
let nama = "bryan"; //string
let umur = 22; //number
let apakahBenar = false; //boolean
let berat = 16.5; //number dengan koma

//operator matematika
let angka1 = 10;
let angka2 = 20;

console.log(angka1 + angka2);
console.log(angka1 - angka2);
console.log(angka1 * angka2);
console.log(angka1 / angka2);
console.log(angka1 % angka2);

//menyimpan hasil perhitungan dalam sebuah variabel
let hasilHitung = angka1 + angka2;
console.log(hasilHitung); // 30
hasilHitung = angka1 - angka2;
console.log(hasilHitung); // -10
hasilHitung = angka1 * angka2;
console.log(hasilHitung); // 200
hasilHitung = angka1 / angka2;
console.log(hasilHitung); // 0.5
hasilHitung = angka1 % angka2;
console.log(hasilHitung); // 10


//menggabungkan string
let firstName = "Rama";
let lastName = "Wijaya";
let fullName = firstName + " " + lastName;
console.log(fullName);

//alur pembacaan code
let number = 20;
console.log(number + 10); // 30
number = 10;
console.log(number + 10); // 20

number = false;
console.log(number + 10); // 10 karena false = 0 true = 1, jadi 0 + 10 = 10

console.log(true + 10); // 11

//error
const hewan = 'zebra';
console.log(hewan);

hewan = 'sapi';  //error karena variabel hewan bersipat konstan


