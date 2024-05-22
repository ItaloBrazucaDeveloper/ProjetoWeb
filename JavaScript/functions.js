// Função para verificar se o CPF é válido
function isCpfValid() {
    const cpf_html_element = document.querySelector('#cpf-client');
    const cpf = document.getElementById('cpf-client').value;
    let sum = 0, j = 10, limit = 9, verify_count = 0, count = 0, digit_verify, mod;

    if (cpf == '00000000000' || cpf.length < 11) {
        cpf_html_element.style.outline = '1px solid #ff0000';
        return false;
    } 

    while (count < 2) {
        for (let i = 0; i <= limit; i++) {
            sum += Number(cpf.charAt(i)) * j;
            j--;
        }
        mod = sum % 11;
        if (mod == 0 || mod == 1) {
            digit_verify = 0;
        }
        else {
            digit_verify = 11 - mod;
        }
        if (limit == 8 && digit_verify == cpf.charAt(10)) {
            verify_count++;
        }
        else if (digit_verify == cpf.charAt(11)) {
            verify_count++;
        }
        limit = 10;
        j = 11;
        count++;
    }
    if (verify_count == 2)
        cpf_html_element.style.outline = '1px solid #00ff00';
    else
        cpf_html_element.style.outline = '1px solid #ff0000';
}