/* ------------------ handle Menu Hamburguer ---------------- */
const menuBtn = document.querySelector('.btn_mobile');

function handleMenu(){
    const listaMenu = document.querySelector('.lista');
    listaMenu.classList.toggle('menuActive');
    menuBtn.classList.toggle('btn_mobileActive'); 
}

menuBtn.addEventListener("click", handleMenu);
window.addEventListener("scroll", () =>{
    const listaMenu = document.querySelector('.lista');
    listaMenu.classList.remove('menuActive');
    menuBtn.classList.remove('btn_mobileActive'); 
}) 




/* ------------------- Menu bottom ------------------- */
const mobileHome = document.querySelector('.mobile_home');
const iconHome = document.querySelector('.iconHome');

const mobileSalvo = document.querySelector('.mobile_salvo');
const iconSalvo = document.querySelector('.iconSalvo');

const mobilePesq = document.querySelector('.mobile_pesq');
const iconPesq = document.querySelector('.iconPesq');


const mobileUser = document.querySelector('.mobile_user');
const iconUser = document.querySelector('.iconUser');

mobileHome.addEventListener("click", () => handleBtnMenu(mobileHome, iconHome, 'iconHomeAtivo'));
mobileSalvo.addEventListener("click", () => handleBtnMenu(mobileSalvo, iconSalvo, 'iconSalvoAtivo'));
mobilePesq.addEventListener("click", () => handleBtnMenu(mobilePesq, iconPesq, 'iconPesqAtivo'));
mobileUser.addEventListener("click", () => handleBtnMenu(mobileUser, iconUser, 'iconUserAtivo'));


function handleBtnMenu(btn, icon, iconAcitve){
    btn.classList.toggle('backgroundIconAtivo');
    icon.classList.toggle(iconAcitve);

    switch(btn){
        case mobileHome:
                removeBtnMenu(mobileSalvo, mobilePesq, mobileUser);
                removeIconMenu(iconSalvo, iconPesq, iconUser, 'iconSalvoAtivo','iconPesqAtivo','iconUserAtivo');
            break;

        case mobileSalvo:
                removeBtnMenu(mobileHome, mobilePesq, mobileUser);
                removeIconMenu(iconHome, iconPesq, iconUser, 'iconHomeAtivo','iconPesqAtivo','iconUserAtivo');
            break;

        case mobilePesq:
                removeBtnMenu(mobileSalvo, mobileHome, mobileUser);
                removeIconMenu(iconSalvo, iconHome, iconUser, 'iconSalvoAtivo','iconHomeAtivo','iconUserAtivo');
            break;

        case mobileUser:
                removeBtnMenu(mobileSalvo, mobilePesq, mobileHome);
                removeIconMenu(iconSalvo, iconPesq, iconHome, 'iconSalvoAtivo','iconPesqAtivo','iconHomeAtivo');
            break;
    }

}  

function removeBtnMenu(btn1, btn2, btn3){
    btn1.classList.remove('backgroundIconAtivo');
    btn2.classList.remove('backgroundIconAtivo');
    btn3.classList.remove('backgroundIconAtivo');
    return
}

function removeIconMenu(icon1, icon2, icon3, iconAtivo1, iconAtivo2, iconAtivo3){
    icon1.classList.remove(iconAtivo1);
    icon2.classList.remove(iconAtivo2);
    icon3.classList.remove(iconAtivo3);
    return
}




