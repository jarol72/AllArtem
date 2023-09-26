import {artworks} from './data.js';
console.log(artworks);

const d = document,
    $gallery = d.getElementById("gallery"),
    $template = d.getElementById("template").content,
    $fragment = d.createDocumentFragment();

artworks.forEach(el => {
    let $clone = d.importNode($template, true);

    $clone.querySelector(".artwork").classList.add(el.category);
    $clone.querySelector("img").setAttribute("src", "http://drive.google.com/uc?export=view&id=" + el.src);
    $clone.querySelector("img").setAttribute("alt", el.alt);
    $clone.querySelector(".back").setAttribute("data-category", el.category);
    $clone.querySelector("#artworkTitle").textContent = el.title;
    $clone.querySelector("#artworkTechnique").textContent = el.technique;
    $clone.querySelector("#artworkSize").textContent = el.size;

    $fragment.appendChild($clone);
});

$gallery.appendChild($fragment);
/* 
<article class='artwork colors'>
    <div class="pic">
        <div class="front">
            <img class='image' src="img/gallery/color/camisarojo.jpg"
                alt="dibujo torso de mujer con camisa a cuadros color rojo.jpg" loading="lazy">
        </div>
        <div class="back" data-category="colors">
            <div class="back-content middle">
                <h3>Inocencia</h3>
                <p>Lápiz</p>
                <p>50 x 32 cm</p>
            </div>
        </div>
    </div>
</article>
*/

// +++++++++++++ ARTWORK GALLERY FILTER ++++++++++++++
$(document).ready(function () {
    $(".filter__option").click(function () {
        const value = $(this).attr("data-filter");
        if (value === "all") {
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

    // View previous image
    if (prevBtn) {
        prevBtn.addEventListener("click", function () {
            currentImageIdx--;
            if (currentImageIdx < 0) {
                currentImageIdx = selected.length - 1;
            }
            currentImageDisplay(selected[currentImageIdx]);
        });
    }

    // View next image
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