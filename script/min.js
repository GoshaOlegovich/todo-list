const btnNewTask=document.querySelector(".new-task-btn"),modal=document.querySelector(".modal"),form=document.querySelector(".modal__form"),input=document.querySelector(".modal__input--title"),inputDesc=document.querySelector(".modal__input--textarea"),checkBoxesContainer=document.querySelector(".modal__checkboxes"),textLength=document.querySelector(".text-length"),checkBoxes=document.querySelectorAll(".checkbox-proprity"),limitClass=document.querySelectorAll(".limit"),taskStorage=[],tasksList=document.querySelector(".task__list"),taskArchive=document.querySelector(".task-archive__container"),taskBtnDone=document.querySelectorAll(".task__btn"),getCheckBoxValue=()=>{for(i=0;i<checkBoxes.length;i++)if(checkBoxes[i].checked)return checkBoxes[i].value},todo=()=>{textLength.innerHTML=0,inputDesc.addEventListener("keydown",symbolLengthFunc=()=>{var e=inputDesc.value.length;if(textLength.innerHTML=0+e+1,120<e)for(i=0;i<limitClass.length;i++)limitClass[i].style.color="red";else for(i=0;i<limitClass.length;i++)limitClass[i].style.color="black";return e}),form.addEventListener("submit",e=>{e.preventDefault();var e=getCheckBoxValue(),t=symbolLengthFunc();FormValidation(e,t)})},FormValidation=(e,t)=>{""===input.value?input.classList.add("modal__input--error"):void 0===e?checkBoxesContainer.classList.add("modal__checkboxes-- error"):120<t||(textLength.innerHTML=0,input.classList.remove("modal__input--error"),checkBoxesContainer.classList.remove("modal__checkboxes-- error"),modal.style.display="none",createTask(e)),form.reset()},createTask=s=>{let a=input.value,o=inputDesc.value;let e=0;for(i=0;i<taskStorage.length;i++)e++;const t=new class{render(e){const t=document.createElement("li");t.className="task__item",t.setAttribute("data-index",e),t.innerHTML=`
        <div class="task__head">
        <input class="task__btn" type="radio" id="done-task-${e}"> 
        <label class="task__btn--label" for="done-task-${e}" data-index=${e}></label>
        <h4 class="task__title">${a}</h4>
        <span class="priority priority--${s}">${s}</span>
        </div>
        <p class="task__desc">${o}</p>`,taskStorage.push(t),tasksList.appendChild(t)}};t.render(e)};tasksList.addEventListener("click",e=>{e=e.target;let t=e.dataset.index;for(console.log(e+t),i=0;i<taskStorage.length;i++)setTimeout(()=>{taskStorage[t].remove()},500)}),btnNewTask.addEventListener("click",()=>modal.style.display="block"),todo();