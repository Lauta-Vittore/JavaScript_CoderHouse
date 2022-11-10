/* import anime from '../js/lib/anime-master/lib/anime.es.js';


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
 */

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

window.addEventListener('scroll', mostrarScroll)
