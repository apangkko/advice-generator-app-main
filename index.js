const getAdvice = async () => {
    const res = await fetch('https://api.adviceslip.com/advice');
    console.log(res);
    const data = await res.json();

    article.classList.add("fadeIn");
        dice.classList.remove("roll");

        adviceNo.querySelector('span').innerHTML = data.slip.id;
        adviceTxt.querySelector('span').innerHTML = data.slip.advice;
};

getAdvice();

const article = document.querySelector("article");
const adviceNo = document.querySelector(".adviceNo");
const adviceTxt = document.querySelector(".adviceTxt");
const btn = document.querySelector(".btn");
const dice = document.querySelector(".dice")

btn.addEventListener('click', () => {
    dice.classList.add("roll");
    article.classList.remove("fadeIn");
    getAdvice();

});