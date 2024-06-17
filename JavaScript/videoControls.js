const screen = document.getElementById("video-promo");
const video = document.querySelector("#video-promo video");
const sound_icon = document.querySelector("#video-infos h1 i");

screen.addEventListener("mouseenter", () => {
  video.play();
});

screen.onclick = () => (video.paused ? video.play() : video.pause());
