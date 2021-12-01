function addTodo(){
    var value=document.getElementById("task").value;
    console.log(value);

    var child = document.createElement('div');
    child.classList.add("col-md-4");
    var element=`
    <div class="todo-container">
    <div class="row">
    <div class="col-md-12">
    <div class="todo-text">
    <p>${value}</p>
    </div>
    </div>
    <div class="col-md-12 todo-delete" onclick="deleteTodo(this)">
    <p>Delete</p>
    </div>
    </div>
    </div>`;
    child.innerHTML = element;
    document.getElementById('todos').append(child);

}

function deleteTodo(e){
    console.log(e);
}