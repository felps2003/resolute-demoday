/* ---- Marcador de página navbar ---- */
const currentLocation = location.href;
const navItems = document.querySelectorAll('a');
const navLenght = navItems.length;

for(let i = 0; i < navLenght; i++){
    if(navItems[i].href === currentLocation){
        navItems[i].className = 'active';
    }
} 















