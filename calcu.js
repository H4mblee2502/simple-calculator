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
    try {
        // Secret code easter eggs dictionary
        const fun = {
            '777': 'Libre moko Kape!!',
            '143': 'I love you',
            '80085': 'BOOBS',
            '124': 'I Miss you '
        };

        // If what is on the screen matches one of our secret keys...
        if (display in fun) {
            document.getElementById('result').value = fun[display];
            display = ''; 
            return;
        }

        // Otherwise, do regular math
        let mathExpression = display.replace(/x/g, '*').replace(/÷/g, '/');
        display = eval(mathExpression);
        document.getElementById('result').value = display;
        display = display.toString();
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