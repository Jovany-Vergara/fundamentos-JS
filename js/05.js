// objetos - manipulacion
const producto = {
  nombre: 'Monitor',
  precio: 200,
  descuento: true
}

//Object.freeze(producto); // freeze = congelar el objeto para que no se pueda modificar las propiedades
//Object.seal(producto); // Permite agregar nuevas propiedades pero no eliminar las existentes ni agregar nuevas propiedades

// Renscribir valores
producto.nombre = 'Teclado';

// si no existe el atributo lo agrego
producto.imagen = 'imagen.jpg';

// Eliminar atributos
delete producto.descuento;

console.table(producto);
