"use strict";

var quoteElement = document.querySelector(".quote");
var newQuoteBtn = document.querySelector(".header__btn");

function updateQuote() {
  fetch("https://se-quotes-api.onrender.com/v1/quotes/random").then(function (res) {
    return res.json();
  }).then(function (data) {
    quoteElement.textContent = data.quote;
  });
}

newQuoteBtn.addEventListener("click", updateQuote);