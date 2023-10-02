const barbtn=document.querySelector('.sidebar-toggle')
const closebtn=document.querySelector('.close-btn')
const sidebar=document.querySelector('.sidebar')
barbtn.addEventListener('click',function(){
    sidebar.classList.add('show-sidebar')
})
closebtn.addEventListener('click',function(){
    sidebar.classList.remove('show-sidebar')
})