// class PlatziMath {
//   static esPar(){}
//   static esImpar(){}
//   static calcularMediana(){}
// }

const PlatziMath = {};


PlatziMath.esPar = function esPar(number){
  return number % 2 === 0
}
PlatziMath.esImpar = function esImpar(number){
  return number % 2 !== 0
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
  if(PlatziMath.esPar(lista)){
    const inicioListaPar = listaOrdenada[(listaOrdenada.length/2)-1];
    const finalListaPar = listaOrdenada[(listaOrdenada.length/2)];
    const promedioListaPar = (listaOrdenada[inicioListaPar]+listaOrdenada[finalListaPar])/2;
    return promedioListaPar;
  }else{
    const medioListaPar = Math.floor(listaOrdenada.length/2); 
    return listaOrdenada[medioListaPar];
  }
}
PlatziMath.calcularPromedio = function calcularPromedio(lista){
const sumarTodosLosElementos = (a, b)=> a += b;
  const sumalista = lista.reduce(sumarTodosLosElementos)
  const promedio = sumalista / lista.length;
  return promedio;
}
PlatziMath.ordenarLista = function ordenarLista(lista, i = 0){
  return [...lista].sort((a,b)=>a[i]-b[i]);
} 
PlatziMath.ordenarListaInversa = function ordenarListaInversa(lista, i = 0){
  return [...lista].sort((a,b)=>b[i]-a[i]);
} 