// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navbar=document.querySelector('.links')
const navbtn=document.querySelector('.nav-toggle')
const i=document.querySelector('button i')
navbtn.addEventListener('click',function(){
    navbar.classList.toggle('show-links')
    if(i.classList==='fa-bars'){
        i.classList.remove('fa-bars')
        i.classList.add('fa-crose')

    }
})