// 1. HTML Fragments
// const mhs = {
//     nama: 'Usman Khabilah',
//     umur: 20,
//     nrp : '8657248',
//     email: 'utsman.khabillah@gmail.com'
// };

// const el = `<div class="mhs">
// <h2>${mhs.nama}</h2>
// <span class="nrp">${mhs.nrp}</span>
// </div>`;

// console.log(el);

// 2. Looping
// const mhs = [{
//         nama: 'Usman Khabilah',
//         email: 'utsman.khabillah@gmail.com'
//     },
//     {
//         nama: 'Hamzah',
//         email: 'hamzah@gmail.com'
//     }
// ];

// const el = `<div class="mhs">
//     ${mhs.map(m => `<ul>
//     <li>${m.nama}</li>
//     <li>${m.email}</li>
//     </ul>`).join('')};
// </div>`

// 3. Conditionals
// ternary
// const lagu = {
//     judul: 'Kau Adalah',
//     penyanyi: 'Isyana Saraswati',
//     feat: 'Rayi Putra'
// }
// const el = `<div class="lagu">
//     <ul>
//         <li>${lagu.penyanyi}</li>
//         <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ''}</li>
//     </ul>
// </div>`

// 4. Nested
// HTML Fragments bersarang

const mhs = {
    nama : 'Usman Khabilah',
    semester : 5,
    mataKuliah: [
        'Rekayasa Web',
        'Analisis dan Perancagan Sistem Informasi',
        'Pemrograman Sistem Interaktif',
        'Perancangan Sistem Berorientasi Object'
    ]
};

function cetakMataKuliah(mataKuliah) {
    return `
    <ol>
    ${mataKuliah.map(mk => `<li>${mk}</li>`).join('')}
    </ol>
    `;
}

const el = ` <div class="mhs">
<h2>${mhs.nama}</h2>
<span class="semester">${mhs.semester}</span>
<h4>Mata Kuliah :</h4>
${cetakMataKuliah(mhs.mataKuliah)}
</div>`; 
document.body.innerHTML = el;