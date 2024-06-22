/* Arquivo onde terão todas as validações das entradas do usuário */

/* ---------- Seção de inicialização das variáveis ---------- */
const regex_num = /[0-9]/g; // Expressão regular para números
const regex_char = /[a-z|A-Z]/g; // Expressão regular para letras
const card_purchase_form = document.querySelector("#card_purchase_form");
const nome_char = document.querySelector("#nome_char");
const num_cartao = document.querySelector("#num_cartao");
const dt_venc = document.querySelector("#dt_venc");
const CVV = document.querySelector("#CVV");

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
nome_char.addEventListener("input", function(event) {
  if (isOnlyChar(nome_char.value) == false){
    this.value = this.value.replace(/[0-9]/g, '');
    alert("Proibido numeros neste campo!!");
  }

// Impedir que o usuário digite mais de 25 caracteres
if (nome_char.value.length >= 25){
  alert("Atingiu o limite de caracteres!!");
}
});

/* ---------- Validação de Número do cartão ---------- */
// Impedir que o usuário digite letras neste campo
num_cartao.addEventListener("input", function(event){
  if(isOnlyDigit(num_cartao.value) == false){
    this.value = this.value.replace(/[a-zA-Z]/g, '');
    alert("Proibido caracteres neste campo!!");
  }

  // Forçando digitar no campo nome
  //Impede de seguir para os proximos campos se nome estiver em branco!!
  if (nome_char.value === ""){
    alert("Campo nome está vazio!!");
    this.value = this.value.replace(/[0-9]/g, '');
  }



// Impedir que o usuário digite mais de 16 digitos
 if(num_cartao.value.length >= 16){
  alert("Atingiu o numero maximo de digitos");
 }
});

/* ---------- Validação de Data de vencimento ---------- */
// Impedir que o usuário digite letras neste campo
dt_venc.addEventListener("input", function(event){
  if(isOnlyDigit(dt_venc.value) ==false){
    alert("Proibido caracteres neste campo");
    this.value = this.value.replace(/[a-zA-Z]/g, '');
  }


  // Forçando digitar no campo nome
  //Impede de seguir para os proximos campos se nome estiver em branco!!
  if (nome_char.value === ""){
    alert("Campo nome está vazio!!");
    this.value = this.value.replace(/[0-9]/g, '');
  }


// Impedir que o usuário digite mais de 4 digitos 
if(dt_venc.value.length >= 4){
  alert("Atingiu o numero maximo de digitos");
}

  // O codigo que aplica o max. de digitos esta no HTML

// Verificar se o mês > 1 && mês < 12
if(dt_venc.value.length = 2 && dt_venc.value > 1250){
  alert("Mes/Ano incorreto!!");
  this.value = this.value.replace(/[0-9]/g, '');
}
// Verificar se o ano tem mínimo de 4 números
  // Está verificando no vento abaixo
});
/* ---------- Validação de código de verificação ---------- */
CVV.addEventListener("input", function(event){

  // Forçando digitar no campo nome
  //Impede de seguir para os proximos campos se nome estiver em branco!!
  if (nome_char.value === ""){
    alert("Campo nome está vazio!!");
    this.value = this.value.replace(/[0-9]/g, '');
  }

  // Verificar a data de vencimento tem no mínimo de 4 números
  if(dt_venc.value.length < 4){
    alert("data de vencimento não atingiu os 4 digitos!");
    this.value = this.value.replace(/[0-9]/g, '');
  }

// Impedir que o usuário digite letras neste campo
if (isOnlyDigit(CVV) == false){
  alert("Não é permitido caracteres neste campo!!");
  this.value = this.value.replace(/[a-zA-Z]/g, '');
}
// impedir que o usuário digite mais de 3 digitos
  // Essa função está no HTML
  if(CVV >= 3){
    alert("Você atingiu o numero maximo de digitos!!");
  }
});


// Retorna se um valor é composto apenas por números
function isOnlyDigit(valor) {
  return valor.match(regex_char) ? false : true;
}

// Retorna se um valor é composto apenas por letras
function isOnlyChar(valor) {
  return valor.match(regex_num) ? false : true;
}
