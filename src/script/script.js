const form = document.querySelector('.task__form'),
    input = document.querySelector('.task__input');




const tasksList = document.querySelector('.task__list'),
    taskArchive = document.querySelector('.task-archive__container');


const todo = () => {




    // Add task
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let theFirstChild = tasksList.firstChild;
        let task = input.value;
        const el = document.createElement('li');

        el.className = 'task__item';
      
        el.innerHTML = `
        <p>${task}</p> 
        <div class="task__control">
        <button class="task__btn task__btn-edit">Edit</button> 
        <button class="task__btn task__btn-remove">Remove</button>
        </div>
        `
        
       
        tasksList.insertBefore(el, theFirstChild)

        form.reset();
    })

    // Task done
    tasksList.addEventListener('click', (e) => {
        let currentTask = e.target;


        if (currentTask.classList.contains('task__item')) {

            currentTask.classList.add('task__done'); 

            currentTask.remove();

            // Move to archive
            let clone = currentTask.cloneNode(true);
            taskArchive.appendChild(clone);




        }

        // Remove task
        if (currentTask.classList.contains('task__btn-remove')) {
            currentTask.parentNode.parentNode.parentNode.removeChild(currentTask.parentNode.parentNode);
        }

        // Edit task 

        if (currentTask.classList.contains('task__btn-edit')) {
            
            let eddingTask = currentTask.parentNode.previousSibling.previousSibling;
            let newTask = prompt('Edit task')
            eddingTask.innerHTML = newTask
           console.log(eddingTask);

      
        }   

    })
}


todo()