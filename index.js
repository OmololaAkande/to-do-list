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

   //  let todoContainer=document.getElementById('toDoContainer');
   //  let addToDoButton=document.getElementById('addTODO');
   //  let inputField = document.getElementById('inputField');
    
   //  addToDoButton.addEventListener('click',function(){
   //    let paragraph=document.createElement('p');
   //    paragraph.innerHTML=inputField.value ;
   //    todoContainer.appendChild(paragraph);
   //    inputField.value="" ;
      
   //  })

    

const inputVal=document.getElementsByClassName('inputVal')[0]
console.log(inputVal);
const addTaskBtn=document.getElementsByClassName('btn')[0]
console.log(inputVal.value);

addTaskBtn.addEventListener('click',()=>{
   if(inputVal.value.trim() !=0){
      
   let localItems=JSON.parse(localStorage.getItem('localItem'))
   if(localItems === null){
      taskList=[]
   }else{
      taskList=localItems;
   }
   taskList.unshift(inputVal.value)
   localStorage.setItem('localItem',JSON.stringify(taskList))
   inputVal.value="" 

   }
   showlist()
})

function showlist(){

   let outPut = '';
   let taskListShow= document.querySelector('.todoListItem')
   let localItems=JSON.parse(localStorage.getItem('localItem'))
   if(localItems === null){
      taskList=[]
   }else{
      taskList=localItems;
   }
   taskList.forEach((data,index) => {
outPut +=`
<div class="todoList">
          <p class="pText">${data}</p>
          <button class="deleteTask" onClick="deleteItem(${index})">x</button>
</div>`
   });
    taskListShow.innerHTML = outPut;
}
showlist()

function deleteItem(index){
   let localItems=JSON.parse(localStorage.getItem('localItem'))
   taskList.splice(index,1)
   localStorage.setItem('localItem',JSON.stringify(taskList))
   showlist()
}

function clearTask(){
localStorage.clear()
showlist()
}