const body = document.querySelector('body');
const modal = document.querySelector('dialog');
const button_close = document.querySelector('#close-pop_up');
const button_accept = document.querySelector('#accept-cookies_button');

body.onload = () => {
    if (!localStorage.accept_cookies) {
        modal.showModal();
    }
}
button_close.onclick = () => {
    modal.close()
};

button_accept.onclick = () => {
    localStorage.accept_cookies = 'true';
}