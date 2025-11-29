"use strict";

var form = document.forms.search;
var content = document.querySelector(".content");
var result = document.querySelector(".content__result");
var error = document.querySelector(".content__error");
var spinner = document.querySelector(".spinner");

function search(entity, entityId) {
  return fetch("https://swapi.nomoreparties.co/".concat(entity, "/").concat(entityId));
}

function renderResult(text) {
  result.textContent = text;
  error.textContent = "";
}

function renderError(err) {
  error.textContent = err;
  result.textContent = "";
}

function renderLoading(isLoading) {
  if (isLoading) {
    spinner.classList.add("spinner_visible");
    content.classList.add("content_hidden");
  } else {
    spinner.classList.remove("spinner_visible");
    content.classList.remove("content_hidden");
  }
}

form.addEventListener("submit", function submit(e) {
  e.preventDefault();
  renderLoading(true);
  search(form.elements.entity.value, form.elements.entityId.value).then(function (res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(res.status);
  }).then(function (res) {
    renderResult(res.name);
    console.log(res);
  })["catch"](function (err) {
    renderError("Error: ".concat(err));
    console.log("Error: ".concat(err));
  })["finally"](function () {
    renderLoading(false);
  });
});