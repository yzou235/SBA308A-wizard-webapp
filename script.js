const spellContainer = document.getElementById("spell");
const btn = document.getElementById("btn");
const spellUrl = "https://wizard-world-api.herokuapp.com/Spells";

let getSpell = () => {
    fetch(spellUrl)
        .then(response => response.json())
        .then(data => {
            let randomIndex = Math.floor(Math.random() * data.length);
            spellContainer.textContent = `${data[randomIndex].name}`;
        })
        .catch(error => console.error("Error fetching spell:", error));
}

btn.addEventListener("click", getSpell);
