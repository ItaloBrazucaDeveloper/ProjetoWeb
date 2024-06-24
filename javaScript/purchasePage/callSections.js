const body = document.querySelector("body"),
  progress_count = document.getElementsByClassName("progress-count"),
  plan_cards = document.getElementsByClassName("plan_card"),
  confirm_infoId = document.querySelector("#confirm_info-id"),
  confirm_infoCard = document.querySelector("#confirm_info-card"),
  plan_choice_info = document.getElementById("plan_choice-info");
let plan_choice, price_plan;

console.log(progress_count);

function changeClasses(i) {
  body.classList.remove("blocked");
  progress_count[i].classList.toggle("done");
  progress_count[i + 1].classList.toggle("close");
  body.classList.add("blocked");
}

body.onload = () => {
  window.scrollTo(0, 0);
};

for (const plan_card of plan_cards) {
  plan_card.onclick = () => {
    plan_choice = plan_card.querySelector(".plan-name");
    price_plan = plan_card.querySelector(".offer-plan_price");
    plan_choice_info.innerHTML = `
      <h4>Plano escolhido: ${plan_choice.innerText.toUpperCase()}</h4>
      <p>Preço total: ${price_plan.innerText}</p>
    `;
    changeClasses(0);
  };
}

confirm_info_id.onclick = () => {
  changeClasses(1);
};

confirm_info_card.onclick = () => {
  changeClasses(2);
};
