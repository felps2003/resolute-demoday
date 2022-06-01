//Avaliações stars
const inputRadio = document.querySelectorAll('.inputRadio');
const inputInterno = document.querySelectorAll('.inputInterno');
const starTextBtn = document.querySelectorAll('.starText');

function selectStar(i, category){
    const starText = document.querySelector(`.${category} p`);
    
    inputRadio[i].classList.toggle('border')
    inputInterno[i].classList.toggle('internoActive');
    starText.classList.toggle('starActiveText');

}


inputRadio[0].addEventListener("click", () => selectStar(0, 'five'));
inputRadio[1].addEventListener("click", () => selectStar(1, 'for'));
inputRadio[2].addEventListener("click", () => selectStar(2, 'tree'));

starTextBtn[0].addEventListener("click", () => selectStar(0, 'five'));
starTextBtn[1].addEventListener("click", () => selectStar(1, 'for'));
starTextBtn[2].addEventListener("click", () => selectStar(2, 'tree'));


//Projetos finalizados 
const btnProjetos = document.querySelectorAll('.btn_qtdProjetos');
btnProjetos.forEach(element => {
    element.addEventListener("click", () => {
        element.classList.toggle('btnProjetosActive');
    })
});



//select classes 
const btnClasse = document.querySelectorAll('.btn_classe');
btnClasse.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle('classeActive');
    })
});


