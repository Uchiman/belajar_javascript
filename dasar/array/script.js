// manipulasi array

// 1. menambah isi array
// var arr = [];
// arr[0] = 'Usman';
// arr[1] = 'Hamzah';
// arr[2] = 'Fuad';
// console.log(arr);

// 2. menghapus isi array
// var arr = ["Usman", "Hamzah", "Fuad"];
// arr[1] = undefined;
// console.log(arr);

// 3. menampilkan isi array
// var arr = ["Usman", "Hamzah", "Fuad"];
// for( var i = 0; i < arr.length; i++) {
//     console.log('Mahasiswa ke-' + (i+1) + ' : ' + arr[i]);
// }

// Method pada array
var arr = ["Usman", "Hamzah", "Fuad"];

// 1. join
// console.log(arr.join(' - '));

// 2. push & pop (elemen terakhir)
// arr.push('Usamah', 'Afan);
// arr.pop()
// console.log(arr.join(' - '));

// 3. unshift & shift (elemen pertama)
// arr.unshift('Usamah', 'Affan')
// arr.shift();
// console.log(arr.join(' - '));

// 4. splice
// splice(indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2, ...)
// arr.splice(2, 0, 'Usamah', 'Afan');
// console.log(arr.join(' - '));

// 5. slice
// slice(awal, akhir)
// var arr = ["Usman", "Hamzah", "Fuad", "Usamah", "Afan"];
// var arr2 = arr.slice(1, 4);
// console.log(arr2.join(' - '));

// 6. foreach
var angka = [1, 2, 3, 4, 5, 6, 7, 8];
var nama = ["Usman", "Hamzah", "Fuad", "Usamah", "Afan"];
// for (var i = 0; i < angka.length; i++) {
//     console.log(angka[i]);
// }
// angka.forEach(function (e) {
//     console.log(e);
// })
// nama.forEach(function (e, i) {
//     console.log('Mahasiswa ke-' + (i+1) + ' adalah ' + e )
// })

// 7. map
// var angka = [1, 2, 5, 6, 7, 6, 4, 9];
// var angka2 = angka.map(function (e) {
//     return e * 2;
// })
// console.log(angka2.join(' - '));

//  8.sort
// var angka = [1, 2, 6, 4, 20, 10, 9];
// console.log(angka.join(' - '));
// angka.sort(function (a, b) {
//     return a - b;
// });
// console.log(angka.join(' - '));

// 9. filter & find
var angka = [1, 2, 6, 4, 20, 10, 9];
// var angka2 = angka.filter(function (x) {
//     return x > 5;
// })
// console.log(angka2.join(' - '));
var angka2 = angka.find(function (x) {
    return x > 5;
})
// console.log(angka2);
