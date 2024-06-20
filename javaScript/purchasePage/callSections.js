/* Variável que permite controlar a rolagem da página */
const body = document.querySelector("body");
/* Variável que permite controlar a animação da barra de progresso */
const progress_count = document.getElementsByClassName("progress-count");
/* Elementos HTML clicavéis */
const plan_cards = document.getElementsByClassName("plan_card");
const confirm_idClient = document.querySelector("#client-id .button.a");
const confirm_info_card = document.getElementById("confirm_info-card");
const choice_payment_type = document.getElementsByClassName("pay_type_radio");
/* Variável que armazena o plano escolhido */
let plan_choice;

function changeClasses(i) {
  body.classList.toggle("blocked");
  progress_count[i].classList.toggle("done");
  progress_count[i + 1].classList.toggle("close");
}

body.onload = () => {
  window.scrollTo(0, 0);
};

/* ---------- Eventos de ONCLICK ---------- */
for (const plan_card of plan_cards) {
  plan_card.onclick = () => {
    plan_choice = plan_card.getAttribute("id");
    changeClasses(0);
  };
}

confirm_idClient.onclick = () => {
  changeClasses(1);
};

confirm_info_card.onclick = () => {
  changeClasses(2);
}
