// ****** SELECT ITEMS **********
const alert = document.querySelector(".alert");
const from = document.querySelector(".grocery-form");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearbtn = document.querySelector(".clear-btn");
// edit option
let editElement;
let editFlag = false;
let editID = "";
// ****** EVENT LISTENERS **********
// submit form
from.addEventListener("submit", addItem);
// clear items
clearbtn.addEventListener("click", clearitem);
//load items
window.addEventListener('DOMContentLoaded',setupItems)
// ****** FUNCTIONS **********
function addItem(e) {
  e.preventDefault();
  const value = grocery.value;
  const id = new Date().getTime().toString();
  console.log(id);
  if (value && !editFlag) {
    creatListItem(id,value)
    displayAlert("item added to the list", "success");
    // show container
    container.classList.add("show-container");
    // add local storage
    addToLocalStorage(id, value);
    // set back to default
    setBackToDefault();
  } else if (value && editFlag) {
    editElement.innerHTML = value;
    displayAlert("value changed", "success");
    // edit local storage
    editLocalStorage(editID, value);
    setBackToDefault();
  } else {
    displayAlert("please enter value ", "danger");
  }
}
// display alert
function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);
  // remove alert
  setTimeout(function () {
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
  }, 1000);
}

// clear items
function clearitem() {
  const items = document.querySelectorAll(".grocery-item");
  if (items.length > 0) {
    items.forEach(function (item) {
      list.removeChild(item);
    });
  }
  container.classList.remove("show-container");
  displayAlert("delete all item ", "success");
  setBackToDefault();
  // localStorage.removeItem('list');
}
//edit function
function editItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  // set edit item
  editElement = e.currentTarget.parentElement.previousElementSibling;
  // set form value
  grocery.value = editElement.innerHTML;
  editFlag = true;
  editID = element.dataset.id;
  submitBtn.textContent = "edit";
}
//delete function
function deleteItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  list.removeChild(element);
  const id = element.dataset.id;
  if (list.children.length === 0) {
    container.classList.remove("show-container");
  }
  displayAlert("item removed", "danger");
  setBackToDefault();
  // remove from local storage
  removeFromLocalStorage(id);
} // this not make in my repo js note
// set back to default
function setBackToDefault() {
  grocery.value = "";
  editFlag = false;
  editID = "";
  submitBtn.textContent = "submit";
}
// ****** LOCAL STORAGE **********
function addToLocalStorage(id, value) {
  // console.log('added to local storage')
  const grocery = { id, value }; // this is ES6 update wheno over paramenter of funtion and property are same we can use it
  // const grocery = {id:id,value:value} other we use it
  let items = getLocalStorage();
  items.push(grocery);
  localStorage.setItem("list", JSON.stringify(items));
  console.log(items)
}
function removeFromLocalStorage(id) {
  let items = getLocalStorage();
  items = items.filter((item) => item.id !== id);
  localStorage.setItem("list", JSON.stringify(items));
}
function editLocalStorage(id, value) {
  let items = getLocalStorage()
  items = items.map((item)=>{ 
    if(item.id===id){
      item.value=value
    }
    return item;
   })
  localStorage.setItem("list", JSON.stringify(items));
   console.log(items)
}
function getLocalStorage() {
  return localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];
}
// ****** SETUP ITEMS **********
function setupItems(){
  let items = getLocalStorage();
  if(items.length>0){
    items.forEach((item)=>{
      creatListItem(item.id,item.value)
    })
    container.classList.add('show-container')
  }
}

function creatListItem(id,value){
  const element = document.createElement("article");
  // add class
  element.classList.add("grocery-item");
  // add id
  const attr = document.createAttribute("data-id");
  attr.value = id;
  element.setAttributeNode(attr);
  element.innerHTML = `<p class="title" >${value}</p>
      <div class="btn-container" >
        <button type="button" class="edit-btn" >
          <i class="fas fa-edit" ></i>
        </button>
        <button type="button" class="delete-btn" >
          <i class="fas fa-trash" ></i>
        </button>
      </div>`;
  const deleteBtn = element.querySelector(".delete-btn");
  const editeBtn = element.querySelector(".edit-btn");
  deleteBtn.addEventListener("click", deleteItem);
  editeBtn.addEventListener("click", editItem);
  // append child
  list.appendChild(element);
}