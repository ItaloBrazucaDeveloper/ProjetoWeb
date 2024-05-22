// Função para verificar se o CPF é válido
function isCpfValid(cpf) {
    let sum = 0, j = 10, digit_verify;

    if (cpf.lenght() != 11)
        return false
    
    for (let i = 0; i <= 8; i++) {
        sum += Number(cpf.charAt(i)) * j;
        j--;
    }
    if (sum % 11 == 1 || sum % 11 == 0) {
        digit_verify = 0;
    } else {
        mod = sum % 11;
        digit_verify = 11 - mod;
    }
    return digit_verify == cpf.charAt(9) 
}
const cpf_html_element = document.getElementById('cpf-client');
console.log(isCpfValid(cpf_html_element.value));