


let verProducto = document.querySelectorAll(".verProducto");
    
    // Recorremos los botones asocimaos a un escuchador de eventos
    verProducto.forEach((element) => {
        element.addEventListener("click", (e) => {
            e.preventDefault();
            let id = e.target.id;
            console.log('el producto es : ' + id)
            /* buscarProductos(id, productos); */
        });
    });
