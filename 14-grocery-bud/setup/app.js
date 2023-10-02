// ****** SELECT ITEMS **********
const alert = document.querySelector('.alert');
const from = document.querySelector('.grocery-form');
const grocery = document.getElementById('grocery')
const submitBtn = document.querySelector('.submit-btn')
const container = document.querySelector('.grocery-container')
const list = document.querySelector('.grocery-list')
const clearbtn = document.querySelector('.clear-btn')
// edit option
let editElement;
let editFlag= false;
let editID='';
// ****** EVENT LISTENERS **********
// submit form
from.addEventListener('submit',addItem)
// ****** FUNCTIONS **********
function addItem(e){
    e.preventDefault();
    const value = grocery.value;
    const id = new Date().getTime().toString()
    console.log(id)
    if ( value  && !editFlag){
        const element = document.createElement('article');
        // add class
        element.classList.add('grocery-item');
        // add id
        const attr = document.createAttribute('data-id');
        attr.value = id ;
        e

    }
    else if( value && editFlag){
        console.log("editing");
    }
    else{
       displayAlert('please enter value ','danger')
    }
}
// display alert
function displayAlert(text,action){
    alert.textContent=text;
    alert.classList.add(`alert-${action}`);
    // remove alert
    setTimeout(function(){
        alert.textContent='';
        alert.classList.remove(`alert-${action}`);
    },1000)
}
// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********
