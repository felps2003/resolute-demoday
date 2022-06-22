const escolhaProfissional = document.getElementById("escolha-login-profissional"); 
const escolhaEmpresa = document.getElementById("escolha-login-empresa"); 

document.getElementById('escolha-tipo-conta').addEventListener('click', (e) =>{
    e.preventDefault(); 

    if (tipoUsuarioSelecao() === 0) {
        window.open('telaRegistroProfissional.html');
        // window.location.href <- forma correta para mudar a tela
    } else {
        window.open('telaRegistroEmpresa.html');
    }; 

})

escolhaProfissional.addEventListener('click', ()=> {
    escolhaProfissional.setAttribute('data-selecionado', 'selecionado'); 
    escolhaEmpresa.removeAttribute('data-selecionado', 'selecionado')
})

escolhaEmpresa.addEventListener('click', ()=> {
    escolhaEmpresa.setAttribute('data-selecionado', 'selecionado'); 
    escolhaProfissional.removeAttribute('data-selecionado', 'selecionado')
})

function tipoUsuarioSelecao() {
    if (escolhaProfissional.getAttribute('data-selecionado') === "selecionado") {  return 0;  }  
    if (escolhaEmpresa.getAttribute('data-selecionado') === "selecionado") {  return 1;  }
}