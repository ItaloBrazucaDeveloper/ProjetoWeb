// NodeList com todas as imagens do carrosel
const images = document.querySelectorAll('#slider img');
// Variável que armazena as informações do serviço
let service_title = document.querySelector('#service-title');

function changeCheckedRadio(index) {
    images[index].classList.add('selected');
    for (let i = 0; i < images.length; i++) {
        if (index != i) {
            images[i].classList.remove('selected');
        }
    }
    changeServiceInfo(index);
}
function changeServiceInfo(index) {
    fetch('JavaScript/services.json')
        .then(res => res.json())
        .then(json => {
            service_title.innerText = json[index]['h1']
        }
    );
}