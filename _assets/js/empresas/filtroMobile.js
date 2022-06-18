const btnFiltroMobile = document.querySelector(".btnFiltroMobile");
const exitFiltroMobile = document.querySelector(".exitFiltroMobile");
const filtro = document.querySelector(".filtroMobile");

btnFiltroMobile.addEventListener("click", () => handleFiltro());
exitFiltroMobile.addEventListener("click", () => handleFiltro());

const handleFiltro = ()  => {
    filtro.classList.toggle('filtroActive');
}

window.addEventListener("scroll", () => {
    filtro.classList.remove('filtroActive')
})