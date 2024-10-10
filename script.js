// created on variable to take the elment using the getElementById("we put id here of the element")
const inputBox = document.getElementById("input-box") ; 
// we have take the list container which ia ul which has the class called listContainer 
const listContainer = document.getElementById("list-container") ; 


// in html  we have called one function onClick =addTask()  and we have created this function in js file
function addTask(){

    // checking if someone click on button without any value
    if(inputBox.value === ''){
        alert("You Must Write Something") ; 
    }else{
        // createElement creates an html element
        let li = document.createElement("li")

        // assigning the input box value to the li we just creting using the funciton called createElement
        li.innerHTML = inputBox.value ; 

        // Adding the li into the list cotainer using the appendChild function 
        listContainer.appendChild(li) ; 

        let span = document.createElement("span") ;
        span.innerHTML = "\u00d7" ; 

        li.appendChild(span) ; 
    }

    inputBox.value ="" ; 
    saveData()
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked") ; 
        saveData()
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();  
        saveData()
    }
}, false) ;


function saveData(){
    localStorage.setItem("data", listContainer.innerHTML) ; 
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem('data') ; 
}

function deleteAll(){
    listContainer.innerHTML = "" ; 
    saveData() ; 

}

showTask() ; 
