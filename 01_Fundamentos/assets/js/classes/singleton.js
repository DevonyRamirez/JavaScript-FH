//instancia unica de mi clase

class Singleton{ //nombre cualquiera
    static instancia; //undefined
    nombre='';
    constructor (nombre=''){
        // const a =undefined
        // console.log(!a)//true;
        // console.log(!!a);//false



        if (!!Singleton.instancia){
            return Singleton.instancia;
        }
        console.log(Singleton.instancia);

        Singleton.instancia=this;

        this.nombre=nombre;


    }

}

const instancia1=new Singleton('Ironman')
const instancia2=new Singleton('Spiderman')
const instancia3=new Singleton('Capitan America')

console.log(`nombre en la instancia es: ${instancia1.nombre}`)
console.log(`nombre en la instancia es: ${instancia2.nombre}`)
console.log(`nombre en la instancia es: ${instancia3.nombre}`)