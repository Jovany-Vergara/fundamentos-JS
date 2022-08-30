// funciones - function declaration

//function sumar(num1, num2 = 0) {
//    console.log(num1 + num2)
//}

//sumar(10,2)
//sumar(8,2)
//sumar(100)

function sumar(num1 = 0, num2 = 0) {
    return {
        resultado: num1 = num2,
        mensaje: 'hola'
    }
}

const {resultado, mensaje} = sumar(10,2)
console.log(resultado)
console.log(mensaje)
