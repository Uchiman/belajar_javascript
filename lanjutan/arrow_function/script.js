// Function Expression
// const tampilNama = function (nama) {
//     return `Halo, ${nama}`;
// }

// console.log(tampilNama('Usman'));

// Arrow Function
// const tampilNama = (nama) => {
//     return `Halo, ${nama}`;
// }
// console.log(tampilNama('Usman Khabilah'));

// const tampilNama = (nama, waktu) => {
//     return `Selamat ${waktu}, ${nama};`
// }
// console.log(tampilNama('Usman', 'sore'));

// const tampilNama = nama => `Halo, ${nama}`;
// console.log(tampilNama('Usman'));

// const tampilNama = () => `Hello World`;

// console.log(tampilNama());

// let mahasiswa = ['Usman Khabilah', 'Hamzah', 'Muhammad Nur Fuadi'];

// let jumlahHuruf = mahasiswa.map(function (nama) {
//     return nama.length;
// });
// console.log(jumlahHuruf);

// let jumlahHuruf = mahasiswa.map(nama => ({nama, jmlHuruf: nama.length}));
// console.table(jumlahHuruf);

// CONSTRUCTOR FUNCTION

// const Mahasiswa = function () {
//     this.nama = 'Usman';
//     this.umur = 20;
//     this.sayHello = function () {
//         console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun`);
//     }
// }

// const usman = new Mahasiswa();

// Arrow Function

// const Mahasiswa = function () {
//     this.nama = 'Usman';
//     this.umur = 20;
//     this.sayHello = () => {
//         console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//     }
// }

// const usman = new Mahasiswa();

// Object Literal

// const mhs1 = {
//     nama : 'Usman KHabilah',
//     umur : 20,
//     sayhello : () => {
//         // console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//         console.log(this);
//     }
// }

// const Mahasiswa = function () {
//     this.nama = 'Usman';
//     this.umur = 20;
//     this.sayHello = function () {
//         console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun`);
//     }

//     setInterval(() => {
//         console.log(this.umur++);
//     }, 1000);
// }

// const usman = new Mahasiswa();

const box = document.querySelector('.box');
box.addEventListener('click', function () {
    let satu = 'size';
    let dua = 'caption';

    if (this.classList.contains(satu)) {
        [satu, dua] = [dua, satu];
    }

    this.classList.toggle(satu);
    setTimeout(() => {
        this.classList.toggle(dua);
    }, 600);
});