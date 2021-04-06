// function init() {
//     let nama = 'Usman';
//     function tampilNama() {
//         console.log(nama); 
//     }
//     tampilNama();
// }
// init();

// function int() {
//     return function (nama) {
//         console.log(nama);
//     }
// }

// let panggilNama = int();
// panggilNama('Usman');

// function ucapkanSalam(waktu) {
//     return function (nama) {
//         console.log(`Halo ${nama}, Selamat ${waktu}, semoga harimu menyenangkan`);
//     }
// }

// let selamatPagi = ucapkanSalam('Pagi');
// let selamatSiang = ucapkanSalam('Siang');
// let selamatMalam = ucapkanSalam('Malam');

// selamatPagi('Usman');


let add = (function () {
    let counter = 0;
    return function () {
        return ++ counter;
    };
}) ();

counter = 100;

console.log(add());
console.log(add());
console.log(add());