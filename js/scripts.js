const altura = document.body.scrollHeight - window.innerHeight;
const fondo = document.getElementById('fondo');
const nombre = document.getElementById('name');

window.onscroll = () => {
    const anchoFondo = (window.pageYOffset / altura) * 900;
    fondo.style.width = anchoFondo + '%';
    if(anchoFondo >= 100) {
        nombre.style.alignItems = 'flex-end'
    } else {
        nombre.style.alignItems = 'center'
    }
}