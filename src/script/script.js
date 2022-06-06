

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
const taskStorage = [];

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




const FormValidation = () => {
    //Form Validation

    // if (task === '') {
    //     input.classList.add('modal__input--error')
    //     console.log('error');
    // }
    // if (currentPriority === undefined) {
    //     checkBoxesContainer.classList.add('modal__checkboxes-- error')
    //     console.log('Select priority please');
    // } else {
    input.classList.remove('modal__input--error');
    checkBoxesContainer.classList.remove('modal__checkboxes-- error');
    modal.style.display = 'none';
}

// Create task functuin






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

    //Form

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        FormValidation();

        // Form inputs




        // Create task El
        let task = input.value;
        let taskDesc = inputDesc.value;
        let currentPriority = getCheckBoxValue();

        class CreateTask {
            render(val) {
                const el = document.createElement('li');
                el.className = 'task__item';
                el.innerHTML = `
                <div class="task__head">
                <input class="task__btn" type="radio" id="done-task-${val}"> 
                <label class="task__btn--label" for="done-task-${val}"></label>
                <h4 class="task__title">${task}</h4>
                <span class="priority priority--${currentPriority}">${currentPriority}</span>
                </div>
                <p class="task__desc">${taskDesc}</p>`;
                taskStorage.push(el);
                tasksList.appendChild(el);


            }
        }


        let index = 1;
        const elEnumeratio = () => {
            for (i = 0; i < taskStorage.length; i++) {
                console.log(index + 'in circle');
                index++;
            }

        }
        elEnumeratio();





        const createTask = new CreateTask();

        createTask.render(index);

        console.log(taskStorage.length + " taskStorage");
        console.log(index + " index");






        // Func end

        form.reset();




    })


}


todo()