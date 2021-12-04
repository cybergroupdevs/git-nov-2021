let gameStatus=document.getElementById('player-turn');

let currentPlayer = "⭕";
let gameStates = ["", "", "", "", "", "", "", "", ""];
let isGameActive = true;

gameStatus.innerHTML =  `${currentPlayer} turn`;

const winConditions = [[0, 1, 2],[3, 4, 5],[6, 7, 8],[0, 3, 6],[1, 4, 7],[2, 5, 8],[0, 4, 8],[2, 4, 6]];

function handlePlayerChange(){
    currentPlayer = currentPlayer === "✖" ? "⭕" : "✖";
    gameStatus.innerHTML =  `${currentPlayer} turn`;
}

function handleResultValidation(){
    let roundWon = false;
    for(let i = 0; i <= 7; i++) {
        const winCondition = winConditions[i];
        let a = gameStates[winCondition[0]];
        let b = gameStates[winCondition[1]];
        let c = gameStates[winCondition[2]];
        if (a === "" || b === "" || c === "") {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break;
        }
    }

    if(roundWon){
        gameStatus.innerHTML = `Player ${currentPlayer} won🎉`;
        isGameActive = false;
        return;
    }

    let roundDraw = !gameStates.includes("");
    if(roundDraw){
        gameStatus.innerHTML = "Game Draw";
        isGameActive = false;
        return;
    }

    handlePlayerChange();
}

function handleCellClick(e){
    const cellIndex = parseInt(e.target.getAttribute("box"));

    if(gameStates[cellIndex] !== "" || !isGameActive) {
        return;
    }   
    gameStates[cellIndex] = currentPlayer;
    e.target.innerHTML = currentPlayer;
    handleResultValidation();
}

function handleRestartGame() {
    currentPlayer = "✖";
    gameStates = ["", "", "", "", "", "", "", "", ""];
    isGameActive = true;
    gameStatus.innerHTML =  `${currentPlayer} turn`;
    document.querySelectorAll(".cell").forEach((cell) => (cell.innerHTML = ""));
}

document.querySelectorAll(".cell").forEach((cell) => cell.addEventListener("click", handleCellClick));
