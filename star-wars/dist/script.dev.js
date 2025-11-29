"use strict";

var form = document.forms.search;
var content = document.querySelector(".content");
var result = document.querySelector(".content__result");
var error = document.querySelector(".content__error");
var spinner = document.querySelector(".spinner");
form.addEventListener("submit", function submit(e) {
  e.preventDefault();
});