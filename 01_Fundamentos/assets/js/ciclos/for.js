const heroes = ['Batman', 'Superman', 'Mujer Maravilla', 'Flash'];


console.warn('For tradicional');

for(let i=0; i< heroes.length ;i++){ //donde inicia, condicion, incremento
    console.log(heroes[i]);
}

console.warn('For in');
for(let i in heroes){ //i es el indice
    console.log(heroes[i]);
}

console.warn('For of');

for(let heroe of heroes){
    console.log(heroe);
}