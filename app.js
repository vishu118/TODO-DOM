const btn = document.getElementById("add-btn");
const input = document.getElementById("todo-input");
const taskList = document.getElementById("tasksList");
const msg = document.getElementById("msg");
const Delete = document.getElementById("del");



btn.addEventListener('click',()=>{
  if(input.value == ""){
    msg.innerHTML="Please Enter Data !!!"
  }
  else{
    msg.innerHTML="";
    acceptData();
     }
    
})



let data = {};
let acceptData = ()=>{
 data["text"]=input.value ;
 create();
}

let create =()=>{
  taskList.innerHTML +=`
    <div class="task">
      <span id="taskname">${input.value}</span>
      <button onClick="deletePost(this)" id="del">DELETE</button>
     </div>`
  input.value =""
  }

   let deletePost = (e)=>{
    e.parentElement.remove();
    }










