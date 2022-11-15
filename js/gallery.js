const artworks = [
    { category: "nudes", src: "11GDf9cPdRMO21f4oMcrMAR7SEXnagDIa", alt: "", title: "ABRAZO", technique: "Grafito sobre papel", size: "50 x 70 cm", },
    { category: "animals", src: "1kziOvyqhFk5SnY7wLIBwhKq4jtvyGLEC", alt: "", title: "ALASKA Y EROS", technique: "Grafito sobre papel", size: "32 x 50 cm", },
    { category: "portraits", src: "1r48lTLNEujOsIed3aQk-h9AiPkBnY8CK", alt: "", title: "Aleja", technique: "Grafito sobre papel", size: "35 x 50 cm", },
    { category: "portraits", src: "1ATPbCX7pnxBWxasnfTa67rRUs7WZn8T0", alt: "", title: "ALEJANDRO", technique: "Grafito sobre papel", size: "35 x 50 cm", },
    { category: "nudes", src: "1dXHWGj_LXdtW8rraN2raTtdipxPEO7kj", alt: "", title: "AMANECER", technique: "Grafito sobre papel", size: "40 x 35 cm", },
    { category: "portraits", src: "1Jjhnt1vv7-N7WFyBbs-pnQVOxutYe9r_", alt: "", title: "ANA Y JAIME", technique: "Grafito sobre papel", size: "33 x 50 cm", },
    { category: "portraits", src: "1AwVxO-w6bMeNK8ma6HdF96WDQl9sGSWw", alt: "", title: "ANDREA", technique: "Grafito sobre papel", size: "70 x 50 cm", },
    { category: "nudes", src: "1dMJ721jlW3yViUTXgzgos5coSU8gd0Vj", alt: "", title: "BAILARINA", technique: "Lápiz de color sobre papel", size: "50 x 35 cm", },
    { category: "portraits", src: "1YVWU4f5C6MXnOOXVsGcNdEi1R42inDig", alt: "", title: "BB", technique: "Grafito sobre papel", size: "40 x 35 cm", },
    { category: "nudes", src: "1up5N1IgBAVK6SNUpYlnkmlMwJ97x2NRh", alt: "", title: "BOUDOIR", technique: "Grafito sobre papel", size: "50 x 35 cm", },
    {category: "POR_DEFINIR",src: "1yYqg_qe8eHAJKV-_F2IO59kwtL9dAn0d",alt: "",title: "CENSURA",technique: "Lápiz de color sobre papel",size: "50 x 32 cm",},
    { category: "portraits", src: "1AThC3Payo-ewqGwYnsTAlTJIxQKETkKv", alt: "", title: "COMPLICIDAD", technique: "Grafito sobre papel", size: "35 x 50 cm", },
    { category: "animals", src: "19oX7MZg1puHzclgaXTPc2-9y_bBS26ek", alt: "", title: "CORCEL", technique: "Grafito sobre papel", size: "35 x 50 cm", },
    { category: "portraits", src: "1U-YPYwbgbeOB7dh6egIpffebFRYniiF1", alt: "", title: "Dany", technique: "Pastel sobre papel", size: "70 x 50 cm", },
    { category: "portraits", src: "1c9V8npHXNTSKsqPp4xGwkewB3kEPZ11V", alt: "", title: "Don Joaquín", technique: "Grafito sobre papel", size: "35x50 cm", },
    { category: "portraits", src: "1s-qe81wOjQiI6PID3fQH9q1pLRz9ZyWj", alt: "", title: "Eliana", technique: "Grafito sobre papel", size: "50 x 32 cm", },
    { category: "nudes", src: "1hpWOShPu8S6466T-A8soaeTohEXcXQL_", alt: "", title: "Entre sábanas", technique: "Grafito sobre papel", size: "50 x 70 cm", },
    { category: "nudes", src: "1VZIvrGwf5Q_RMNVkCn_WFUG8FH4pEmPq", alt: "", title: "Estudio", technique: "Sepia sobre papel", size: "35 x 50 cm", },
    {category: "POR_DEFINIR",src: "1hWyGJJPSVXoqlCh1ZFZqcmsDFCYBVaYt",alt: "",title: "Explosión roja",technique: "Acrílico",size: "",},
    { category: "portraits", src: "1PIQtO3lgUUqRBgkAJl9cLxitDmP5icXI", alt: "", title: "Fer", technique: "Grafito sobre papel", size: "35 x 40 cm", },
    { category: "still_life", src: "1aaqlC4CSSPhUM98bIMAUavtXhyLuYxLT", alt: "", title: "Fruto", technique: "Óleo", size: "", },
    { category: "lights", src: "1bwu-3aOqPNHBjjH8uKgTjkJR0klQhNjG", alt: "", title: "Génesis", technique: "Lápiz blanco sobre papel", size: "100 x 70 cm", },
    { category: "nudes", src: "12u6QI6YaV5uCgxFwVM9uaZAf1E68E7H2", alt: "", title: "Indiferencia", technique: "Grafito sobre papel", size: "70 x 100 cm", },
    {category: "POR_DEFINIR",src: "1gT5ccsagCg3Zeaw1GWDvwnBMN8PDFqUC",alt: "",title: "La Camisa",technique: "Grafito sobre papel",size: "50 x 70 cm",},
    {category: "POR_DEFINIR",src: "1ikzwRL-1b53zjgj9_QeVQ4EKT47JMqlq",alt: "",title: "La Espera",technique: "Grafito sobre papel",size: "50 x 35 cm",},
    { category: "nudes", src: "1DgxTvkDRD1mU55DX3c5s_TMsEIRNnyvV", alt: "", title: "Liset", technique: "Grafito sobre papel", size: "50 x 70 cm", },
    { category: "animals", src: "1wv8AF6D7FfySckWkg5SFlJODF98t0uuS", alt: "", title: "Luciano", technique: "Grafito sobre papel", size: "35 x 50 cm", },
    { category: "portraits", src: "1Cc3GW12ktllfJEjuAEMckUUy3KB69Sy5", alt: "", title: "Majo", technique: "Grafito sobre papel", size: "50 x 32 cm", },
    { category: "nudes", src: "1Xd7QE8LucOwQkBku3n8nBF2hr2Po2BMN", alt: "", title: "Margara", technique: "Grafito sobre papel", size: "100 x 70 cm", },
    { category: "portraits", src: "1GGNROI6IJxy3LDqwJHdp0DZMaNXrcY96", alt: "", title: "Margarita", technique: "Grafito sobre papel", size: "50 x 70 cm", },
    { category: "portraits", src: "1L2zaBFEnIHhpj9AenO-FbyBhGOkQ9E6q", alt: "", title: "Mariangel", technique: "Grafito sobre papel", size: "35 x 50 cm", },
    { category: "portraits", src: "11u_m6F4lL9eOf6cn1zmurGHHNAHD0066", alt: "", title: "Mariela", technique: "Grafito sobre papel", size: "33 x 50 cm", },
    { category: "portraits", src: "1huQXalYiGOTd_lJ8MVnZyZGBmfdzGnWw", alt: "", title: "Martín", technique: "Grafito sobre papel", size: "30 x 40 cm", },
    { category: "portraits", src: "1-qG1bj-pCk1SF1tL1uNJhhinDt2T-m2K", alt: "", title: "Medusa", technique: "Grafito sobre papel", size: "50 x 35 cm", },
    { category: "portraits", src: "1WWv09BDH5eCi4YXKv1YEtJY9NcT6Wx2_", alt: "", title: "Melancolía", technique: "Grafito sobre papel", size: "70 x 50 cm", },
    { category: "portraits", src: "1iH1_cLu0ZrI0zSf44iiLL6xuPx6GRElm", alt: "", title: "Milena", technique: "Grafito sobre papel", size: "60 x 42 cm", },
    { category: "nudes", src: "1J3XvAQ3NdWI6aV_GF97x1R0pREPTRxYm", alt: "", title: "Negación", technique: "Grafito sobre papel", size: "50 x 70 cm", },
    { category: "portraits", src: "1cP2QUwi5tDJGlHz1z1JNB3crDMITbUs6", alt: "", title: "Nikita", technique: "Grafito sobre papel", size: "35 x 50 cm", },
    { category: "portraits", src: "1gpH2IHesthgH2BflFf3E-1Z6NQT19frp", alt: "", title: "Patricia", technique: "Grafito sobre papel", size: "50 x 35 cm", },
    { category: "portraits", src: "15XR1bWpK-P7Zrs-uVmh0OrihYLNSwevp", alt: "", title: "Pensamientos", technique: "Grafito sobre papel", size: "50 x 70 cm", },
    { category: "lights", src: "19R9hkZG8SXe9UXfTb0o0cLLTgDTXVBFL", alt: "", title: "Penumbras 1", technique: "Lápiz blanco sobre papel", size: "70 x 50 cm", },
    { category: "lights", src: "1hTdiLym9SoKCEwDO6OiiJTAwzVVrnAHs", alt: "", title: "Penumbras 2", technique: "Lápiz blanco sobre papel", size: "70 x 50 cm", },
    { category: "lights", src: "1073wBzxIGl2alI5Fkefmpf3-Q4Q1UICS", alt: "", title: "Penumbras 3", technique: "Lápiz blanco sobre papel", size: "70 x 50 cm", },
    { category: "animals", src: "1c2Owl32Q2DSBfCmMwFq9pvwICvO05nxS", alt: "", title: "Pola", technique: "Grafito sobre papel", size: "32 x 50 cm", },
    { category: "animals", src: "1EDLRVmQdOqCnX0D3S03RLr1MbZDTL5iT", alt: "", title: "Samuel y Oscar", technique: "Grafito sobre papel", size: "32 x 50 cm", },
    { category: "nudes", src: "1tGIl7V97Khhto7LUEsuO0DUSqEWvnOk5", alt: "", title: "Sensualidad al rojo", technique: "Lápiz de color sobre papel", size: "35 x 50 cm", },
    { category: "portraits", src: "1yFknwwQNHsAuPREh0jy6jUBjUp6KSlzg", alt: "", title: "Sin título", technique: "Grafito sobre papel", size: "32 x 50 cm", },
    { category: "nudes", src: "1woUMdNTnu8qJv2ei64CyAFq6CC7IP2Wb", alt: "", title: "Sueños en rojo", technique: "Lápiz de color sobre papel", size: "50 x 32 cm", },
    { category: "portraits", src: "1fEOELRxdW-7pKuSTn1HNjS2d_5WuzZ41", alt: "", title: "Sueños tiernos", technique: "Grafito sobre papel", size: "70 x 50 cm", },
    { category: "animals", src: "1skFv0YlE2tOHuKKgs2T-YhpEolDOloo1", alt: "", title: "Teresita", technique: "Grafito sobre papel", size: "50 x 35 cm", },
    { category: "animals", src: "1ixDIKKJwfTueBE2o5rIN-OR0tzFKU3wv", alt: "", title: "Toffy", technique: "Grafito sobre papel", size: "35 x 50 cm", },
    { category: "lights", src: "1boKyL4_kdx3jW-jMNURj9Nsh8XWxU9mk", alt: "", title: "Torso 1", technique: "Lápiz blanco sobre papel", size: "50 x 70 cm", },
    { category: "lights", src: "18mefkHpj-pby_MEaC1F2RmTZ-zYvDTq5", alt: "", title: "Torso 2", technique: "Lápiz blanco sobre papel", size: "50 x 70 cm", },
    { category: "nudes", src: "1x4ri7g7VIV-Dt6DXW4lhQQ3eGtUCB9lt", alt: "", title: "Verano", technique: "Grafito sobre papel", size: "50 x 35 cm", },
    {category: "Desnudos",src: "10Lb8Nug3ZcnRo-EcydhbOIFseuUINk0F",alt: "",title: "Sinfonía de placer",technique: "Lápiz sobre papel",size: "50 x 35 cm",},
    {category: "Retratos",src: "1CzYjJkGWHh0PIrsb3uI3XZw_UGX5IAdv",alt: "",title: "Pepe",technique: "Grafito sobre papel",size: "50 x 35 cm",},
    {category: "Retratos",src: "1ApGh6BXEvyha5dRJV6yHeGpZOYqkYgrx",alt: "",title: "Zuza",technique: "Grafito sobre papel",size: "50 x 35 cm",},
    


];

const d = document,
    $gallery = d.getElementById("gallery"),
    $template = d.getElementById("template").content;
    $fragment = d.createDocumentFragment();

artworks.forEach(el => {
    $clone = d.importNode($template, true);

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