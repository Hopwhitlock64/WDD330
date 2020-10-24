       
       import { qs, getFromLS } from "./utilities.js";
        import Todo from './todo.js';

       // qs("main").innerHTML = "It worked!";

        const myTodo = new Todo("#todoList", 'todos');
        const otherTodo = new Todo("#otherTodoList", "other");

        function addButton(ev){
          const inputValue = qs('#todoInput').value;
          ev.preventDefault(); 
          let input = document.querySelector('todoInput');
          if (input.value != '')
          addNewTodo(input.value);
          input.value = '';
          myTodo.addNewTodo(inputValue);
        }
        qs('#addButton').addEventListener('touchend', addButton);