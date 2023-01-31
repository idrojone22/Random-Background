const colors = ["green", "red", "rgba(133,122,200)", "#f15025", "rgba(0, 88, 64, 1)", "rgba(113, 88, 64, 1)", "rgba(113, 88, 135, 1)", 
"rgba(113, 159, 135, 1)", "rgba(178, 159, 135, 1)", "rgba(178, 159, 205, 1)", "rgba(178, 226, 205, 1)", "rgba(247, 226, 205, 1)", "rgba(247, 228, 255, 1)", "cyan",
"rgba(200, 200, 200, 1)", "rgba(147, 128, 155, 1)", "rgba(207, 240, 255, 1)", "rgba(24, 28, 25, 1)", "rgba(100, 100, 155, 1)", "rgba(147, 100, 255, 1)", "rgba(247, 108, 100, 1)"
, "rgba(120, 128, 155, 1)", "rgba(247, 28, 55, 1)", "rgba(0, 228, 255, 1)"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function() {
    const randomNumber =  getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}

