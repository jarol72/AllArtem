$(document).ready(function(){
    $('.filter__option').click(function(){
        const value = $(this).attr('data-filter');
        if(value == 'all'){
            $('.artwork').show('1000');
        } else {
            $('.artwork').not('.' + value).hide('1000');
            $('.artwork').filter('.' + value).show('1000');
        }
    })

    // add active class on selected item
    $('.filter__option').click(function(){
        $(this).addClass('filter__option-active').siblings().removeClass('filter__option-active');
    })
})

const altura = document.body.scrollHeight - window.innerHeight;
const fondo = document.getElementById('fondo');
const nombre = document.getElementById('name');

window.onscroll = () => {
    const anchoFondo = (window.pageYOffset / altura) * 900;
    if(fondo) {
        fondo.style.width = anchoFondo + '%';
    }
    if(anchoFondo >= 100) {
        nombre.style.alignItems = 'flex-end'
    } else {
        nombre.style.alignItems = 'center'
    }
}


/* ++++++++++ ZOOM VIEWER +++++++++++++++ */
const zoomBtn = document.querySelectorAll('.back');
const allImages = document.querySelectorAll('.front');
const imgNames = document.querySelectorAll('.image')
const imageView = document.querySelector('.image-view');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const imageBox = document.querySelector('.image-box');

let currentImageIdx = 0;
let names = [];

imgNames.forEach(function(img, index){
    names[index] = img.getAttribute('src')
})

if(imageView){
imageView.addEventListener('click', function(){
    this.style.display = "none";
    imageBox.style.display = "none";
})}


zoomBtn.forEach(function(btn, index){
    btn.dataset.image = names[currentImageIdx];
    btn.addEventListener('click', function(){
        imageView.style.display = "block";
        imageBox.style.display = "block";
        currentImageIdx = index;
        currentImageDisplay(names[currentImageIdx]);
        console.log(names[currentImageIdx]);
    })
})

function currentImageDisplay(position){
    console.log(position)
    imageBox.style.background = `url("${position}") center/contain no-repeat`;
}

if(prevBtn){
prevBtn.addEventListener('click', function(){
    currentImageIdx--;
    console.log(currentImageIdx);
    if(currentImageIdx < 0){
        currentImageIdx = names.length - 1;
    }
    currentImageDisplay(names[currentImageIdx]);
})}

if(nextBtn){
nextBtn.addEventListener('click', function(){
    currentImageIdx++;
    if(currentImageIdx === names.length){
        currentImageIdx = 0;
    }
    currentImageDisplay(names[currentImageIdx]);
})}