"use strict";

var modal = document.getElementById("openModal");
var buttonOpenModal = document.getElementsByClassName("button--open-modal");

for (var i = 0; i < buttonOpenModal.length; i++) {
  buttonOpenModal[i].addEventListener("click", function (e) {
    modal.classList.add("modal--active");
  });
}

modal.addEventListener("click", function (e) {
  var target = e.target;

  if (modal.classList.contains("modal--active") && !target.classList.contains("modal__input")) {
    modal.classList.remove("modal--active");
  }
});