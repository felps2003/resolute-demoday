//Função que troca a classe dos items selecionados para o filtro
function activeItems(element, classe) {
    return element.classList.toggle(classe)
}

//Selecionando uma categoria
const inputCateg = document.querySelectorAll('.inputCateg');
const opcaoCateg = document.querySelectorAll('.opcaoCateg p');

inputCateg.forEach(item => {
    item.addEventListener("click", () => activeItems(item, 'cateActive'));
});

opcaoCateg.forEach(item => {
    item.addEventListener("click", () => {
        for(let i = 0; i <= opcaoCateg.length; i++) {
            if(opcaoCateg[i] ===  item) {
               return activeItems(inputCateg[i], 'cateActive');
            } 
        }
    })
});
 

//Tipo de vaga
const vagaType = document.querySelectorAll('.btn_classe');
vagaType.forEach(item => {
    item.addEventListener("click", () => activeItems(item, 'classeActive'));
});


//Deficiencia especifica
const deficiencia = document.querySelectorAll('.btn_deficiencias');
deficiencia.forEach(item => {
    item.addEventListener("click", () => activeItems(item, 'defActive'));
});

//Avaliações 
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


//Ambiente de trabalho 
const ambiente = document.querySelectorAll('.btn_ambiente');
ambiente.forEach(item => {
    item.addEventListener("click", () => activeItems(item, 'ambActive'));
});


//Projetos finalizados
const projetos = document.querySelectorAll('.btn_qtdProjetos');
projetos.forEach(item => {
    item.addEventListener("click", () => activeItems(item, 'btnProjetosActive'));
});









