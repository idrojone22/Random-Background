const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function() {
    const randomNumber =  getRandomNumber();
    document.body.style.backgroundColor = randomNumber;
    color.textContent = randomNumber;
});

function getRandomNumber() {
    let primer = Math.floor(Math.random() * 255);
    let segon = Math.floor(Math.random() * 255);
    let tercer = Math.floor(Math.random() * 255);
    let rgb =  `rgb(${primer},${segon},${tercer})`;
    return rgb;
}