const inputs = document.querySelectorAll(".input-box input"),
  confirm_info_id = document.querySelector("#confirm_info-id"),
  confirm_info_card = document.querySelector("#confirm_info-card");
let valid_inputs = [];

function isCpfValid(cpf) {
  cpf = cpf.replace(/[.-]/g, "");
  if (cpf == "00000000000") return false;
  let count = 1,
    verify_count = 0,
    multiplier = 10,
    limit = 9,
    digit_verify,
    sum,
    mod;

  while (count <= 2) {
    sum = 0;
    for (let i = 0; i < limit; i++) {
      sum += Number(cpf.charAt(i)) * multiplier;
      multiplier--;
    }
    mod = sum % 11;
    digit_verify = mod < 2 ? 0 : 11 - mod;
    if (count == 1 && digit_verify == cpf.charAt(9)) {
      verify_count++;
    } else if (digit_verify == cpf.charAt(10)) {
      verify_count++;
    }
    limit = 10;
    multiplier = 11;
    count++;
  }
  return verify_count == 2;
}

function verifPattern(value, regex) {
  return value.match(regex) ? true : false;
}

function verifInput(input) {
  if (input.getAttribute("id") == "cpf-client") {
    if (!isCpfValid(input.value)) return false;
  }
  return verifPattern(input.value, input.getAttribute("pattern"));
}

function applyMaskIn(input) {
  switch (input.getAttribute("id")) {
    case "cpf-client":
      let cpf = input.value;
      if (cpf.length == 3 || cpf.length == 7) {
        input.value += ".";
      } else if (cpf.length == 11) {
        input.value += "-";
      }
      break;
    case "client-phone-number":
      let tel = input.value;
      if (tel.length == 1) {
        input.value = "(" + input.value;
      } else if (tel.length == 3) {
        input.value += ") ";
      } else if (tel.length == 6 && tel.charAt(5) == 9) {
        input.value += ".";
      } else if (tel.length == 11 && tel.charAt(5) == 9) {
        input.value += "-";
      } else if (tel.length == 9 && tel.charAt(5) != 9) {
        input.value += "-";
      }
      break;
    case "num_card":
      let num = input.value;
      if (num.length == 4 || num.length == 9) {
        input.value += " ";
      } else if (num.length == 14) {
        input.value += " ";
      }
      break;
  }
}

function verifOutlines() {
  let count_id = 0;
  let count_card = 0;
  for (let id of valid_inputs) {
    if (id == "client-email" || id == "cpf-client" || id == "client-phone-number") {
      count_id++;
    }
    if (id == "client_name-card" || id == "num_card" || id == "verif_code_card") {
      count_card++;
    }
  }
  confirm_info_id.disabled = count_id == 3 ? false : true;
  confirm_info_card.disabled = count_card == 3 ? false : true;
}


for (let input of inputs) {
  input.onfocus = () => {
    let outline_color = input.style.outlineColor;
    if (outline_color != "lime" && outline_color != "red") {
      input.style.outline = "2px solid tomato";
    }
  }
  input.oninput = (e) => {
    let value = input.value;
    const id_input = input.getAttribute("id");
    const message_error = document.querySelector(
      ".input-box #" + id_input + " ~ .error_message"
    );

    if (value.length >= input.getAttribute("minlength")) {
      if (verifInput(input) === true) {
        input.style.outline = "2px solid lime";
        message_error.classList.remove("active");
      } else {
        input.style.outline = "3px solid red";
        message_error.classList.add("active");
      }
    }

    if (e.inputType == "insertText") applyMaskIn(input);

    if (input.style.outlineColor == "lime") {
      if (!valid_inputs.find((id) => id == id_input)) {
        valid_inputs.push(id_input);
      }
    }
    if (message_error.getAttribute("class") == "error_message active") {
      valid_inputs.splice(id_input, 1);
    }
    console.log(valid_inputs);
    verifOutlines();
  }
  input.onblur = () => {
    if (input.value == "") {
      input.style.outline = "none";
    }
  }
}
