let currentValue = '';
    let currentOperation = '';
    let displayedValue = document.getElementById('display');

    function appendValue(value) {
        currentValue += value;
        displayedValue.value = currentValue;
    }

    function setOperation(operation) {
        currentOperation = operation;
        currentValue += ' ' + operation + ' ';
        displayedValue.value = currentValue;
    }

    function clearDisplay() {
        currentValue = '';
        displayedValue.value = '';
    }

    function calculateResult() {
        currentValue = eval(currentValue);
        displayedValue.value = "= "+ currentValue;
    }
    function backspace() {
        currentValue = currentValue.slice(0, -1);
        displayedValue.value = currentValue;
    }

    document.addEventListener('keydown', function(event) {
        const key = event.key;

        if (/[0-9]/.test(key)) {
            appendValue(key);
        } else if (key === '+' || key === '-' || key === '*' || key === '/') {
            setOperation(key);
        } else if (key === 'Enter') {
            calculateResult();
        } else if (key === 'Escape') {
            clearDisplay();
        } else if (key === 'Backspace') {
            backspace();
        }
    });               