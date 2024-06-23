const inputs = document.querySelectorAll(".input-box input"),
  forms = document.querySelectorAll("form"),
  confirm_id = document.querySelector("#choice_plan_button"),
  confirm_card = document.querySelector("#confirm_info-card");

function isCpfValid(cpf) {
  cpf = cpf.replace(/[.-]/g, "");
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
  }
}

for (let form of forms) {
  form.onsubmit = (e) => {
    e.preventDefault();
  }
}

for (let input of inputs) {
  input.onfocus = () => {
    let outline_color = input.style.outlineColor;
    if (outline_color != "lime" || outline_color != "red") {
      input.style.outline = "2px solid tomato";
    }
  };
  input.oninput = (e) => {
    let value = input.value;
    if (value.length >= input.getAttribute("minlength")) {
      const id_input = input.getAttribute("id");
      const message_error = document.querySelector(
        ".input-box #" + id_input + " ~ .error_message"
      );
      if (verifInput(input) === true) {
        input.style.outline = "2px solid lime";
        message_error.classList.remove("active");
      } else {
        input.style.outline = "3px solid red";
        message_error.classList.add("active");
      }
    }
    if (e.inputType == "insertText") {
      applyMaskIn(input);
    }
  }
  input.onblur = () => {
    if (input.value == "") {
      input.style.outline = "none";
    }
  }
}