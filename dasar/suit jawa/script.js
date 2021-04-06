var tanya = true;
while (tanya == true) {
    // menangkap pilihan player
    var p = prompt('pilih: gajah, semut, orang');

    // menangkap pilihan computer
    // membangkitkan bilangan random
    var com = Math.random();

    if (com < 0.34) {
        com = 'gajah';
    } else if (com >= 0.34 && com < 0.67) {
        com = 'orang';
    } else {
        com = 'semut';
    }

    var hasil = '';
    // menentukan rules
    if (p == com) {
        hasil = 'SERI!';
    } else if (p == 'gajah') {
        // if(com == 'orang') {
        //     hasil = 'MENANG!';
        // } else {
        //     hasil = 'KALAH!';
        // }
        hasil = (com == 'orang') ? 'MENANG!' : 'KALAH!';
    } else if (p == 'orang') {
        // if(com == 'semut') {
        //     hasil = 'MENANG!';
        // } else {
        //     hasil = 'KALAH!';
        // }
        hasil = (com == 'semut') ? 'MENANG!' : 'KALAH';
    } else if (p == 'semut') {
        // if (com == gajah) {
        //     hasil = 'MENANG!';
        // } else {
        //     hasil ='KALAH!';
        // }
        hasil = (com == 'gajah') ? 'MENANG!' : 'KALAH!';
    } else {
        hasil = 'Memasukkan pilihan yang salah!';
    }

    // tampilkan hasilnya
    alert('Kamu memilih ' + p + ' dan komputer memilih ' + com + ' dan hasilnya adalah ' + hasil);

    tanya = confirm('Mau main lagi?');
}
alert('Terima kasih sudah bermain');