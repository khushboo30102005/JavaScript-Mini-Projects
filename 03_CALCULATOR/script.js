let currentExpression = "";
const display = document.querySelector("#display");

function clearDisplay() {
  currentExpression = "";
  display.textContent = "0";
}

function deleteLast() {
  if (currentExpression == "Error") {
    clearDisplay();
    return;
  }
  currentExpression = currentExpression.slice(0, -1);
  if (currentExpression === "") {
    display.textContent = "0";
  } else {
    display.textContent = currentExpression;
  }
}

function calculate() {
  try {
    let finalExpression = currentExpression.replace(/%/g, "/100*");
    if (finalExpression === "") {
      display.textContent = "0";
      return;
    }
    let result = eval(finalExpression);
    if (!isFinite(result)) {
      currentExpression = "Error";
      display.textContent = "Error";
    }
    currentExpression = parseFloat(result.toFixed(10)).toString();
    display.textContent = currentExpression;
     if(currentExpression == result){
      console.log(result);
     currentExpression = ''
     }
  } catch (error) {
    currentExpression = "Error";
    display.textContent = "Error";
  }
}

function appendValue(value){
 
  if(currentExpression === "Error"){
    currentExpression = ''
  }
  if(value === 'AC'){
    clearDisplay()
  } else if(value === 'DEL'){
    deleteLast()
  } else if (value === '='){
    calculate()
  } else {
     currentExpression += value
     display.textContent = currentExpression
  }
}

const buttons = document.querySelectorAll('#Calculator button')

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value')
    appendValue(value)
  })
})


  document.addEventListener('keydown', (e)=>{
    const allowedKeys = '0123456789+-/*%.'
    if(allowedKeys.includes(e.key)) appendValue(e.key)
    else if(e.key === 'Enter') calculate()
    else if(e.key === 'Backspace') appendValue('DEL')
    else if(e.key.toLowerCase() === 'c') appendValue('AC')
  })
clearDisplay()