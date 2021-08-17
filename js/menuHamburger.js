/* animacion botom menu*/ 

const nav = document.querySelector('#hamburger button');
const navMenu = document.querySelector('.nav-list'); 
nav.addEventListener('click', () => {
    nav.classList.toggle('open');
    navMenu.classList.toggle('nav-completo');
})
