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
  {'1OFF': 10},
  {'2OFF': 20},
  {'3OFF': 30},
  {'4OFF': 40},
];


AplicarCupon.addEventListener('click', comprobarCupon);

function comprobarCupon(){
  for (const cupon of arrayCupones) {
    console.log(cupon)
    for (const [clave, valor] of Object.entries(cupon)) {
      if(inputCupon.value === clave){
        const precioCondescuento = (precioCarrito*(100-valor)/100)
        valorCarrito.textContent = precioCondescuento;
        return precioCondescuento;
      }
    }
  }
}