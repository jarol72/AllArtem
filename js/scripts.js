

// +++++++++++++ MENÚ ANIMATION ++++++++++++++
$(document).ready(function () {
  $(".navbar").click(function () {
    $(this).toggleClass("menu-active");
  });
});

// +++++++++++++ BANNER ANIMATION ++++++++++++++
const altura = document.body.scrollHeight - window.innerHeight;
const fondo = document.getElementById("fondo");
const nombre = document.getElementById("artistName");
const deviceWidth = window.innerWidth;
//const anchoFondo = (window.pageYOffset / altura) * 900;
  
nombre.style.bottom = "50%";
nombre.style.transform = "translateY(50%)";

window.onscroll = () => {
  const anchoFondo = (window.pageYOffset / altura) * 900;
  nombre.style.bottom = "50%";
  if (fondo) {
    if (deviceWidth < 768) {
      if (anchoFondo < 100) {
        fondo.style.width = anchoFondo + "%";
      } else {
        fondo.style.width = "100%";
      }
    } else {
      if (anchoFondo < 88) {
        fondo.style.width = anchoFondo + "%";
        nombre.style.bottom = 51.5 - anchoFondo / 2 + "%";
      } else if (anchoFondo >= 88 && anchoFondo < 100) {
        nombre.style.bottom = "2.6rem";
      } else {
        fondo.style.width = "100%";
        nombre.style.bottom = "2.6rem";
      }
    }
  }

  if (deviceWidth >= 768) {

  }
};

// +++++++++++++ HANDLE CLICK ON CATEGORY (INDEX) ++++++++++++++
document.addEventListener("click", (e) => {
  if (e.target.matches(".card__overlay") || 
      e.target.matches(".card__overlay__text") || 
      e.target.matches(".btn__products")) {
        let showCategory = e.target.hasAttribute('data-category')
                              ? e.target.dataset.category
                              : e.target.closest('.card__overlay').dataset.category;
        console.log(showCategory);
        sessionStorage.setItem("vblelocal", showCategory);
        loc = location.href;
        location = `${loc.substring(0, loc.lastIndexOf('/') + 1)}gallery.html`;
        /* alert(location);
        alert(`Session Storage: ` + sessionStorage.getItem("vblelocal")); */
  }
});

// +++++++++++++ VALIDATE FORM ++++++++++++++
// JavaScript para validar el formulario
function validateForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const dataAuthorization = document.getElementById("dataAutorization").checked;

  // Validar que los campos obligatorios no estén vacíos
  if (!name || !email || !message) {
    alert("Por favor, complete todos los campos.");
    return false;
  }

  // Validar el formato del correo electrónico usando una expresión regular
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Por favor, ingrese un correo electrónico válido.");
    return false;
  }

  // Validar que se haya marcado la casilla de autorización de tratamiento de datos personales
  if (!dataAuthorization) {
    alert("Por favor, autorice el tratamiento de sus datos personales.");
    return false;
  }

  // Aquí puedes agregar más validaciones si es necesario, como validar el tamaño máximo de texto, etc.

  // Si todo está bien, puedes enviar el formulario al servidor
  // Aquí debes decidir si prefieres dejar que el formulario se envíe normalmente o si quieres enviarlo mediante JavaScript (usando AJAX, por ejemplo).
  // Puedes descomentar la siguiente línea para enviar el formulario usando JavaScript:
  // document.contact.submit();

  // Si no deseas enviar el formulario automáticamente mediante JavaScript,
  // entonces asegúrate de devolver true para que el envío continúe normalmente.
  return true;
}
