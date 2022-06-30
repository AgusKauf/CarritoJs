/* // Simulador interactivo

// Agregar productos

function agregarProducto(){
    let id = Number(prompt("Ingrese el ID de producto:"))
    let nombre = prompt("Ingrese el nombre del producto:")
    let precio = Number(prompt("Ingrese el precio del producto:"))
    let stock = Number(prompt("Ingrese el stock del producto:"))

    producto.push(new Productos(id, nombre, precio, stock))

} 


// Carrito de compras

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

console.log(resultado) */


const productosContainer = document.querySelector('#contenedor-productos')
const carritoContenedor = document.querySelector('#carrito-contenedor')

const contadorCarrito = document.querySelector('#contadorCarrito')
const precioTotal = document.querySelector('#precioTotal')

const btnVaciar = document.getElementById('vaciarCarrito')

let carrito
const carritoEnLS = JSON.parse( localStorage.getItem('carrito') )



// generar el DOM de todos los productos
catalogoProductos.forEach((producto) => {
    const div = document.createElement('div')
    div.classList.add('producto')

    div.innerHTML = `
                    <img src=${producto.img} alt="">
                    <h3>${producto.nombre}</h3>
                    <p class="precioProducto">Precio: $${producto.precio}</p>
                    <button onclick="agregarAlCarrito(${producto.id})" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>
                `

    productosContainer.append(div)
})


// function agregarAlCarrito() {

// }

const agregarAlCarrito = (id) => {
    const item = catalogoProductos.find( (producto) => producto.id === id)
    carrito.push(item)

    localStorage.setItem('carrito', JSON.stringify(carrito))

    console.log(carrito)
    renderCarrito()
    renderCantidad()
    renderTotal()
}

const removerDelCarrito = (id) => {
    const item = carrito.find((producto) => producto.id === id)
    const indice = carrito.indexOf(item)
    carrito.splice(indice, 1)

    localStorage.setItem('carrito', JSON.stringify(carrito))

    renderCarrito()
    renderCantidad()
    renderTotal()
}

const vaciarCarrito = () => {
    carrito.length = 0

    localStorage.setItem('carrito', JSON.stringify(carrito))

    renderCarrito()
    renderCantidad()
    renderTotal()
}

btnVaciar.addEventListener('click', vaciarCarrito)

const renderCarrito = () => {
    carritoContenedor.innerHTML = ''

    carrito.forEach((item) => {
        const div = document.createElement('div')
        div.classList.add('productoEnCarrito')

        div.innerHTML = `
                    <p>${item.nombre}</p>
                    <p>Precio: $${item.precio}</p>
                    <button onclick="removerDelCarrito(${item.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
                    `
        
        carritoContenedor.append(div)
    })
}

const renderCantidad = () => {
    contadorCarrito.innerText = carrito.length
}

const renderTotal = () => {
    let total = 0
    carrito.forEach((producto) => {
        total += producto.precio
    })

    precioTotal.innerText = total
}

if (carritoEnLS) {
    carrito = carritoEnLS

    renderCarrito()
    renderCantidad()
    renderTotal()
} else {
    carrito = []
}
