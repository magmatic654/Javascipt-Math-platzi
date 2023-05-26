const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;
const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.group('cuadrado');

console.log({
  ladoCuadrado,
  perimetroCuadrado,
  areaCuadrado,
})

function calcularCuadrado(lado){
  return {
    perimetro: lado * 4,
    area: lado * lado,
  };
}

console.groupEnd('cuadrado');

console.group('triangulo');
const triangulolado1 = 6;
const triangulolado2 = 6;
const trianguloladoBase = 4;
const trianguloAltura = 5.5;

const trianguloPerimetro = triangulolado1 + triangulolado2 + trianguloladoBase;
const trianguloArea = (trianguloladoBase * trianguloAltura) / 2;

function calcularTriangulo(lado1, lado2, base, altura){
  return {
    perimetro: lado1 + lado2 + base,
    area: (base * altura) / 2,
  };
}

console.log({
  triangulolado1,
  triangulolado2,
  trianguloladoBase,
  trianguloAltura,
  trianguloPerimetro,
  trianguloArea,
})
console.groupEnd('triangulo')

console.group('circle')

const radioCirculo = 3;
const diametroCirculo = radioCirculo * 2;
const PI = Math.PI.toFixed(3);

const circunferencia = diametroCirculo * PI;
const areaCirculo = (radioCirculo ** 2) * PI;

console.log({
  radioCirculo,
diametroCirculo,
PI,
circunferencia,
areaCirculo,
})

function calcularCirculo(radio){
  const diametro = radio * 2;
  const radioAlCuadrado = Math.pow(radio, 2);
  return{
    circunferencia: diametro * PI,
    area: radioAlCuadrado * PI,
  }
}

console.groupEnd('circle')



function calcularAlturaTrianguloIsoceles(lado, base){
  if(lado <= base){
    console.warn('Este no es un triangulo isosceles');
  }else{
    // h = raizcuadrada(lado1**2) - (b**2)/4)
    return {altura: Math.sqrt((lado**2) - ((base**2)/4))}
  }
}

function calcularAlturaTrianguloEscaleno(base, lado2, lado3){
  if(base == lado2 || base == lado3 || lado2 == lado3){
    console.warn('Esto no es un triangulo escaleno')
  }else{
    const Semiperimetro = (base+lado2+lado3)/2;
    const altura = (2/base)* Math.sqrt(Semiperimetro*(Semiperimetro-base)*(Semiperimetro-lado2)*(Semiperimetro-lado3));
    return altura
  }
}