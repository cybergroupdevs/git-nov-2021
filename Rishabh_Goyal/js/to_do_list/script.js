let button = document.querySelectorAll(".remove");
let ul = document.querySelector("ul")
let input = document.querySelector("input")
let taskContainer = document.querySelector(".task-container")

for (const btn of button) {
    btn.addEventListener("click", remove);
}

// function helps in loading the task from the localStorage
function loadTask() {
    let allTasks = localStorage.getItem("allTasks");
    console.log(allTasks);
    if (allTasks != null) {
        let data = JSON.parse(allTasks);
        taskContainer.innerHTML = "";
        for (let i = 0; i < data.length; i++) {
            create(data[i].task)
        }
    }
}

// calling loadTask so that previously added task get loaded when user refresh or repoen the browser
loadTask();

function remove(e) {
    e.preventDefault();
    e.currentTarget.parentNode.remove();
}

let addbtn = document.querySelector(".add")
addbtn.addEventListener("click", add);


// function used to add the newly added task to the UI as well as to the localStorage
function add(e) {
    e.preventDefault();
    if (input.value.length != 0 && input.value.trim() != "") {
        let allTasks = localStorage.getItem("allTasks");
        let id = uid();
        create(input.value);
        if (allTasks == null) {
            let data = [{ "taskId": id, "task": input.value }];
            localStorage.setItem("allTasks", JSON.stringify(data));
        } else {
            let data = JSON.parse(allTasks);
            data.push({ "taskId": id, "task": input.value });
            localStorage.setItem("allTasks", JSON.stringify(data));
        }
        input.value = "";
    } else {
        alert("enter the task")
    }
}


// fuction helps in creating the "li" element of a particular task 
function create(a){
        let li = document.createElement("li");
        li.classList.add("li-element");
        li.innerHTML = `
            <p>${a}</p>
            <button class="remove">remove</button>
            `
        li.children[1].addEventListener("click", remove)
        ul.appendChild(li);
}