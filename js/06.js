// objetos - Destructuring con 2 o más objetos
const producto = {
  nombre: 'Monitor',
  precio: 300,
  descuento: true
}

const cliente = {
  nombre: 'Jovany',
  premium: true
}

const {nombre, precio, disponible} = producto
const {nombre: nombreCliente, premium} = cliente

console.log(nombre, precio, disponible)
console.log(nombreCliente, premium)
