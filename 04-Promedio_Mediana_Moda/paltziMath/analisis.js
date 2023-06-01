console.log(salarios);


// Analisis personal para juanita



function buscarPersona(personaEnBusqueda){
  return salarios.find(persona => persona.name === personaEnBusqueda);
}

function medianaPorPersona(nombrePersona){
  const trabajos = buscarPersona(nombrePersona).trabajos;
  const salarios = trabajos.map(objeto => objeto.salario)
  const medianaSalario = PlatziMath.calcularMediana(salarios)  
  return medianaSalario
}
function proyeccionPersona(nombrePersona){
  const trabajos = buscarPersona(nombrePersona).trabajos;
  
  let porcentajesDiferencia = [];

  for(let i = 1;i<trabajos.length; i++){
      const salarioActual = trabajos[i].salario;
      const salarioPasado = trabajos[i-1].salario;
      const diferenciaSalario = salarioActual - salarioPasado;
      const porcentajeDiferencia = (diferenciaSalario / salarioPasado)
      porcentajesDiferencia.push(porcentajeDiferencia)
    }
    const medianaSalario = PlatziMath.calcularMediana(porcentajesDiferencia)
    
    const ultimoSalario = trabajos[trabajos.length -1].salario;
    const aumentoSalario = (ultimoSalario * medianaSalario);
    const nuevoSalario = aumentoSalario + ultimoSalario;
    return nuevoSalario
  }