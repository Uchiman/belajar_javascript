// Menggabungkan dua array
// const mhs = ['Usman', 'Hamzah', 'Fuad'];
// const dosen = ['Usamah', 'Afan'];

// const orang = [...mhs, 'Tobi', ...dosen];
// // const orang = mhs.concat(dosen);
// console.log(orang);

// meng-copy array
// const mhs = ['Usman', 'Hamzah', 'Fuad'];
// const mhs1 = [...mhs];
// mhs1[0] = 'Cimol';
// console.log(mhs);

// const liMhs = document.querySelectorAll('li');
// // const mhs = [];
// // for (let i = 0; i < liMhs.length; i++) {
// //     mhs.push(liMhs[i].textContent)
    
// // }
// // console.log(mhs);
// const mhs = [...liMhs].map(m => m.textContent);
// console.log(mhs);

const nama = document.querySelector('.nama');
const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('');
nama.innerHTML = huruf;