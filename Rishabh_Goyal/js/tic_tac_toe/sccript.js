let module = document.querySelectorAll(".col");

let resetbtn = document.querySelector(".reset");
for(let i = 0; i<module.length; i++){
    module[i].addEventListener("click", play);
}
let win = false;
// help in chnaging the turns of a palyer
let count =  0;
let currentPlayer = "X"
function play(e){
    if(count < 9){
        if(currentPlayer == "X"){
            e.currentTarget.innerText = "X";
            currentPlayer = "0"
            count++;
        }else{
            e.currentTarget.innerText = "0";
            currentPlayer = "X"
            count++;
        }
        console.log(count);
        e.currentTarget.removeEventListener("click", play);
        setTimeout(() => {
            checkWin()  
        }, 2);
    }
    setTimeout(() => {
        checkforDraw();
    }, 1);     
}

function checkforDraw(){
    if(count == 9 && win == false){
        alert("draw")
    }
}
let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6]
]
resetbtn.addEventListener("click", reset);
function checkWin(){
    wins.forEach(e => {
        if(module[e[0]].innerText == module[e[1]].innerText && module[e[0]].innerText == module[e[2]].innerText && module[e[0]].innerText != ""){
            alert(`${currentPlayer == "X" ? "0" : "X"} win`)
            // location.reload()
            win = true;
            resetbtn.addEventListener("click", reset);
        }
    })
}

function reset(){
    for(let i = 0; i<module.length; i++){
        module[i].addEventListener("click", play);
        module[i].innerText = "";
        count = 0;
    }
}