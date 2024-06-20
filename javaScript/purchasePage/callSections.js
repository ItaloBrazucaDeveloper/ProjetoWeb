const body = document.querySelector("body");
const basicPlan_button = document.getElementById("basic");
const premiumPlan_button = document.getElementById("premium");
const standardPlan_button = document.getElementById("standard");
const confirm_idClient = document.querySelector("#client-id .button.a");
const purcharse_type = document.querySelectorAll(".choice-purchase_radio input[type='radio']");
const steps = document.getElementsByClassName("progress-count");
let plan; // Armazena o plano escolhido

body.onload = () => {
  window.scrollTo(0, 0);
};

basicPlan_button.onclick = () => {
  plan = "basic";
  changeClasses(0);
};
premiumPlan_button.onclick = () => {
  plan = "premium";
  changeClasses(0);
};
standardPlan_button.onclick = () => {
  plan = "standard";
  changeClasses(0);
};
confirm_idClient.onclick = () => {
  changeClasses(1);
};

function changeClasses(i) {
  body.classList.toggle("blocked");
  steps[i].classList.toggle("done");
  steps[i + 1].classList.toggle("close");
}
