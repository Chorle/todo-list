//create task
const createTaskInputEl = document.getElementById('create-task-input');
const createTaskBtnEl = document.getElementById('create-task-btn');

//task list
const showTaskSectionEl = document.getElementById('show-task-section');
/* const deleteTaskBtnElList = []; // = document.getElementsByClassName('delete-task-btn');
const existingDeleteBtns = document.getElementsByClassName('delete-task-btn'); */
/* existingDeleteBtns.forEach(elem => {
    deleteTaskBtnElList.push(elem);
}); */

/* for(let i = 0; i < existingDeleteBtns.length; i++) {
    deleteTaskBtnElList.push(existingDeleteBtns[i]);
}
 */
//create task button listener
createTaskBtnEl.addEventListener('click', () => {

    if(createTaskInputEl.value === '') {
        return;
    }

    if(createTaskInputEl.value.length >= 15) {
        alert('error');
        return ;
    }

    const taskListContainerEl = document.createElement('div');
    taskListContainerEl.className = 'task-list-container';

    const deleteTaskBtnEl = document.createElement('button'); //"Uncaught TypeError: Assignment to constant variable" const => let
    deleteTaskBtnEl.className = 'delete-task-btn';
    deleteTaskBtnEl.addEventListener('click', function() {
        showTaskSectionEl.removeChild(taskListContainerEl);
    })

    const pendingTaskUlEl = document.createElement('ul');

    const pendingTaskLiEl = document.createElement('li');
    pendingTaskLiEl.className = 'pending-task-li';

    deleteTaskBtnEl.innerHTML = 'X';

    pendingTaskLiEl.innerHTML = createTaskInputEl.value;

    pendingTaskUlEl.appendChild(pendingTaskLiEl);
    taskListContainerEl.appendChild(deleteTaskBtnEl);
    taskListContainerEl.appendChild(pendingTaskUlEl);
    showTaskSectionEl.appendChild(taskListContainerEl);

    createTaskInputEl.value = '';

    /* deleteTaskBtnElList.push(deleteTaskBtnEl);

    for(let i = 0; i < deleteTaskBtnElList.length; i++) {
        deleteTaskBtnElList[i].addEventListener('click', function() {
            console.log('button: ' + i);
            console.log(deleteTaskBtnElList);
        });
    } */

});
