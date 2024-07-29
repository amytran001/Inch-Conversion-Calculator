// script.js
document.addEventListener('DOMContentLoaded', function() {
    const inchInput = document.getElementById('inchInput');
    const convertFeetButton = document.getElementById('convertFeet');
    const resultDiv = document.getElementById('result');

    function convertToFeet(inches) {
        return (inches / 12).toFixed(2);
    }

    function displayResult(message) {
        resultDiv.textContent = message;
    }

    convertFeetButton.addEventListener('click', function() {
        const inches = parseFloat(inchInput.value);
        if (isNaN(inches) || inches < 0) {
            displayResult('Please enter a valid positive number.');
        } else {
            const feet = convertToFeet(inches);
            displayResult(`${inches} inches is equal to ${feet} feet.`);
        }
    });
});
