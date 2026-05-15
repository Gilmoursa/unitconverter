function getPrecision() {
    return parseInt(document.getElementById('precision').value);
}

function reconvertAll() {
    convertWeight();
    convertTemperature();
    convertDistance();
    convertSpeed();
}

function swap(inputId, fromId, toId, convertFn) {
    const input = document.getElementById(inputId);
    const result = document.getElementById(inputId + 'Result');
    const fromSelect = document.getElementById(fromId);
    const toSelect = document.getElementById(toId);

    const prevFrom = fromSelect.value;
    fromSelect.value = toSelect.value;
    toSelect.value = prevFrom;

    if (result.value !== '') {
        input.value = result.value;
    }

    convertFn();
}

function clearConverter(inputId, resultId) {
    document.getElementById(inputId).value = '';
    document.getElementById(resultId).value = '';
}

function copyResult(resultId) {
    const value = document.getElementById(resultId).value;
    if (!value) return;

    navigator.clipboard.writeText(value).then(() => {
        const btn = document.querySelector(`[onclick="copyResult('${resultId}')"]`);
        const original = btn.textContent;
        btn.textContent = '✓';
        btn.classList.add('copied');
        setTimeout(() => {
            btn.textContent = original;
            btn.classList.remove('copied');
        }, 1500);
    });
}

// Convert everything to a base unit (kg, celsius, meters, m/s) then to the target

function convertWeight() {
    const value = parseFloat(document.getElementById('weight').value);
    if (isNaN(value)) { document.getElementById('weightResult').value = ''; return; }
    const from = document.getElementById('weightFrom').value;
    const to = document.getElementById('weightTo').value;

    const toKg = { kg: 1, lbs: 0.453592, oz: 0.0283495 };
    const fromKg = { kg: 1, lbs: 2.20462, oz: 35.274 };

    const result = value * toKg[from] * fromKg[to];
    document.getElementById('weightResult').value = from === to ? value.toFixed(getPrecision()) : result.toFixed(getPrecision());
}

function convertTemperature() {
    const value = parseFloat(document.getElementById('temperature').value);
    if (isNaN(value)) { document.getElementById('tempResult').value = ''; return; }
    const from = document.getElementById('tempFrom').value;
    const to = document.getElementById('tempTo').value;

    let celsius;
    if (from === 'c') celsius = value;
    else if (from === 'f') celsius = (value - 32) * 5 / 9;
    else celsius = value - 273.15;

    let result;
    if (to === 'c') result = celsius;
    else if (to === 'f') result = celsius * 9 / 5 + 32;
    else result = celsius + 273.15;

    document.getElementById('tempResult').value = result.toFixed(getPrecision());
}

function convertDistance() {
    const value = parseFloat(document.getElementById('distance').value);
    if (isNaN(value)) { document.getElementById('distanceResult').value = ''; return; }
    const from = document.getElementById('distanceFrom').value;
    const to = document.getElementById('distanceTo').value;

    const toM = { m: 1, km: 1000, mi: 1609.344 };
    const fromM = { m: 1, km: 0.001, mi: 1 / 1609.344 };

    const result = value * toM[from] * fromM[to];
    document.getElementById('distanceResult').value = from === to ? value.toFixed(getPrecision()) : result.toFixed(getPrecision());
}

function convertSpeed() {
    const value = parseFloat(document.getElementById('speed').value);
    if (isNaN(value)) { document.getElementById('speedResult').value = ''; return; }
    const from = document.getElementById('speedFrom').value;
    const to = document.getElementById('speedTo').value;

    // base unit: m/s
    const toMs = { mph: 0.44704, kph: 1 / 3.6, ms: 1, kn: 0.514444 };
    const fromMs = { mph: 1 / 0.44704, kph: 3.6, ms: 1, kn: 1 / 0.514444 };

    const result = value * toMs[from] * fromMs[to];
    document.getElementById('speedResult').value = from === to ? value.toFixed(getPrecision()) : result.toFixed(getPrecision());
}
