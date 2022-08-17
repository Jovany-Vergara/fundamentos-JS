// Unir 2 objetos

const producto = {
  nombre: 'Monitor',
  precio: 300,
  descuento: true
}

const cliente = {
  nombre: 'Jovany',
  premium: true
}

const nuevoObjeto2 = {
  producto: {...producto},
  cliente: {...cliente},
}
console.log(nuevoObjeto2)
console.log(cliente)
console.log(producto)
