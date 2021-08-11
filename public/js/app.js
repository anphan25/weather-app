console.log("js file client side is loaded");

// async function callAPI() {
//   const response = await fetch("https://puzzle.mead.io/puzzle");
//   const data = await response.json();
//   console.log(data);
// }

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const messageOne = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");

async function forecast(url) {
  const response = await fetch(url);
  const data = await response.json();

  if (data.error) {
    messageOne.textContent = data.error;
  } else {
    messageOne.textContent = data.location;
    messageTwo.textContent = data.forecast;
  }
}

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const location = search.value;
  messageOne.textContent = "loading...";
  messageTwo.textContent = "";
  forecast(`http://localhost:3000/weather?address=${location}`);
});