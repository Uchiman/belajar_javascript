function kerjakanTugas(matakuliah, selesai) {
    console.log(`Mulai mengerjakan tugas ${matakuliah} ...`);
    selesai();
}

function selesai() {
    setTimeout(() => {
        alert('Selesai mengerjakan tugas!');
    },2000);
}

kerjakanTugas('Fiqih', selesai);
