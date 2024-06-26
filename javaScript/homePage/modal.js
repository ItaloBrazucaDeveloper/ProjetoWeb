const body = document.querySelector("body"),
  modal = document.querySelector("dialog"),
  button_close = document.querySelector("#close-pop_up"),
  button_accept = document.querySelector("#accept-cookies_button");

body.onload = () => {
  if (!localStorage.accept_cookies) {
    modal.showModal();
  }
}

button_close.onclick = () => {
  modal.close();
}

button_accept.onclick = () => {
  localStorage.accept_cookies = "true";
}
