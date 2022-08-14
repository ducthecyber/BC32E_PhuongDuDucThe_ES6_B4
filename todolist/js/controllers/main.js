import { Task } from "../models/task.js"
import { TaskList } from "../models/task-list.js"

const taskBoard = new TaskList();
const getElement = (id) => document.getElementById(id)

const renderTaskList = () => {
    const content = taskBoard.taskList.reduce((value, task) => {
        return value += `
        <div class="form-group position-relative">
            <input class="form-control" value="${task.taskName}">
            <i class="fas fa-trash-alt position-absolute" style="
            top: 10px; color:#b2bfca; cursor: pointer;
            right: 30px;
        " onclick="removeTask('${task.taskName}')"></i>   
            <i class="fas fa-check-square position-absolute" style="
            top: 10px;color:#b2bfca;cursor: pointer;
            right: 10px;
        " onclick="checkTask('${task.taskName}')"></i>
            </input>
        </div>
    `
    }, '')
    getElement('todo').innerHTML = content;
}

// set local storage
const setLocalStorage = () => {
    localStorage.setItem('taskList', JSON.stringify(taskBoard.taskList))
}

//get local storage
const getLocalStore = () => {
    const data = localStorage.getItem('foodList')
    const dataParse = JSON.parse(data) || []

    taskBoard.taskList = dataParse.map(value => {
        const task = new Task()
        for (let key in value) {
            task[key] = value[key]
        }
        return task
    })
    renderTaskList()
}

getLocalStore()

//thêm task
getElement('addItem').onclick = () => {
    const task = new Task();
    const input = document.querySelector('#newTask').value

    task.taskName = input

    taskBoard.addTask(task);
    console.log(taskBoard.taskList)

    renderTaskList()
    setLocalStorage()
    //reset lại ô input sau mỗi lần nhập
    document.querySelector('#newTask').value = ''
}

//check task
window.checkTask = (taskName) => {
    document.querySelector('.fa-check-square').style.color = 'green'
}

//xóa task
window.removeTask = (taskName) => {
    taskBoard.removeTask(taskName)
    renderTaskList()
}

//sắp xếp task A-Z
getElement('two').onclick = () => {
    taskBoard.filterTaskAZ()
    
    renderTaskList()
}

//sắp xếp task Z-A
getElement('three').onclick = () => {
    taskBoard.filterTaskZA()
    
    renderTaskList()
}