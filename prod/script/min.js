const btnNewTask=document.querySelector(".new-task-btn"),modal=document.querySelector(".modal"),form=document.querySelector(".modal__form"),input=document.querySelector(".modal__input--title"),inputDesc=document.querySelector(".modal__input--textarea"),checkBoxesContainer=document.querySelector(".modal__checkboxes"),textLength=document.querySelector(".text-length"),checkBoxes=document.querySelectorAll(".checkbox-proprity"),limitClass=document.querySelectorAll(".limit"),taskStorage=[],tasksList=document.querySelector(".task__list"),taskArchive=document.querySelector(".task-archive__container"),taskBtnDone=(btnNewTask.addEventListener("click",()=>modal.style.display="block"),document.querySelectorAll(".task__btn")),getCheckBoxValue=()=>{for(i=0;i<checkBoxes.length;i++)if(checkBoxes[i].checked)return checkBoxes[i].value},FormValidation=()=>{input.classList.remove("modal__input--error"),checkBoxesContainer.classList.remove("modal__checkboxes-- error"),modal.style.display="none"},todo=()=>{textLength.innerHTML=0,inputDesc.addEventListener("keydown",()=>{var e=inputDesc.value.length;if(textLength.innerHTML=0+e,4<=e)for(i=0;i<limitClass.length;i++)limitClass[i].style.color="red"}),form.addEventListener("submit",e=>{e.preventDefault(),FormValidation();let o=input.value,l=inputDesc.value,s=getCheckBoxValue();let t=1;for(i=0;i<taskStorage.length;i++)console.log(t+"in circle"),t++;const a=new class{render(e){const t=document.createElement("li");t.className="task__item",t.innerHTML=`
                <div class="task__head">
                <input class="task__btn" type="radio" id="done-task-${e}"> 
                <label class="task__btn--label" for="done-task-${e}"></label>
                <h4 class="task__title">${o}</h4>
                <span class="priority priority--${s}">${s}</span>
                </div>
                <p class="task__desc">${l}</p>`,taskStorage.push(t),tasksList.appendChild(t)}};a.render(t),console.log(taskStorage.length+" taskStorage"),console.log(t+" index"),form.reset()})};todo();