const button_close = document.querySelector('#close-pop_up');
const modal = document.querySelector('dialog');
const body = document.querySelector('body');

body.onload = () => modal.showModal();

button_close.onclick = () => modal.close();