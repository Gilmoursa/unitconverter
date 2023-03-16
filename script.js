function convertWeight() {
    const weight = document.getElementById("weight").value;
    const weightFrom = document.getElementById("weightFrom").value;
    const weightTo = document.getElementById("weightTo").value;

    let weightResult;

    if (weightFrom === "kg" && weightTo === "lbs") {
        weightResult = weight * 2.20462;
    } else if (weightFrom === "kg" && weightTo === "oz") {
        weightResult = weight * 35.274;
    } else if (weightFrom === "lbs" && weightTo === "kg") {
        weightResult = weight / 2.20462;
    } else if (weightFrom === "lbs" && weightTo === "oz") {
        weightResult = weight * 16;
    } else if (weightFrom === "oz" && weightTo === "kg") {
        weightResult = weight / 35.274;
    } else if (weightFrom === "oz" && weightTo === "lbs") {
        weightResult = weight / 16;
    } else {
        weightResult = weight;
    }

    document.getElementById("weightResult").value = weightResult.toFixed(2);
}

function convertTemperature() {
    const temperature = document.getElementById("temperature").value;
    const tempFrom = document.getElementById("tempFrom").value;
    const tempTo = document.getElementById("tempTo").value;

    let result;

    if (tempFrom === "c" && tempTo === "f") {
        tempResult = (temperature * 9 / 5) + 32;
    } else if (tempFrom === "c" && tempTo === "k") {
        tempResult = parseFloat(temperature) + 273.15;
    } else if (tempFrom === "f" && tempTo === "c") {
        tempResult = (temperature - 32) * 5 / 9;
    } else if (tempFrom === "f" && tempTo === "k") {
        tempResult = (parseFloat(temperature) + 459.67) * 5 / 9;
    } else if (tempFrom === "k" && tempTo === "c") {
        tempResult = parseFloat(temperature) - 273.15;
    } else if (tempFrom === "k" && tempTo === "f") {
        tempResult = (parseFloat(temperature) * 9 / 5) - 459.67;
    } else {
        tempResult = temperature;
    }

    document.getElementById("tempResult").value = tempResult.toFixed(2);
}
