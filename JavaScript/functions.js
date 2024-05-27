const images = document.querySelectorAll('#slider img');

// Funções para o carrosel
function changeCheckedRadioArrow(direction) {
    for (let i = 0; i <= 4; i++) {
        if ( document.querySelector('#slide-'+ i).checked ) {
            images[i].classList.remove('selected');
            switch (direction) {
                case 'right': i = (i == 4) ? 0 : i + 1; break;
                case 'left':  i = (i == 0) ? 4 : i - 1;
            }
            document.querySelector('#slide-'+ i ).checked = true;
            images[i].classList.add('selected');
            changeServiceInfo(i);
            break;
        } 
    }
}
function changeCheckedRadio(index) {
    images[index].classList.add('selected');
    for (let i = 0; i <= 4; i++) {
        if (index != i) {
            images[i].classList.remove('selected');
        }
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