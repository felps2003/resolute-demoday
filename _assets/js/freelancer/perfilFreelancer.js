/*const urlSearchParams = new URLSearchParams(window.location.search);
const freelaId = urlSearchParams.get("id");

async function perfilFreelancer(id){
    try {
        let API = await fetch(`http://localhost:5000/perfil/${id}`);
        let response =  await API.json();
        let data = response;
        console.log(data);

    }catch {
        console.error(api)
    }
}

window.addEventListener("load", () => perfilFreelancer(freelaId)); */


/*  ------------ Slide comments ------------*/
const btnNext = document.querySelector('#nextComments');
const btnBack = document.querySelector('#backComments');
const contComments = document.querySelector('.slideComments');
let marginRight = 0;
let marginLeft = 0;

btnNext.addEventListener("click", () => {
    marginRight += 750;
    contComments.style.marginRight = `${marginRight}px`;
    if(marginRight >= 1200) {
        marginRight = 0;
        marginLeft = 0;

    }
    
    return marginRight
});

btnBack.addEventListener("click", () => {
    marginLeft += 750;
    contComments.style.marginLeft = `${marginLeft}px`;
    if(marginLeft >= 1200) {
        marginLeft = -750;
    }
    return marginLeft
});

