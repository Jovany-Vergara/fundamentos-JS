const tecnologias = ['JavaScript', 'ReactJS', 'React Native', 'NodeJS', 'React Native', 'React', 'NodeJS'];

//const nuevoArreglo = tecnologias.map( tech => {
//  if(tech === 'JavaScript'){
//    return tech = 'JavaScript y TypeScript';
//  }else{
//    return tech;
//  }
//})

const nuevoArreglo2 = tecnologias.filter(tech => tech === 'ReactJS')

//console.log(nuevoArreglo)
console.table(nuevoArreglo2)
