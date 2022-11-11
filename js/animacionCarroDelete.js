import anime from '../js/lib/anime-master/lib/anime.es.js';
function animacionCarroDelete() {
    alert('animacion')
    anime({
        targets: '.carro',
        translateX: 250
    });
}

export default animacionCarroDelete
