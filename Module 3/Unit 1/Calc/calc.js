document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('calculate').addEventListener('click', function (e) {
        e.preventDefault();
        const num1 = Number(document.getElementById('num1').value);
        const num2 = Number(document.getElementById('num2').value);
        const op = document.getElementById('op').value;
        
        let result;
        if (op === 'add') {
            result = num1 + num2;
        } else if (op === 'subtract') {
            result = num1 - num2;
        } else if (op === 'multiply') {
            result = num1 * num2;
        } else if (op === 'divide') {
            result = num1 / num2;
        }

        document.getElementById('result').innerHTML = result;
    });
});
