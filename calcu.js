// Calculator Logic Functions

let display = '';

function appendNumber(number){
    display += number;
    document.getElementById('result').value = display;
}
function appendOperator(operator){
    display += ` ${operator} `;
    document.getElementById('result').value = display; 
}

function calculate(){
    try{
        display =  eval(display.replace('÷', '/').replace('x', '*'));
        document.getElementById('result').value = display;
    } catch {
        document.getElementById('result').value = 'Error';
    }
}

function clearDisplay(){
    display = '';
    document.getElementById('result').value  = '';
}

function backspace(){
    let remove = document.getElementById('result');
    display = remove.value = remove.value.slice(0, -1);
}