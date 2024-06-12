const screen = document.getElementById("video-promo");
const video = document.querySelector('#video-promo video');
const sound_icon = document.querySelector('#video-infos h1 i');

screen.addEventListener('mouseenter', () => {
    video.play();
});

screen.addEventListener('click', e => {
    let html_element = e.target;
    let class_name = html_element.classList.value;
    if (class_name == 'fa-solid fa-volume-xmark' || class_name == 'fa-solid fa-volume-high') {
        changeAudio();
    } else {
        video.paused ? video.play() : video.pause();
    }
});

function changeAudio() {
    if (video.muted) {
        sound_icon.classList.replace('fa-volume-xmark', 'fa-volume-high');
        video.muted = false;
    } else {
        sound_icon.classList.replace('fa-volume-high', 'fa-volume-xmark');
        video.muted = true;
    }
}