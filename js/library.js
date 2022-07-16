/* const btnAlert = document.getElementById("vaciarCarrito")

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
  }
})  
}) */

const btnToast = document.getElementById("boton-carrito")

btnToast.addEventListener("click", () => {

  Toastify({
    text: "Bienvenido al carrito de compras",
    duration: 1500,
    style: {
      background: "#F23838"
    }
  }).showToast();
})

