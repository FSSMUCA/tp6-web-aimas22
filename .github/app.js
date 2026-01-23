// Sélection des éléments
const form = document.getElementById("calcForm");
const messages = document.getElementById("messages");
const historiqueListe = document.getElementById("historiqueListe");

// Tableau historique
let historique = [];  

// Gestion du formulaire
form.addEventListener("submit", (e) => {
    e.preventDefault();
    messages.textContent = ""; // Réinitialiser les messages

    const A = document.getElementById("nombreA").value;
    const B = document.getElementById("nombreB").value;
    const operation = document.getElementById("operation").value;

    // --- Validation des données ---
    if (A === "" || B === "") {
        messages.textContent = "Erreur : tous les champs doivent être remplis.";
        return;
    }

    const numA = parseFloat(A);
    const numB = parseFloat(B);

    if (operation === "/" && numB === 0) {
        messages.textContent = "Erreur : division par zéro interdite !";
        return;
    }

    // --- Calcul de l'opération ---
    let resultat;
    switch(operation) {
        case "+": resultat = numA + numB; break;
        case "-": resultat = numA - numB; break;
        case "*": resultat = numA * numB; break;
        case "/": resultat = numA / numB; break;
    }

    // --- Ajout dans l'historique ---
    const entry = `${numA} ${operation} ${numB} = ${resultat}`;
    historique.push(entry);

    // --- Mise à jour du DOM ---
    updateHistorique();
});

// Fonction d'affichage de l'historique
function updateHistorique() {
    historiqueListe.innerHTML = ""; // Nettoyer l'affichage

    historique.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        historiqueListe.appendChild(li);
    });
}