// create a simple todo list that has the following functions;
// add a new item to the todo list
// remove an item in the todo list

// some further requirements:
// the input field must be reset when the add button is clicked
// the todo list must show the most recent first
// 




//  Create a simple todo list that has the following functionalities

/**
 * add a new item to the todo list
 * remove an item in the todo list
 * 
    Some further requirements:
    - the input field must be reset when the add button is clicked on 
    - the todo list must show the most recent first
 */

    let todoContainer=document.getElementById('toDoContainer');
    let addToDoButton=document.getElementById('addTODO');
    let inputField = document.getElementById('inputField');
    
    addToDoButton.addEventListener('click',function(){
      let paragraph=document.createElement('p');
      paragraph.innerHTML+='(document.querySelector("#newtask input").value) <button>delete</button>' ;
      todoContainer.appendChild(paragraph);
      
      inputField.value="" ;
      
    })

    
// let todoList = [];

// function addItem () {
//   let localItems=JSON.parse(localStorage.getItem('localItem'))
//   if(localItems === null){
//     taskList =[]
//   }
//   else{
//     tasklist = localItems;
//   }
//   taskList.push(inputVal.value)
//   localStorage.setItem('localItem',JSON.stringify(taskList))
  
// }

// function editItem (item) {

// }

// function deleteItem (item) {

// }
// add.addEventListener('click',addItem)