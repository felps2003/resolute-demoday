/* --- Recuperando os projetos do banco de dados --- */
async function projects(){
    try {
        let API = await fetch("http://localhost:5000/vagas");
        let response = await API.json();
        let data = await response;
        data.reverse();
        createNavgation(data, data.length, data.length - 5);
        iniciandoProjetos(data, data.length, data.length - 5);
    }
    catch {
        
    }

}

function iniciandoProjetos(data, inital, final){
    let contInitial = inital;
    let contFinal = final;


    let filterProject = data.filter(item => {
        if(item.id < contInitial && item.id >= contFinal) {
            return item
        }

    });

    filterProject.forEach(item => {
        dinamicProjectRender(item)
    })
    
   

}

const createNavgation = (data, inital, final) => {
    let initalValue = inital;
    let finalValue = final;

    let pageNum = 0;

    for(let i = 0; i <= data.length; i+=5) {
       pageNum += 1
       if(i != 0) {
        initalValue -= 5;
        finalValue -= 5;
       } 

       createNewButton(pageNum, initalValue, finalValue, data);

    }
}

const containerButtons = document.querySelector(".btnNextVagas");
const createNewButton = (pageNum, inital, final, data) => {
   let button = document.createElement("button");
   let hrefBtn = document.createElement("a");
   hrefBtn.href = "#profissionais";

   button.type = "submit";
   button.className = "btnNext"
   button.id = ""
   button.innerHTML = pageNum
   button.addEventListener("click", () => {
        handleClearProject();
        iniciandoProjetos(data, inital, final);
        scrollAnimation();
   });

  
   
   hrefBtn.appendChild(button);
   containerButtons.appendChild(hrefBtn);
}

/*Scroll to top projects container */
const scrollToProjectTop = (e) => {
    e.preventDefault();
    const to = scrollPosition(e.target) + 70;
    scrollAnimation(to)
}

const scrollPosition = (element) => {
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;
}

const scrollAnimation = (to) => {
    window.scroll ({
        top: to,
        behavior: 'smooth',
    })
}




/*Removendo projetos de acordo com a navegação */
const handleClearProject = () => {
    let projectsClear = document.querySelector(".container_vagas");
    projectsClear.innerHTML = "";
}


/* --- criando os projetos dinamicamente --- */
const container = document.querySelector('.container_vagas');
function dinamicProjectRender({titulo, ramo, desc, atividade, habilidade, preco, pcd, id}){
    
    //Cria a div container dos projetos
    let divProject = document.createElement("div");
    if(pcd == true) {
        divProject.className = "vagaPCD";
       
    }else {
        divProject.className = "vaga";
    }
    

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
    imgUser.src = "../_assets/img/logoMyAra.png";

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
                           <i class="fa-solid fa-star valid"></i>
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
    if(pcd === true){
        h3Desc.innerHTML = "Descrição da vaga";
    }else {
        h3Desc.innerHTML = "Descrição do projeto";
    }
    let PDesc = document.createElement("p");
    PDesc.innerHTML = desc;

    descricao.appendChild(h3Desc);
    descricao.appendChild(PDesc);
    //final Descrição



    //Requisitos do projeto
    let requisitos = document.createElement("div");
    requisitos.className = "req";

    if(pcd === true){
            let reqPCD = document.createElement("div");
            reqPCD.className = "reqItemPCD";
            let reqPcdP = document.createElement("p");
            reqPcdP.innerHTML = "Vaga exclusiva PCD";

            reqPCD.appendChild(reqPcdP);
            requisitos.appendChild(reqPCD);
    }
    
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

    let hrefDetalhes = document.createElement("a");
    hrefDetalhes.setAttribute("href", `/html_Pages/detalheVaga.html?id=${id}`);

    let btnDetalhes = document.createElement("button");
    btnDetalhes.className = "btn_detalhesVaga";
    if(pcd === true){
        btnDetalhes.innerHTML = "Detalhes da vaga";
    }else {
        btnDetalhes.innerHTML = "Detalhes do projeto";
    }
    
    hrefDetalhes.appendChild(btnDetalhes)


    botoes.appendChild(btnEnviar);
    botoes.appendChild(hrefDetalhes);


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




window.addEventListener("load", projects);
























