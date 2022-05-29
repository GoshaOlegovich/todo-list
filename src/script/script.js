const form = document.querySelector('.task__form'),
    input = document.querySelector('.task__input');




const tasksList = document.querySelector('.task__list'),
    taskArchive = document.querySelector('.task-archive');


const todo = () => {




    // Add task
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let theFirstChild = tasksList.firstChild;
        let task = input.value;
        const el = document.createElement('li');

        el.className = 'task__item';
        el.innerHTML = `<span>${task}</span> <button class='task__btn-remove'>Remove</button>`;
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
            currentTask.parentNode.parentNode.removeChild(currentTask.parentNode);
        }

    })
}


todo()