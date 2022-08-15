export class TaskList {
    constructor() { }
    taskList = [];

    addTask(task) {
        this.taskList = [...this.taskList, task];
    }

    checkTask(taskName) {
        return this.taskList.find((task) => {
            if (task.taskName === taskName) {
                return true
            }
            return false
        })
    }

    filterTask(){
        return this.taskList.filter((task)=>{
            if(task.status === '1'){
                console.log(task.status)
                return true
            }
            else if(task.status === '0'){
                return false
            }
        })
    }

    filterTask1(){
        return this.taskList.filter((task)=>{
            if(task.status === '0'){
                console.log(task.status)
                return true
            }
            else if(task.status === '1'){
                return false
            }
        })
    }

    removeTask(taskName) {
        this.taskList = this.taskList.filter(task => task.taskName !== taskName)
    }

    filterTaskAZ() {
        this.taskList.sort(function (a, b) {
            let nameA = a.taskName.toUpperCase();
            let nameB = b.taskName.toUpperCase();
            if (nameA < nameB) { return -1; }
            if (nameA > nameB) { return 1; }
            return 0;
        })
    }

    filterTaskZA() {
        this.taskList.sort(function (a, b) {
            let nameA = a.taskName.toUpperCase();
            let nameB = b.taskName.toUpperCase();
            if (nameA < nameB) { return 1; }
            if (nameA > nameB) { return -1; }
            return 0;
        })
    }
}