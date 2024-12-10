const entrada = require ('prompt-sync')({sigint:true});

let numerosVertical = 1;

while (numerosVertical <= 20) {
    console.log(numerosVertical);
    numerosVertical++;
};


for (let i = 1; i <= 20; i++) {
    process.stdout.write(i + " ");
}
console.log(); 
