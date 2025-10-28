var popupoverlay=document.querySelector(".popupoverlay")
var popupbox=document.querySelector(".popupbox")
var addpopupbutton=document.getElementById("addpopup")

addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})

var cancelpopup=document.getElementById("cancelpopup")
cancelpopup.addEventListener("click",function(event){
   event.preventDefault()
   popupoverlay.style.display="none"
   popupbox.style.display="none"
})
var container=document.querySelector(".container")
var addbook=document.getElementById("addbook")
var booktitleinput=document.getElementById("booktitleinput")
var bookauthorinput=document.getElementById("bookauthorinput")
var bookdescriptioninpt=document.getElementById("bookdescriptioninput")

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=` <h1 class="one">${booktitleinput.value}</h1>
    <h5 class="two">${bookauthorinput.value}</h5>
    <p>${bookdescriptioninpt.value}</p>
    <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
    popupoverlay.style.display="none"
   popupbox.style.display="none"
})

function deletebook(event){
    event.target.parentElement.remove()

}

