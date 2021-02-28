function todoList (){
    const $input = document.querySelector('#new-todo-title');
    const $todoList = document.querySelector('#todo-list');
    function addTodo (event){
        const title = event.target.value;
        const newTodoItem = document.createElement('li');
        $todoList.appendChild(newTodoItem);
            newTodoItem.innerHTML=`
                <div class="view">
                    <input class="toggle" type="checkbox"/>
                    <label class="label">${title}</label>
                    <button class="destroy"></button>
                </div>
                <input class="edit" value="${title}" />
            `
        this.event.target.value = ''  ;
        const $checkBtn = newTodoItem.querySelector('.toggle');
        const $deleteBtn = newTodoItem.querySelector('.destroy');

        $checkBtn.addEventListener('click', checkComplete => {
            if($checkBtn.checked){
                newTodoItem.classList.add('completed');
            } else {
                newTodoItem.classList.remove('completed');
            }
        });
        $deleteBtn.addEventListener('click', (event) => {
           $todoList.removeChild(newTodoItem);
        });
        newTodoItem.addEventListener('click', (event) => {
            // console.log('dfs');
           console.log( event.target);
            newTodoItem.classList.add('editing');
         });
    }
  
    $input.addEventListener('keypress', (event) => {
        if(event.target.value != ''  && event.key === 'Enter'){
            addTodo (event);
        }
    });
  
}
const todoApp = new todoList();