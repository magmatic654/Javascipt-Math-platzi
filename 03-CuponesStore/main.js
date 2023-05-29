const CARRITOICON = document.querySelector('.carritoIcon');
const ASIDECARRITO = document.querySelector('.carritoDetalles');
const ELIMINARPRODUCTO = document.querySelectorAll('.eliminarProducto');
const VALORCARRITO = document.querySelectorAll('#valorCarrito');
const valorCarrito = VALORCARRITO[0];
const AplicarCupon = document.querySelector('.aplicarCupon');
const inputCupon = document.querySelector('#cupon');
const precioCarrito = valorCarrito.textContent = '2000';

CARRITOICON.addEventListener('click', toggleCarrito);


for(let i = 0; i < ELIMINARPRODUCTO.length; i++){
  ELIMINARPRODUCTO[i].addEventListener('click', eliminarProducto)
}

function toggleCarrito(){
  ASIDECARRITO.classList.toggle('inactive');
}

function eliminarProducto(event){
  event.target.parentNode.remove();
}

// Manera 1
// const arrayCupones = [
//   {nombre:'1OFF', descuento: 10},
//   {nombre:'2OFF', descuento: 20},
//   {nombre:'3OFF', descuento: 30},
//   {nombre:'4OFF', descuento: 40},
// ];


// Manera 2
// const arrayCupones = [
//   {'1OFF': 10},
//   {'2OFF': 20},
//   {'3OFF': 30},
//   {'4OFF': 40},
// ];

// Manera 3
// const objetoCupones = {
//   '10OFF': 10,
//   '20OFF': 20,
//   '30OFF': 30,
//   '40OFF': 40,
// };



AplicarCupon.addEventListener('click', comprobarCupon);

function comprobarCupon() {
  
    const precio = Number(precioCarrito);
    const cuponValue = inputCupon.value;
  
  ////////////////////////////////////// Manera 1
  // arrayCupones.forEach(cupon =>{
  //   if(cuponValue === cupon.nombre){
  //     const precioCondescuento = (precioCarrito*(100-cupon.descuento)/100)
  //       valorCarrito.textContent = precioCondescuento;
  //       return precioCondescuento;
  //   }
  // });
  ////////////////////////////////////// Manera 2
  // for (const cupon of arrayCupones) {
  //   // console.log(cuponValue)
  //   for (const [clave, valor] of Object.entries(cuponValue)) {
  //     if(inputCupon.value === clave){
  //       const precioCondescuento = (precioCarrito*(100-valor)/100)
  //       valorCarrito.textContent = precioCondescuento;
  //       return precioCondescuento;
  //     }
  //   }
  // }
  //////////////////////////////////////// Manera 3
  // if (objetoCupones[cuponValue]) {
  //   const precioCondescuento = (precio*(100-objetoCupones[cuponValue])/100)
  //       valorCarrito.textContent = precioCondescuento;
  // } 
}




