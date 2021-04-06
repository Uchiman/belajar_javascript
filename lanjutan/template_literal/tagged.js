// const nama = 'Usman Khabilah';
// const umur = 20;

// function coba(strings, ...values) {
//     // let result = '';
//     // strings.forEach((str, i) => {
//     //     result += `${str}${values[i] || ''}`
//     // });
//     // return result;
//     return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''}`,'')
// }

// const str = coba`Halo, nama saya ${nama}, saya ${umur} tahun.`;
// console.log(str);

// Highlight
const nama = 'Usman Khabilah';
const umur = 20;

function coba(strings, ...values) {
    return strings.reduce((result, str, i) => `${result}${str}<span class="hl"> ${values[i] || ''}</span>`, '')
}

const str = coba `Halo, nama saya ${nama}, saya ${umur} tahun.`;
console.log(str);
document.body.innerHTML = str;