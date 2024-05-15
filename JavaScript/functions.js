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