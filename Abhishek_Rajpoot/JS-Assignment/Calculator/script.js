var output="";
let equalBtn = document.querySelector('.equal-sign');
console
let keyPad = document.querySelector('.calculator');
console.log(keyPad);
let outputScreen = document.querySelector('.calculator-screen');

keyPad.addEventListener('click',function(e){
    console.log(e.target.value);
    if(e.target.value == '+'){
        output+='+';
        outputScreen.value = output;
    }else if(e.target.value == '-'){
        output+='-';
        outputScreen.value=output;
    }else if(e.target.value == '*'){
        output+="*";
        outputScreen.value = output;
    }else if(e.target.value == '/'){
        output+='/';
        outputScreen.value=output;
    }else if(e.target.value == 'all-clear'){
        output='';
        outputScreen.value = output;
    }else{
        if(e.target.value!= '='){
            output+=e.target.value;
            outputScreen.value = output;
        }
    }

})

equalBtn.addEventListener('click',function(e){
    let result = eval(output);
    console.log(result);
    output=result;

    outputScreen.value= output;
})