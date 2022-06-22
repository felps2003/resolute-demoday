/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
document.getElementById('btn-confirmar-login').addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'index.html';
})

const btnProfissionalLogin = document.querySelector('#btn-profissional-login').addEventListener('click', ()=> {
    let estadoSelecaoProf = document.querySelector('#btn-profissional-login')

    if (estadoSelecaoProf.checked === true) {
        document.getElementById('radio-login-profissional').classList.add('selecionado'); 
        document.getElementById('radio-login-empresa').classList.remove('selecionado'); 
    }
})

const btnEmpresaLogin = document.querySelector('#btn-empresa-login').addEventListener('click', ()=> {
    let estadoSelecaoEmpresa = document.querySelector('#btn-empresa-login')

    if (estadoSelecaoEmpresa.checked === true) {
        document.getElementById('radio-login-empresa').classList.add('selecionado'); 
        document.getElementById('radio-login-profissional').classList.remove('selecionado'); 
    }
}) */



/* handle login mode*/

const formFreela = document.querySelector('#form_freela');
const formCompany = document.querySelector('#form_Company');

const btnProfissional = document.querySelector('#btnProfissional');
const btnCompany = document.querySelector('#btnCompany');

btnProfissional.addEventListener("click", () => handleFormSelect(btnProfissional, btnCompany, formFreela, formCompany));
btnCompany.addEventListener("click", () => handleFormSelect(btnCompany, btnProfissional, formCompany, formFreela));



function handleFormSelect(btnOpen, btnClosed, formOpen, formClosed){
    btnOpen.classList.add('selected');
    btnClosed.classList.remove('selected');

    formOpen.classList.remove('formDisable');
    formClosed.classList.add('formDisable');
}



