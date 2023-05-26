const inputPrecio = document.querySelector('#precio');
const inputDescuento = document.querySelector('#descuento');
const btnCalcular = document.querySelector('#calcularDescuento');

btnCalcular.addEventListener('click', calcularDescuento);

function calcularDescuento(){
  const precio = Number(inputPrecio.value);
  const descuento = Number(inputDescuento.value);
  const precioFinal = (precio*(100 - descuento)/100);

  if(precio !== 0 && descuento !== 0){
  renderizarPrecioFinal(precio, descuento, precioFinal);
  inputPrecio.value = ''
  inputDescuento.value = ''
  }  
}

function renderizarPrecioFinal(precio, descuento, total){

  const divResultado = document.createElement('div');
  divResultado.classList.add('resultado');

  const divDatos = document.createElement('div');
  divDatos.classList.add('datos');

  const parrafoPrecio = document.createElement('p');
  parrafoPrecio.innerText = 'El precio es de: $' + precio;

  const parrafoDescuento = document.createElement('p');
  parrafoDescuento.innerText = 'Tiene un: ' + descuento + '% de descuento';

  const parrafoPrecioTotal = document.createElement('p');
  parrafoPrecioTotal.innerText = 'El precio final es: $' + total;
  parrafoPrecioTotal.classList.add('total');

  const imgCerrar = document.createElement('img');
  imgCerrar.setAttribute('src', './img/close-circle.svg')
  imgCerrar.addEventListener('click', cerraPrecio);

  document.querySelector('.totales').appendChild(divResultado);
  divResultado.append(divDatos, imgCerrar);
  divDatos.append(parrafoPrecio, parrafoDescuento, parrafoPrecioTotal)
}

function cerraPrecio(event){
  event.target.parentNode.remove()
}