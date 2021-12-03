var input_box = document.getElementById("calculation");

function UserClickButton(input){
    var oldval = input_box.value;
    var newval = oldval + input;
    input_box.value = newval;
}

function Clear(){
    input_box.value = "";
}

function Calculate(){
    var input = input_box.value;
    var result = eval(input);
    input_box.value = result;
}