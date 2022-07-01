console.log('This website is based on online food ordering ');

let slideshow = document.getElementById('slideshow');
let slides = slideshow.getElementsByTagName('img');
let leftbth = document.getElementById('leftbtn');
let rightbtn = document.getElementById('rightbtn');
let index = 0;

rightbtn.addEventListener('click' , function(){
    slides[index].classList.remove('active');
    index = (index+1)%slides.length;
    slides[index].classList.add('active');
});

leftbth.addEventListener('click' , function(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length)%slides.length;
    slides[index].classList.add('active');
})

let slideshowText = document.getElementById('slideshowText');
let slidesText = slideshowText.getElementsByTagName('div');
let i =0;

rightbtn.addEventListener('click' , function(){
    slidesText[i].classList.remove('active');
    i = (i+1)%slidesText.length;
    slidesText[i].classList.add('active');
});

leftbth.addEventListener('click' , function(){
    slidesText[i].classList.remove('active');
    i = (i - 1 + slides.length)%slidesText.length;
    slidesText[i].classList.add('active');
})

let menu = document.getElementById('menu');
let navbar = document.getElementById('navbar');
menu.addEventListener('click', function(){
    console.log('adding the js to navbar');
    navbar.classList.toggle('active');
})