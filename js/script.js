/* ojo move*/ 
const eyes = document.querySelectorAll('.eyes')

document.onmousemove = function(event){
    eyes.forEach((item, index) => {
        const x = item.offsetLeft + item.clientWidth / 2; // La coordenada x del ojo
        const y = item.offsetTop + item.clientHeight / 2; // La coordenada y del ojo
        const rad = Math.atan2(event.pageX - x, (event.pageY - scrollY) - y); // La distancia de coordenadas entre el mouse y el ojo, y luego use la función atan2 para calcular el arco entre el punto y el punto (0, 0)
        const rot = (rad * (180 / Math.PI) * -1) + 180 - 40; // Convertir a ángulo
        item.style.transform = 'rotate(' + rot + 'deg)'
    });
}

/* animacion de ojo activado*/
const links = document.querySelectorAll('a');
const activeEyeLasts = document.querySelector('.eye');
const activeEyePupil = document.querySelector('.eyes');

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('mouseover', function(){
        activeEyeLasts.classList.toggle('eye-one');
        activeEyePupil.classList.toggle('eyes-one');
    });

    links[i].addEventListener('mouseout', function(){
        activeEyeLasts.classList.remove('eye-one');
        activeEyePupil.classList.remove('eyes-one');
    });
}

