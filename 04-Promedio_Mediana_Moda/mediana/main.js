

function esPar(lista){
  return lista.length % 2 === 0;
}

function calcularMediana(lista){
  //Acomoda los numeros de menor a mayor
  const listaOrdenada = [...lista].sort((a,b)=>a-b);
  if(esPar(lista)){
    const inicioListaPar = listaOrdenada[(listaOrdenada.length/2)-1];
    const finalListaPar = listaOrdenada[(listaOrdenada.length/2)];
    const promedioListaPar = (listaOrdenada[inicioListaPar]+listaOrdenada[finalListaPar])/2;
    return promedioListaPar;
  }else{
    const medioListaPar = Math.floor(listaOrdenada.length/2); 
    return listaOrdenada[medioListaPar];
  }
  
  
}