const spellContainer = document.getElementById("spell");
const btn = document.getElementById("btn");
const spellUrl = "https://wizard-world-api.herokuapp.com/Spells";

let getSpell = () => {
    fetch(spellUrl)
        .then(response => response.json())
        .then(data => {
            let randomIndex = Math.floor(Math.random() * data.length);
            spellContainer.innerHTML = `
            <h2 style="color: #FFA500; text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5)">${data[randomIndex].name}</h2>
            <p><strong>Incantation:</strong> ${data[randomIndex].incantation}</p>
            <p><strong>Effect:</strong> ${data[randomIndex].effect}</p>
            <p><strong>Type:</strong> ${data[randomIndex].type}</p>
            <p><strong>Light:</strong> ${data[randomIndex].light}</p>
            `;
        })
        .catch(error => console.error("Error fetching spell:", error));
}

btn.addEventListener("click", getSpell);
