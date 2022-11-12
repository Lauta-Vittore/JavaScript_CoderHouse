let contact = document.querySelector('.conteinerContactos')


const contactoDiv = document.createElement('div')        //inserto template para contacto
contactoDiv.innerHTML += `<section class="formContacto">
<h1>Si quieres información sobre cualquiera de nuestros
    productos o estás interesado en su distribución,
    rellena nuestro formulario y nos pondremos en
    contacto contigo lo antes posible.
</h1>
</section>
<form class="formContact" action="https://formsubmit.co/lautarotin@gmail.com" method="POST">
        <input id="nombre" type="text" placeholder="Nombre" name="nombre">
        <input id="email" type="email" placeholder="Email" name="email">
        <input id="telefono" type="number" placeholder="Teléfono" name="telefono">
        <input id="mensaje" type="text" placeholder="Mensaje" name="mensaje">
        <button class="btnFormContacto" data-bs-toggle="modal" href="#exampleModalToggle" role="button" type="submit" value="Enviar">Enviar</button>
</form>

<div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
<div class="modal-dialog modal-dialog-centered">
<div class="modal-content">
  <div class="modal-header">
    <h5 class="modal-title" id="exampleModalToggleLabel">Gracias por tu mensaje!</h5>
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  </div>
  <div class="modal-body">
    Nos contactaremos contigo lo antes posible.
  </div>
  <div class="modal-footer">
    <button class="btn2 btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Cerrar</button>
  </div>
</div>
</div>
</div>
<div class="suscribite">
<h3>SUMATE A NUESTRA COMUNIDAD</h3>
<h3>Suscribite, no te pierdas ninguna oferta</h3>
<input id="suscribite" type="email" placeholder="Ingresá tu email y suscribite">
<div class="modal fade" id="exampleModalToggle1" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalToggleLabel">Gracias por tu suscripción!</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          Ahora cada vez que haya una oferta te llegará un mensaje al correo ingresado.
        </div>
        <div class="modal-footer">
          <button class="btn2 btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Cerrar</button>
        </div>
      </div>
    </div>
  </div>
  <button class="btnFormContacto" data-bs-toggle="modal" href="#exampleModalToggle1" role="button">SUSCRIBIRME</button>
</div>


<ul class="contactos">
<h3>Información de contacto</h3>
<div class="lis">
    <li class="li">Sede central: xxxxxxxxxxxx</li>
    <li class="li">Teléfono: xxxxxxxxxxx</li>
    <li class="li">Administración : xxxxxxx@gmail.com</li>
    <li class="li">Mayorista: xxxxxx@gmail.com</li>
</div>
</ul>
<!-- Modal -->
<div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
<div class="modal-content">
<div class="whatsapp">

<h5 class="modal-title" id="exampleModalLabel"><img src="../pic/perfilWp.webp" alt="perfil" style="width:50px ;"> Bukee Soporte </h5>
<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
</div>
<div class="modal-bodyWp">
<div class="chat">
<h2 class="nombreChat">Bukee Indumentaria</h2>
<p class="mensaje">Hola! ¿Cómo podemos ayudarte?</p>
<p class="hora">16:52</p>
</div>
</div>
<div class="modal-footer">
<button type="button" href="https://api.whatsapp.com/send?phone=3541337512&text=Necesito%20ayuda%20en%20" class="btnChat"><img src="../pic/whatsapp.png" alt="" style="width: 20px;"> Empezar chat</button>
</div>
</div>
</div>
</div>`

function mostrarContacto() {
    let scroll = document.documentElement.scrollTop        //animacion para que el template de contacto aparezca desde la derecha
    let alturaAnimado = contact.offsetTop;
    if (alturaAnimado -300 < scroll) {
        contact.style.opacity = 1;
        contact.classList.add('animadoCont')  
        contact.appendChild(contactoDiv)
                     
    }
}


window.addEventListener('scroll', mostrarContacto)