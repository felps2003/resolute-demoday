/*class UsuarioFreelancer {
    constructor(nomeCompleto, nomeSocial=false, email, telefone, genero, cpf, formasPagamento){
        this.tipoUsuario = 0; 
        this.nomeCompleto = nomeCompleto;
        this.nomeSocial = nomeSocial; 
        this.email = email; 
        this.telefone = telefone;
        this.genero = genero;
        this.cpf = cpf; 
        this.formasPagamento = formasPagamento 
        
    }
}

class CategoriaProfissional extends UsuarioFreelancer {
    constructor(nomeCompleto, nomeSocial=false, email, telefone, genero, cpf, formasPagamento, categoriaProfissional){
        super(nomeCompleto, nomeSocial=false, email, telefone, genero, cpf, formasPagamento);
        this.categoriaDeAtuação = categoriaProfissional; 
    }
}

class UsuarioEmpresa {
    constructor(){
        this.tipoUsuario = 1; 
    }
} */

class Teste { 
    constructor(name, email, phone) {
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
}

const nomeUser = document.querySelector("#nome");
const emailUser = document.querySelector("#email");
const phoneUser = document.querySelector("#phone");


document.querySelector('#btn-continuar-etapa3').addEventListener('click', (e)=> {
    e.preventDefault();
    
    //const tipoUsuario = tipoUsuarioSelecao();   
    //const categoriaProf = escolhaCategoriaProf();  
    //const dadosDeCadastro = capturandoOsDadosEDividindoEmArrey()

    //let UsuarioTeste = new CategoriaProfissional(...dadosDeCadastro[0],categoriaProf);
    let usuarioTeste = new Teste(
        nomeUser.value,
        emailUser.value,
        phoneUser.value
    );

    fetch("http://localhost:8080/contacts", {
        method: "POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify(UsuarioTeste)
    });
   console.log(usuarioTeste);

}); 

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


// 1.1 - Selecionando as Divs de categoria e atribuindo a uma const, formando um Arrey
//      1.2 - usando um forEach para aplicar o evento de click em qualquer uma das divs
//      1.3 quando clicando, recebe o data-selecionado
// 2.1 - Usando outro ForEach para remover qualquer data-selecionado de outras divs
// 2.2 - Assim não teremos mais de uma categoria selecionada!  

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

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Função responsável por recuperar o valor de seleção do tipo de conta
// e devolver isso no momento do click de finalizaçãodo forms

function escolhaCategoriaProf() {
    let nameDaCategoria; 

    arreyEscolhaCategoriaProfissional.forEach(categoria =>{
        if(categoria.getAttribute('data-selecionado') === "selecionado") {
        
            switch (categoria.getAttribute('name')) {
                case "categoria_1":
                    nameDaCategoria = 1; 
                    break;

                case "categoria_2" :
                    nameDaCategoria = 2;
                    break;

                case "categoria_3" :
                    nameDaCategoria = 3;
                    break;

                case "categoria_4" :
                    nameDaCategoria = 4;
                    break;
                case "categoria_5" :
                    nameDaCategoria = 5;
                break;

                default:
                    null;
                break;
            }
        }
    })

    return  nameDaCategoria;
}


function capturandoOsDadosEDividindoEmArrey() {
    const arrayDadosCadastro = document.querySelector('#infos-cadastro-usuario');

    const conjuntoDeInputs = Array(arrayDadosCadastro[2], arrayDadosCadastro[5], arrayDadosCadastro[6], arrayDadosCadastro[7], arrayDadosCadastro[8],
        arrayDadosCadastro[9], arrayDadosCadastro[12])

    const conjuntoCheckeds = Array(arrayDadosCadastro[13],arrayDadosCadastro[14],arrayDadosCadastro[15],arrayDadosCadastro[16],arrayDadosCadastro[19],arrayDadosCadastro[20], 
    arrayDadosCadastro[21],arrayDadosCadastro[22]);

    const conjuntoOptions = Array(arrayDadosCadastro[3],arrayDadosCadastro[4],arrayDadosCadastro[17],arrayDadosCadastro[18]); 
     
    let arrayDeInfosUsuario = Array(recuperandoOValueDeArrey(conjuntoDeInputs));
    console.log(arrayDeInfosUsuario); 
    return arrayDeInfosUsuario; 
}

function recuperandoOValueDeArrey(arrayDeDados){
    let newArrey = Array(); 
    arrayDeDados.forEach(e =>{
        newArrey.push(e.value);
    })

    console.log(newArrey);
    return newArrey;
}
 