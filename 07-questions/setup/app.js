//using selectors inside the element
// traversing the dom
const qusition=document.querySelector('.question')
const questionBtn=document.querySelectorAll('.question-btn')
questionBtn.forEach((btns)=>btns.addEventListener('click',function(e){
    e.currentTarget.parentElement.parentElement.classList.toggle('show-text')
}))