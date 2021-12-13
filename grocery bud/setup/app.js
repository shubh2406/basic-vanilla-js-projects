// ****** SELECT ITEMS **********
const alert = document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");

// edit option
let editElement;
let editFlag = false;
let editId = "";

// ****** EVENT LISTENERS **********
// submit form
form.addEventListener("submit", addItem);
clearBtn.addEventListener("click", clearItems);

// ****** FUNCTIONS **********
function addItem(e) {
  e.preventDefault();
  // console.log(grocery.value);
  const value = grocery.value;
  const id = new Date().getTime();
  console.log(id);

  if (value && !editFlag) {
    // console.log("add item to the list");
    // My method
    // let html = `<article class="grocery-item" data-id=${id}>
    //                 <p class="title">${value}
    //                 <div class="btn-container">
    //                     <button type="button" class="edit-btn">
    //                         <i class="fas fa-edit"></i>
    //                     </button>
    //                     <button type="button" class="delete-btn">
    //                         <i class="fas fa-trash"></i>
    //                     </button>
    //                 </div>
    //             </article>`;
    // // Inserting item in DOM
    // list.innerHTML += html;

    let element = document.createElement("article");
    element.classList.add("grocery-item");

    // My method
    // element.setAttribute("data-id", "id");
    const attr = document.createAttribute("data-id"); // (method) Document.createAttribute(localName: string): Attr
    // Creates an attribute object with a specified name.
    // @param name — String that sets the attribute object's name.
    attr.value = id; // (property) Attr.value: string
    element.setAttributeNode(attr); // (method) Element.setAttributeNode(attr: Attr): Attr

    element.innerHTML = `<p class="title">${value}</p>
                        <div class="btn-container">
                            <button type="button" class="edit-btn">
                                <i class="fas fa-edit"></i>
                            </button>
                            <button type="button" class="delete-btn">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>`;

    const delBtn = element.querySelector(".delete-btn");
    const editBtn = element.querySelector(".edit-btn");

    delBtn.addEventListener("click", deleteItem);
    editBtn.addEventListener("click", editItem);

    // Append child/item
    list.appendChild(element);

    // display alert
    displayAlert("item added to the list", "success");
    // show container
    container.classList.add("show-container");

    // add to local storage
    addToLocalStorage(id, value);
    // set back to default
    setBackToDefault();
  } else if (value && editFlag) {
    // console.log("editing");
    displayAlert("value changed", "success");
  } else {
    // console.log("empty value");
    // alert.classList.add("alert-danger");
    // alert.textContent = text;
    displayAlert("please enter value", "danger");
  }
}

function clearItems() {
  // My method
  // list.innerHTML = "";

  // My method-2
  //   if(list.children.length > 0){
  //       const items = document.querySelectorAll(".grocery-item");
  //       items.forEach((item) => {
  //         list.removeChild(item);
  //       });
  //   }

  const items = document.querySelectorAll(".grocery-item");
  if (items.length > 0) {
    items.forEach((item) => {
      list.removeChild(item);
    });
  }

  displayAlert("items cleared", "success");
  container.classList.remove("show-container");

  //localStorage.removeitem("list")
}

// display alert
function displayAlert(text, action) {
  alert.classList.add(`alert-${action}`);
  alert.textContent = text;

  // remove alert
  setTimeout(() => {
    alert.classList.remove(`alert-${action}`);
    alert.textContent = "";
  }, 1000);
}

function deleteItem(e) {
  console.log("item deleted");

  const element = e.currentTarget.parentElement.parentElement;
  list.removeChild(element);

  if (list.children.length === 0) {
    container.classList.remove("show-container");
  }
}

function editItem() {}

// set back to default
function setBackToDefault() {
  console.log("set back to default");
  grocery.value = "";
  editFlag = false;
  editId = "";
  submitBtn.textContent = "submit";
}

// ****** LOCAL STORAGE **********
function addToLocalStorage(id, value) {
  console.log("added to local storage");
}

// ****** SETUP ITEMS **********
