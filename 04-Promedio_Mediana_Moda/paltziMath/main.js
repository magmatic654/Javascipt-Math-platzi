// class PlatziMath {
//   static esPar(){}
//   static esImpar(){}
//   static calcularMediana(){}
// }

const PlatziMath = {};


PlatziMath.esPar = function esPar(lista){
  return lista.length % 2 === 0
}
PlatziMath.esImpar = function esImpar(lista){
  return lista.length % 2 !== 0
}
PlatziMath.calcularModa = function calcularModa(lista){
  const listaCount = {};

  for(let i = 0; i<lista.length; i++){
    const elemento = lista[i];
    if(listaCount[elemento]){
      listaCount[elemento] += 1;
    }else{
      listaCount[elemento] = 1;
    }
  }
  const listaArray = Object.entries(listaCount);
  const listaOrdenada = ordenarListaInversa(listaArray, 1)
  const moda = listaOrdenada[0]
  return Number(moda[0])
}
PlatziMath.calcularMediana = function calcularMediana(lista){
  //Acomoda los numeros de menor a mayor
  const listaOrdenada = PlatziMath.ordenarLista(lista)

  const listaEsPar = this.esPar(listaOrdenada)
  if(listaEsPar){
    const mitad1ListaPar = listaOrdenada[(listaOrdenada.length/2)-1];
    const mitad2ListaPar = listaOrdenada[listaOrdenada.length/2];
    const listaMitades = [];
    listaMitades.push(mitad1ListaPar);
    listaMitades.push(mitad2ListaPar);
    const medianaListaPar = this.calcularPromedio(listaMitades);
    return medianaListaPar;
  }else{
    const mitadListaImpar = Math.floor(listaOrdenada.length/2);
    const medianaListaImpar = listaOrdenada[mitadListaImpar]
    return medianaListaImpar;
  }
}
PlatziMath.calcularPromedio = function calcularPromedio(lista){
const sumarTodosLosElementos = (a, b)=> a + b;
  const sumalista = lista.reduce(sumarTodosLosElementos)
  const promedio = sumalista / lista.length;
  return promedio;
}
PlatziMath.ordenarLista = function ordenarLista(lista){
  return lista.sort((a,b)=>a-b);
} 
PlatziMath.ordenarListaInversa = function ordenarListaInversa(lista){
  return [...lista].sort((a,b)=>b-a);
} 
PlatziMath.ordenarListaBidimensional = function ordenarListaBidimensional(listaDesordenada, i) {
  function ordenarListaSort(valorAcumulado, nuevoValor) {
    return valorAcumulado[i] - nuevoValor[i];
  }
}