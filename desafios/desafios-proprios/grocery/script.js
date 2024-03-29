//==================================selecionando os itens====================================
const alert = document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");

//opções de edição
let editElement;
let editFlag = false;
let editID = "";

//============================EVENT LISTENERS============================================
form.addEventListener("submit", addItem)
clearBtn.addEventListener("click", clearitems)

//===========================FUNÇÕES
function addItem(e){
    e.preventDefault();
    const value = grocery.value;//input value
    const id = new Date().getTime().toString();

    if(value !== "" && editFlag === false){
        displayAlert("value added", "success")
        const element = document.createElement("article");
        element.classList.add("grocery-item");
        const attribute = document.createAttribute("data-id");
        attribute.value = id;
        element.setAttributeNode(attribute);
        element.innerHTML = ` <p class="title">${value}</p>
        <div class="btn-container">
            <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
            </button>
            <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
            </button>
        </div>`;

        const editBtn = element.querySelector(".edit-btn");
        const deleteBtn = element.querySelector(".delete-btn");
        editBtn.addEventListener('click', editItem);
        deleteBtn.addEventListener('click', deleteItem);
        

        list.appendChild(element);
        container.classList.add("show-container");
        addToLocalstorage(id, value);
        setBackToDefault();
    }
    else if(value !== "" && editFlag === true){
        editElement.innerHTML = value;
        displayAlert("value changed", 'success');
        editLocalStorage(editID, value);
        setBackToDefault();
    }
    else{
        displayAlert("please enter value", "danger")
    }
};

//display alert
function displayAlert(text, action){
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);
    //remove alert
    setTimeout(function(){
        alert.textContent = '';
        alert.classList.remove(`alert-${action}`);
    },1000);
};

//clear items
function clearitems(){
    const items = document.querySelectorAll(".grocery-item");
    if(items.length > 0){
        items.forEach(function(item){
            list.removeChild(item);
        });
    };
    container.classList.remove("show-container")
    displayAlert("values removed", "danger")
    setBackToDefault();
    // localStorage.removeItem('list');
};

//edit items function
function editItem(e){
    const element = e.currentTarget.parentElement.parentElement;
    //set edit item
    editElement = e.currentTarget.parentElement.previousElementSibling;
    //set form value
    grocery.value = editElement.innerHTML;
    editFlag = true;
    editID = element.dataset.id;
    submitBtn.textContent = 'edit';
};

//delete items function
function deleteItem(e){
    const element = e.currentTarget.parentElement.parentElement;
    const id = element.dataset.id;
    list.removeChild(element);
    if(list.children.length === 1){
        container.classList.remove('show-container');
    };
    displayAlert('item removed', 'danger');
    setBackToDefault();
    //remove from local storage
    removeFromLocalStorage(id);
};

//set back to default
function setBackToDefault(){
    grocery.value = '';
    editFlag = false;
    editID = '';
    submitBtn.textContent="submit";
};
//LOCAL STORAGE
function addToLocalstorage(id, value){
    const grocery = {id:id, value:value};
    let items = getLocalStorage();
    items.push(grocery);
    localStorage.setItem('list', JSON.stringify(items));
    // console.log("added to local storage");
};

function removeFromLocalStorage(id){
    let items = getLocalStorage();

    items = items.filter(function(item){
        if(item.id !== id){
            return item
        }
    });
    localStorage.setItem('list', JSON.stringify(items));
};

function editLocalStorage(id, value){
    let items = getLocalStorage();
    items = items.filter(function(item){
        if(item.id===id){
            item.value = value;
        }
        return item;
    })
};

function getLocalStorage(){
    return localStorage.getItem('list')
    ? JSON.parse(localStorage.getItem('list'))
    : [];
};

// localStorage.setItem('list', JSON.stringify(["item"]));
// let oranges = JSON.parse(localStorage.getItem('orange'));
// localStorage.removeItem('orange');