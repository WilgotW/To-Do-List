let tasks = [];
taskIndex = 0;

const colorOptions = [
    "#966b9d", //purple
    "#c98686", //pink
    "#f2b880", //peach
    "#fff4ec", //white
];
let colorIndex = 0;

const addBtn = document.getElementById("addButton");
const taskBlock = document.getElementById("taskBlock");
const removeBtn = document.getElementById("removeButton");

let taskInput;
let taskText;

addBtn.addEventListener('click', function addClicked(event){
    tasks.push(document.createElement('textarea'));
    taskInput = document.getElementById("taskInput");

    tasks[taskIndex].textContent = taskInput.value;
    taskInput.value = "";

    let color = colorOptions[colorIndex];
    colorIndex++;
    if(colorIndex > colorOptions.length -1){
        colorIndex = 0;
    }
    tasks[taskIndex].style.backgroundColor = color;
    tasks[taskIndex].className = "task"
    
    taskBlock.appendChild(tasks[taskIndex]);
    taskIndex++;
});

removeBtn.addEventListener('click', function removeClicked(event){
    if(taskIndex > 0){
        taskBlock.removeChild(tasks[taskIndex-1]);
        taskIndex--;
    }
});



