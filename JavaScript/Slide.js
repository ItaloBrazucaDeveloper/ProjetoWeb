const images = document.querySelectorAll('#slider img');
const inputs_radio = document.querySelectorAll('#choicer-service input[type="radio"]');
let service_title = document.querySelector('#service-title');
let position = 0;

function changeImageSlideShow(index) {
    position = index;
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

function automaticSliderShow() {
    images[position].classList.remove('selected');
    inputs_radio[position].checked = false;
    position++;
    
    if (position > images.length - 1) {
        position = 0;
    }
    images[position].classList.add('selected');
    inputs_radio[position].checked = true;
    changeServiceInfo(position);
}
setInterval(automaticSliderShow, 7000);