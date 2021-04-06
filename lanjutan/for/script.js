// for..of
// Array
// const mhs = ['Usman', 'Hamzah', 'Usamah'];

// for (let i = 0; i < mhs.length; i++) {
//     const element = mhs[i];
//     console.log(element);
// }

// mhs.forEach(element => {
//     console.log(element);
// });

// for ( const m of mhs) {
//     console.log(m);
// }

// String
// const nama = 'Usman';
// for( const n of nama) {
//     console.log(n);
// }

// mhs.forEach((m, i) => {
//     console.log(`${m} adalah mahasiswa ke-${i + 1}`);
// });

// for( const [i, m] of mhs.entries()) {
//     console.log(`${m} adalah mahasiswa ke-${i + 1}`);
// }

// Nodelist

// const liNama = document.querySelectorAll('.nama');
// liNama.forEach(n => console.log(n.textContent));
// for( n of liNama){
//     console.log(n.innerHTML);
// }

// Arguments
// function jumlahkanAngka() {
//     // return arguments.reduce((a, i) => a+ i);
//     // arguments.forEach(a => jumlah += a);
//     let jumlah = 0;
//     for(a of arguments) {
//         jumlah += a;
//     }
//     return jumlah;
// }

// console.log(jumlahkanAngka(1, 2, 3, 4, 5)); 




// for..in
const mhs = {
    nama: 'Usman Khabilah',
    umur: 20,
    email: 'utsman.khabillah@gmail.com'
}

for(m in mhs) {
    console.log(`${m} : ${mhs[m]}`);
}