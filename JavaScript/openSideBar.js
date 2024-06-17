const sidebar = document.querySelector(".nav-aside");
const bars_button = document.getElementById("nav-bars");

bars_button.onclick = () => {
  sidebar.classList.toggle("active");
};
