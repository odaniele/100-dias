const entrada = require ("prompt-sync")({sigint:true});

let nome;
    do {
        nome = entrada("Digite o nome (deve ter mais de 3 caracteres): ");
        if (nome.length <= 3) {
            console.log("Nome inválido. Deve conter mais de 3 caracteres.");
        }
    } while (nome.length <= 3);

let idade;
    do {
        idade = parseInt(entrada("Digite a idade (entre 0 e 150): "), 10);
        if (isNaN(idade) || idade < 0 || idade > 150) {
            console.log("Idade inválida. Deve estar entre 0 e 150.");
        }
    } while (isNaN(idade) || idade < 0 || idade > 150);

let salario;
    do {
        salario = parseFloat(entrada("Digite o salário (maior que 0): "));
        if (isNaN(salario) || salario <= 0) {
            console.log("Salário inválido. Deve ser maior que zero.");
        }
    } while (isNaN(salario) || salario <= 0);

let sexo;
    do {
        sexo = entrada("Digite o sexo ('f' ou 'm'): ").toLowerCase();
        if (sexo !== 'f' && sexo !== 'm') {
            console.log("Sexo inválido. Deve ser 'f' ou 'm'.");
        }
    } while (sexo !== 'f' && sexo !== 'm');

let estadoCivil;
    do {
        estadoCivil = entrada("Digite o estado civil ('s', 'c', 'v', 'd'): ").toLowerCase();
        if (!['s', 'c', 'v', 'd'].includes(estadoCivil)) {
            console.log("Estado civil inválido. Deve ser 's', 'c', 'v' ou 'd'.");
        }
    } while (!['s', 'c', 'v', 'd'].includes(estadoCivil));

    console.log("\nInformações validadas com sucesso:");
    console.log(`Nome: ${nome}`);
    console.log(`Idade: ${idade}`);
    console.log(`Salário: ${salario}`);
    console.log(`Sexo: ${sexo}`);
    console.log(`Estado Civil: ${estadoCivil}`);