console.log('hello')

let buttons = document.querySelectorAll('button')
// let display = document.querySelector('#inputtext')
// let output = `inputtext: ${inputtext.innerText}`
let display = document.querySelector('.output')
let buttonvalue = buttons.value
let operatorChosen = false;
let operator = '';

let firstNumber = 0
let secondNumber =0

function equals(firstNumber, secondNumber, operator){
    if(operator==="+"){
        return firstNumber+secondNumber
    }
    if(operator==="*"){
        return firstNumber*secondNumber
    }
    if(operator==="-"){
        return firstNumber-secondNumber
    }
    if(operator==="/"){
        return firstNumber/secondNumber
    }
    if(buttons.innerText =='AC'){
        return display.innerText.value='0'
        
    }
   
}
function compute (e, operation){
    if(operation !== "=") {
    if(operatorChosen ===false){
        firstNumber=display.innerText
        operatorChosen = true;
        operator = operation
        display.innerText=""
        console.log(`firstNumber: ${firstNumber} | operator: ${operator}`)
    }   
   }
    if(operation === '='){
    if(operatorChosen === false ) {return};
    secondNumber = display.innerText;
    display.innerText=""
    operatorChosen = false;
    display.innerText= equals(parseFloat(firstNumber), parseFloat(secondNumber), operator)

}
}


for( let button of buttons){
    console.log(button)
    button.addEventListener('click', (e) => {
        console.log(e)
    if(e.target.dataset.operation){
        compute(e, e.target.dataset.operation)
        console.log('Operation pressed : ', e.target.dataset.operation)
}
    if(e.target.dataset.number){
    document.querySelector('.output').innerText+=e.target.dataset.number;
    console.log(`Number pressed: ${e.target.dataset.number}`)
}
if(e.target.innerText ==='AC'){
    display.innerText = ''
    operatorChosen = false;
    operator = ""
    firstNumber = 0;
    secondNumber = 0;
    // when AC is selected innertext will be an empty string, if anything else is selected it will be reset to 0 or false
}
    if(e.target.innerText==='DEL'){
       display.innerText =  display.innerText.slice(0,-1)
    }   
    if(e.target.innerText==='%'){
        document.querySelector('.output').innerText=parseFloat(document.querySelector('.output').innerText)/100;
        
    }  
    if(e.target.innerText==='±'){
        document.querySelector('.output').innerText=parseFloat(document.querySelector('.output').innerText)*-1;

        
}
})}
// when delete is selected display innertext will be removed 1 key at time starting from the right.