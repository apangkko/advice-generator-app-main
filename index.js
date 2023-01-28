const getAdvice = () => {
    fetch('	https://api.adviceslip.com/advice', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        },
    })
    .then(response => response.json())
    .then(response => {
        const adviceNo = document.querySelector(".adviceNo");
        const adviceTxt = document.querySelector(".adviceTxt");

        adviceNo.innerHTML = `Advice #${response.slip.id}`;
        adviceTxt.innerHTML = `&ldquo;${response.slip.advice}&rdquo;`;
        
    })
};

getAdvice();

const btn = document.querySelector(".btn");

btn.addEventListener('click', getAdvice);