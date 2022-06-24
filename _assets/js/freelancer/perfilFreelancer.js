const urlSearchParams = new URLSearchParams(window.location.search);
const freelaId = urlSearchParams.get("id");

async function perfilFreelancer(id){
    try {
        let API = await fetch(`http://localhost:5000/perfil/${id}`);
        let response =  await API.json();
        let data = response;
        console.log(data);
        renderPerfilFreela(data);

    }catch {
        console.error(api)
    }
}

window.addEventListener("load", () => perfilFreelancer(freelaId));

/*  ------------ render perfil ------------*/

let nomeFreela = document.querySelector('#nomeFreela');
let cargoFreela = document.querySelector('#cargo');
let cardPCD = document.querySelector('.pcd');
let btnsHab = document.querySelector('.btnsHab');
let pcdButton =  document.querySelector('.pcdButton');


const renderPerfilFreela = ({nome, cargo, pcd, competencia}) => {
    nomeFreela.innerHTML = nome;
    cargoFreela.innerHTML = cargo;

    if(pcd === false){
        cardPCD.style.display = "none";
        pcdButton.style.display = "none";
    }

   competencia.forEach(element => {
        let habilidade = document.createElement("span");
        habilidade.innerHTML = element;
        btnsHab.appendChild(habilidade);
   });


}



/*  ------------ Slide comments ------------*/
const btnNext = document.querySelector('#nextComments');
const btnBack = document.querySelector('#backComments');
const contComments = document.querySelector('.slideComments');
let marginRight = 0;
let marginLeft = 0;



btnNext.addEventListener("click", () => {
   // marginRight += 750;
   marginRight += 750;
    contComments.style.marginRight = `${marginRight}px`;
    if(marginRight == 750) {
        marginRight = -750;

    }
   console.log(marginRight);
    return marginRight
});

btnBack.addEventListener("click", () => {
   marginLeft += 750;
    contComments.style.marginLeft = `${marginLeft}px`;
    if(marginLeft == 750) {
        marginLeft = -750;
    }
    return marginLeft
});

