var playerX = 'x'; 
var playerO = 'o'; 
var turn = 0; 
var boardCheck; 
var a1; 
var a2;
var a3;
var b1;
var b2;
var b3;
var c1;
var c2;
var c3;

var checkWin; 
var xWin = false; 
var oWin = false; 
var winAlert; 
 
var newGame;
var clearBoard;


var newGame = function () {
    $('td').one('click', function (event) {
        if (turn == 0) {
            $(this).text(playerX);
            boardCheck();
            checkWin();
            turn = 1;
        } else {
            $(this).text(playerO);
            boardCheck();
            checkWin();
            turn = 0;
        }
    });
};



$(document).ready(function () {
    newGame();
});


boardCheck = function () {
    a1 = $('#a1').html();
    a2 = $('#a2').html();
    a3 = $('#a3').html();
    b1 = $('#b1').html();
    b2 = $('#b2').html();
    b3 = $('#b3').html();
    c1 = $('#c1').html();
    c2 = $('#c2').html();
    c3 = $('#c3').html();
};


checkWin = function () { 
    if ((a1 == a2 && a1 == a3 && (a1 == "x")) || 
    (b1 == b2 && b1 == b3 && (b1 == "x")) || 
    (c1 == c2 && c1 == c3 && (c1 == "x")) || 
    (a1 == b1 && a1 == c1 && (a1 == "x")) || 
    (a2 == b2 && a2 == c2 && (a2 == "x")) || 
    (a3 == b3 && a3 == c3 && (a3 == "x")) || 
    (a1 == b2 && a1 == c3 && (a1 == "x")) || 
    (a3 == b2 && a3 == c1 && (a3 == "x")) 
    ) {
        xWin = true;
        winAlert();

    } else { 
        if ((a1 == a2 && a1 == a3 && (a1 == "o")) || 
        (b1 == b2 && b1 == b3 && (b1 == "o")) || 
        (c1 == c2 && c1 == c3 && (c1 == "o")) || 
        (a1 == b1 && a1 == c1 && (a1 == "o")) || 
        (a2 == b2 && a2 == c2 && (a2 == "o")) || 
        (a3 == b3 && a3 == c3 && (a3 == "o")) || 
        (a1 == b2 && a1 == c3 && (a1 == "o")) || 
        (a3 == b2 && a3 == c1 && (a3 == "o")) 
        ) {
            oWin = true;
            winAlert();

        } else { 
            if (((a1 == "x") || (a1 == "o")) && ((b1 == "x") || (b1 == "o")) && ((c1 == "x") || (c1 == "o")) && ((a2 == "x") || (a2 == "o")) && ((b2 == "x") || (b2 == "o")) && ((c2 == "x") || (c2 == "o")) && ((a3 == "x") || (a3 == "o")) && ((b3 == "x") || (b3 == "o")) && ((c3 == "x") || (c3 == "o"))) {
                alert("It's a tie!");
            }
        }
    }
};



var winAlert = function () {
    if (xWin == true) {
        alert("X Wins!");
        clearBoard(); 
    } else {
        if (oWin == true) {
            alert("O Wins!");
            clearBoard(); 
        }
    }
};


var clearBoard = $('#restart').click(function (event) {
    a1 = $('#a1').text("");
    b1 = $('#b1').text("");
    c1 = $('#c1').text("");
    a2 = $('#a2').text("");
    b2 = $('#b2').text("");
    c2 = $('#c2').text("");
    a3 = $('#a3').text("");
    b3 = $('#b3').text("");
    c3 = $('#c3').text("");
    xWin = false;
    oWin = false;
    newGame();
});