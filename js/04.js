// objetos
const producto = {
  nombre: 'Monitor',
  precio: 200,
  descuento: true
}
console.log(producto);
console.table(producto);

console.log(producto.nombre);
console.log(producto.precio);
console.log(producto.disponible);

// Destructuracion de objetos

const { nombre, precio, disponible } = producto;
console.log(nombre);
console.log(precio);
console.log(disponible);

// Object Literal enhancement

const autenticado = true;
const usuario = 'Jovany';

const nuevoObjeto = {
  autenticado,
  usuario
}
console.log(nuevoObjeto);
