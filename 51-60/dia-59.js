const entrada = require ('prompt-sync') ({sigint:true});

let a = 0;
let b = 1;

while (b <= 800) {
    console.log(b);
    let proximoNum = a + b;
    a = b;
    b = proximoNum;
}