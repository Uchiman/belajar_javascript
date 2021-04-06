// Membuat Object
// Object Literial
var mhs = {
    nama : 'Usman Khabilah',
    uid : '087689548',
    email : 'utsman.khabillah@@gmail.com',
    jurusan : 'Fiqih'
}

var mhs2 = {
    nama : 'Hamzah',
    uid : '087839743',
    email : 'hamzah@@gmail.com',
    jurusan : 'Hadits'
}

// Function Declaration
function buatObjectMahasiswa(nama, uid, email, jurusan) {
    var mhs = {};
    mhs.nama = nama;
    mhs.uid = uid;
    mhs.email = email;
    mhs.jurusan = jurusan;
    return mhs;
}

var mhs3 = buatObjectMahasiswa('Usamah Al-Faruq', '087843697', 'usamahalfaruq.com', 'Hadits');

// Constructor
function Mahasiswa(nama, uid, email, jurusan) {
    this.nama = nama;
    this.uid = uid;
    this.email = email;
    this.jurusan = jurusan;
}

var mhs4 = new Mahasiswa('Muhammad Nur Fuadi', '087565843', 'mnurfuadi@gmail.com', 'Hadits');


