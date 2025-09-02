import {Todo} from '../models/todo.model';
import { createTodoElement } from './create-todo-html';

let element;

/**
 * 
 * @param {string} elementId 
 * @param {Todo} todos 
 */


export const renderTodos=(elementId, todos=[])=>{

    if(!element)
        element=document.querySelector(elementId);

    if(!element) throw new console.error(`element ${elementId} not found`);
    
    element.innerHTML='';

    todos.forEach(todo => {
        element.append(createTodoElement(todo))

    });
}