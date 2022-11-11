import anime from '../js/lib/anime-master/lib/anime.es.js';


var opac = anime({
    targets: '.letter',
    opacity:1,
    scale:1,
    easing:'easeInBounce',
    delay: function(el, index) {
        return index * 80;
      },
    direction: 'alternate',
    loop: true
  });

  

let animado = document.querySelectorAll(".animado");
let animadoI = document.querySelectorAll(".animadoI");
let animadoD = document.querySelector(".animadoD");
let categoria = document.querySelector(".categoria");

function mostrarScroll() {
    let scroll = document.documentElement.scrollTop
    let alturaAnimado = categoria.offsetTop;
    if (alturaAnimado -300 < scroll) {
        
        for (let i = 0; i < animado.length; i++) {
            animado[i].style.opacity = 1;
            animado[i].classList.add('animadoIzq')  
        } 
        animadoD.classList.add('animadoDer')             
    }
}
function animacionCard() {
    anime({
        targets: '.carro',
        scale: [
          {value: .1, easing: 'easeOutSine', duration: 500},
          {value: 1, easing: 'easeInOutQuad', duration: 1200}
        ],
        delay: anime.stagger(200, {grid: [14, 5], from: 'center'})
      });
}
   



window.addEventListener('scroll', mostrarScroll)

export default animacionCard


