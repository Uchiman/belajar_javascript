// ambil semua elemen vdeo
const videos = Array.from(document.querySelectorAll('[data-duration]'));

// pilih hanya yang javascript lanjutan
let jsLanjut = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))

// amnbiln durasi msaing-masing video
.map(item => item.dataset.duration)

// ubah durasi jadi float, ubah menit menjadi detik
.map(waktu => {
    // 10:30 -> [10, 30] split
    const parts = waktu.split(':').map(part => parseFloat(part));
    return (parts[0] * 60) + parts[1];
})

// jumlahkan semua detiknya
.reduce((total, detik) => total + detik);

// ubah formatnya jadi jam menit detik
const jam = Math.floor(jsLanjut / 3600);
jsLanjut = jsLanjut - jam * 3600;
const menit = Math.floor(jsLanjut / 60);
const detik = jsLanjut - menit * 60;

// simpan di dom
const pDurasi = document.querySelector('.total-durasi');
pDurasi.textContent = ` ${jam} Jam, ${menit} Menit, ${detik} Detik`;
const jmlVideo = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;
const pJmlVideo = document.querySelector('.jumlah-video');
pJmlVideo.textContent = `${jmlVideo} Video`;