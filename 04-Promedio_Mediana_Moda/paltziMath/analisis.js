console.log(salarios)


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
// function proyeccionGastoEmpresa(nombreEmpresa, year){
//   const arregloHistorial = [];
//   const arraySalariosEmpresa = [];
//   const arregloEmpresas = salarios.map(personas => personas.trabajos);

//   arregloEmpresas.forEach(historial => {
//     historial.forEach(element => arregloHistorial.push(element))
//   });
//   const arregloHistorialEmpresa = arregloHistorial.filter(historial => historial.empresa === nombreEmpresa && historial.year === year);
//   arregloHistorialEmpresa.forEach(objetoEmpresa => {
//     const salarioEmpresa = objetoEmpresa.salario;
//     arraySalariosEmpresa.push(salarioEmpresa);
//   });
//   const medianaSalario = PlatziMath.calcularMediana(arraySalariosEmpresa)
//   const promedioSalario = PlatziMath.calcularPromedio(arraySalariosEmpresa)
//   return [medianaSalario, promedioSalario]
// }

const empresas = {};
for(persona of salarios){
  for(trabajo of persona.trabajos){
    if(!empresas[trabajo.empresa]){
      empresas[trabajo.empresa] = {};
    }
    if(!empresas[trabajo.empresa][trabajo.year]){
      empresas[trabajo.empresa][trabajo.year] = [];
    }

    empresas[trabajo.empresa][trabajo.year].push(trabajo.salario)
  }
}

console.log(empresas)

function medianaEmpresa(nombreEmpresa, year){
  
  if(!empresas[nombreEmpresa]){
    return 'La empresa no existe';
  }else if(!empresas[nombreEmpresa][year]){
    return 'No existe historial de ese año';
  }else{
    const arraySalarios = empresas[nombreEmpresa][year];
    const medianaSalarios = PlatziMath.calcularMediana(arraySalarios);
    return medianaSalarios
  }
}

function proyeccionEmpresa(nombreEmpresa){
  const salariosEmpresa = {};
  const arraySalarios = [];
  salariosEmpresa.salariosHistorial = [];

  for(year in empresas[nombreEmpresa]){
    salariosEmpresa[year] = [];
      for(salario of empresas[nombreEmpresa][year]){
      salariosEmpresa[year].push(salario)
      salariosEmpresa.salariosHistorial.push(salario)
    }
    salariosEmpresa[year] = PlatziMath.calcularMediana(salariosEmpresa[year])
    arraySalarios.push(salariosEmpresa[year])
  }

  const salariosPorAnhioMediana = Object.values(salariosEmpresa);
  const medianaAnhiosEmpresa = PlatziMath.calcularMediana(salariosPorAnhioMediana);
  
  salariosEmpresa.medianaDeSalarios = medianaAnhiosEmpresa;
  salariosEmpresa.diferenciaSalarios = [];
  salariosEmpresa.diferenciaSalariosPorcentaje = [];

  for(let i = 1; i<salariosPorAnhioMediana.length;i++){
    const salarioPasado = salariosPorAnhioMediana[i-1];
    const salarioActual = salariosPorAnhioMediana[i];
    const diferenciaSalarios = salarioActual - salarioPasado;
    const porcentajeDiferencia = (diferenciaSalarios /salarioPasado);
    salariosEmpresa.diferenciaSalarios.push(diferenciaSalarios);
    salariosEmpresa.diferenciaSalariosPorcentaje.push(porcentajeDiferencia);
  }
  salariosEmpresa.medianaSalarioPorcentaje = PlatziMath.calcularMediana(salariosEmpresa.diferenciaSalariosPorcentaje);
  const ultimoAño = arraySalarios[arraySalarios.length-1];
  const medianaSalarioPorcentaje = salariosEmpresa.medianaSalarioPorcentaje
  const diferenciaSalario = ultimoAño * medianaSalarioPorcentaje;
  const proyeccion = diferenciaSalario + ultimoAño;
  const salariosHistorial = salariosEmpresa.salariosHistorial;
  const salarioMaximo = PlatziMath.ordenarListaInversa(salariosHistorial)[0];
  const salarioMinimo = PlatziMath.ordenarLista(salariosHistorial)[0];
  salariosEmpresa.salarioMaximo = salarioMaximo;
  salariosEmpresa.salarioMinimo = salarioMinimo;
  salariosEmpresa.proyeccion = proyeccion;

  return salariosEmpresa;
}