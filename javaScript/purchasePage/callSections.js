const body = document.querySelector("body"),
  progress_count = document.getElementsByClassName("progress-count"),
  plan_cards = document.getElementsByClassName("plan_card"),
  confirm_idClient = document.querySelector("#client-id .button.a"),
  confirm_info_card = document.querySelector("#confirm_info-card .button.a"),
  choice_payment_type = document.getElementsByClassName("pay_type_radio"),
  plan_choice_info = document.getElementById("plan_choice-info"),
  change_plan_btn = document.getElementById("change_plan");
let plan_choice,
  price_plan;

function changeClasses(i) {
  body.classList.remove("blocked");
  progress_count[i].classList.toggle("done");
  progress_count[i + 1].classList.toggle("close");
  body.classList.add("blocked");
}

body.onload = () => {
  window.scrollTo(0, 0);
}

for (const plan_card of plan_cards) {
  plan_card.onclick = () => {
    plan_choice = plan_card.querySelector(".plan-name");
    price_plan = plan_card.querySelector(".offer-plan_price");
    plan_choice_info.innerHTML = `
      <h4>Plano escolhido: ${plan_choice.innerText.toUpperCase()}</h4>
      <p>Preço total: ${price_plan.innerText}</p>
    `
    changeClasses(0);
  }
}

confirm_idClient.onclick = () => {
  changeClasses(1);
}

confirm_info_card.onclick = () => {
  changeClasses(2);
}

change_plan_btn.onclick = () => {
  body.classList.remove("blocked");
  progress_count[0].classList.toggle("done");
  progress_count[1].classList.toggle("done");
  progress_count[1].classList.toggle("close");
  progress_count[2].classList.toggle("close");
  body.classList.add("blocked");
}
