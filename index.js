const getAdvice = () => {
    fetch('	https://api.adviceslip.com/advice', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        },
    })
    .then(res => res.json())
    .then(json => {
        
        article.classList.add("fadeIn");
        dice.classList.remove("roll");

        adviceNo.innerHTML = `Advice #${json.slip.id}`;
        adviceTxt.innerHTML = `&ldquo;${json.slip.advice}&rdquo;`;
        
    })
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