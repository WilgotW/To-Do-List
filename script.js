let tasks = [];
taskIndex = 0;

const colorOptions = [
    "#966b9d", //purple
    "#c98686", //pink
    "#f2b880", //peach
    "#fff4ec", //white
    "#dfb89c" //beige
];

const addBtn = document.getElementById("addButton");
const taskBlock = document.getElementById("taskBlock");

let taskInput;
let taskText;

addBtn.addEventListener('click', function addClicked(event){
    tasks.push(document.createElement('div'));

    taskInput = document.getElementById("taskInput");

    tasks[taskIndex].textContent = taskInput.value;
    tasks[taskIndex].style.backgroundColor = 'salmon';
    tasks[taskIndex].style.width = '150px';
    tasks[taskIndex].style.height = '150px';

    taskBlock.appendChild(tasks[taskIndex]);
    taskIndex++;
});



