/* Arquivo onde terão todas as validações das entradas do usuário */

/* ---------- Seção de inicialização das variáveis ---------- */
const regex_num = /[0-9]/g; // Expressão regular para números
const regex_char = /[a-z|A-Z]/g; // Expressão regular para letras


// Daniel
/* ---------- Validação de CPF ---------- */
// Impedir que o usuário digite letras neste campo
// Fazer o cálculo matemático para verificar CPF

/* ---------- Validação de Telefone ---------- */
// Impedir que o usuário digite letras neste campo
// impedir que o usuário coloque mais de 11 número


// Bénicio
/* ---------- Validação de Nome Titular ---------- */
// Impedir que o usuário digite números neste campo
// Impedir que o usuário digite mais de 25 caracteres

/* ---------- Validação de Número do cartão ---------- */
// Impedir que o usuário digite letras neste campo
// Impedir que o usuário digite mais de 16 digitos

/* ---------- Validação de Data de vencimento ---------- */
// Impedir que o usuário digite letras neste campo
// Impedir que o usuário digite mais de 4 digitos
// Verificar se o mês > 1 && mês < 12
// Verificar se o ano tem mínimo de 4 números

/* ---------- Validação de código de verificação ---------- */
// Impedir que o usuário digite letras neste campo
// impedir que o usuário digite mais de 3 digitos


// Retorna se um valor é composto apenas por números
function isOnlyDigit(valor) {
  return valor.match(regex_char) ? false : true;
}

// Retorna se um valor é composto apenas por letras
function isOnlyChar(valor) {
  return valor.match(regex_num) ? false : true;
}
