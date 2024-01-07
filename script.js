const spellContainer = document.getElementById("spell");
const btn = document.getElementById("btn");
const spellUrl = "https://wizard-world-api.herokuapp.com/Spells";

let getSpell = () => {
    fetch(spellUrl)
        .then(data => data.json())
        .then(data => console.log(data[0].name));
}

getSpell();