var inputField=document.getElementById('value');
function handleKeyClick(e){
    const key = e.target.getAttribute("data");
    if(key=='AC'){
        inputField.value='';
    }else if(key =='='){
        inputField.value=eval(inputField.value);
    }else if(key!=null){
        inputField.value+=key;
    }
}
document.querySelectorAll(".key").forEach((key) => key.addEventListener("click", handleKeyClick));
