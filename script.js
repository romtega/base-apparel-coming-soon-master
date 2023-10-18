"use strict";

const form = document.querySelector("#form");
const emailInput = document.querySelector("#email-input");
const alertIcon = document.querySelector("#alert-icon");
const alertText = document.querySelector("#alert-text");
const alertInput = document.querySelector("#alert-input");

function validEmail() {
  alertIcon.classList.add("hidden");
  alertText.classList.add("hidden");
  alertInput.classList.remove("alert-input");
}

function notValidEmail() {
  alertIcon.classList.remove("hidden");
  alertText.classList.remove("hidden");
  alertInput.classList.add("alert-input");
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (emailRegex.test(emailInput.value.trim())) {
    validEmail();
  } else {
    notValidEmail();
  }
});
