// Funções para o botão que sobe a página inteira
window.addEventListener('scroll', () => {
    const button_up = document.getElementById('up-button')
    button_up.classList.toggle('upper-button', window.scrollY > 400)
    changeColorsUpButton(button_up, window.scrollY)
})
function changeColorsUpButton(element, scroll_value) {
    const scroll_position = scroll_value + window.innerHeight
    const document_height = document.documentElement.offsetHeight

    if (scroll_position >= document_height - 150) {
        element.style.backgroundColor = '#ffffff'
        element.style.color = '#000'
    } else {
        element.style.backgroundColor = '#000000'
        element.style.color = '#fff'
    }
}
function resetScroll() {
    window.scrollTo(0, 0)
}

// Funções para o carrosel
function changeChekedRadio(direction) {
    for (let i = 0; i <= 4; i++) {
        if ( document.querySelector('#choicer-service #slide-' + i).checked ) {
            switch (direction) {
                case 'right':
                    i == 4 ? i = -1 : i = i;
                    document.querySelector('#choicer-service #slide-'+ (i + 1) ).checked = true
                    changeImageService(i + 1)
                    break;
                case 'left':
                    i == 0 ? i = 5 : i = i;
                    document.querySelector('#choicer-service #slide-'+ (i - 1) ).checked = true
                    changeImageService(i - 1)
                    break;
            }
            break;
        }
    }
}
function changeImageService(index) {
    const background_img = document.getElementById('third-section') 
    switch (index) {
        case 0: background_img.style.backgroundImage = 'url("../img/backgrounds/HomemFlexão.jpg")'
            break;
        case 1: background_img.style.backgroundImage = 'url("../img/backgrounds/SegurandoBarra.jpg")'
            break;
        case 2: background_img.style.backgroundImage = 'url("../img/backgrounds/MulherAbdominal.jpg")'
            break;
        case 3: background_img.style.backgroundImage = 'url("../img/backgrounds/PessoasPrancha.jpg")'
            break;
        case 4: background_img.style.backgroundImage = 'url("../img/backgrounds/AeroHit.jpg")'
    }
}