// Variáveis da seção de indentificação
const email_html_element = document.getElementById('client-email');
let email;
const name_html_element = document.getElementById('client-name');
let name;
const tel_html_element = document.getElementById('client-phone-number');
let tel;
const cpf_html_element = document.getElementById('cpf-client');
let cpf;


// Máscara de CPF
cpf_html_element.addEventListener('input', () => {
    cpf_length = cpf_html_element.value.length;
    if (cpf_length == 3 || cpf_length == 7) {
        cpf_html_element.value += '.';
    } else if (cpf_length == 11) {
        cpf_html_element.value += '-';
    }
});
// Máscara de Telefone
tel_html_element.addEventListener('input', () => {
    tel_length = tel_html_element.value.length;
    if (tel_length == 0) {
        tel_html_element.value += '(';
    } else if (tel_length == 3) {
        tel_html_element.value += ') ';
    }
    if (tel_length == 6) {
        tel_html_element.value += '.';
    } else if (tel_length == 11) {
        tel_html_element.value += '-';
    }
});

function changeBorderColor() {
    if (isCpfValid() == true)
        cpf_html_element.style.outline = '2px solid #00ff00';
    else
        cpf_html_element.style.outline = '2px solid #ff0000';
}

// Funções para verificar o CPF
function isCpfValid() {
    cpf = cpf_html_element.value.replace(/\D/g, '').trim();
    return (cpf == '00000000000' || cpf.length != 11) ? false : calcVerifyDigitCpf();
}
function calcVerifyDigitCpf() {
    let count = 1, verify_count = 0, sum,
        multiplier = 10, limit = 9, digit_verify, mod;

    while (count <= 2) {
        sum = 0;
        for (let i = 0; i < limit; i++) {
            sum += Number(cpf.charAt(i)) * multiplier;
            multiplier--;
        }
        mod = sum % 11;
        digit_verify = (mod < 2 && mod > 0) ? 0 : 11 - mod;
        
        if (count == 1 && digit_verify == cpf.charAt(9)) {
            verify_count++;
        }
        else if (digit_verify == cpf.charAt(10)) {
            verify_count++;
        }
        limit = 10;
        multiplier = 11;
        count++;
    }
    return verify_count == 2;
}