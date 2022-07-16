const productosContainer = document.querySelector('#contenedor-productos')
const carritoContenedor = document.querySelector('#carrito-contenedor')

const contadorCarrito = document.querySelector('#contadorCarrito')
const precioTotal = document.querySelector('#precioTotal')

const btnVaciar = document.getElementById('vaciarCarrito')

let carrito
const carritoEnLS = JSON.parse( localStorage.getItem('carrito') )

const btnAlert = document.getElementById("vaciarCarrito")


// generar el DOM de todos los productos
/* catalogoProductos.forEach((producto) => {
    const div = document.createElement('div')
    div.classList.add('producto')

    div.innerHTML = `
                    <img src=${producto.img} alt="">
                    <h3>${producto.nombre}</h3>
                    <p class="precioProducto">Precio: $${producto.precio}</p>
                    <button onclick="agregarAlCarrito(${producto.id})" id="toast" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>
                `

    productosContainer.append(div)
})
 */

fetch("../data.json")
    .then((res) => res.json())
    .then((data) => {

        data.forEach((producto) => {
        const div = document.createElement('div')
        div.classList.add('producto')

        div.innerHTML = `
                    <img src=${producto.img} alt="">
                    <h3>${producto.nombre}</h3>
                    <p class="precioProducto">Precio: $${producto.precio}</p>
                    <button onclick="agregarAlCarrito(${producto.id})" id="toast" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>
                `

        productosContainer.append(div)
                    
        })
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

btnAlert.addEventListener("click", () => {

    Swal.fire({
      
      title: "Está seguro de vaciar el carrito?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#F23838",
      confirmButtonText: "Si, seguro",
      cancelButtonText: "No, no quiero",
      
  
  }).then((result) => {
  
    if (result.isConfirmed) {
  
      Swal.fire({
        title: "Vaciado",
        icon: "success",
        text: "El carrito se ha vaciado con éxito",
        confirmButtonColor: "#F23838",
      })

      vaciarCarrito()
    }
  })  
  })


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
