// Destructuring Assignment

// Destructuring Array

const perkenalan = ['Halo', 'nama', 'saya', 'Usman Khabilah'];

// const [salam, satu, dua, nama] = perkenalan;

// skipping items
// const [salam, , , nama] = perkenalan;
// console.log(nama);

// swap items
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a, b] = [b, a];
// console.log(a);
// console.log(b);

// return value pada function
// function coba() {
//     return [1, 2];
// }

// const [a, b] = coba();
// console.log(a);

// rest parameter
// const [a, ...values] = [1, 2, 3, 4, 5, 6];
// console.log(a);
// console.log(values);


// Destructuring Object
// const mhs = {
//     nama : 'Usman Khabilah',
//     umur : 20
// }

// const {nama, umur} = mhs;
// console.log(nama); 

// Assignment tanpa deklarasi object
// ({nama, umur} = {
//     nama: 'Usman Khabilah',
//     umur: 20
// })
// console.log(nama); 

// Assignment ke variabel baru
// const mhs = {
//     nama: 'Usman Khabilah',
//     umur: 20
// }

// const {
//     nama: n,
//     umur: u
// } = mhs;
// console.log(n);

// Memberikan Default Value
const mhs = {
    nama : 'Usman Khabilah',
    umur : 20
}

const {nama, umur, email = 'email@default.com'} = mhs;
console.log(email); 
