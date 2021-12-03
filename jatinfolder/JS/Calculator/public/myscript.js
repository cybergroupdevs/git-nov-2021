var num1='';
var num2='';
var oper='';
function operatorSelected(operatorid){
    oper = document.getElementById(operatorid).value;
    document.getElementById("calciscreen").value = oper;
}

document.getElementById("calciscreen").addEventListener("keypress", function(e){
    e.preventDefault()
})
function digitSelected(digitid){
    if(oper == ''){
        num1 += document.getElementById(digitid).value;
        document.getElementById("calciscreen").value = num1;
    }
    else{        
        num2 += document.getElementById(digitid).value;
        document.getElementById("calciscreen").value = num2;
    }
}
function clearDisplay(){
    num1 = '';
    num2 = '';
    result = '';
    oper = '';
    document.getElementById("calciscreen").value = '';
}
function displayResult(){
    if(oper=='+'){
        document.getElementById("calciscreen").value = parseFloat(num1) + parseFloat(num2);
    }
    else if(oper == '-')
    {
        document.getElementById("calciscreen").value = parseFloat(num1) - parseFloat(num2);
    }
    else if(oper == '*')
    {
        document.getElementById("calciscreen").value = parseFloat(num1) * parseFloat(num2);
    }
    else if(oper == '/')
    {
        document.getElementById("calciscreen").value = parseFloat(num1) / parseFloat(num2);
    }
}
