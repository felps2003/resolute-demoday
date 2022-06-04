const titulo = document.querySelector("#titulo");
const ramo = document.querySelector("#ramo");
const desc = document.querySelector("#descricao");
const atividade = document.querySelector("#atividade");
const habilidade = document.querySelector("#habilidades");
const precoHora = document.querySelector("#precoHora");
let API = "http://localhost:5000/vagas";

const enviar = document.querySelector("#enviar");
enviar.addEventListener("click", cadastrarProjeto);

class NewProject {
    constructor(titulo, ramo, desc, atividade, skill, preco) {
        this.titulo = titulo;
        this.ramo = ramo;
        this.desc = desc;
        this.atividade = atividade;
        this.habilidade = skill;
        this.preco = preco;
    }
};

function cadastrarProjeto(){
    let projeto = new NewProject(
        titulo.value,
        ramo.value,
        desc.value,
        atividade.value,
        habilidade.value,
        precoHora.value
    );
    
    fetch(API, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(projeto)
    })
    .then(resp => resp.json())
    .then(data => console.log(data))
    .catch(error => console.error(error)) 
};







