let domNav = document.querySelector("#domNav");

domNav.innerHTML += `
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
<div class="container-fluid">
  <a class="navbar-brand col-2" href="#"><div class="name">
                                                  <div class="letter">B</div>
                                                  <div class="letter">U</div>
                                                  <div class="letter">K</div>
                                                  <div class="letter">E</div>
                                                  <div class="letter">E</div>
</div></a>
  
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse col_3" id="navbarScroll">
    <div class="conteinerBuscador col-5">
        <input type="text" id="formulario" placeholder="Buscar productos, Categoría, etc"><label for="#"><img src="pic/lupa.png" id="boton" alt="" style="width: 17px;"></label>
    </div>
    <div class="conteiner col-6">
        
        <ul class="navbar-nav me-auto my-2 my-lg-0 col" style="--bs-scroll-height: 100px;">
        <li class="nav-item">
            <a class="nav-link" aria-current="page" href="index.html">Inicio</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#productos">Productos</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="pages/Contacto.html">Contacto</a>
        </li>
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Más
            </a>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="pages/sobreNosotros.html">Sobre Nosotros</a></li>
                <li><a class="dropdown-item" href="pages/preguntas.html">Preguntas frecuentes</a></li>
                <li><a class="dropdown-item" data-bs-toggle="modal" data-bs-target="#exampleModal3">Contacto Soporte</a></li>
            </ul>
        </li>
            <img width="30" height="30" src="pic/carro-de-compras.png" id="img-carrito" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
            <span id="contadorCarrito">0</span>    
        </ul>
        
    </div>
  </div>
</div>
</nav>
<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
<div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasRightLabel">Tu carrito</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
</div>
<div class="offcanvas-body">
    
        <li class="submenu">
                
                <div id="carrito">
                        
                    
                        <div id="listaCarrito">
                        </div>
                      <div class="d-grid gap-2">
                        <p>precio total: $<span id="precioTotal">0</span></p>
                        <a href="#" class="btn btn-secondary" id="vaciar-carrito">Vaciar Carrito</a>
                      </div>
        
                </div>
        </li>
   
</div>
</div>`