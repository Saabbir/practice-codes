let fahrenheit = 68

let convertFahrenheitToCelsiusAndKelvin = function (fahrenheit) {
    let celsius = (fahrenheit -32) * (5/9)
    let kelvin = (fahrenheit + 459.67) * (5/9)
    return {
        tempF: fahrenheit,
        tempC: celsius,
        tempK: kelvin
    }
}

let temps = convertFahrenheitToCelsiusAndKelvin(fahrenheit)
console.log(`${temps.tempF} degrees Fahrenhit is ${temps.tempC} degrees Celsius and ${temps.tempK} degrees Kelvin.`)