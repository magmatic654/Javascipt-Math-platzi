// Solucion con html y js
// const inputAgregarNumeros = document.querySelector('#inputAgregarNumero')
// const btnAgregarNumero = document.querySelector('#btnAgregarNumero');
// const btnPromediarNumeros = document.querySelector('#btnPromediarNumeros');
// const listaNumeros = document.querySelector('.listaNumeros')
// const promedioNumeros = document.querySelector('.promedioNumeros')

// let arrayNumeros = [];

// btnAgregarNumero.addEventListener('click', agregarNumero);
// btnPromediarNumeros.addEventListener('click', promediarNumeros);

// function agregarNumero(){
  
//   if(inputAgregarNumeros.value){
//     arrayNumeros.push(inputAgregarNumeros.value);
//     inputAgregarNumeros.value = '';
//     listaNumeros.textContent = arrayNumeros.join('-');

//     if(promedioNumeros.textContent !== ''){
//       promedioNumeros.textContent = '';
//     }
//   }
// }

// function promediarNumeros(){
//   if(arrayNumeros.length >= 2){
//     let sumaNumeros = 0;
//   for(numero of arrayNumeros){
//     sumaNumeros += Number(numero);
//   }
//   const promedio = sumaNumeros/arrayNumeros.length;
  
//   promedioNumeros.textContent = promedio;
//   listaNumeros.textContent = '';
//   arrayNumeros = [];
//   }
// }

////Solucion Video con .reduce()
function calcularPromedio(lista){

//   function sumarTodosLosElementos(valorAcumulado, nuevoValor){
//     return valorAcumulado += nuevoValor;
//   }

const sumarTodosLosElementos = (a, b)=> a += b;

  const sumalista = lista.reduce(sumarTodosLosElementos)
  return sumalista;
}

