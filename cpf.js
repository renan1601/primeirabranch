function verificarCPF(cpf) {

    cpf = cpf.replace(/[^\d]/g, '');

    if (cpf.length !== 11) {
        return false;
    }

    let soma1 = 0;
    let peso1 = 10;
    for (let i = 0; i < 9; i++) {
        soma1 += parseInt(cpf[i]) * peso1;
        peso1--;
    }

    let resto1 = soma1 % 11;
    let digito1 = (resto1 < 2) ? 0 : 11 - resto1;

    let soma2 = 0;
    let peso2 = 11;
    for (let i = 0; i < 9; i++) {
        soma2 += parseInt(cpf[i]) * peso2;
        peso2--;
    }
    soma2 += digito1 * 2; 

    let resto2 = soma2 % 11;
    let digito2 = (resto2 < 2) ? 0 : 11 - resto2;

    if (parseInt(cpf[9]) === digito1 && parseInt(cpf[10]) === digito2) {
        return true;
    } else {
        return false;
    }
}

const cpf = "098.921.309-95";
if (verificarCPF(cpf)) {
    console.log("CPF válido.");
} else {
    console.log("CPF inválido.");
}
