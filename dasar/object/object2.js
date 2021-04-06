// membuat object

// cara 1 - function declaration
function halo() {
    console.log('halo');
}
halo();

// cara 2 - object literial
var obj = {};
obj.halo = function () {
    console.log('halo');
}
obj.halo();

// cara 3 - constructor
function Halo() {
    console.log('halo');
}

new Halo();

// this
var a = 10;
console.log(this.a);