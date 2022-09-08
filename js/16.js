const tecnologias = ['JavaScript', 'ReactJS', 'React Native', 'NodeJS', 'React Native', 'React', 'NodeJS'];
const numeros = [10,20,30];

let nuevaArray;

// filter trae con los que cumplen con la búsqueda o el filtro
nuevaArray = tecnologias.filter( tech => tech !== 'React')

// includes para ver si un elemento existe
//const resultado = tecnologias.includes('React')

// some - Devuelve si al menos unos cumple con la condición
//const resultado = numeros.some(numero => numero > 15)

// find - Devuelve el primer elemento que cumple con la condición
//const resultado = numeros.find(numero => numero > 15)

// Every - Devuelve true o false si todos cumplen la condición
//const resultado = numeros.every(numero => numero > 3)

// Reduce
//const resultado = numeros.reduce ((total, numero) => numero + total, 0)

// filter - Crea una nueva array en base a una condición
//const resultado = tecnologias.filter( tech => tech === 'React')
//const resultado = numeros.filter( numero => numero !== 20)

// fotEach - accede a cada elemento del arreglo
tecnologias.forEach( (tech, index) => console.table(index))

// Crea una nueva Array
const arrayMAp = tecnologias.map( tech => tech);

console.log(arrayMAp)
