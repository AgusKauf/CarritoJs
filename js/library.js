const btnAlert = document.getElementById("vaciarCarrito")

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
})

const btnToast = document.getElementById("toast")

btnToast.addEventListener("click", () => {

  Toastify({
    text: "El producto se agrego al carrito",
    duration: 2000
  }).showToast();
})

