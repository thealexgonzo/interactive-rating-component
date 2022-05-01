// Elements
const btn = document.querySelector(".card__button");
const thankyouCard = document.querySelector(".card-state-thankyou");
const thankyouMessage = document.querySelector(".thankyou__rating--text");
const ratings = document.querySelectorAll("input[name='select']");

btn.addEventListener("click", function () {
  let score;
  for (const rating of ratings) {
    if (rating.checked) {
      score = rating.value;
      thankyouCard.style.zIndex = 2;
      break;
    }
  }

  thankyouMessage.textContent = `You selected ${score} out of 5`;
});
