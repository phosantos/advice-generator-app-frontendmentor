const id = document.querySelector(".id span");
const adviceDisplay = document.querySelector(".advice p");
const btn = document.querySelector(".btn");

async function getAdvice() {
  const adviceResponse = fetch("https://api.adviceslip.com/advice");
  const adviceBody = await (await adviceResponse).json();

  id.innerText = adviceBody.slip.id;
  adviceDisplay.innerText = '"' + adviceBody.slip.advice + '"';
}

getAdvice();

function handleClick() {
  getAdvice();
}

["touchstart", "click"].forEach((userEvent) => {
  btn.addEventListener(userEvent, handleClick);
});
