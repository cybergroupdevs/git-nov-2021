const inputBox=document.querySelector('.inputField input');
const addBtn=document.querySelector('.inputField button');
const todoList=document.querySelector('.todoList');
const clearAllBtn=document.querySelector('.clear-all');


inputBox.addEventListener('keyup',function(){

    let userData=inputBox.value;
  
    if(userData.trim()!=0){
        addBtn.classList.add('active');
    }else{
        addBtn.classList.remove('active');
    }

})

function showTask(){
    var getLocalStorage=localStorage.getItem('todos');
    if(getLocalStorage==null){

        listArr=[]
    }else{

        listArr=JSON.parse(getLocalStorage);

    }
    const pendingCount=document.querySelector('.pending');
    pendingCount.textContent=listArr.length;
    let newLiTag='';
    listArr.forEach((element,index) => {
        newLiTag +=`<li>${element} <span onclick='deleteTask(${index})'><i class="fas fa-trash"></i></span></li>`
    });
    todoList.innerHTML=newLiTag;


}

function deleteTask(index){

    let getLocalStorage=localStorage.getItem('todos');
    listArr=JSON.parse(getLocalStorage);
    listArr.splice(index,1);


    localStorage.setItem('todos',JSON.stringify(listArr));
    showTask();
}



addBtn.addEventListener('click',function(){
    let userData=inputBox.value;
    inputBox.value="";
    var getLocalStorage=localStorage.getItem('todos');
    if(getLocalStorage==null){
        listArr=[]

    }else{

        listArr=JSON.parse(getLocalStorage);

    }
    listArr.push(userData);
    localStorage.setItem('todos',JSON.stringify(listArr));
    showTask();
    
})

clearAllBtn.addEventListener('click',function(){
    listArr=[];

    localStorage.setItem('todos',JSON.stringify(listArr));
    showTask();

})

