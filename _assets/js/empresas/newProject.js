
async function projects(){
    try {
        let API = await fetch("http://localhost:5000/vagas");
        let response = await API.json();
        let data = await response;
        iniciandoProjetos(data)
    }
    catch {
        console.error("error");
    }
}


function iniciandoProjetos(data){
    let projetos = data;
    projetos.forEach(item => {
        dinamicProjectRender(item)
    });
  
}


const container = document.querySelector('.container_vagas');
function dinamicProjectRender({titulo, ramo, desc, atividade, habilidade, preco}){
    
    let divProject = document.createElement('div');
    divProject.className = "vaga";

    container.appendChild(divProject)
   
}



window.addEventListener("DOMContentLoaded", projects)













