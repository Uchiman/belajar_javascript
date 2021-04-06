// Destructuring

// function penjumlahanPerkalian(a, b) {
//     return [a + b, a - b, a * b, a / b];
// }

// function kalkulasi(a, b) {
//     return {
//         tambah: a + b,
//         kurang: a - b,
//         kali: a * b,
//         bagi: a / b
//     }
// }

// const jumlah = penjumlahanPerkalian(2, 3)[0];
// const kali = penjumlahanPerkalian(2, 3)[1];
// const [tambah, kurang, kali, bagi] = penjumlahanPerkalian(2, 3);
// const {
//     kali,
//     kurang,
//     tambah,
//     bagi
// } = kalkulasi(2, 3);
// console.log(tambah);
// console.log(kali);

// Destructuring function arguments
const mhs1 = {
    nama: 'Usman Khabilah',
    umur: 20,
    email: 'utsman.khabillah@gmail.com',
    nilai: {
        tugas: 80,
        uts: 85,
        uas: 75
    }
}

// function cetakMhs(mhs) {
//     return `Halo, nama saya ${mhs.nama}, saya ${mhs.umur} tahun.`;
// }

// console.log(cetakMhs(mhs1));

function cetakMhs({nama, umur, nilai: {tugas, uts, uas}}) {
    return `Halo, nama saya ${nama}, saya ${umur} tahun, dan nilai uas saya adalah ${uas}`;
}
 
console.log(cetakMhs(mhs1));