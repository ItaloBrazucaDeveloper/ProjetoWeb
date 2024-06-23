const regex_num = /[0-9]/g,
  regex_char = /[a-z|A-Z]/g;
const form = document.querySelector("#card_purchase-form"),
  input_name = document.querySelector("#nome_char"),
  input_num_card = document.querySelector("#num_cartao"),
  input_date_card = document.querySelector("#dt_venc"),
  input_verif_num_card = document.querySelector("#CVV"),
  error_message = document.querySelectorAll(".error_message"),
  cpf = document.querySelector("#cpf-client"),
  tel_num = document.querySelector("#client-phone-number"),
  choice_plan_button = document.querySelector("choice_plan_button");
let done_inputs_card = 0,
  done_inputs_id = 0;

function isOnlyDigit(value) {
  return value.match(regex_char) ? false : true;
}
function isOnlyChar(value) {
  return value.match(regex_num) ? false : true;
}
function verifyInputs(count_inputs) {
  if (count_inputs == 3) {
    confirm_info_card.disabled = false;
  }
}

cpf.onfocus = () => {
  let outline_color = cpf.style.outlineColor;
  if (outline_color != "lime" || outline_color != "red") {
    cpf.style.outline = "2px solid tomato";
  }
}
cpf.onblur = () => {
  if (cpf.value == "") {
    cpf.style.outline = "none";
  } else if (cpf.style.outlineColor == "lime") {
    done_inputs_card++;
  }
}
cpf.oninput = () => {
  let nums = cpf.value;
  if (!isOnlyDigit(nums)) {
    cpf.style.outline = "3px solid red";
    error_message[0].classList.add("active");
  } else if (nums == "") {
    error_message[0].classList.remove("active");
    cpf.style.outline = "2px solid tomato";
    verifyInputs(3);
  } else {
    cpf.style.outline = "2px solid lime";
    verifyInputs(done_inputs_id);
  }
}

tel_num.onfocus = () => {
  let outline_color = tel_num.style.boxS;
  if (outline_color != "lime" || outline_color != "red") {
    tel_num.style.outline = "2px solid tomato";
  }
}
tel_num.onblur = () => {
  if (tel_num.value == "") {
    tel_num.style.outline = "none";
  } else if (tel_num.style.outlineColor == "lime") {
    done_inputs_card++;
  }
}
tel_num.oninput = () => {
  let nums = tel_num.value;
  if (!isOnlyDigit(nums)) {
    tel_num.style.outline = "3px solid red";
    error_message[0].classList.add("active");
  } else if (nums == "") {
    error_message[0].classList.remove("active");
    tel_num.style.outline = "2px solid tomato";
  } else {
    tel_num.style.outline = "2px solid lime";
    verifyInputs(done_inputs_id);
  }
}

input_name.onfocus = () => {
  let outline_color = input_name.style.outlineColor;
  if (outline_color != "lime" || outline_color != "red") {
    input_name.style.outline = "2px solid tomato";
  }
}
input_name.onblur = () => {
  if (input_name.value == "") {
    input_name.style.outline = "none";
  } else if (input_name.style.outlineColor == "lime") {
    done_inputs_card++;
  }
}
input_name.oninput = () => {
  let chars = input_name.value;
  if (!isOnlyChar(chars)) {
    input_name.style.outline = "3px solid red";
    error_message[0].classList.add("active");
  } else if (chars == "") {
    error_message[0].classList.remove("active");
    input_name.style.outline = "2px solid tomato";
  } else if (chars.length > 6) {
    input_name.style.outline = "2px solid lime";
    verifyInputs(done_inputs_card);
  }
}

input_num_card.onfocus = () => {
  let outline_color = input_num_card.style.outlineColor;
  if (outline_color != "lime" || outline_color != "red") {
    input_num_card.style.outline = "2px solid tomato";
  }
}
input_num_card.onblur = () => {
  if (input_num_card.value == "") {
    input_num_card.style.outline = "none";
  } else if (input_num_card.style.outlineColor == "lime") {
    done_inputs_card++;
  }
}
input_num_card.oninput = () => {
  let nums = input_num_card.value;
  if (!isOnlyDigit(nums)) {
    input_num_card.style.outline = "3px solid red";
    error_message[1].classList.add("active");
  } else if (nums == "") {
    error_message[1].classList.remove("active");
    input_num_card.style.outline = "2px solid tomato";
  } else {
    input_num_card.style.outline = "2px solid lime";
    verifyInputs(done_inputs_card);
  }
}

input_verif_num_card.onfocus = () => {
  let outline_color = input_verif_num_card.style.outlineColor;
  if (outline_color != "lime" || outline_color != "red") {
    input_verif_num_card.style.outline = "2px solid tomato";
  }
}
input_verif_num_card.onblur = () => {
  if (input_verif_num_card.value == "") {
    input_verif_num_card.style.outline = "none";
  } else if (input_verif_num_card.style.outlineColor == "lime") {
    done_inputs_card++;
  }
}
input_verif_num_card.oninput = () => {
  let code_verif = input_verif_num_card.value;
  if (!isOnlyDigit(code_verif)) {
    error_message[2].classList.add("active");
    input_verif_num_card.style.outline = "3px solid red";
  } else if (code_verif == "") {
    error_message[2].classList.remove("active");
    input_verif_num_card.style.outline = "2px solid tomato";
  } else {
    input_verif_num_card.style.outline = "2px solid lime";
    verifyInputs(done_inputs_card);
  }
}
