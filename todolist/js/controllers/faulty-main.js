import { Task } from "../models/task.js"
import { TaskList } from "../models/task-list.js"

const taskBoard = new TaskList();
const getElement = (id) => document.getElementById(id)

const renderTaskList = () => {
    const content = taskBoard.taskList.reduce((value, task) => {
        return value += `
        <tr>
            <td>${task.taskName}</td>
            <td>
                <span class="fa-thin fa-trash-can" onclick = "removeTask('${task.taskName}')></span>
                <span class="fa-solid fa-circle-check" onclick = "updateTask('${task.taskName}')>COMPLETE</span>
            </td>
        </tr>
    `
    }, '')
    getElement('todo').innerHTML = content;
}

//set local storage: lưu vào local storage
const setLocalStorage = () => {
    localStorage.setItem('taskList', JSON.stringify(taskBoard.taskList))
}

//get local storage: hiển thị local storage lên giao diện
const getLocalStore = () => {
    const data = localStorage.getItem('taskList')
    const dataParse = JSON.parse(data)

    //kiểm tra trường hợp lấy lần đầu nếu localStroe null thì gán là [] (list)
    taskBoard.taskList = dataParse ? dataParse : []

    // taskBoard.taskList = dataParse.map(array => {
    //     const task = new Task()
    //     for (let key in array) {
    //         task[key] = array[key]
    //     }
    //     return task
    // })
    renderTaskList()
}

getLocalStore()

getElement('addItem').onclick = () => {
    const task = new Task();
    const input = document.querySelector('#newTask').value

    task.taskName = input

    taskBoard.addTask(task);
    console.log(taskBoard.taskList)
    renderTaskList()
    setLocalStorage()
}