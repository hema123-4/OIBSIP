function convert(type) {
    if (type === 'celsius') {
        let celsius = parseFloat(document.getElementById('inputCelsius').value);
        let fahrenheit = (celsius * 9/5) + 32;
        document.getElementById('inputFahrenheit').value = isNaN(fahrenheit) ? '' : fahrenheit.toFixed(2);
    } else if (type === 'fahrenheit') {
        let fahrenheit = parseFloat(document.getElementById('inputFahrenheit').value);
        let celsius = (fahrenheit - 32) * 5/9;
        document.getElementById('inputCelsius').value = isNaN(celsius) ? '' : celsius.toFixed(2);
    }
}
