

function esPar(lista){
  return lista.length % 2 === 0;
}

function calcularMediana(lista){
  //Acomoda los numeros de menor a mayor
  const listaOrdenada = [...lista].sort((a,b)=>a-b);
  console.log(listaOrdenada)
  if(esPar(lista)){
    const inicioListaPar = listaOrdenada[(listaOrdenada.length/2)-1];
    const finalListaPar = listaOrdenada[(listaOrdenada.length/2)];
    const promedioListaPar = (listaOrdenada[inicioListaPar]+listaOrdenada[finalListaPar])/2;
    return promedioListaPar;
  }else{
    const medioListaPar = Math.floor(listaOrdenada.length/2); 
    return listaOrdenada[medioListaPar];
  }
  // function ordenarLista(valorAcumulado, nuevoValor){
  //   // if(valorAcumulado > nuevoValor){
  //   //   return 1
  //   // }else if(valorAcumulado < nuevoValor){
  //   //   return -1
  //   // }else{
  //   //   return 0
  //   // }
  //   return valorAcumulado - nuevoValor;
  //   // return 5 - 10 -> -5;
  //   // return 5 - 5 -> 0;
  //   // return 10 - 5 -> 5;
  // }
}