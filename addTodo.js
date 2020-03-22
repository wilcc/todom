const addButton = document.querySelector('.add-todo')
const value = document.querySelector('.todo-input')
const removeValueInput = document.querySelector('.index-input')
const removeButton = document.querySelector('.remove-todo')
const ul = document.querySelector('.todo-list')
const deleteAllButton = document.querySelector('.delete-all')


const toDoList = []

const todo = function(num){
    let newLi = document.createElement('li')
    let ul = document.querySelector('ol')
    newLi.innerText= num
    ul.appendChild(newLi)
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    newLi.style.background = bgColor;
    
}
function clear(){
    const lis = document.querySelectorAll('li')
    for (const li of lis) {
        li.remove();
    }
}
const todoListFunc = function(){
    clear()
    addToList()
    for (const item of toDoList){
        todo(item)
        
    }
}
const addToList = function(){
    toDoList.push(value.value)
    value.value = ''
    value.focus()
}
addButton.addEventListener('click',todoListFunc)

// const removeEmptyLi = function(){
//     const lis = document.querySelectorAll('li')
//     for (const li of lis) {
//         // console.log(li.value)
//         if (li.value === ''){
//         li.remove();}
//     }

// }
// const removeList = function(){
//     toDoList.splice(removeValue.value,1)
//     todoListFunc()
//     removeValue.value = ''
// }



const removeValue = function(value){
    const list = document.querySelector('.todo-list')
    list.removeChild(list.childNodes[value])
} 

const removeListFunc = function(){
    removeValue(removeValueInput.value)
    toDoList.splice(removeValueInput.value,1)
    removeValueInput.value = ''
    removeValueInput.focus()
}
removeButton.addEventListener('click', removeListFunc)

// const lis = document.querySelectorAll('li')
ul.addEventListener('click',function(click){
    if (confirm("Are you sure you are done?")) {
    const clicked = click.target
    clicked.remove()
    toDoList.splice(clicked,1)

    }
})

const clearAll = function(){
    clear()
    toDoList.splice(0,toDoList.length)
}
deleteAllButton.addEventListener('click', clearAll)