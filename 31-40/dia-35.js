const entrada = require ('prompt-sync')({sigint:true});

let data = String(entrada('Informe uma data no formato dd/mm/aaaa: '));

if (data.includes('/')) {
    const partes = data.split('/');

    if (partes.length === 3) {
        const dia = parseInt(partes[0], 10);
        const mes = parseInt(partes[1], 10);
        const ano = parseInt(partes[2], 10);

        if (dia > 0 && dia <= 31 && mes > 0 && mes <= 12 && ano > 0) {
            if ((mes === 4 || mes === 6 || mes === 9 || mes === 11) && dia > 30) {
                console.log('Data inválida (esse mês não tem mais de 30 dias).');
            }

            if (mes === 2) {
                const bissexto = (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
                if (dia > 29 || (dia === 29 && !bissexto)) {
                    console.log('Data inválida (fevereiro não tem esse dia)');
                }
            }

            console.log('Data válida.');
        } else {
            console.log('Data inválida (dia, mês ou ano fora do intervalo).');
        }
    } else {
        console.log('Formato de data inválido.');
    }
} else {
    console.log('Formato de data inválido.');
}
