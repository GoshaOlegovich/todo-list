const form=document.querySelector(".task__form"),input=document.querySelector(".task__input"),tasksList=document.querySelector(".task__list"),taskArchive=document.querySelector(".task-archive__container"),todo=()=>{form.addEventListener("submit",t=>{t.preventDefault();var t=tasksList.firstChild,e=input.value;const s=document.createElement("li");s.className="task__item",s.innerHTML=`
        <p>${e}</p> 
        <div class="task__control">
        <button class="task__btn task__btn-edit">Edit</button> 
        <button class="task__btn task__btn-remove">Remove</button>
        </div>
        `,tasksList.insertBefore(s,t),form.reset()}),tasksList.addEventListener("click",e=>{let s=e.target;if(s.classList.contains("task__item")&&(s.classList.add("task__done"),s.remove(),e=s.cloneNode(!0),taskArchive.appendChild(e)),s.classList.contains("task__btn-remove")&&s.parentNode.parentNode.parentNode.removeChild(s.parentNode.parentNode),s.classList.contains("task__btn-edit")){let t=s.parentNode.previousSibling.previousSibling;e=prompt("Edit task");t.innerHTML=e,console.log(t)}})};todo();