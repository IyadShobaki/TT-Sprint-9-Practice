const form = document.forms.search;
const content = document.querySelector(".content");
const result = document.querySelector(".content__result");
const error = document.querySelector(".content__error");
const spinner = document.querySelector(".spinner");

form.addEventListener("submit", function submit(e) {
  e.preventDefault();
});
