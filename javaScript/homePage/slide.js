const images = document.querySelectorAll("#slider img"),
  inputs_radio = document.querySelectorAll('#choicer-service input[type="radio"]'),
  services = ["CrossFit", "Cardio", "Pilates", "Musculação", "Aeróbica"];
let service_title = document.querySelector("#service-title"),
  position = 0;

function changeImageSlideShow(index) {
  position = index;
  images[index].classList.add("selected");
  service_title.innerText = services[index];

  for (let i = 0; i < images.length; i++) {
    if (index != i) images[i].classList.remove("selected");
  }
}

function automaticSliderShow() {
  images[position].classList.remove("selected");
  inputs_radio[position].checked = false;
  position++;

  if (position > images.length - 1) position = 0;

  images[position].classList.add("selected");
  inputs_radio[position].checked = true;
  service_title.innerText = services[position];
}

setInterval(automaticSliderShow, 7000);
