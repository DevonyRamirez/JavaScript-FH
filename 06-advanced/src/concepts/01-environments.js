
/**
 * 
 * @param {HTMLDivElement} element 
 */


export const environments = (element) => {
    
    
    console.log(import.meta.env); // Vite environment variables.
    
    
    const html=`
        Dev:${import.meta.env.DEV}<br/>
        Prod:${import.meta.env.PROD}<br/>
        KEY:${import.meta.env.VITE_API_KEY}<br/>
        URL:${import.meta.env.VITE_BASE_KEY}<br/>
        
    `;
    element.innerHTML=html;
}