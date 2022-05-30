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

function qtdProjetos(i){
    btnProjetos[i].classList.toggle('btnProjetosActive');
}

btnProjetos[0].addEventListener("click", () => qtdProjetos(0));
btnProjetos[1].addEventListener("click", () => qtdProjetos(1));
btnProjetos[2].addEventListener("click", () => qtdProjetos(2));


//select classes 
const btnClasse = document.querySelectorAll('.btn_classe');

function selectItem(i, classItem){
    btnClasse[i].classList.toggle(classItem);
}

btnClasse[0].addEventListener("click", () => selectItem(0, 'classeActive'));
btnClasse[1].addEventListener("click", () => selectItem(1, 'classeActive'));
btnClasse[2].addEventListener("click", () => selectItem(2, 'classeActive'));
btnClasse[3].addEventListener("click", () => selectItem(3, 'classeActive'));
btnClasse[4].addEventListener("click", () => selectItem(4, 'classeActive'));
