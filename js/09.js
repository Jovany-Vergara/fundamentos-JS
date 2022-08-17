// Operaciones en los arreglos

const tecnologias = ['JavaScript', 'ReactJS', 'React Native', 'NodeJS', 'React Native', 'ReactJS', 'NodeJS'];

// Añadir elemento a array
//tecnologias.push('TypeScript'); // Añade elemento al final del array
//tecnologias.unshift('HTML5'); // Añade elemento al principio del array

//const nuevoArreglo = [...tecnologias , 'TypeScript']; // Añade elemento al final del array
//const nuevoArreglo = ['HTML 5' ,...tecnologias , 'TypeScript']; // Añade elemento al final del array

// Eliminar elemento del array
//tecnologias.pop(); // Elimina el ultimo elemento del array
//tecnologias.shift(); // Elimina el primer elemento del array
//tecnologias.splice(2, 1); // Elimina en una posicion del array

//const nuevoArreglo = tecnologias.filter( function(tech){
  //return tech !== 'JavaScript';
//}); // Elimina el elemento que coincida con la condicion

// Reemplazar elemento del array
//tecnologias[0] = 'HTML5'; // Reemplaza el elemento en la posicion 0

const nuevoArreglo = tecnologias.map( function(tech){
  if(tech === 'JavaScript'){
    return tech = 'JavaScript y TypeScript';
  }else{
    return tech;
  }
})

console.table(nuevoArreglo)
console.table(tecnologias);
