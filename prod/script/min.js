const btnNewTask=document.querySelector(".new-task-btn"),modal=document.querySelector(".modal"),form=document.querySelector(".modal__form"),input=document.querySelector(".modal__input--title"),inputDesc=document.querySelector(".modal__input--textarea"),el=document.createElement("li"),tasksList=(el.className="task__item",document.querySelector(".task__list")),taskArchive=document.querySelector(".task-archive__container"),taskBtnDone=(btnNewTask.addEventListener("click",()=>modal.style.display="block"),document.querySelectorAll(".task__btn")),todo=()=>{form.addEventListener("submit",t=>{t.preventDefault();var t=tasksList.firstChild,e=input.value,s=inputDesc.value;""===e?(input.classList.add("modal__input--error"),console.log("error")):(input.classList.remove("modal__input--error"),el.innerHTML=`
          
            <div class="task__head">
                <button class="task__btn"></button>
                <h4 class="task__title">${e}</h4>
                <span class="priority priority--b">b</span>
            </div>
            <p class="task__desc">${s}</p>
            
             `,tasksList.insertBefore(el,t),modal.style.display="none"),form.reset()}),tasksList.addEventListener("click",t=>{let e=t.target;e.classList.contains("task__item")&&(e.classList.add("task__done"),e.remove(),t=e.cloneNode(!0),taskArchive.appendChild(t))})};todo();