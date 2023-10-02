// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

const openBtn=document.querySelector('.modal-btn')
const closebtn=document.querySelector('.close-btn')
const modelpage=document.querySelector('.modal-overlay')
openBtn.addEventListener('click',function(){
    modelpage.classList.add('open-modal')
})
closebtn.addEventListener('click',function(){
    modelpage.classList.remove('open-modal')
})