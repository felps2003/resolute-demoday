const urlSearchParams = new URLSearchParams(window.location.search);
const vagaId = urlSearchParams.get("id");


function acessandoDados(id) {
    fetch("http://localhost:5000/vagas")
    .then(resp => resp.json())
    .then(data => {
       createProjectDetails(data[id])
    });
};


const containerProject = document.querySelector(".topo_info");
const containerPrincipal = document.querySelector(".cont_items");

function createProjectDetails({titulo, ramo, desc, atividade, habilidade, preco, pcd, dataPublic}){

 
    // ------------------- Informações da empresa: ------------------- //
    let contOrg = document.createElement("div");
    contOrg.className = "cont_org";

    //Avatar
    let avatar = document.createElement("span");
    avatar.className = "avatar";

    let imgAvatar = document.createElement("img");
    imgAvatar.src = "../_assets/img/logoMyAra.png";
    avatar.appendChild(imgAvatar);

    //Text
    let orgText = document.createElement("div");
    orgText.className = "org_text";

    let orgH1 = document.createElement("h1");
    orgH1.innerHTML = "Instituto myAra";

    let orgP = document.createElement("p");
    orgP.innerHTML = ramo;

    orgText.appendChild(orgH1);
    orgText.appendChild(orgP);

    //Text
    let aval = document.createElement("div");
    aval.className = "aval";
    aval.innerHTML = `<i class="fa-solid fa-star valid"></i>
                      <i class="fa-solid fa-star valid"></i>
                      <i class="fa-solid fa-star valid"></i>
                      <i class="fa-solid fa-star valid"></i>
                      <i class="fa-solid fa-star"></i>`
   

    contOrg.appendChild(avatar);
    contOrg.appendChild(orgText);
    contOrg.appendChild(aval);



    // ------------------- Informações do projeto ------------------- //
    let contOferta = document.createElement("div");
    contOferta.className = "cont_oferta";

    //Titulo projeto
    let divTitulo = document.createElement("div");
    divTitulo.className = "titulo_oferta";

    let tituloH2 = document.createElement("h2");
    tituloH2.innerHTML = titulo;

    let circle = document.createElement("span");
    circle.className = "circle";

    let data = document.createElement("p");
    data.innerHTML = `<span>Data da publicação:</span> ${dataPublic}`;

    let proposta = document.createElement("p");
    proposta.innerHTML = `<span>N°de proposta:</span> nenhuma`;

    divTitulo.appendChild(tituloH2);
    divTitulo.appendChild(circle);
    divTitulo.appendChild(data);
    divTitulo.appendChild(proposta);


    //Descricao
    let divDesc = document.createElement("div");
    divDesc.className = "desc_oferta";

    let descH3 = document.createElement("h3");
    if(pcd === true){
        descH3.innerHTML = "Descrição da vaga";
    }else {
        descH3.innerHTML = "Descrição do projeto";
    }

    let descricao = document.createElement("p");
    descricao.innerHTML = desc;

    divDesc.appendChild(descH3);
    divDesc.appendChild(descricao);


    //Atividades
    let divAtividade = document.createElement("div");
    divAtividade.className = "atividade_oferta";

    let atividadeH3 = document.createElement("h3");
    if(pcd === true){
        atividadeH3.innerHTML = "Atividades da vaga"
    }else {
        atividadeH3.innerHTML = "Atividades do projeto"
    }

    let atividadeText = document.createElement("p");
    atividadeText.innerHTML = atividade;

    divAtividade.appendChild(atividadeH3);
    divAtividade.appendChild(atividadeText);


    //habilidades
    let divHabilidade = document.createElement("div");
    divHabilidade.className = "habilidade";

    let habilidadeH3 = document.createElement("h3");
    habilidadeH3.innerHTML = "Habilidades exigidas";

  

    let btnHab = document.createElement("div");
    btnHab.className = "btnHabilidade";


    if(pcd === true) {
        let btnPCD = document.createElement("div");
        btnPCD.className = "habItem";
        btnPCD.style.background = "#FF8080"
        
        let btnPcdP = document.createElement("p");
        btnPcdP.innerHTML = "Vaga Exclusiva PCD";
        btnPcdP.style.color = "#151219";
        btnPcdP.style.fontWeight = "600"

        btnPCD.appendChild(btnPcdP);

        btnHab.appendChild(btnPCD)
    }


    let habItem = document.createElement("div");
    habItem.className = "habItem";
    let habItemP = document.createElement("p");
    habItemP.innerHTML = habilidade;
    habItem.appendChild(habItemP);

    btnHab.appendChild(habItem);

    divHabilidade.appendChild(habilidadeH3);
    divHabilidade.appendChild(btnHab);


    contOferta.appendChild(divTitulo);
    contOferta.appendChild(divDesc);
    contOferta.appendChild(divAtividade);
    contOferta.appendChild(divHabilidade);



    // ------------------- Preco hora ------------------- //
    let divPreco = document.createElement("div");
    divPreco.className = "cont_preco";

    //Icone nave
    let naveIcon = document.createElement("div");
    naveIcon.className = "naveIcon";
    let imgIcon = document.createElement("img");
    imgIcon.src = "../_assets/img/nave.png";
    naveIcon.appendChild(imgIcon);

    //Box preco
    let boxPreco = document.createElement("div");
    boxPreco.className = "box_preco";

    let precoH4 = document.createElement("h4");
    precoH4.innerHTML = "Preco por hora";

    let precoP = document.createElement("p");
    precoP.innerHTML = `R$ ${preco}.00`;

    let btnProposta = document.createElement("button");
    btnProposta.className = "btn_proposta";
    btnProposta.innerHTML = "Enviar uma proposta";

    let divPergunta = document.createElement("div");
    divPergunta.innerHTML = `<a href="#">Enviar perguntas</a>
                             <span class="iconPerg"></span>`

    boxPreco.appendChild(precoH4);
    boxPreco.appendChild(precoP);
    boxPreco.appendChild(btnProposta);
    boxPreco.appendChild(divPergunta);                        


    divPreco.appendChild(naveIcon);
    divPreco.appendChild(boxPreco);
    

    //Vinculando no HTML
    containerProject.appendChild(contOrg) ;
    containerProject.appendChild(contOferta); 

    containerPrincipal.appendChild(divPreco);
    

} 


window.addEventListener("load", () => acessandoDados(vagaId));










