/* ---- Introdução negocio ---- */
const divPrincipios = document.querySelector('.principios');
const divValores = document.querySelector('.valores');
const divMissoes = document.querySelector('.missoes');


divPrincipios.addEventListener("click", () => handleText('principios'));
divValores.addEventListener("click", () => handleText('valores'));
divMissoes.addEventListener("click", () => handleText('missoes')); 


function handleText(introDiv){
    let titulo = document.querySelector(`.${introDiv} h3`);
    let texto = document.querySelectorAll(`.${introDiv} p`);
    let border = document.querySelector(`.${introDiv} .linha-vert`);

    titulo.classList.toggle('tituloActive');
    border.classList.toggle('borderActive');
    
    for(let i = 0; i < texto.length; i++){
        texto[i].classList.toggle('textoActive');
    }  
} 


/* --- Animação intro --- */
const informacoesIntro = document.querySelectorAll('[data-anime]');

window.addEventListener('scroll', () =>{

    const alturaPage = window.pageYOffset + ((window.innerHeight * 3) / 4);

    informacoesIntro.forEach((element) =>{
        if(alturaPage > element.offsetTop){
            element.classList.add('animacao')
        }
    })
})



/* --- Modelo de negocio mobile --- */ 
const principiosMobile = document.querySelector('.principiosMobile');
const valoresMobile = document.querySelector('.valoresMobile');
const missoesMobile = document.querySelector('.missoesMobile');
const circulos3 = document.querySelectorAll('[data-circ3]');
const circulos2 = document.querySelectorAll('[data-circ2]');

let principiosTexto = document.querySelector('.texto_principios');
let valoresTexto = document.querySelector('.texto_valores');
let missoesTexto = document.querySelector('.texto_missoes');
const classOpenOrClosed = 'handleText';
const circleActive = 'modeloAtivo';

principiosMobile.addEventListener("click", () => handleInformation(principiosTexto, valoresTexto, missoesTexto, 0));
valoresMobile.addEventListener("click", () => handleInformation(valoresTexto, principiosTexto, missoesTexto, 1));
missoesMobile.addEventListener("click", () => handleInformation(missoesTexto, principiosTexto, valoresTexto, 2));

function handleInformation(valorOpen, valorClosed1, valorCloses2, indexCircle) {
    valorOpen.classList.toggle(classOpenOrClosed);
    valorClosed1.classList.remove(classOpenOrClosed);
    valorCloses2.classList.remove(classOpenOrClosed);

    for(let i = 0; i < circulos3.length; i++){
        if(i === indexCircle) {
            circulos3[i].classList.toggle(circleActive);
        }else {
            circulos3[i].classList.remove(circleActive);
        }
    }

    for(let i = 0; i < circulos2.length; i++){
        if(i === indexCircle){
            circulos2[i].classList.toggle(circleActive);
        }else {
            circulos2[i].classList.remove(circleActive);
        }
    }
}

window.addEventListener("DOMContentLoaded", () => handleInformation(principiosTexto, valoresTexto, missoesTexto, 0));


