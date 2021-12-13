const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
  // get random number b/w 0 - 3 colors
  const randomNumber = getRandomNumber();
  console.log(randomNumber);
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber]; // (property) Node.textContent: string
});

function getRandomNumber() {
  return Math.floor(colors.length*Math.random());
}
