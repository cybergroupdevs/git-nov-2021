let button = document.querySelectorAll(".remove");
let ul = document.querySelector("ul")
let input = document.querySelector("input")
for (const btn of button) {
    btn.addEventListener("click", remove);
}

function remove(e){
    e.preventDefault();
    e.currentTarget.parentNode.remove();
}

let addbtn = document.querySelector(".add")
addbtn.addEventListener("click", add);

function add(e){
    e.preventDefault();
    let li = document.createElement("li");
    li.classList.add("li-element");
    li.innerHTML = `
            <p>${input.value}</p>
            <button class="remove">remove</button>
    `
    input.value = "";
    li.children[1].addEventListener("click", remove)
    ul.appendChild(li);
}