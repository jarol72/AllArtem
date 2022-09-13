// +++++++++++++ ARTWORK GALLERY FILTER ++++++++++++++
$(document).ready(function () {
  $(".filter__option").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".artwork").show("1000");
    } else {
      $(".artwork")
        .not("." + value)
        .hide("1000");
      $(".artwork")
        .filter("." + value)
        .show("1000");
    }
  });

  // add active class on selected item
  $(".filter__option").click(function () {
    $(this)
      .addClass("filter__option-active")
      .siblings()
      .removeClass("filter__option-active");
  });

  $(`[data-filter="${sessionStorage.getItem("vblelocal")}"]`).trigger(
    "click"
  );
  /* } */
});

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
                              ? e.target.dataset.categori
                              : e.target.closest('.card__overlay').dataset.category;
        console.log(showCategory);
        sessionStorage.setItem("vblelocal", showCategory);
        loc = location.href;
        location = `${loc.substring(0, loc.lastIndexOf('/') + 1)}gallery.html`;
        /* alert(location);
        alert(`Session Storage: ` + sessionStorage.getItem("vblelocal")); */
  }
});

/* ++++++++++ ZOOM VIEWER +++++++++++++++ */
$(document).ready(function () {
  const zoomBtn = document.querySelectorAll(".back");;
const allImages = document.querySelectorAll(".front");
const imgNames = document.querySelectorAll(".image");
const imageView = document.querySelector(".image-view");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const imageBox = document.querySelector(".image-box");

let currentImageIdx = 0;
let names = [];
let selected = [];

imgNames.forEach(function (img, index) {
  names[index] = img.getAttribute("src");
});

if (imageView) {
  imageView.addEventListener("click", function () {
    this.style.display = "none";
    imageBox.style.display = "none";
    selected = [];
  });
}

zoomBtn.forEach(function (btn, index) {
  btn.dataset.image = names[index];
  btn.addEventListener("click", function (e) {
    if (document.querySelector('[data-filter="all"]').classList.contains('filter__option-active')) {
      selected = names;
    }

    let category = btn.dataset.category;
    zoomBtn.forEach((artwork) => {
      if (artwork.dataset.category === category) {
        selected.push(artwork.dataset.image);
      }
    });
    imageView.style.display = "block";
    imageBox.style.display = "block";
    currentImageIdx = selected.indexOf(btn.dataset.image);
    currentImageDisplay(selected[currentImageIdx]);
  });
});

function currentImageDisplay(position) {
  imageBox.style.background = `url("${position}") center/contain no-repeat`;
}

if (prevBtn) {
  prevBtn.addEventListener("click", function () {
    currentImageIdx--;
    if (currentImageIdx < 0) {
      currentImageIdx = selected.length - 1;
    }
    currentImageDisplay(selected[currentImageIdx]);
  });
}

if (nextBtn) {
  nextBtn.addEventListener("click", function () {
    currentImageIdx++;
    if (currentImageIdx === selected.length) {
      currentImageIdx = 0;
    }
    currentImageDisplay(selected[currentImageIdx]);
  });
}
});