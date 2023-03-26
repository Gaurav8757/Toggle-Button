function toggleSwitch() {
  var toggleBtn = document.getElementById("toggle-btn");
  var slider = document.querySelector(".slider");
  var text = document.querySelector("h1");
  var input = document.querySelector('input[type="checkbox"]');
  var body = document.body;

  if (input.checked) {
    body.classList.toggle("dark-mode");
    text.classList.toggle("dark-mode");
    toggleBtn.classList.toggle("dark-mode");
  } else {
    slider.style.backgroundColor = "white";

    text.classList.toggle("dark-mode");
    body.classList.toggle("dark-mode");
  }
}
