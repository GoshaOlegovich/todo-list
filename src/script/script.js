// Modal 
const btnNewTask = document.querySelector('.new-task-btn'),
    modal = document.querySelector('.modal');

// Modal form
const form = document.querySelector('.modal__form'),
    input = document.querySelector('.modal__input--title'),
    inputDesc = document.querySelector('.modal__input--textarea');

// Create el
const el = document.createElement('li');
el.className = 'task__item';


// Task list
const tasksList = document.querySelector('.task__list'),
    taskArchive = document.querySelector('.task-archive__container');

// Open Modal
btnNewTask.addEventListener('click', () => modal.style.display = 'block');


const taskBtnDone = document.querySelectorAll('.task__btn')


const todo = () => {




    // Add task
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let theFirstChild = tasksList.firstChild;
        let task = input.value;
        let taskDesc = inputDesc.value;
        let currentPriority = 'b'



        if (task === '') {
            input.classList.add('modal__input--error')
            console.log('error');

        } else {
            input.classList.remove('modal__input--error')


            el.innerHTML = `
          
            <div class="task__head">
                <button class="task__btn"></button>
                <h4 class="task__title">${task}</h4>
                <span class="priority priority--${currentPriority}">${currentPriority}</span>
            </div>
            <p class="task__desc">${taskDesc}</p>
            
             `


            tasksList.insertBefore(el, theFirstChild)
            modal.style.display = 'none';

        }
        
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


        // // Remove task
        // if (currentTask.classList.contains('task__btn-remove')) {
        //     currentTask.parentNode.parentNode.parentNode.removeChild(currentTask.parentNode.parentNode);
        // }

        // // Edit task 

        // if (currentTask.classList.contains('task__btn-edit')) {

        //     let eddingTask = currentTask.parentNode.previousSibling.previousSibling;
        //     let newTask = prompt('Edit task')
        //     eddingTask.innerHTML = newTask
        //     console.log(eddingTask);


        // }

    })
}


todo()