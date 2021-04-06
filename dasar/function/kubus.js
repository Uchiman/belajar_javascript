// // kubus
// var kubusA = 8;
// var kubusB = 3;

// // hitung volume kubus
// function hitungVolume(sisi) {
//     var volume = Math.pow(sisi, 3);
//     return(volume);
// }

// var volumeA = hitungVolume(kubusA);
// var volumeB = hitungVolume(kubusB);

// // hitung penjumlahan volume
// function jumlahVolume(volA, volB) {
//     var hasil = volA + volB;
//     console.log('hasilnya adalah = ' + hasil);
// }

// jumlahVolume(volumeA, volumeB);

// cara cepat

function jumlahVolumeDuaKubus(a, b) {
    return a * a * a + b * b * b;
}

console.log(jumlahVolumeDuaKubus(8,3));