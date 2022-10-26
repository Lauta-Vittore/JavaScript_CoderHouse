let domParaTi = document.querySelector("#domParaTi");        
let domMasVendido = document.querySelector("#domMasVendido")
let domProductos = document.querySelector("#domProductos")
let domRemeras = document.querySelector("#domRemeras")
let domBuzo = document.querySelector("#domBuzo")
let domZapatillas = document.querySelector("#domZapatillas")
let domAccesorio = document.querySelector("#domAccesorio")
let domCuellito = document.querySelector("#domCuellito")

let  = document.querySelector("#listaCarrito");
let productosSeleccionados = [];
let botonVaciar= document.getElementById('vaciar-carrito')
let contadorCarrito = document.getElementById('contadorCarrito')
let precioTotal = document.getElementById('precioTotal')
//creo el json de objetos de los productos
let productos = [
    {
        id: "0",
        titulo: "MaxiBuzo",
        descripcion: "BUZO DE ALGODÓN FRIZADO COLOR ROSA CON MANGAS NEGRAS",
        talla: "S",
        precio: 1111,
        foto: "../pic/buzo8.webp",
        seccion: "paraTi",
        tipo: "buzo",
        cantidad: 1,
    },
    {
        id: "1",
        titulo: "MaxiBuzo",
        descripcion: "BUZO DE ALGODÓN FRIZADO COLOR ROSA",
        talla: "M",
        precio: 1111,
        foto: "../pic/buzo6.webp", 
        seccion: "",
        tipo: "buzo",
        cantidad: 1,
    },
    {
        id: "2",
        titulo: "MaxiBuzo",
        descripcion: "BUZO DE ALGODÓN FRIZADO COLOR NEGRO",
        talla: "L",
        precio: 1111,
        foto: "../pic/buzo4.webp",
        seccion: "",
        tipo: "buzo",
        cantidad: 1,
    },
    {
        id: "3",
        titulo: "Remera",
        descripcion: "Remera de modal",
        talla: "S",
        precio: 1111,
        foto: "../pic/remera1.webp",
        seccion: "",
        tipo: "remera",
        cantidad: 1,
    },
    {
        id: "4",
        titulo: "Remera",
        descripcion: "Remera de modal",
        talla: "M",
        precio: 1111,
        foto: "../pic/remera2.webp",
        seccion: "masVendido",
        tipo: "remera",
        cantidad: 1,
    },
    {
        id: "5",
        titulo: "Remera",
        descripcion: "Remera de modal",
        talla: "L",
        precio: 1111,
        foto: "../pic/remera3.webp",
        seccion: "paraTi",
        tipo: "remera",
        cantidad: 1,
    },
    {
        id: "6",
        titulo: "Zapatillas",
        descripcion: "ZAPATILLAS NIKE MODELO XXXXX",
        talla: "L",
        precio: 1111,
        foto: "../pic/zapatillas2w.webp",
        seccion: "paraTi",
        tipo: "zapatilla",
        cantidad: 1,
    },
    {
        id: "7",
        titulo: "Zapatillas",
        descripcion: "ZAPATILLAS NIKE MODELO XXXXX",
        talla: "L",
        precio: 1111,
        foto: "../pic/zapatillas3w.webp",
        seccion: "",
        tipo: "zapatilla",
        cantidad: 1,
    },
    {
        id: "8",
        titulo: "Zapatillas",
        descripcion: "ZAPATILLAS NIKE MODELO XXXXX",
        talla: "L",
        precio: 1111,
        foto: "../pic/zapatillas4w.webp",
        seccion: "",
        tipo: "zapatilla",
        cantidad: 1,
    },
    {
        id: "9",
        titulo: "Cuellito polar",
        descripcion: "Cuellito polar color",
        talla: "L",
        precio: 1111,
        foto: "../pic/cuellito3.webp",
        seccion: "",
        tipo: "cuellito",
        cantidad: 1,
    },
    {
        id: "10",
        titulo: "Cuellito polar",
        descripcion: "Cuellito polar color",
        talla: "L",
        precio: 1111,
        foto: "../pic/cuellito4.webp",
        seccion: "masVendido",
        tipo: "cuellito",
        cantidad: 1,
    },
    {
        id: "11",
        titulo: "Cuellito polar",
        descripcion: "Cuellito polar color",
        talla: "L",
        precio: 1111,
        foto: "../pic/cuellito5.webp",
        seccion: "",
        tipo: "cuellito",
        cantidad: 1,
    },
    {
        id: "12",
        titulo: "Lexa Chain",
        descripcion: "accesorio lexa chain",
        talla: "L",
        precio: 1111,
        foto: "../pic/accesorio2-1w.webp",
        seccion: "masVendido",
        tipo: "accesorio",
        cantidad: 1,
    },
    {
        id: "13",
        titulo: "Accesorio",
        descripcion: "Accesorio",
        talla: "L",
        precio: 1111,
        foto: "../pic/accesorio1w.webp",
        seccion: "",
        tipo: "accesorio",
        cantidad: 1,
    },
    {
        id: "14",
        titulo: "Accesorio",
        descripcion: "Accesorio",
        talla: "L",
        precio: 1111,
        foto: "../pic/accesorio3-1w.webp",
        seccion: "",
        tipo: "accesorio",
        cantidad: 1,
    },
    
]


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
        div.classList.add('container')                     //creo un div con la clase container y le inserto la card de productos
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
                                    <li><a href="#" ><img src="../pic/carro-de-compras.png" alt="carrito" style="width: 20px;"><span>Añadir al carrito</span></li></a>
                                    
                                    <li><a href="#"><img src="../pic/ver.png" alt="ver" width="20px"></a><span>Ver producto</span></li>
                                    
                                    <li><a href="#"><img src="../pic/favorito.png" alt="fav" style="width: 20px;"></a><span>Favorito</span></li>
                                    
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
                                    <li><a href="#" ><img src="../pic/carro-de-compras.png" alt="carrito" style="width: 20px;"><span>Añadir al carrito</span></li></a>
                                    
                                    <li><a href="#"><img src="../pic/ver.png" alt="ver" width="20px"></a><span>Ver producto</span></li>
                                    
                                    <li><a href="#"><img src="../pic/favorito.png" alt="fav" style="width: 20px;"></a><span>Favorito</span></li>
                                    
                                </ul>
                                <a href="#" class="btnVerProducto agregarCarro" id="${element.id}" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Comprar</a>
                            </div>
                        </div>
                    
                    </div>
            `;
            
             lugarDeDom(element, div);       // llamo a la funcion para dividir en que lugar va la card
          
             
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
        
        listaCarrito.innerHTML += `<tr>
            <td><img class="imgFitMiniatura" src="${element.foto}" alt="${element.titulo}" width="60px"></td>
            <td>${element.titulo}</td>
            <td class="text-center">${element.precio}$</td>
            <td class="text-center"><span id="cantidad">${element.cantidad}</span></td>
            <td class="text-center" ><a href="#" id="${element.id}" class="borrar-curso" data-id="1">X</a></td>
          </tr>`;
    });

    contadorCarrito.innerText = productosSeleccionados.length
    precioTotal.innerText = productosSeleccionados.reduce((acc, prod) => acc + prod.precio, 0)
    // Seleccionamos el boton eliminar 
    let buttonDelete = document.querySelectorAll('#listaCarrito tr td a');
    
    // Lo recorremos 
    buttonDelete.forEach(element => {
        element.addEventListener('click',(e)=>{
            e.preventDefault();
            let id = e.target.id
            // Eliminar del arreglo del carrito,Filter retorna un nuevo Array
            // Filter si es distinto lo excluye 
            productosSeleccionados = productosSeleccionados.filter( producto => producto.id !== id );
            console.log('Salida de productosSeleccionados', productosSeleccionados)
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
const guardarLocal = (clave, valor) => {localStorage.setItem(clave, valor)};
guardarLocal("listaProductos", JSON.stringify(productos))
let buttonCard = document.querySelectorAll(" .agregarCarro");

// Recorremos los botones asocimaos a un escuchador de eventos
buttonCard.forEach((element) => {
    element.addEventListener("click", (e) => {
        e.preventDefault();
        let id = e.target.id;
        buscarProductos(id, productos);
    });
});
