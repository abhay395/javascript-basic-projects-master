const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.nextBtn')
const prevBtn = document.querySelector('.prevBtn')

slides.forEach(function(slide,index){
    slide.style.left= `${index*100}%` 
})
let counter = 0 ;
nextBtn.addEventListener('click',function(){
    counter++;
    carsour()
})
prevBtn.addEventListener('click',function(){

    counter--;
    carsour()
})
function carsour (){
    if(counter<slides.length-1){
        counter = 0
    }if(counter<0){
        counter = slides.length-1
    }
    slides.forEach(function(slide){
        slide.style.transform=`translateX(-${counter*100}%)`
    })
}