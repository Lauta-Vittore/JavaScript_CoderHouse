let domParaTi = document.querySelector("#domParaTi");        
let domMasVendido = document.querySelector("#domMasVendido")
let domRemeras = document.querySelector("#domRemeras")
let domBuzo = document.querySelector("#domBuzo")
let domZapatillas = document.querySelector("#domZapatillas")
let domAccesorio = document.querySelector("#domAccesorio")
let domCuellito = document.querySelector("#domCuellito")

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
                            <h3>tallas</h3>

                                <div id="tallaId">
                                <span>${element.talla}</span>
                                </div>
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


export default printData