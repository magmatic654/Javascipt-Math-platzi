const root = document.querySelector('#root');
const h1 = document.querySelector('h1');


const arrayTiposCalculo = ['Calcular Mediana', 'Calcular Promedio', 'Calcular Top 10 mas alto', 'Calcular Top 10 mas bajo'];

arrayTiposCalculo.forEach(tipoCalculo => {
  const btnTipoCalculo = document.createElement('button')

  btnTipoCalculo.addEventListener('click', calculo)

  btnTipoCalculo.innerText = tipoCalculo;
  root.appendChild(btnTipoCalculo)
  
});

const datos = [];

function calculo(event){
  const textBtn = event.target.textContent;
    h1.textContent = textBtn 

    if(textBtn === 'Calcular Mediana'){
      
    }
}

