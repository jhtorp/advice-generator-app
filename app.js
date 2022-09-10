const btn = document.querySelector('.btn');
const adviceContainer = document.querySelector('.advice');
const adviceId = document.querySelector('#advice-id')

btn.addEventListener('click', async function (e) {
    e.preventDefault();
    const res = await axios.get(`https://api.adviceslip.com/advice/${randNum(224)}`);
    adviceContainer.innerText = `‟${res.data.slip.advice}”`;
    adviceId.innerText = `Advice #${res.data.slip.id}`;

});


const randNum = function () {
    return Math.floor(Math.random() * 224);
}
//${'“'} ${'”'}