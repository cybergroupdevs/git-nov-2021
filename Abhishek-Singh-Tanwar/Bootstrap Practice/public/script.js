var output="";
let equalBtn=document.querySelector('.equal-sign');
let  keyPad=document.querySelector('.calculator-keys');
let outputScreen=document.querySelector('.calculator-screen');


keyPad.addEventListener('click',function(e){

    if(e.target.value =='+'){
     
        output+='+';
        outputScreen.value=output;

    }else if(e.target.value == '-'){

        output+='-';
        outputScreen.value=output;

    }else if(e.target.value =='*'){

        output+='*';
        outputScreen.value=output;

    }else if(e.target.value == '/'){

        output+='/';
        outputScreen.value=output;

    }
    else if(e.target.value == 'all-clear'){

        output='';
        outputScreen.value=output;

    }else{
         if(e.target.value!='='){
            output+=e.target.value;
            outputScreen.value=output;
         }
        
    }
})

equalBtn.addEventListener('click',function(e){


    let result=eval(output);
    console.log(result);
    output=result;
    

     outputScreen.value=output;

})
