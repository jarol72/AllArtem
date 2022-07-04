const artworks = [
    {
        category: "colors",
        src: "img/gallery/color/camisarojo.jpg",
        alt: "dibujo torso de mujer con camisa a cuadros color rojo.jpg",
        title: "Inocencia",
        technique: "Lápiz",
        size: "50 x 32 cm",
    },
    {
        category: "colors",
        src: "img/gallery/color/censura.jpg",
        alt: "Dibujo mujer con pañoleta roja en el rostro.jpg",
        title: "Censura",
        technique: "Lápiz",
        size: "50 x 32 cm",
    },
    {
        category: "colors", /* add pastels */
        src: "img/gallery/color/danny.jpg",
        alt: "Dibujo a color de niña con vestido amarillo.jpg",
        title: "Danny",
        technique: "Pastel",
        size: "70 x 50 cm",
    },
    {
        category: "studio",
        src: "img/gallery/estudios/angustia.jpg",
        alt: "Dibujo mujer desnuda con manos en la cabeza.jpg",
        title: "Angustia",
        technique: "Lápiz",
        size: "70 x 50 cm",
    },
    {
        category: "studio",
        src: "img/gallery/estudios/indiferencia.jpg",
        alt: "Dibujo mujer desnuda sentada en el piso.jpg",
        title: "Indiferencia",
        technique: "Lápiz",
        size: "100 x 70 cm",
    },
    {
        category: "studio",
        src: "img/gallery/estudios/rizos.jpg",
        alt: "Dibujo mujer con cabello rizado.jpg",
        title: "Rizos",
        technique: "Lápiz",
        size: "35 x 50 cm",
    },
    {
        category: "models",
        src: "img/gallery/modelos/abrazo.jpg",
        alt: "Dibujo mujer desnuda y arrodillada, abrazándose a sí misma.jpg",
        title: "Abrazo",
        technique: "Lápiz",
        size: "50 x 70 cm",
    },
    {
        category: "models",
        src: "img/gallery/modelos/altiva.jpg",
        alt: "Dibujo mujer semidesnuda abrazándose a sí misma",
        title: "Altiva",
        technique: "Lápiz",
        size: "50 x 70 cm",
    },
    {
        category: "models",
        src: "img/gallery/modelos/entresabanas.jpg",
        alt: "Dibujo mujer desnuda dormida entre sábanas",
        title: "Entre sábanas",
        technique: "Lápiz",
        size: "50 x 70 cm",
    },
    {
        category: "models",
        src: "img/gallery/modelos/lacamisa.jpg",
        alt: "Dibujo hombre con boina y camisa a cuadros, sentado de espalda",
        title: "La camisa",
        technique: "Lápiz",
        size: "50 x 70 cm",
    },
    {
        category: "models",
        src: "img/gallery/modelos/margara.jpg",
        alt: "Dibujo mujer desnuda recostada en cama",
        title: "Margara",
        technique: "Lápiz",
        size: "100 x 70 cm",
    },
    {
        category: "models",
        src: "img/gallery/modelos/margarita.jpg",
        alt: "Dibujo mujer con camisa abierta y sentada en piso con piernas cruzadas",
        title: "Margarita",
        technique: "Lápiz",
        size: "50 x 70 cm",
    },
    {
        category: "models",
        src: "img/gallery/modelos/maternidad.jpg",
        alt: "Dibujo manos de mujer tocando un seno",
        title: "Maternidad",
        technique: "Lápiz",
        size: "35 x 50 cm",
    },
    {
        category: "models",
        src: "img/gallery/modelos/meditacion.jpg",
        alt: "Dibujo mujer sentada en el piso con los ojos cerrados",
        title: "Meditación",
        technique: "Lápiz",
        size: "50 x 70 cm",
    },
    {
        category: "models",
        src: "img/gallery/modelos/melancolia.jpg",
        alt: "Dibujo mujer sentada en el piso con mirada melancólica",
        title: "Melancolía",
        technique: "Lápiz",
        size: "70 x 50 cm",
    },
    {
        category: "models",
        src: "img/gallery/modelos/negacion.jpg",
        alt: "Dibujo mujer desnuda sentada de espalda",
        title: "Negación",
        technique: "Lápiz",
        size: "70 x 50 cm",
    },
    {
        category: "models",
        src: "img/gallery/modelos/pensamientos.jpg",
        alt: "Dibujo mujer con su mano en la cabeza",
        title: "Pensamientos",
        technique: "Lápiz",
        size: "70 x 50 cm",
    },
    {
        category: "models",
        src: "img/gallery/modelos/suenostiernos.jpg",
        alt: "Dibujo niña dormida",
        title: "Sueños tiernos",
        technique: "Lápiz",
        size: "70 x 50 cm",
    },
    {
        category: "lights",
        src: "img/gallery/nocturno/adan.jpg",
        alt: "Dibujo torso de hombre sobre papel negro",
        title: "Adán",
        technique: "Lápiz blanco",
        size: "70 x 50 cm",
    },
    {
        category: "lights",
        src: "img/gallery/nocturno/corcel.jpg",
        alt: "Dibujo caballo sobre papel negro",
        title: "Corcel",
        technique: "Lápiz blanco",
        size: "100 x 70 cm",
    },
    {
        category: "lights",
        src: "img/gallery/nocturno/penumbras1.jpg",
        alt: "Dibujo luz reflejada sobre silueta frontal de mujer",
        title: "Penumbras 1",
        technique: "Lápiz blanco",
        size: "70 x 50 cm",
    },
    {
        category: "lights",
        src: "img/gallery/nocturno/penumbras2.jpg",
        alt: "Dibujo luz reflejada sobre silueta posterior de mujer",
        title: "Penumbras 2",
        technique: "Lápiz blanco",
        size: "70 x 50 cm",
    },
    {
        category: "lights",
        src: "img/gallery/nocturno/penumbras3.jpg",
        alt: "Dibujo luz reflejada sobre silueta costado de mujer",
        title: "Penumbras 3",
        technique: "Lápiz blanco",
        size: "70 x 50 cm",
    },
    {
        category: "lights",
        src: "img/gallery/nocturno/reposo.jpg",
        alt: "Dibujo luz reflejada sobre silueta costado de mujer",
        title: "Reposo",
        technique: "Lápiz blanco",
        size: "35 x 50 cm",
    },
    {
        category: "lights",
        src: "img/gallery/nocturno/torso1.jpg",
        alt: "Dibujo en papel negro del torso de una mujer",
        title: "Torso 1",
        technique: "Lápiz blanco",
        size: "50 x 70 cm",
    },
    {
        category: "lights",
        src: "img/gallery/nocturno/torsos.jpg",
        alt: "Dibujo en papel negro de torsos de hombre y mujer",
        title: "Torsos",
        technique: "Lápiz blanco",
        size: "100 x 70 cm",
    },
    {
        category: "oil",
        src: "img/gallery/oleos/frutas.jpg",
        alt: "Dibujo al óleo de diferentes frutas",
        title: "Frutas",
        technique: "Óleo",
        size: "** x ** cm",
    },
    {
        category: "oil",
        src: "img/gallery/oleos/peras.jpg",
        alt: "Dibujo al óleo de peras",
        title: "Peras",
        technique: "Óleo",
        size: "** x ** cm",
    },
    {
        category: "portraits",
        src: "img/gallery/retratos/alejandra.jpg",
        alt: "Retrato de Alejandra",
        title: "Alejandra",
        technique: "Lápiz",
        size: "** x ** cm",
    },
    {
        category: "portraits",
        src: "img/gallery/retratos/daniel.jpg",
        alt: "Retrato de Daniel",
        title: "Daniel",
        technique: "Lápiz",
        size: "** x ** cm",
    },
    {
        category: "portraits",
        src: "img/gallery/retratos/donjoaquin.jpg",
        alt: "Retrato de Don Joaquín",
        title: "Don Joaquín",
        technique: "Lápiz",
        size: "** x ** cm",
    },
    {
        category: "portraits",
        src: "img/gallery/retratos/eliana.jpg",
        alt: "Retrato de Eliana",
        title: "Eliana",
        technique: "Lápiz",
        size: "** x ** cm",
    },
    {
        category: "portraits",
        src: "img/gallery/retratos/inocencia.jpg",
        alt: "Retrato de Bebé",
        title: "Inocencia",
        technique: "Lápiz",
        size: "** x ** cm",
    },
    {
        category: "portraits",
        src: "img/gallery/retratos/jhonatan.jpg",
        alt: "Retrato de Jhonatan",
        title: "Jhonatan",
        technique: "Lápiz",
        size: "** x ** cm",
    },
    {
        category: "portraits",
        src: "img/gallery/retratos/majo.jpg",
        alt: "Retrato de María José",
        title: "Majo",
        technique: "Lápiz",
        size: "** x ** cm",
    },
    {
        category: "portraits",
        src: "img/gallery/retratos/maria.jpg",
        alt: "Retrato de María",
        title: "María",
        technique: "Lápiz",
        size: "** x ** cm",
    },
    {
        category: "portraits",
        src: "img/gallery/retratos/pepe.jpg",
        alt: "Retrato de Pepe",
        title: "Pepe",
        technique: "Lápiz",
        size: "** x ** cm",
    },
    {
        category: "portraits",
        src: "img/gallery/retratos/pepe_1.jpg",
        alt: "Retrato Pepe",
        title: "Pepe",
        technique: "Lápiz",
        size: "** x ** cm",
    },
    {
        category: "portraits",
        src: "img/gallery/retratos/veronica.jpg",
        alt: "Retrato de Verónica",
        title: "Verónica",
        technique: "Lápiz",
        size: "35 x 40 cm",
    },
];

const d = document,
    $gallery = d.getElementById("gallery"),
    $template = d.getElementById("template").content;
    $fragment = d.createDocumentFragment();

artworks.forEach(el => {
    $clone = d.importNode($template, true);
    
    $clone.querySelector(".artwork").classList.add(el.category);
    $clone.querySelector("img").setAttribute("src", el.src);
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