import productos from './db/db.js';
import animacionCard from './animacion.js'
import animacionCarroDelete from './animacionCarroDelete.js'

let domParaTi = document.querySelector("#domParaTi");        
let domMasVendido = document.querySelector("#domMasVendido")
let domRemeras = document.querySelector("#domRemeras")
let domBuzo = document.querySelector("#domBuzo")
let domZapatillas = document.querySelector("#domZapatillas")
let domAccesorio = document.querySelector("#domAccesorio")
let domCuellito = document.querySelector("#domCuellito")
let listaCarrito = document.querySelector("#listaCarrito");
let productosSeleccionados = [];
let botonVaciar= document.getElementById('vaciar-carrito')
let contadorCarrito = document.getElementById('contadorCarrito')
let precioTotal = document.getElementById('precioTotal')




document.addEventListener("DOMContentLoaded", () => {                              //carga el contenido
    productosSeleccionados = JSON.parse(localStorage.getItem("productos")) || [];
    agregarProductoAlcarro();
});

botonVaciar.addEventListener('click', () => {
    productosSeleccionados.length = 0          // igualo a 0 el length de los productos del carrito para vaciarlo
    agregarProductoAlcarro();                  // llama a la funcion para que se actualize el carrito
})




function sincronizarConLocalStorage(){
    localStorage.setItem("productos", JSON.stringify(productosSeleccionados));  //guardo en el localSrotage el carrito
};

function printData(object) {
    object.forEach((element) => {
        const div = document.createElement('div')           
        div.classList.add('container')                    //creo un div con la clase container y le inserto la card de productos
        div.innerHTML += `
            
                    <div class="card">
                        
                        
                            <div class="imgBx">
                                
                                <img src="${element.foto}">
                                
                            </div>
                            <div class="contentBx">
                                <div class="title">
                                    <h2>${element.titulo}</h2>
                                </div>
                                <div class="color"> 
                                    <h3>${element.descripcion}</h3>
                                </div>
                                <div class="size">
                                <h3 id="tallaId">tallas</h3>
                                    <span>${element.talla}</span>
                                </div>
                                <div class="buy">
                                    <div class="price">
                                    
                                        <span>$${element.precio}</span>
                                    </div>
                                    <ul class="action">
                                        <li><a href="#" ><img src="pic/carro-de-compras.png" alt="carrito" style="width: 20px;" class="agregarCarro" id="${element.id}" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"></a><span>Añadir al carrito</span></li>
                                        
                                        <li><a href="#" class="verProducto" id="${element.id}"><img src="pic/ver.png" alt="ver" width="20px"></a><span>Ver producto</span></li>
                                        
                                        <li><a href="#"><img src="pic/favorito.png" alt="fav" style="width: 20px;"></a><span>Favorito</span></li>
                                        
                                    </ul>
                                    <a href="#" class="btnVerProducto agregarCarro" id="${element.id}" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Comprar</a>
                                </div>
                            </div>
                        
                    </div>
            `;
            lugarDeProd(element, div)
                  // inserto la card de productos en el id domProductos
          
             
    }); 
    object.forEach((element) => {
        const div = document.createElement('div')
        div.classList.add('container')
        div.innerHTML += `
            
                    <div class="card">
                        
                        <div class="imgBx">
                            
                            <img src="${element.foto}">
                            
                        </div>
                        <div class="contentBx">
                            <div class="title">
                                <h2>${element.titulo}</h2>
                            </div>
                            <div class="color"> 
                                <h3>${element.descripcion}</h3>
                            </div>
                            <div class="size">
                            <h3 id="tallaId">tallas</h3>
                                <span>${element.talla}</span>
                            </div>
                            <div class="buy">
                                <div class="price">
                                
                                    <span>$${element.precio}</span>
                                </div>
                                <ul class="action">
                                    <li><a href="#" ><img src="pic/carro-de-compras.png" alt="carrito" style="width: 20px;" class="agregarCarro" id="${element.id}" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"></a><span>Añadir al carrito</span></li>
                                    
                                    <li><a href="#"><img src="pic/ver.png" alt="ver" width="20px"></a><span>Ver producto</span></li>
                                    
                                    <li><a href="#"><img src="pic/favorito.png" alt="fav" style="width: 20px;"></a><span>Favorito</span></li>
                                    
                                </ul>
                                <a href="#" class="btnVerProducto agregarCarro" id="${element.id}" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Comprar</a>
                            </div>
                        </div>
                    
                    </div>
            `;
           

        
            lugarDeDom(element, div);   // llamo a la funcion para dividir en que lugar va la card

             
    });
    
}
 

function lugarDeProd(element, div) {
    if (element.tipo == "remera") {     // si la seccion es para ti se inserta en la seccion para ti 
        domRemeras.appendChild(div)
    }
    if (element.tipo == "buzo") {     // si la seccion es para ti se inserta en la seccion para ti 
        domBuzo.appendChild(div)
    }
    if (element.tipo == "zapatilla") {     // si la seccion es para ti se inserta en la seccion para ti 
        domZapatillas.appendChild(div)
    }
    if (element.tipo == "cuellito") {     // si la seccion es para ti se inserta en la seccion para ti 
        domCuellito.appendChild(div)
    }
    if (element.tipo == "accesorio") {     // si la seccion es para ti se inserta en la seccion para ti 
        domAccesorio.appendChild(div)
    }
}
function lugarDeDom(element, div) {
    if (element.seccion == "paraTi") {     // si la seccion es para ti se inserta en la seccion para ti 
        domParaTi.appendChild(div)
    }
    if (element.seccion == "masVendido") {       // si la seccion es para ti se inserta en la seccion mas vendidos
        domMasVendido.appendChild(div)     
    }

}


