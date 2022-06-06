// Modal 
const btnNewTask = document.querySelector('.new-task-btn'),
    modal = document.querySelector('.modal');

// Modal form
const form = document.querySelector('.modal__form'),
    input = document.querySelector('.modal__input--title'),
    inputDesc = document.querySelector('.modal__input--textarea'),
    checkBoxesContainer = document.querySelector('.modal__checkboxes'),
    textLength = document.querySelector('.text-length'),
    checkBoxes = document.querySelectorAll('.checkbox-proprity');


const limitClass = document.querySelectorAll('.limit');



// Task list
const tasksList = document.querySelector('.task__list'),
    taskArchive = document.querySelector('.task-archive__container');

// Open Modal
btnNewTask.addEventListener('click', () => modal.style.display = 'block');


const taskBtnDone = document.querySelectorAll('.task__btn')

const getCheckBoxValue = () => {
    for (i = 0; i < checkBoxes.length; i++) {
        if (checkBoxes[i].checked) {

            let checkBoxVal = checkBoxes[i].value;

            return checkBoxVal;
        }

    }
}





const todo = () => {
    textLength.innerHTML = 0
    inputDesc.addEventListener('keydown', () => {
        let symbolLength = inputDesc.value.length;
        textLength.innerHTML = 0 + symbolLength;

        if (symbolLength >= 4) {
            for (i = 0; i < limitClass.length; i++) {
                limitClass[i].style.color = 'red';
            }
        }
    })

    // Add task
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const el = document.createElement('li');
        el.className = 'task__item';
        let theFirstChild = tasksList.firstChild;

        // Inputs
        let task = input.value;
        let taskDesc = inputDesc.value;
        let currentPriority = getCheckBoxValue();

        
        //Form Validation




        if (task === '') {
            input.classList.add('modal__input--error')
            console.log('error');
        }
        if (currentPriority === undefined) {
            checkBoxesContainer.classList.add('modal__checkboxes-- error')
            console.log('Select priority please');
        } else {
            input.classList.remove('modal__input--error');
            checkBoxesContainer.classList.remove('modal__checkboxes-- error');

            el.innerHTML = `
          
            <div class="task__head">
            <input class="task__btn" type="radio" id="done-task"> 
            <label class="task__btn--label" for="done-task"></label>
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

        console.log(currentTask);
        if (currentTask.classList.contains('task__btn')) {


            currentTask.parentNode.parentNode.parentNode.removeChild(currentTask.parentNode.parentNode);

           


            // Move to archive
            // let clone = currentTask.cloneNode(true);
            // taskArchive.appendChild(clone);




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