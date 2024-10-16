
const btn = document.getElementById("invio");
const input = document.getElementById("taskInput");
const btnClear = document.getElementById("clear");
const taskList = document.getElementById("taskList");

btn.addEventListener("click", function (){


    const li = document.createElement("li");

    li.textContent = input.value;

    li.addEventListener("click", function() {
        li.classList.toggle("completed");
    })

    const del = document.createElement("button");
    del.classList.add("del");

    del.addEventListener("click", function(){
        li.remove();
    })

    li.appendChild(del);

    taskList.appendChild(li);

    input.value = "";
});

btnClear.addEventListener("click", function (){
    taskList.innerHTML="";
    })









        
        
 