/* --- Recuperando os projetos do banco de dados --- */
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

/* --- criando os projetos dinamicamente --- */
const container = document.querySelector('.container_vagas');
function dinamicProjectRender({titulo, ramo, desc, atividade, habilidade, preco, id}){
    
    //Cria a div container dos projetos
    let divProject = document.createElement("div");
    divProject.className = "vaga";


    //Cria a div interna que recebe as informações 
    let divProjectItems = document.createElement("div");
    divProjectItems.className = "vaga_items";

    

    //Informações no topo da vaga (Titlo do projeto, avatar, preco ...)
    let divVagaInfo = document.createElement("div");
    divVagaInfo.className = "vaga_info";

    let empresa = document.createElement("div");
    empresa.className = "empresa";

    //avatar
    let avatar = document.createElement("span");
    avatar.className = "avatar";
    
    let imgUser = document.createElement("img");
    imgUser.src = "_assets/img/user.png";

    avatar.appendChild(imgUser);

    //Textos topo
    let emprestext = document.createElement("div");
    emprestext.className = "empresa_text";

    let h2 = document.createElement("h2");
    h2.innerHTML = titulo;
    let p = document.createElement("p");
    p.innerHTML = ramo;
    let avaliacao = document.createElement("span");
    avaliacao.className = "avaliacao";
    avaliacao.innerHTML = `<i class="fa-solid fa-star valid"></i>
                           <i class="fa-solid fa-star valid"></i>
                           <i class="fa-solid fa-star valid"></i>
                           <i class="fa-solid fa-star"></i>
                           <i class="fa-solid fa-star"></i>`;

    emprestext.appendChild(h2);
    emprestext.appendChild(p);
    emprestext.appendChild(avaliacao);
    
    empresa.appendChild(avatar)
    empresa.appendChild(emprestext);


    //Preço
    let precoHora = document.createElement("div");
    precoHora.className = "preco";

    let h2Preco = document.createElement("h2");
    h2Preco.innerHTML = "Preco por hora";
    let precoP = document.createElement("p");
    precoP.innerHTML = `R$ ${preco},00`;

    precoHora.appendChild(h2Preco);
    precoHora.appendChild(precoP); 
    
    divVagaInfo.appendChild(empresa);
    divVagaInfo.appendChild(precoHora);
    //final Informações topo



    //Descrição do projeto
    let descricao = document.createElement("div");
    descricao.className = "descricao_vaga";

    let h3Desc = document.createElement("h3");
    h3Desc.innerHTML = "Descrição da vaga";
    let PDesc = document.createElement("p");
    PDesc.innerHTML = desc;

    descricao.appendChild(h3Desc);
    descricao.appendChild(PDesc);
    //final Descrição



    //Requisitos do projeto
    let requisitos = document.createElement("div");
    requisitos.className = "req";

    let reqItem = document.createElement("div");
    reqItem.className = "reqItem";
    let reqP = document.createElement("p");
    reqP.innerHTML = habilidade;

    reqItem.appendChild(reqP);
    requisitos.appendChild(reqItem);
    //Final requisitos


    //Botoes do projeto
    let botoes = document.createElement("div");
    botoes.className = "cont_btns";

    let btnEnviar = document.createElement("button");
    btnEnviar.className = "btn_enviarProposta";
    btnEnviar.innerHTML = "Enviar uma proposta";

    let btnDetalhes = document.createElement("button");
    btnDetalhes.className = "btn_detalhesVaga";
    btnDetalhes.innerHTML = "Detalhes da vaga";

    botoes.appendChild(btnEnviar);
    botoes.appendChild(btnDetalhes);


    //Passando os elementos interno para a div que recebe eles internamente.
    divProjectItems.appendChild(divVagaInfo);
    divProjectItems.appendChild(descricao);
    divProjectItems.appendChild(requisitos);
    divProjectItems.appendChild(botoes);
    

    //Passando a div interna para o container do projeto
    divProject.appendChild(divProjectItems);

    //Passando a div container para o HTML
    container.appendChild(divProject); 

   
    


   
}


function teste(id) {

    fetch("http://localhost:5000/vagas")
    .then(resp => resp.json())
    .then(data => {
        console.log(data[id])
    })
    
}




window.addEventListener("load", projects)













