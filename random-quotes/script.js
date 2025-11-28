const quoteElement = document.querySelector(".quote");
const newQuoteBtn = document.querySelector(".header__btn");

function updateQuote() {
  fetch("https://se-quotes-api.onrender.com/v1/quotes/random")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      quoteElement.textContent = data.quote;
    });
}

newQuoteBtn.addEventListener("click", updateQuote);
