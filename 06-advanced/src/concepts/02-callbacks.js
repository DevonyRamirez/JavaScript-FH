
import {heroes} from'../data/heroes'

/**
 * 
 * @param {HTMLDivElement} element 
 */


export const callbacksComponent = (element) => {
    const id="5d86371fd55e2e2a30fe1ccb";
    findHero(id,(hero )=>{
        element.innerHTML=hero.name
    })

}
/**
 * 
 * @param {String} id 
 * @param {(hero:object)=>void} callback 
 */
const findHero=(id,callback)=>{
    const hero=heroes.find(hero=>hero.id===id);

    callback(hero)

}