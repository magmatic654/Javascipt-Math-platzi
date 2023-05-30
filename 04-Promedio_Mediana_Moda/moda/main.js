function calcularModa(lista){
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
  const listaOrdenada = listaArray.sort((a,b)=>b[1]-a[1])
  const moda = listaOrdenada[0]
  return moda[0]
}