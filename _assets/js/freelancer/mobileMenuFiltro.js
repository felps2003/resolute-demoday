const btnMenuFiltro = document.querySelector(".btnFiltroMobile");
const btnExitFiltroMobile = document.querySelector(".exitFiltroMobile");
const filtroMobile = document.querySelector(".filtroMobile");

btnMenuFiltro.addEventListener("click", () => handleMobileFiltro());
btnExitFiltroMobile.addEventListener("click", () => handleMobileFiltro());

const handleMobileFiltro = () => {
    filtroMobile.classList.toggle("filtroActive");
    console.log("alter");
}

window.addEventListener("scroll", () => {
    filtroMobile.classList.remove("filtroActive");
})
