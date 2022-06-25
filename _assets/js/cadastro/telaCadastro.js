import {nomeProf, nomeSocial, emailProf, telefoneProf, genero, cpf, categorias, hardSkill, 
    tempoExperiencia, formaPagamento, modalidade, opcaoPCD, tipoPCD, senhaProf} from './inputValues.js';


class Profissional {
    constructor(freelancer = 1,nomeCompleto, nomeSocial = null, email, 
        telefone, genero, cpf, categoria, hardSkill, tempoExperiencia, 
        formaPagamento, presencial, homeOffice, hibrido, flexivel, profissaPCD ,fisica, mental, auditiva, visual, senhaProf) {
        this.freelancer = freelancer;
        this.nomeProf = nomeCompleto;
        this.nomeSocial = nomeSocial;
        this.emailProf = email;
        this.telefoneProf = telefone;
        this.genero = genero;
        this.cpf = cpf;
        this.categoria = categoria;
        this.hardskill = hardSkill;
        this.tempoExperiencia = tempoExperiencia;
        this.formaPagamento = formaPagamento;
        this.presencial = presencial;
        this.homeOffice = homeOffice;
        this.hibrido = hibrido;
        this.flexivel = flexivel;
        this.profissaPCD = profissaPCD;
        this.fisica = fisica;
        this.mental = mental;
        this.auditiva = auditiva;
        this.visual = visual;
        this.senhaProf = senhaProf;
    }
}

const enviarForm = document.querySelector("#btn-continuar-etapa3");

enviarForm.addEventListener("click", (e) => {
    e.preventDefault();

    const categoriaProf = escolhaCategoriaProf();  
    const modalidadeEscolhida = modalidade.filter(item => {
        if(item.checked === true) {
            return item
        }
    });

    //const modalidadeCerto = modalidadeEscolhida.map(item => item.value);
    let fisica = resgatandoTipoPCD(0);
    let mental = resgatandoTipoPCD(1);
    let auditiva = resgatandoTipoPCD(2);
    let visual = resgatandoTipoPCD(3);

    let presencial = resgatandoModalidade(0);
    let homeOffice = resgatandoModalidade(1);
    let hibrido = resgatandoModalidade(2);
    let flexivel = resgatandoModalidade(3);

    
    const opcaoPCDChecked = opcaoPCD.filter(item => {
        if(item.checked === true){
            return item
        }
    });

    const valPcd = opcaoPCDChecked[0].value; 
    
    
    let contaProfissional = new Profissional(
        1,
        nomeProf.value,
        nomeSocial.value,
        emailProf.value,
        telefoneProf.value,
        genero.value,
        cpf.value,
        categoriaProf,
        hardSkill.value,
        tempoExperiencia.value,
        formaPagamento.value,
        presencial,
        homeOffice,
        hibrido,
        flexivel,
        valPcd,
        fisica, 
        mental,
        auditiva,
        visual,
        senhaProf.value

    );

   
    fetch("http://localhost:8080/contacts", {
        method: "POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify(contaProfissional)
    });

    console.log(contaProfissional);
});


const resgatandoTipoPCD = (i) =>{
    if(tipoPCD[i].checked === true){
        return 1;
    }else {
        return 0;
    }
}

const resgatandoModalidade = (i) => {
    if(modalidade[i].checked === true){
        return 1;
    }else {
        return 0;
    }
}






const nomeSocialSelected = document.querySelector('#nome-social').addEventListener('click', ()=> {    
   const input = document.querySelector('#entrada-nome-social');
   input.classList.add("ativo"); 
})

const nomeSocialNotSelected = document.querySelector('#sem-nome-social').addEventListener('click', ()=> {
   const input = document.querySelector('#entrada-nome-social');
   input.classList.remove("ativo");
})

const pcdChecked = document.querySelector("#radio-prof-deficiente").addEventListener('click', ()=> {
    document.querySelector("#checked-tipo-deficiencia").classList.add("ativo");
})

const pcdNotChecked = document.querySelector("#radio-prof-sem-deficiente").addEventListener('click', ()=> {
    document.querySelector("#checked-tipo-deficiencia").classList.remove("ativo");
})



const arreyEscolhaCategoriaProfissional = document.querySelectorAll('.box-categoria-profissional');  

arreyEscolhaCategoriaProfissional.forEach(elemento => {
    elemento.addEventListener('click', ()=> {

        // Removendo a seleção de qualquer outras categoria,para que não ajam mais de uma categoria selecionada
        arreyEscolhaCategoriaProfissional.forEach(elementos => {
            elementos.removeAttribute('data-selecionado', 'selecionado');
        })

        elemento.setAttribute('data-selecionado' , 'selecionado'); 

    })
})

//////////////////////////////////////////////////////////////////////////////////////////////
// Função responsável por recuperar o valor de seleção do tipo de conta
// e devolver isso no momento do click de finalizaçãodo forms

const escolhaCategoriaProf = () =>{
    let nameDaCategoria; 

    arreyEscolhaCategoriaProfissional.forEach(categoria =>{
        if(categoria.getAttribute('data-selecionado') === "selecionado") {
        
            switch (categoria.getAttribute('name')) {
                case "categoria_1":
                    nameDaCategoria = 'Programação e TI'; 
                    break;

                case "categoria_2" :
                    nameDaCategoria = 'Design e UI/UX';
                    break;

                case "categoria_3" :
                    nameDaCategoria = 'Infraestrutura';
                    break;

                case "categoria_4" :
                    nameDaCategoria = 'Marketing e Vendas';
                    break;
                case "categoria_5" :
                    nameDaCategoria = 'Administrativo';
                break;

                default:
                    null;
                break;
            }
        }
    })

    return  nameDaCategoria;
}


const recuperandoOValueDeArrey = (arrayDeDados) =>{
    let newArrey = Array(); 
    arrayDeDados.forEach(e =>{
        newArrey.push(e.value);
    })

    return newArrey;
}
  