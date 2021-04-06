// 2.1 EXECUTION CONTEXT, HOISTING & SCOPE

// console.log(nama);
// var nama = 'Usman';

// creation phase pada Global Context
// nama var = undefined
// nama function = fn()
// hoisting 
// window = global object 
// this = window 

// execution phase

// console.log(sayHello());

// var nama = 'Usman';
// var umur = 20;

// function sayHello(nama, umur) {
//     return `Halo, nama saya ${this.nama}, umur ${this.umur} tahun`
// }

// function membuat Local Execution Content
// yang didalamnya terdapat creation dan execution phase
// window
// argument
// hoisting

var nama= 'Usman';
var username = 'uchiman_dev';

function cetakURL(username) {
    var instagramURL = 'http://instagram.com/';
    return instagramURL + username;
}

console.log(cetakURL(username));