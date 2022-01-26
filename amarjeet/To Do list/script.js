let input = document.querySelector(".task-input");
let ul = document.querySelector(".task-list");

function deleteTask(e){
    e.currentTarget.remove();  //deletes the li which was double clicked
}

input.addEventListener("keypress", function(e){
    console.log(e);
    if(e.key == "Enter"){   //after adding it will perform the underlying tasks on enter
        let task = input.value;
        if(!task){   //if empty string throw error
            alert("error - Adding Empty task");
            return;
        }
        input.value = "";
        let li = document.createElement("li");
        li.classList.add("list-item");  
        li.innerText = task;    
        ul.appendChild(li);   //list item added at the end of first one
        // ul.insertBefore(li, ul.firstChild)     //list item added at the top of all list items
        li.addEventListener("dblclick", deleteTask);   //double click will delete
        
    }
})