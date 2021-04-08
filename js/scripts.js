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


/* ++++++++++ ZOOM VIEWER +++++++++++++++ */
const zoomBtn = document.querySelectorAll('.zoom-text');
const allImages = document.querySelectorAll('.img-container');
const imageView = document.querySelector('.image-view');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const imageBox = document.querySelector('.image-box');

let currentImageIdx = 0;

imageView.addEventListener('click', function(){
    this.style.display = "none";
    imageBox.style.display = "none";
})


zoomBtn.forEach(function(btn, index){
    btn.addEventListener('click', function(){
        imageView.style.display = "block";
        imageBox.style.display = "block";
        currentImageIdx = index + 1;
        currentImageDisplay(currentImageIdx);
    })
})

function currentImageDisplay(position){
    imageBox.style.background = `url(images/img${currentImageIdx}.jpg) center/cover no-repeat`;
}

prevBtn.addEventListener('click', function(){
    currentImageIdx--;
    if(currentImageIdx === 0){
        currentImageIdx = allImages.length;
    }
    currentImageDisplay(currentImageIdx);
})

nextBtn.addEventListener('click', function(){
    currentImageIdx++;
    if(currentImageIdx === 5){
        currentImageIdx = 1;
    }
    currentImageDisplay(currentImageIdx);
})