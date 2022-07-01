const btnTermos = document.querySelector('#btnTermos');
const divTermos = document.querySelector('.termos_text');

btnTermos.addEventListener("click", (e) => {
    e.preventDefault();

    divTermos.classList.toggle('active');
});


const data = document.querySelector('#data');

let getData = new Date();
let getDay = getData.getDate();
let getMes = getData.getMonth();
let getAno = getData.getFullYear();

if(getDay < 10) {
    getDay = `0${getDay}`
}

if(getMes < 10){
    getMes = `0${getMes}`
}

data.innerHTML = ` ${getDay} / ${getMes} / ${getAno}`