const screen = document.getElementById("video-promo"),
  video = document.querySelector("#video-promo video"),
  sound_icon = document.querySelector("#video-infos h1 i");

screen.onmouseenter = () => {
  video.play();
}

screen.onclick = () => {
  video.paused ? video.play() : video.pause();
}
