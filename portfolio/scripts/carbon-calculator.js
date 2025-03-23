function calculateCarbon() {
    const km = parseFloat(document.getElementById('km').value);
    const electricity = parseFloat(document.getElementById('electricity').value);
    const carbonResult = document.getElementById('carbon-result');

    if (!isNaN(km) && !isNaN(electricity)) {
        const carbonFootprint = (km * 0.2) + (electricity * 0.5); // Formule réelle
        carbonResult.textContent = 'Votre empreinte carbone est de ${carbonFootprint.toFixed(2)} kg CO2/an.';
    } else {
        carbonResult.textContent = "Veuillez remplir tous les champs avec des nombres valides.";
    }
}

function showCarbonCalculator() {
    document.getElementById('carbon-calculator').style.display = 'block';
}