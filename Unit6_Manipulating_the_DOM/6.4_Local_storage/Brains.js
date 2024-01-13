/*
For this assignment you will be combining your knowledge of DOM access and events to build a todo app!

As a user, you should be able to:

Add a new todo (by submitting a form)
Mark a todo as completed (cross out the text of the todo)
Remove a todo
save todos in local storage
 */

//Necessary elements
const theForm = document.getElementById('theForm')
const theField = document.getElementById('inputField')
const theContainer = document.querySelector('div')

//Runs when document is loaded and just adds the items and if they're checked or not
document.addEventListener('DOMContentLoaded',function (){
    console.log("Opened")
    for (let i=0; i<localStorage.length; i++){
        console.log("Adding list item: "+localStorage.key(i))
        var newEntry = document.createElement("p")
        newEntry.id = localStorage.key(i)
        newEntry.innerText = localStorage.key(i)
        newEntry.classList.add("removable")
        if (JSON.parse(localStorage.getItem(newEntry.id))){
            newEntry.classList.add("checked")
        }
        theContainer.appendChild(newEntry)

    }
})

//Calls addToDO Method and resets field value when submit it clicked or enter
theForm.addEventListener("submit", function (submitting){
    submitting.preventDefault()
    var newEntry = document.createElement("p")
    newEntry.id =theField.value
    newEntry.innerText = theField.value
    newEntry.classList.add("removable")
    theContainer.appendChild(newEntry)
    localStorage.setItem(newEntry.id, JSON.stringify(false))
    theField.value = ""
})

//Handles clicking/ removing checked status from form and local storage
theContainer.addEventListener("click", function (e){
    if (e.target.classList.contains("checked")){
        e.target.classList.remove("checked")
        localStorage.setItem(e.target.id, JSON.stringify(false))
    }else{
        e.target.classList.add("checked")
        localStorage.setItem(e.target.id, JSON.stringify(true))
    }

})

//Handles right clicking to remove from form and local storage
theContainer.addEventListener("contextmenu", function(e){
    if (e.target.classList.contains("removable")){
        e.target.remove()
        localStorage.removeItem(e.target.id)
    }
})


