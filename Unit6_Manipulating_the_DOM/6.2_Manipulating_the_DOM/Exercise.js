/*
Write the code necessary to do the following:

1. Select the section with an id of container without using querySelector.
2. Select the section with an id of container using querySelector.
3. Select all of the list items with a class of “second”.
4. Select a list item with a class of third, but only the list item inside of the ol tag.
5. Give the section with an id of container the text “Hello!”.
6. Add the class main to the div with a class of footer.
7. Remove the class main on the div with a class of footer.
8. Create a new li element.
9. Give the li the text “four”.
10. Append the li to the ul element.
11. Loop over all of the lis inside the ol tag and give them a background color of “green”.
12. Remove the div with a class of footer
 */

//1
const container = document.getElementById("container")

//2
const sameContainer = document.querySelector("#container")

//3
const aList = document.querySelectorAll(".second")

//4
const thirdItemInOL = document.querySelector("ol").querySelector(".third")

//5 commented out because takes out lis and ols and cant do nect steps
//container.textContent = "Hello!"

//6
const divWithClassFooter = document.querySelector(".footer")
divWithClassFooter.classList.add('main')

//7
divWithClassFooter.classList.remove('main')

//8
const newLi = document.createElement('li')

//9
newLi.innerText = "four"

//10
document.querySelector("ul").appendChild(newLi)

//11
const allLI = document.querySelectorAll("ol li")
for (const eachLI of allLI){
    eachLI.style.backgroundColor = 'green'
}

//12
const divWithFooterClass = document.querySelector("div.footer")
const hisDad = divWithFooterClass.parentElement
hisDad.removeChild(divWithFooterClass)




