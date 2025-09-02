import {Todo} from '../models/todo.model'

/**
 * 
 * @param {Todo} todo 
 */


export const createTodoElement=(todo)=>{
    if (!todo) throw new Error('A todo object is required');


    const {done, description, id}=todo; 
    const html=`
                <div class="view">
                    <input class="toggle" type="checkbox" ${done ? 'checked':''}>
                    <label>${description}</label>
                    <button class="destroy"></button>
                </div>
            </li>`
    const liElement=document.createElement('li');
    liElement.innerHTML=html;
    liElement.setAttribute('data-id', id)

    if(done)
    liElement.classList.add('completed')
    return liElement;
}