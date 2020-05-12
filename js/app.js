function onPageLoaded() {
    const input = document.querySelector('input[type="text"]');
    const ul = document.querySelector('ul.todo__list');

    function createTodo() {
        const li = document.createElement('li');
        li.classList.add('todo__item');
        const textSpan = document.createElement('span');
        textSpan.classList.add('todo__text');
        const newTodo = input.value;
        textSpan.append(newTodo);

        const deleteBtn = document.createElement('span');
        deleteBtn.classList.add('todo__trash');
        const icon = document.createElement('img');
        icon.setAttribute('src', 'img/interface.svg'); 
        icon.setAttribute('id', 'trash');  
        icon.setAttribute('alt', 'Trash');  
        deleteBtn.appendChild(icon);
        
        ul.appendChild(li).append(textSpan, deleteBtn);
        input.value = "";

        listenDeleteTodo(deleteBtn);
    }
    function listenDeleteTodo(element) {
        element.addEventListener('click', (event) => {
            element.parentElement.remove();
            event.stopPropagation();
        });
    }
    input.addEventListener('keypress', (keyPressed) => {
        const keyEnter = 13;
        if(keyPressed.which == keyEnter) {
            createTodo();
        }
    });''

    function onClickTodo(event){
        if(event.target.tagName === 'LI') {
            event.target.classList.toggle('checked');
        }
    }
    ul.addEventListener('click', onClickTodo);


    const saveButton = document.querySelector('button.save');
    const clearButton = document.querySelector('button.clear');
    const showTipsButton = document.querySelector('button.showTips');
    const closeTipsButton = document.querySelector('a.closeTips');
    const overlay = document.querySelector('#overlay');

    saveButton.addEventListener('click', () => {
        localStorage.setItem('todo__list', ul.innerHTML);
    });
    clearButton.addEventListener('click', () => {
        ul.innerHTML = "";
        localStorage.removeItem('todo__list', ul.innerHTML);
    });
    showTipsButton.addEventListener('click', () => {
        overlay.classList.add('overShow');
    });
    closeTipsButton.addEventListener('click', () => {
        overlay.classList.remove('overShow');
    });

    function loadTodos() {
        const data = localStorage.getItem('todo__list');
        if(data){
            ul.innerHTML = data;
        }
        const deleteButtons = document.querySelectorAll('span.todo__trash');
        for(const button of deleteButtons) {
            listenDeleteTodo(button);
        }
    }
    loadTodos();

    let pencil = document.querySelector('#pencil');

    pencil.addEventListener('click', function(){
        let addList = document.querySelector('#input');
        addList.focus();
    });



    // let todoMove = document.querySelectorAll('.todo__header');

    // let todoM = document.querySelectorAll('.todo');
    // todoMove.onmousedown = function(evt) {
    //     let shiftX = evt.clientX - todoM.getBoundingClientRect().left;
    //     let shiftY = evt.clientY - todoM.getBoundingClientRect().top;
    //     todoM.style.position = 'absolute';
    //     todoM.style.zIndex = 1000;
        

    //     document.body.append(todoM);

    //     moveAt(evt.pageX, evt.pageY);

    //     function moveAt(pageX, pageY) {
    //         todoM.style.left = pageX -  shiftX + 'px';
    //         todoM.style.top = pageY - shiftY + 'px';
    //     } 

    //     function onMouseMove(evt){
    //         moveAt(evt.pageX, evt.pageY)
    //     }

    //     document.addEventListener('mousemove', onMouseMove);

    //     todoMove.onmouseup = function(){
    //         document.removeEventListener('mousemove', onMouseMove);
    //         todoMove.onmouseup = null;
    //     };

    //     todoM.ondragstart = function() {
    //         return false;
    //     };
    // };
}
document.addEventListener('DOMContentLoaded', onPageLoaded);
