const getAdvice = () => {
    fetch('	https://api.adviceslip.com/advice', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        },
    })
    .then(response => response.json())
    .then(response => {
        
        article.classList.add("fadeIn");

        adviceNo.innerHTML = `Advice #${response.slip.id}`;
        adviceTxt.innerHTML = `&ldquo;${response.slip.advice}&rdquo;`;
        
    })
};

getAdvice();

const article = document.querySelector("article");
const adviceNo = document.querySelector(".adviceNo");
const adviceTxt = document.querySelector(".adviceTxt");
const btn = document.querySelector(".btn");

btn.addEventListener('click', () => {
    article.classList.remove("fadeIn");
    getAdvice();

});