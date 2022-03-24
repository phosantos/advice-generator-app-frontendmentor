const id = document.querySelector(".id span");
const adviceDisplay = document.querySelector(".advice p");
const btn = document.querySelector(".btn");

function adviceFetch() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((adviceBody) => {
      id.innerText = adviceBody.slip.id;
      adviceDisplay.innerText = '"' + adviceBody.slip.advice + '"';
    });
}

adviceFetch();

function handleClick() {
  adviceFetch();
}

["touchstart", "click"].forEach((userEvent) => {
  btn.addEventListener(userEvent, handleClick);
});
