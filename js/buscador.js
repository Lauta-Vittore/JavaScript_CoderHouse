import productos from './db/db.js';
import escucharBoton from './dom.js';


const formulario = document.querySelector('#formulario');
const boton = document.querySelector('#boton')
const resultado = document.querySelector('#resultado')
const main = document.querySelector('#main')
const buscado = document.querySelector('#buscado')


const filtrar = () =>{
    main.style.display = 'none'
    resultado.innerHTML = ``;
    const texto = formulario.value.toLowerCase();
    buscado.innerHTML = `<h2 class="titulo2"> Resultados para: ${formulario.value}</h2>`;
    for (let producto of productos) {
        let nombre = producto.titulo.toLowerCase();
        if (nombre.indexOf(texto) !== -1) {
            resultado.innerHTML += `
            
                    <div class="container">
                        <div class="card">
                            
                            <div class="imgBx">
                                
                                <img src="${producto.foto}">
                                
                            </div>
                            <div class="contentBx">
                                <div class="title">
                                    <h2>${producto.titulo}</h2>
                                </div>
                                <div class="color"> 
                                    <h3>${producto.descripcion}</h3>
                                </div>
                                <div class="size">
                                <h3 id="tallaId">tallas</h3>
                                    <span>${producto.talla}</span>
                                </div>
                                <div class="buy">
                                    <div class="price">
                                    
                                        <span>$${producto.precio}</span>
                                    </div>
                                    <ul class="action">
                                        
                                        <li>
                                            <a href="#" ><img src="pic/carro-de-compras.png" alt="carrito" style="width: 20px;" class="agregarCarro" id="${producto.id}" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"></a><span>Añadir al carrito</span>
                                        </li>
                                        
                                        <li><a href="#"><img src="pic/ver.png" alt="ver" width="20px"></a><span>Ver producto</span></li>
                                        
                                        <li><a href="#"><img src="pic/favorito.png" alt="fav" style="width: 20px;"></a><span>Favorito</span></li>
                                        
                                    </ul>
                                    <a href="#" class="btnVerProducto agregarCarro" id="${producto.id}" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Comprar</a>
                                </div>
                            </div>
                        
                        </div>
                    </div>
            `;
        }
                  
    }
    escucharBoton()
}

boton.addEventListener('click', filtrar)


