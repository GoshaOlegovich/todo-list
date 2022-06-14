// Modal 
const btnNewTask = document.querySelector('.new-task-btn'),
    modal = document.querySelector('.modal'),
    form = document.querySelector('.modal__form'),
    input = document.querySelector('.modal__input--title'),
    inputDesc = document.querySelector('.modal__input--textarea'),
    checkBoxesContainer = document.querySelector('.modal__checkboxes'),
    textLength = document.querySelector('.text-length'),
    checkBoxes = document.querySelectorAll('.checkbox-proprity');


const limitClass = document.querySelectorAll('.limit'); // validation



// Task list

const taskStorage = []; 

const tasksList = document.querySelector('.task__list'),
      taskArchive = document.querySelector('.task-archive__container');





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

    inputDesc.addEventListener('keydown', symbolLengthFunc = () => {
        let symbolLength = inputDesc.value.length;
        textLength.innerHTML = 0 + symbolLength + 1;

        if (symbolLength > 120) {
            for (i = 0; i < limitClass.length; i++) {
                limitClass[i].style.color = 'red';
            }
        } else {
            for (i = 0; i < limitClass.length; i++) {
                limitClass[i].style.color = 'black';
            }

        }
        return symbolLength;
    })

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let currentPriority = getCheckBoxValue();
        let symbolLengthOut = symbolLengthFunc();

        FormValidation(currentPriority, symbolLengthOut);

    })

}



//Validation 

const FormValidation = (currentPriority, symbolLengthOut) => {
    if (input.value === '') {

        input.classList.add('modal__input--error');
    } else if (currentPriority === undefined) {

        checkBoxesContainer.classList.add('modal__checkboxes-- error');
    } else if (symbolLengthOut > 120) {

    } else {
        textLength.innerHTML = 0
        input.classList.remove('modal__input--error');
        checkBoxesContainer.classList.remove('modal__checkboxes-- error');
        modal.style.display = 'none';

       
        createTask(currentPriority)
       
    }
    form.reset();

}


//Create task 

const createTask = (currentPriority) => { 
    let task = input.value;
    let taskDesc = inputDesc.value;
    class CreateTask {
        render(val) {
            const el = document.createElement('li');
            el.className = 'task__item';
            el.setAttribute('data-index', val)
            el.innerHTML = `
        <div class="task__head">
        <input class="task__btn" type="radio" id="done-task-${val}"> 
        <label class="task__btn--label" for="done-task-${val}" data-index=${val}></label>
        <h4 class="task__title">${task}</h4>
        <span class="priority priority--${currentPriority}">${currentPriority}</span>
        </div>
        <p class="task__desc">${taskDesc}</p>`;
            taskStorage.push(el);
            tasksList.appendChild(el);


        }
    }
    let index = 0;
    const elEnumeratio = () => {
        for (i = 0; i < taskStorage.length; i++) {
            index++;
        }
    
    }
    elEnumeratio();
    const createTask = new CreateTask();
    createTask.render(index);
   
}


//Done task

tasksList.addEventListener('click', (e) => {
    let currentTask = e.target;
    let currentTaskIndex = currentTask.dataset.index;
    console.log(currentTask + currentTaskIndex);
    for (i = 0; i < taskStorage.length; i++) {
        setTimeout(() => {
            taskStorage[currentTaskIndex].remove();
        }, 500);

    }

})



// Open Modal
btnNewTask.addEventListener('click', () => modal.style.display = 'block');


todo()