function agregarProductoAlcarro() {

    listaCarrito.innerHTML = ``;
    
    productosSeleccionados.forEach((element,index) => {
        const divCarrito = document.createElement('div')
        divCarrito.classList.add('carro')
        divCarrito.innerHTML += `<tr>
            <div class="cont"><img class="imgFitMiniatura" src="${element.foto}" alt="${element.titulo}" width="100px"></div>
            <div class="carritoHead">
                <div class="nombreProducto">${element.titulo}</div>
                <div class="text-center cosas">  
                    <div class="text-center">
                        <button class="menos btnCant" id="${element.id}">-</button><span> ${element.cantidad}</span> <button class="mas btnCant" id="${element.id}">+</button>
                    </div>
                    <div class="text-center cont">
                        <select id="talla${element.id}" class="text-center selector">
                            <option value="default"> Talla </option>
                        </select>
                    </div>
                    <div class="text-center cont precioProductoTotal"> $${element.precio * element.cantidad}</div>
                </div>
            </div>
           
           
            
            <div class="text-center cont"><a href="#" id="${element.id}" class="borrar-curso" data-id="1">X</a></div>
          </tr>`;

          listaCarrito.appendChild(divCarrito)
        let tallar= 'talla' + element.id 
        let tallaId = document.getElementById(tallar)
        for (let i = 0; i < element.talla.length; i++) {
            let option = document.createElement("option"),
                txt = document.createTextNode(element.talla[i])    
            option.appendChild(txt)
            tallaId.insertBefore(option, tallaId.lastChild )
        }
    });
    contadorCarrito.innerText = productosSeleccionados.length
    precioTotal.innerText = productosSeleccionados.reduce((acc, prod) => acc + (prod.precio*prod.cantidad), 0)
    // Seleccionamos el boton eliminar 
    let buttonDelete = document.querySelectorAll('.borrar-curso');
    // Lo recorremos 
    buttonDelete.forEach(element => {       
        element.addEventListener('click',(e)=>{
            animacionCarroDelete()
            e.preventDefault();
            let id = e.target.id
            // Eliminar del arreglo del carrito,Filter retorna un nuevo Array
            // Filter si es distinto lo excluye 
            productosSeleccionados = productosSeleccionados.filter( producto => producto.id !== id );
            agregarProductoAlcarro()
        })
    })

    let buttonMenos = document.querySelectorAll('.menos');
    buttonMenos.forEach(element => {
        element.addEventListener('click',(e)=>{
            e.preventDefault();
            let id = e.target.id
            // Eliminar del arreglo del carrito,Filter retorna un nuevo Array
            // Filter si es distinto lo excluye 
            let productobaja = productosSeleccionados.filter( producto => producto.id == id );
            const prod = productobaja.map (prod =>{
                    prod.cantidad--
                    if (prod.cantidad == 0) {
                        productosSeleccionados = productosSeleccionados.filter( producto => producto.id !== id );    
                    }
            })
            agregarProductoAlcarro()
        })
    })

    let buttonMas = document.querySelectorAll('.mas');
    buttonMas.forEach(element => {
        element.addEventListener('click',(e)=>{
            e.preventDefault();
            let id = e.target.id
            // Eliminar del arreglo del carrito,Filter retorna un nuevo Array
            // Filter si es distinto lo excluye 
            let productobaja = productosSeleccionados.filter( producto => producto.id == id );
            console.log(productobaja);
            const prod = productobaja.map (prod =>{
                    prod.cantidad++
            })
            agregarProductoAlcarro()
        })
    })
    

    sincronizarConLocalStorage();
    
}





function buscarProductos ( idProducto, buscarProducto ){
    const existe = productosSeleccionados.some(prod => prod.id === idProducto)
    if(existe){
        const prod = productosSeleccionados.map (prod =>{
            if(prod.id === idProducto){
                prod.cantidad++
            }
        })
    }else{
        // Usuamos find metodo que me retorna la primera coincidencia
    let productoSeleccionados = buscarProducto.find((element) => idProducto == element.id);
    
    // Metemos el curso seleccionado en un array porque viene como un objeto
    let producto = [];
   
    producto.push(productoSeleccionados);
    // Usuamos un spread operator para ir guardano los ya seleccionado y el ultimo seleccionado
    productosSeleccionados = [...productosSeleccionados, ...producto];
    }
    
    
    agregarProductoAlcarro();
};


printData(productos)
escucharBoton()
const guardarLocal = (clave, valor) => {localStorage.setItem(clave, valor)};
guardarLocal("listaProductos", JSON.stringify(productos))


function escucharBoton() {
    let buttonCard = document.querySelectorAll(".agregarCarro");
    
    // Recorremos los botones asocimaos a un escuchador de eventos
    buttonCard.forEach((element) => {
        element.addEventListener("click", (e) => {
            e.preventDefault();
            let id = e.target.id;
            buscarProductos(id, productos);
            animacionCard();
        });
    });
}

export default escucharBoton;