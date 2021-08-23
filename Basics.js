alert("hola mundo")

//Number
console.log(3)
console.log(typeof 3)
console.log(3.5)
console.log(typeof Infinity)
console.log(NaN)

//Strings
console.log("Hola Mundo")
console.log(typeof "Hola Mundo")
console.log(typeof "3")

//Boolean
console.log(true)
console.log(false)
console.log(typeof true)
console.log(typeof false)

//Null y Undefined
console.log(undefined)
console.log(null)
console.log(typeof undefined)
console.log(typeof null)

let miVariable

console.log(miVariable)

miVariable = null

console.log(miVariable)

// expresiones vs declaraciones

// expresión >> Produce un valor y puede ser escrita en
// cualquier lugar donde se espere uno

function saludar(){
    return "Hola"
}

console.log(saludar())

//declaración >> ejecuta una acción, sin producir valor
//puede ser reemplazado por una expresión

let miVariable = true

if (miVariable == true){
    console.log("Verdadero");
}
else{
    console.log("Falso");
}

// Métodos en el navegador

alert

alert("Hola Mundo")

//prompt

let nombre = prompt("Ingrese su nombre")

console.log("Su nombre es: ", nombre)

//confirm

confirm("Estás seguro?")

// Manipulación de tipos

let numberFromString1 = parseInt('123')

console.log(numberFromString1)

let numberFromString2 = Number('123')

console.log(numberFromString2)

let numberFromString3 = +'123'

console.log(numberFromString3)

let number = 3

console.log(number.toString())

let nombre = "Javier"

console.log(nombre.toUpperCase())

console.log(nombre.toLowerCase())

// Number, parseInt, +

let string = "123hola"

console.log(Number(string))
console.log(parseInt(string))
console.log((+string))

// Concatenación

let nombre = "Javier"

console.log("Hola" + ' ' + nombre)
console.log("Hola Javier")

// Conversión a Booleano

let string = "2"
let number = 0

console.log(Boolean(string))
console.log(Boolean(number))

console.log(!!string)
console.log(!!number)

// Conversión implícita

let string = "2"
let number = 2
let otroNumber = 3

console.log(string + number)
console.log(number + otroNumber +string)
console.log(string + number + otroNumber)
console.log(otroNumber + string + number)

// Operadores

// Unarios

console.log(typeof "hola mundo")
console.log(+"123")
console.log(-"123")
console.log(-"tres")

//Binarios

console.log(2 + 3)
console.log(3 - 3)
console.log(2 * 3)
console.log(6 / 3)
console.log(7 % 3)

//Mayor y Menor

console.log(2 > 3)
console.log(2 < 3)
console.log(2 >= 3)
console.log(2 <= 3)

// === y ==

console.log(2 === "2") // comparación estricta
console.log(3 == "3") //comparación simple
console.log(2 === "3")
console.log(2 == "2")

console.log(3 !== "3")
console.log(3 != "3")

//AND

console.log(2 === 2 && 2 > 0)
console.log(2 === "2" && 2 > 0)
console.log(2 === 2 && 2 < 0)
console.log(2 === "2" && 2 > 0)

//OR

console.log(2 === 2 || 2 > 0)
console.log(2 === "2" || 2 > 0)
console.log(2 === 2 || 2 < 0)
console.log(2 === "2" || 2 > 0)

//Ternarios

let edad = 18

console.log(edad >= 18 ? "Podes manejar" : "No tenes edad para manejar")

//Precedencia de operadores

console.log(30 + 20 / 2) //el resultado es 10, puesto que primero toma 20/2
console.log((30 + 20) / 2) //el resultado es 25

let x, y;

console.log(x , y) //undefined

let x = y = 10;

console.log(x , y) //valor 10 para cada uno

// Palabras reservadas para declarar variables
// VAR - LET - CONST

var miVariable = 2
var otraVariable = 3
const otraVariableMas = 5

console.log(miVariable)
console.log(otraVariable)
console.log(otraVariableMas)

otraVariableMas = 24 //da error, no s epuedfe reasignar a una constante
console.log(otraVariableMas)

let unaVariable //informa undefined
console.log(unaVariable)

const unaVariable
console.log(unaVariable) //error, no se puede definir constante sin inicializar

TemplateLiterals

const firstName = "Javier";
const job = "Desarrollador";
const favouriteNumber = 13;

console.log(
  "Hola! Mi nombre es " +
    firstName +
    ", soy " +
    job +
    " y mi número favorito es el " +
    favouriteNumber
);

console.log(`Hola! Mi nombre es ${firstName}, soy ${job} y mi número favorito es el ${favouriteNumber}`)

let a = 5;
let b = 10;
console.log(`Quince es ${a + b} y
no ${2 * a + b}.`);

// EJERCICIOS

// 1) Solicitar al usuario que ingrese su nombre. Guardar el nombre en una variable 
// y utilizarla para saludar al usuario

const userName = prompt("Hola! Ingrese Su nombre")

alert(`Bienvenido ${userName}!`)

// 2) Pedirle al usuario que ingrese dos números y devolverle la suma de ambos

const numberOne = Number(prompt("Ingrese el primer número"))
const numberTwo = Number(prompt("Ingrese el primer número"))

alert(`La suma es: ${numberOne + numberTwo}!`)

// 3) Pedirle al usuario que ingrese dos números y devolverle el doble de la suma de ambos

const numberOne = Number(prompt("Ingrese el primer número"))
const numberTwo = Number(prompt("Ingrese el primer número"))

alert(`El doble de la suma es: ${2*(numberOne + numberTwo)}!`)

// 4) Pedirle al usuario que ingrese el ancho y alto de una habitación y calcular la superficie

const height = Number(prompt("Ingrese el alto"))
const width = Number(prompt("Ingrese el ancho"))

alert(`La superficie es: ${(width * height)}!`)

// 5) Solicitar al usuario que ingrese su nombre y devolverle el nombre en minúsculas

const userName = prompt("Hola! Ingrese Su nombre")

alert(`Bienvenido ${userName.toLowerCase()}!`)

// 6) Solicitar al usuario que ingrese su apellido y devolverle el apellido en mayúsculas

const userLastName = prompt("Hola! Ingrese Su apeliido")

alert(`Bienvenido ${userLastName.toUpperCase()}!`)

// 7) Pedirle al usuario que ingrese su nombre, apellido y edad. Luego informar lo siguiente:
// Nombre: Javier
// Apellido: Rodriguez
// Edad: 35

const userFirstName = prompt("Ingrese su nombre")
const userLastName = prompt("Ingrese su apellido")
const userAge = prompt("Ingrese su edad")

alert(`Nombre: ${userFirstName}
Apellido: ${userLastName}
Edad: ${userAge}`)