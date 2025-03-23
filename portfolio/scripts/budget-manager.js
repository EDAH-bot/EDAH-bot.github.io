function calculateBudget() {
    const income = parseFloat(document.getElementById('income').value);
    const expenses = parseFloat(document.getElementById('expenses').value);
    const budgetResult = document.getElementById('budget-result');

    if (!isNaN(income) && !isNaN(expenses)) {
        const budget = income - expenses; // Formule réelle
        budgetResult.textContent = 'Votre solde mensuel est de ${budget.toFixed(2)} €.';
    } else {
        budgetResult.textContent = "Veuillez remplir tous les champs avec des nombres valides.";
    }
}

function showBudgetManager() {
    document.getElementById('budget-manager').style.display = 'block';
}