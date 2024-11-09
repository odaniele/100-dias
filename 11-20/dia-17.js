const entrada = require("prompt-sync")({sigint:true});

let tamanhoArquivo = parseFloat(entrada('Informe o tamanho (MB) do seu arquivo para Download: '));
let velocidadeInternet = parseFloat(entrada('Informe a velocidade (Mbps) da sua Internet: '));

let calculoDownload = tamanhoArquivo / (velocidadeInternet / 8);
calculoDownload /= 60;


console.log(`O tempo aproximado para conclusão do Download é ${calculoDownload.toFixed(2)} minutos.`);