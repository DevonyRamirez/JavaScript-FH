import {Todo} from '../models/todo.model';
import { createTodoElement } from './create-todo-html';
/**
 * 
 * @param {string} elementId 
 * @param {Todo} todos 
 */


export const renderTodos=(elementId, todos=[])=>{

    const element=document.querySelector(elementId);
    todos.forEach(todo => {
        element.append(createTodoElement(todo))
        
    });
}