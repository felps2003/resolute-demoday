/* ---- Avançando o formulario ---- */

const form01 = document.querySelector("#form01");
const form02 = document.querySelector("#form02");
const form03 = document.querySelector("#form03");
const btn01 = document.querySelector("#btn_continuar01");
const btn02 = document.querySelector("#btn_continuar02");
const btn03 = document.querySelector("#btn_finalizar");
const btn04 = document.querySelector("#btn_voltar01");
const btn05 = document.querySelector("#btn_voltar02");
const etapa01 = document.querySelector("#etapa01");
const etapa02 = document.querySelector("#etapa02");
const etapa03 = document.querySelector("#etapa03");

btn01.addEventListener("click",()=>handleForm(form02, form01, etapa02, etapa01));
btn02.addEventListener("click",()=>handleForm(form03, form02, etapa03, etapa02));
btn04.addEventListener("click",()=>handleForm(form01, form02, etapa01, etapa02));
btn05.addEventListener("click",()=>handleForm(form02, form03, etapa02, etapa03));


function handleForm(form_ativo, form_desativo, etapa_atual, etapa_anterior){
    form_ativo.classList.add("form_ativo");
    form_desativo.classList.remove("form_ativo");
    etapa_atual.classList.add("nivel_atual");
    etapa_anterior.classList.remove("nivel_atual");
}


/* ---- Cadastrando projeto no banco; ---- */
const tituloProjeto = document.querySelector('#tituloProjeto');
const descricao = document.querySelector('#descricao');
const atividade = document.querySelector('#atividades');

const opcaoPCD = [];
opcaoPCD[0] = document.querySelector('#pcdTrue');
opcaoPCD[1] = document.querySelector('#pcdFalse');

const adaptado = document.querySelector('#exclusiva');

const tiposDeficiencia = [];
tiposDeficiencia[0] = document.querySelector('#visual');
tiposDeficiencia[1] = document.querySelector('#auditiva');
tiposDeficiencia[2] = document.querySelector('#fisica');
tiposDeficiencia[3] = document.querySelector('#mental');

const areaAtuacao = document.querySelector('#categoria');
const especialidade = document.querySelector('#especialidade');
const experiencia = document.querySelector('#experiencia');

const formaPag = document.querySelector('#formaPag');
const valorPag = document.querySelector('#valorPag'); 

const cadastrarProjeto = document.querySelector('#btn_finalizar');
const contInfosPCD = document.querySelector('.cont_infosPCD');


opcaoPCD[0].addEventListener("click", () => handleInfosPCD(opcaoPCD[0]));
opcaoPCD[1].addEventListener("click", () => handleInfosPCD(opcaoPCD[1]));


const handleInfosPCD = (validacao) => {
    if(validacao.checked === true && validacao == opcaoPCD[0]){
        contInfosPCD.classList.add('active');
    }else {
        contInfosPCD.classList.remove('active');
    }
}




class Projeto {
    constructor(titulo, descricao, atividade, opcaopcd, adaptado, visual, auditiva, fisica, mental, areaAtuacao, especialidade, experiencia, formaPag, valorPag){
        this.titulo = titulo;
        this.descricao = descricao;
        this.atividade = atividade;
        this.opcaoPCD = opcaopcd;
        this.adaptado = adaptado;
        this.visual = visual;
        this.auditiva = auditiva;
        this.fisica = fisica;
        this.mental = mental;
        this.ramo = areaAtuacao;
        this.habilidade = especialidade;
        this.tempoExperiencia = experiencia;
        this.formaPagamento = formaPag;
        this.precoHora = valorPag;
    }
}



cadastrarProjeto.addEventListener("click", () => {

    let opcaoPCDFilter = opcaoPCD.filter(opcao => opcao.checked === true);
    let opcaoMap = Number(opcaoPCDFilter.map(opcao => opcao.value));
    let ambienteAdaptado = (adaptado.value);


    let visual = checkedDeficiencia(0);
    let auditiva = checkedDeficiencia(1);
    let fisica = checkedDeficiencia(2);
    let mental = checkedDeficiencia(3);
    
    let projeto = new Projeto(
        tituloProjeto.value,
        descricao.value,
        atividade.value,
        opcaoMap,
        ambienteAdaptado,
        visual,
        auditiva,
        fisica,
        mental,
        areaAtuacao.value,
        especialidade.value,
        experiencia.value,
        formaPag.value,
        valorPag.value
    );

    fetch("API", {
        method: "POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify(projeto)
    });
   

    
});


const checkedDeficiencia = (i) => {
    if(tiposDeficiencia[i].checked === true) {
        return 1;
    }else {
        return 0;
    }
}



