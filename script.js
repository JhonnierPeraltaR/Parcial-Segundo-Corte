function calculate(operation) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let result;

    switch (operation) {
        case 'suma':
            result = num1 + num2;
            break;
        case 'resta':
            result = num1 - num2;
            break;
        case 'multiplicacion':
            result = num1 * num2;
            break;
        case 'division':
            result = num2 !== 0 ? num1 / num2 : "Error: División por 0";
            break;
        default:
            result = "Operación desconocida";
    }

    document.getElementById('result').value = result;
}
