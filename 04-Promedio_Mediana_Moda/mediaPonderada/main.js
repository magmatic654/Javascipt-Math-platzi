const weight = document.querySelector('#weight');
const value = document.querySelector('#value');
const addWeight = document.querySelector('#addWeight');
const addValue = document.querySelector('#addValue');
const calculate = document.querySelector('#calculate');
const pWeight = document.querySelector('#pWeight');
const pValue = document.querySelector('#pValue');
const pAnswer = document.querySelector('#pAnswer');

let answer = Number();
let sumOfMultiplications = Number();
let arrayWeight = [];
let arrayValue = [];

addWeight.addEventListener('click', AddWeight);
addValue.addEventListener('click', AddValue);
calculate.addEventListener('click', calculateWeightedAverage);

function AddWeight(){
  if(weight.value !== ''){
    arrayWeight.push(weight.value);
    weight.value = '';
    pWeight.textContent = arrayWeight
  }
}
function AddValue(){
  if(value.value !== ''){
    arrayValue.push(value.value);
    value.value = '';
    pValue.textContent = arrayValue
  }
}
function calculateWeightedAverage(){
  if(arrayWeight.length > 1 && arrayValue.length > 1 ){
    if(arrayWeight.length === arrayValue.length){
      const additionWeight = arrayWeight.reduce((a,b)=> Number(a)+Number(b));
      for(let i = 0; i<arrayWeight.length; i++){
        sumOfMultiplications += arrayValue[i]*arrayWeight[i];
      }
      answer = sumOfMultiplications / additionWeight
      arrayValue = [];
      arrayWeight = [];
      pAnswer.textContent = answer;
    }
  }
}
