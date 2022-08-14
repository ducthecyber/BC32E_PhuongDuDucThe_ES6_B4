export class TaskList {
    constructor() { }
    taskList = [];

    addTask(task) {
        this.taskList = [...this.taskList, task];
    }

    checkTask() { 

    }

    removeTask(taskName) { 
        this.taskList = this.taskList.filter(task => task.taskName !== taskName)
    }
    
    filterTaskAZ() { 
        this.taskList.sort(function(a, b){
            let nameA = a.taskName.toUpperCase();
            let nameB = b.taskName.toUpperCase();
            if(nameA < nameB) { return -1; }
            if(nameA > nameB) { return 1; }
            return 0;
        })
    }

    filterTaskZA() { 
        this.taskList.sort(function(a, b){
            let nameA = a.taskName.toUpperCase();
            let nameB = b.taskName.toUpperCase();
            if(nameA < nameB) { return 1; }
            if(nameA > nameB) { return -1; }
            return 0;
        })
    }
}