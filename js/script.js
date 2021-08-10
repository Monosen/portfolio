/* ojo move*/ 
const eyes = document.querySelectorAll('.eyes')

document.onmousemove = function(event){
    eyes.forEach((item, index) => {
        const x = item.offsetLeft + item.clientWidth / 2; // La coordenada x del ojo
        const y = item.offsetTop + item.clientHeight / 2; // La coordenada y del ojo
        const rad = Math.atan2(event.pageX - x, event.pageY - y); // La distancia de coordenadas entre el mouse y el ojo, y luego use la función atan2 para calcular el arco entre el punto y el punto (0, 0)
        const rot = (rad * (180 / Math.PI) * -1) + 180 - 40; // Convertir a ángulo
        item.style.transform = 'rotate(' + rot + 'deg)'
    })
}

/* animacion botom menu*/ 
const nav = document.querySelector('#hamburger button');
const navMenu = document.querySelector('.nav-list'); //
nav.addEventListener('click', () => {
    nav.classList.toggle('open');
    navMenu.classList.toggle('nav-completo');
})


/* preload */

window.onload = function () {
    const preload = document.querySelector('#preload');
    preload.style.visibility = 'hidden';
    preload.style.opacity = '0';
    preload.style.display = 'none';
}

