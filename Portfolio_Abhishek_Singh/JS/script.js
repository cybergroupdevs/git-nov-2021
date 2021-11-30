
let submitButton=document.querySelector('#submit-btn');


let counter=0;
submitButton.addEventListener('click',function(e){
   
   let message =document.querySelector('#message').value;
    localStorage.setItem('messages'+counter,JSON.stringify(message));
    counter++;
    console.log(message);
   
})


