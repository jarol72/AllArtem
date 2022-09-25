

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

