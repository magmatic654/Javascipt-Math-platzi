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

const arrayCupones = [
  {nombre: '1OFF', descuento: 10},
  {nombre: '2OFF', descuento: 20},
  {nombre: '3OFF', descuento: 30},
  {nombre: '4OFF', descuento: 40},
];


AplicarCupon.addEventListener('click', comprobarCupon);

function comprobarCupon(){
  arrayCupones.forEach(cupon=>{
    if(inputCupon.value === cupon.nombre){
      const nuevoPrecio = (precioCarrito*(100-cupon.descuento)/100)
      valorCarrito.textContent = nuevoPrecio
    }
  })
}