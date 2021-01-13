showTask();
let takeInput = document.getElementById("input");
let addBtn = document.getElementById("inputBtn");

addBtn.addEventListener("click" , function(){
     takeInputvalue = takeInput.value;
     if(takeInputvalue.trim() != 0){
 let webTask = localStorage.getItem("localtask");
     if(webTask == null){
          taskObj = [];
     }
     else{
          taskObj = JSON.parse(webTask);
     }
     taskObj.push(takeInputvalue);
     localStorage.setItem("localtask" , JSON.stringify(taskObj));
     }
     showTask();
})

function showTask()
{
     let webTask = localStorage.getItem("localtask");
     if(webTask == null){
          taskObj = [];
     }
     else{
          taskObj = JSON.parse(webTask);
     }

     let html = '';
     let addtasktoList = document.getElementById("containerId");

     taskObj.forEach((item , index) => {
          html += `  <div class="item">
          <input type="text" class="item_input" value="${item}" disabled>
          <button class="editButton" title="Edit" onclick="editTask(${index})"><i class="fas fa-edit"></i></button>
          <button class="removeButton" title="Delete" onclick="deleteItem(${index})"><i class="fas fa-trash-alt"></i></button>
      </div>`
     });
     addtasktoList.innerHTML = html;
}

function editTask(index)
{
     let saveindex = document.getElementById("saveIndex");
     let addBtn = document.getElementById("inputBtn");
     let saveBtn = document.getElementById("saveBtn");
     saveindex.value = index;
     let webTask = localStorage.getItem("localtask");
     let taskObj = JSON.parse(webTask);
     takeInput.value = taskObj[index]; 
     addBtn.style.display="none";
     saveBtn.style.display="block"; 
}

//save
let saveBtn = document.getElementById("saveBtn");

saveBtn.addEventListener("click" , function(){
     let addBtn = document.getElementById("inputBtn");
     let webTask = localStorage.getItem("localtask");
     let taskObj = JSON.parse(webTask);
     let saveindex = document.getElementById("saveIndex").value;
     taskObj[saveindex] = takeInput.value;
     saveBtn.style.display = "none";
     addBtn.style.display = "block";
     takeInput.value = '';
     localStorage.setItem("localtask" , JSON.stringify(taskObj));
     showTask();
})

//Delete Task
function deleteItem(index)
{
     let webTask = localStorage.getItem("localtask");
     let taskObj = JSON.parse(webTask);
     taskObj.splice(index , 1); 
     localStorage.setItem("localtask" , JSON.stringify(taskObj));
     showTask(); 
}
