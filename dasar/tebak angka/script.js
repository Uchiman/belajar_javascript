// p
var up = 3;
var p = prompt('Pilih angka dari 1 - 9!' + '\n' + 'Kesempatan anda tersisa ' + up);

// num
var num = Math.floor(Math.random() * 9) + 1;

// rules
var hasil = '';
if (p < num) {
    hasil = 'Angka anda terlalu rendah!';
} else if( p > num ) {
    hasil = 'Angka anda terlalu tinggi!';
} else {
    hasil = 'BINGO!';
}

// result
alert(hasil);