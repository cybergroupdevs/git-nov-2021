//setting tasks from localstorage on page load
$( document ).ready(function() {
    console.log("ready!" );
    if(localStorage.getItem("tasks") === null){
        localStorage.setItem('tasks',JSON.stringify([]));
    }else{
        var tasks=JSON.parse(localStorage.getItem('tasks'));
        tasks.map((t)=>{
            createTaskContainer(t.text,t.id);
        })
    }
});

// add task in todo and update localstorage
function addTodo(){
    var value=document.getElementById("task").value;
    if(value.length>0){
        var taskId = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < 10; i++ ) {
            taskId += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        
        createTaskContainer(value,taskId);
        
        document.getElementById("task").value="";
        
        var tasks=JSON.parse(localStorage.getItem('tasks'));
        var obj={};
        obj.id=taskId;
        obj.text=value;
        tasks.push(obj);
        localStorage.setItem('tasks',JSON.stringify(tasks));
    }else{
        alert("cannot add empty task")
    }
}

//delete task and update localstorage
function deleteTodo(e){
    console.log(e);
    var taskId=e.querySelector('#taskIdInp').value;
    document.getElementById(taskId).remove();

    var tasks=JSON.parse(localStorage.getItem('tasks'));
    const updatedtasks = tasks.filter((item) => item.id !== taskId);
    localStorage.setItem('tasks',JSON.stringify(updatedtasks));
}


//create dynamic task element
function createTaskContainer(value,taskId){
    var child = document.createElement('div');
    child.classList.add("col-md-4");
    child.id=taskId;
    var element=`
    <div class="todo-container">
    <div class="row">
    <div class="col-md-12">
    <div class="todo-text">
    <p>${value}</p>
    </div>
    </div>
    <div class="col-md-12 todo-delete" onclick="deleteTodo(this)">
    <input type="text" name="taskIdInp" id="taskIdInp" value="${taskId}" hidden>
    <p>Delete</p>
    </div>
    </div>
    </div>`;
    child.innerHTML = element;
    document.getElementById('todos').append(child);
}