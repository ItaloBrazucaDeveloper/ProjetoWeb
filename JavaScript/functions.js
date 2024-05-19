// Funções para o botão que sobe a página inteira
window.addEventListener('scroll', () => {
    const button_up = document.getElementById('up-button');
    button_up.classList.toggle('upper-button', window.scrollY > 400);
});
function resetScroll() {
    window.scrollTo(0, 0);
}

// Funções para o carrosel
function changeCheckedRadioArrow(direction) {
    let images = document.querySelectorAll('#slider img');
    for (let i = 0; i <= 4; i++) {
        if ( document.querySelector('#choicer-service #slide-'+ i).checked ) {
            images[i].classList.remove('selected');
            switch (direction) {
                case 'right':
                    i == 4 ? i = -1 : i = i;
                    document.querySelector('#choicer-service #slide-'+ (i + 1) ).checked = true;
                    images[i + 1].classList.add('selected');
                    changeServiceInfo(i + 1);
                    break;
                case 'left':
                    i == 0 ? i = 5 : i = i;
                    document.querySelector('#choicer-service #slide-'+ (i - 1) ).checked = true;
                    images[i - 1].classList.add('selected');
                    changeServiceInfo(i - 1);
            } break;
        } 
    }
}
function changeCheckedRadio(index) {
    let images = document.querySelectorAll('#slider img');
    images[index].classList.add('selected');
    for (let i = 0; i <= 4; i++) {
        i == index ? i = i : images[i].classList.remove('selected');
    }
    changeServiceInfo(index);
}
function changeServiceInfo(index) {
    let service_info = document.querySelector('#service-info');
    fetch('JavaScript/services.json')
        .then(res => res.json())
        .then(json => {
            service_info.innerHTML = 
                `<h1>${json[index]['h1']}</h1>
                <div id="icons-service">
                    <h6>
                        Intensidade:
                        ${(json[index]['intensity'][0]).repeat(json[index]['intensity'][1])}
                    </h6>
                </div><hr>
                <p>
                    ${json[index]['info']}
                </p>`
        });
}