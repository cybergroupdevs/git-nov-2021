let gameBoard=document.querySelector('.game-board');



gameBoard.addEventListener('click',function(e){
    
  var c1,c2,c3,c4,c5,c6,c7,c8,c9;

  c1=document.querySelector('#c-1').innerText; 
  c2=document.querySelector('#c-2').innerText;
  c3=document.querySelector('#c-3').innerText;
  c4=document.querySelector('#c-4').innerText;
  c5=document.querySelector('#c-5').innerText;
  c6=document.querySelector('#c-6').innerText;
  c7=document.querySelector('#c-7').innerText;
  c8=document.querySelector('#c-8').innerText;
  c9=document.querySelector('#c-9').innerText;

    if((c1=='x')&&(c2=='x')&&(c3=='x')){
    

        window.alert('Player X won');

    }else if((c1=='x')&&(c4=='x')&&(c7=='x')){
        window.alert('Player X won');

    }else if((c7=='x')&&(c8=='x')&&(c9=='x')){
        window.alert('Player X won');

    }else if((c3=='x')&&(c6=='x')&&(c9=='x')){
        window.alert('Player X won');

    }else if((c1=='x')&&(c5=='x')&&(c9=='x')){
        window.alert('Player X won');

    }else if((c3=='x')&&(c5=='x')&&(c7=='x')){
        window.alert('Player X won');

    }else if((c2=='x')&&(c5=='x')&&(c8=='x')){
        window.alert('Player X won');

    }else if((c4=='x')&&(c5=='x')&&(c6=='x')){
        window.alert('Player X won');

    }
    //checking for player 2
    if((c1=='0')&&(c2=='0')&&(c3=='0')){
    

        window.alert('Player X won');

    }else if((c1=='0')&&(c4=='0')&&(c7=='0')){
        window.alert('Player 2 won');

    }else if((c7=='0')&&(c8=='0')&&(c9=='0')){
        window.alert('Player 2  won');

    }else if((c3=='0')&&(c6=='0')&&(c9=='0')){
        window.alert('Player 2  won');

    }else if((c1=='0')&&(c5=='0')&&(c9=='0')){
        window.alert('Player 2 won');

    }else if((c3=='0')&&(c5=='0')&&(c7=='0')){
        window.alert('Player 2 won');
    }else if((c2=='0')&&(c5=='0')&&(c8=='0')){
        window.alert('Player2  won');

    }else if((c4=='0')&&(c5=='0')&&(c6=='0')){
        window.alert('Player 2 won');

    }
    // if match tie

    else if ((c1 == 'x' || c1 == '0') && (c2 == 'x' 
    || c2 == '0') && (c3 == 'x' || c3 == '0') && 
    (c4 == 'x' || c4 == '0') && (c5 == 'x' || 
    c5 == '0') && (c6 == 'x' || c6 == '0') && 
    (c7 == 'x' || c7 == '0') && (c8 == 'x' || 
    c8 == '0') && (c9 == 'x' || c9 == '0')) {
        console.log("aaaaaaaaa0");
   
        window.alert('Match Tie');
}

})

function resetGameBoard(){

    document.querySelector('#c-1').innerText='';
    document.querySelector('#c-2').innerText='';
    document.querySelector('#c-3').innerText='';
    document.querySelector('#c-4').innerText='';
    document.querySelector('#c-5').innerText='';
    document.querySelector('#c-6').innerText='';
    document.querySelector('#c-7').innerText='';
    document.querySelector('#c-8').innerText='';
    document.querySelector('#c-9').innerText='';

}

flag = 1;
function func1() {
    if (flag == 1) {
        document.querySelector('#c-1').innerText='x';
        
        flag = 0;
    }
    else {
        document.querySelector('#c-1').innerText='0';
       
        flag = 1;
    }
}
  
function func2() {
    if (flag == 1) {
        document.querySelector('#c-2').innerText='x';
       
        flag = 0;
    }
    else {
        document.querySelector('#c-2').innerText='0';
       
        flag = 1;
    }
}
  
function func3() {
    if (flag == 1) {
        document.querySelector('#c-3').innerText='x';
        
        flag = 0;
    }
    else {
        document.querySelector('#c-3').innerText='0';
      
        flag = 1;
    }
}
  
function func4() {
    if (flag == 1) {
        document.querySelector("#c-4").innerText='x';
       
        flag = 0;
    }
    else {
        document.querySelector("#c-4").innerText='0';
   
        flag = 1;
    }
}
  
function func5() {
    if (flag == 1) {
        document.querySelector("#c-5").innerText='x';
    
        flag = 0;
    }else{
        document.querySelector("#c-5").innerText='0';
        flag=1;

    }
}
  
function func6() {
    if (flag == 1) {
        document.querySelector('#c-6').innerText='x';
        
        flag = 0;
    }
    else {
        document.querySelector('#c-6').innerText='0';
       
        flag = 1;
    }
}
  
function func7() {
    if (flag == 1) {
        document.querySelector('#c-7').innerText='x';
       
        flag = 0;
    }
    else {
        document.querySelector('#c-7').innerText='0';
 
        flag = 1;
    }
}
  
function func8() {
    if (flag == 1) {
        
        flag = 0;
    }
    else {
        document.querySelector('#c-8').innerText='0';
      
        flag = 1;
    }
}
  
function func9() {
    if (flag == 1) {
        document.querySelector('#c-9').innerText='x';
      
        flag = 0;
    }
    else {
        document.querySelector('#c-9').innerText='0';
    
        flag = 1;
    }
}