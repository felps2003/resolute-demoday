/* Função responsavel por recuperar os freelancers do banco de dados */
async function perfis(){
    try{
        let API = await fetch("http://localhost:5000/perfil")
        let response = await API.json();
        let data = response

        data.reverse();
        createNavgationButtons(data, data.length, data.length - 4);
        renderPerfis(data, data.length, data.length - 4);
    
    }
    catch{
        console.log("error")
    }
};


/* criando os botões para navegar entre os perfils */
const createNavgationButtons = (data, inital, final) => {
    let valueInital = inital;
    let valueFinal = final;
    let pageNum = 0;

    for(let i = 0; i <= data.length; i+= 4){
        pageNum += 1;
        if(i != 0) {
            valueInital -= 4;
            valueFinal -= 4;
        }

        newButton(pageNum, valueInital, valueFinal, data)
    }
}

const btnNextPerfis = document.querySelector('.btnNextVagas');
const newButton = (pageNum, inital, final, data) => {
    let btnNext = document.createElement("button");
    let hrefNext = document.createElement("a");
    hrefNext.href = "#profissionais";

    btnNext.type = "submit";
    btnNext.className = "btnNext";
    btnNext.innerHTML = pageNum;

    btnNext.addEventListener("click", () => {
        clearPerfis();
        renderPerfis(data, inital, final);
        scrollAnimation();
    })

    hrefNext.appendChild(btnNext)
    btnNextPerfis.appendChild(hrefNext)
}

/* Limpando os perfils para imprimir novos */
const clearPerfis = () => {
    let containerFreelas = document.querySelector(".container_freelas");
    containerFreelas.innerHTML = " ";
}


/* Redenrizando o perfil no HTML */
const renderPerfis = (data, inital, final) =>{
    let valueInital = inital;
    let valueFinal = final;
    
    let filterPerfis = data.filter(item => {
        if(item.id < valueInital && item.id >= valueFinal) {
            return item
        }
    })

    filterPerfis.forEach(perfil => {
        renderPerfisHTML(perfil)
    })
}

const containerPerfis = document.querySelector(".container_freelas");
function renderPerfisHTML({nome, pcd, cargo, desc, competencia, preco, id}) {
   
    //Criando divContainer
    let miniPerfil = document.createElement("div");
    if(pcd === true) {
        miniPerfil.className = "miniPerfilPCD";
    }else {
        miniPerfil.className = "miniPerfil";
    }


    //Perfil items
    let perfilItems = document.createElement("div");
    perfilItems.className = "perfil_items";


    //Informações pessoais
    let perfilInfo = document.createElement("div");
    perfilInfo.className = "perfil_info";


    let freelancer = document.createElement("div");
    freelancer.className = "freelancer";

    let avatar = document.createElement("span");
    avatar.className = "avatar";
    let imgAvatar = document.createElement("img");
    imgAvatar.src = "../_assets/img/freelaAvatar.png";
    avatar.appendChild(imgAvatar);
    
    //Informações text
    let freelaText = document.createElement("div");
    freelaText.className = "freela_text";

    let nomeText = document.createElement("h2");
    nomeText.innerHTML = nome;
    if(pcd === true){
        let pcdCard = document.createElement("span");
        pcdCard.innerHTML = "PCD";
        nomeText.appendChild(pcdCard);
    }

    let cargoText = document.createElement("p");
    cargoText.innerHTML = cargo;

    let avalicaoPerfil = document.createElement("span");
    avalicaoPerfil.className = "avaliacao";
    avalicaoPerfil.innerHTML = `
                                <i class="fa-solid fa-star valid"></i>
                                <i class="fa-solid fa-star valid"></i>
                                <i class="fa-solid fa-star valid"></i>
                                <i class="fa-solid fa-star valid"></i>
                                <i class="fa-solid fa-star"></i>`

    freelaText.appendChild(nomeText);
    freelaText.appendChild(cargoText);
    freelaText.appendChild(avalicaoPerfil);

    //Preço

    let precoText = document.createElement("div");
    precoText.className = "preco";

    let precoTitle = document.createElement("h2");
    precoTitle.innerHTML = "Preco por hora"
    let precoNum = document.createElement("p");
    precoNum.innerHTML = `R$ ${preco}.00`

    precoText.appendChild(precoTitle);
    precoText.appendChild(precoNum);

    freelancer.appendChild(avatar);
    freelancer.appendChild(freelaText);
    
    perfilInfo.appendChild(freelancer);
    perfilInfo.appendChild(precoText);
    


    //Descrição do freelancer
    let descricao = document.createElement("div");
    descricao.className = "descricao_freela";

    let descText = document.createElement("p");
    descText.innerHTML = desc;

    let verPerfil = document.createElement("a");
    verPerfil.setAttribute("href", `/html_Pages/perfilFreelancer.html?id=${id}`);
    verPerfil.innerHTML = "Ver perfil completo"

    descricao.appendChild(descText);
    descricao.appendChild(verPerfil);


    //Competencias do freelancer
    let competencias = document.createElement("div");
    competencias.className = "competencia";

    competencia.forEach(item => {
        let comItem = document.createElement("div");
        comItem.className = "compItem";
    
        let compText = document.createElement("p");
        compText.innerHTML = item
    
        comItem.appendChild(compText);
        competencias.appendChild(comItem);
    })
  



    //Botoes 
    let contBtns = document.createElement("div");
    contBtns.className = "cont_btns";

    let btnEnviar = document.createElement("button");
    btnEnviar.className = "btn_enviarProposta";
    btnEnviar.innerHTML = "Entrar em contato"

    let btnEquipe = document.createElement("button");
    btnEquipe.className = "btn_convidarEquipe";
    btnEquipe.innerHTML = "Convidar para equipe";

    contBtns.appendChild(btnEnviar);
    contBtns.appendChild(btnEquipe);
    

 
    //Container que recebe as  outras divs
    perfilItems.appendChild(perfilInfo);
    perfilItems.appendChild(descricao);
    perfilItems.appendChild(competencias);
    perfilItems.appendChild(contBtns);


    //Renderizando no HTML
    miniPerfil.appendChild(perfilItems);
    containerPerfis.appendChild(miniPerfil);
}


window.addEventListener("load", perfis)