// Simulador interactivo

/* // Agregar productos

function agregarProducto(){
    let id = Number(prompt("Ingrese el ID de producto:"))
    let nombre = prompt("Ingrese el nombre del producto:")
    let precio = Number(prompt("Ingrese el precio del producto:"))
    let stock = Number(prompt("Ingrese el stock del producto:"))

    producto.push(new Productos(id, nombre, precio, stock))

} */


/* Carrito de compras */

// Funciones

function bienvenido(){

    let username = prompt("Ingrese su nombre:")

    let bienvenida = document.getElementById("bienvenida")

    bienvenida.innerHTML = "<h3>Bienvenido/a " + username + ". Qué desea comprar?</h3>"

    document.getElementById("bienvenida").style.cssText = "margin: 1rem 0rem 2rem 2rem; font-syze: 3rem"

}

class Productos{
    constructor(id, nombre, categoria, precio, stock){
        this.id = id
        this.nombre = nombre
        this.categoria = categoria
        this.precio = precio
        this.stock = stock
    }
}

function agregarProducto(){
    let id = Number(prompt("Ingrese el ID de producto:"))
    let nombre = prompt("Ingrese el nombre del producto:")
    let categoria = prompt("Ingrese la categoría del producto:")
    let precio = Number(prompt("Ingrese el precio del producto:"))
    let stock = Number(prompt("Ingrese el stock del producto:"))

    producto.push(new Productos(id, nombre, categoria, precio, stock))

}

let liquidacion

function consultarLiquidacion(){

    liquidacion = producto.filter((busqueda) => busqueda.stock >= 200)
    return
}

let resultado

function filtroCategoria(){

    resultado = producto.filter((categoria) => categoria.categoria === "Porcelanato")
    return
}

// Arrays

const producto = [
    new Productos(1, "Diamante", "Porcelanato", 1000, 300),
    new Productos(2, "Tamarindo", "Ceramica", 5000, 100),
    new Productos(3, "Nordika", "Ceramica", 5000, 200),
    new Productos(4, "Black Out", "Porcelanato", 8000, 100),
    new Productos(5, "Black", "Porcelanato", 5000, 200),
    new Productos(6, "Ice", "Ceramica", 5000, 500),
];

const carrito = [];

// Ejecucion de funciones

bienvenido();

consultarLiquidacion();

filtroCategoria();

// Eventos

let boton1 = document.getElementById("btn1")
boton1.onclick = () => {
    carrito.push(producto[0])
    alert("El producto se añadio al carrito")
}

let boton2 = document.getElementById("btn2")
boton2.onclick = () => {
    carrito.push(producto[1])
    alert("El producto se añadio al carrito")
}

let boton3 = document.getElementById("btn3")
boton3.onclick = () => {
    carrito.push(producto[2])
    alert("El producto se añadio al carrito")
}

let boton4 = document.getElementById("btn4")
boton4.onclick = () => {
    carrito.push(producto[3])
    alert("El producto se añadio al carrito")
}

let boton5 = document.getElementById("btn5")
boton5.onclick = () => {
    carrito.push(producto[4])
    alert("El producto se añadio al carrito")
}

let boton6 = document.getElementById("btn6")
boton6.onclick = () => {
    carrito.push(producto[5])
    alert("El producto se añadio al carrito")
}

// const total = carrito.reduce((acc, el) => acc + el.precio, 0)

console.log(carrito)

console.log(liquidacion)

console.log(resultado)


