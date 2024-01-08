import axios from 'https://cdn.skypack.dev/axios';

export async function getElixirs(content) {
    const elixirsUrl = "https://wizard-world-api.herokuapp.com/Elixirs";

    try {
        const response = await axios.get(elixirsUrl);

        if (response.status !== 200) {
            throw new Error ("Bad Status");
        }

        const elixirs = response.data;

        let randomIndex = Math.floor(Math.random() * elixirs.length);
        const elixir = response.data[randomIndex];
        
        content.innerHTML = `
            <h2 style="color: #90ee90; text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5)">${elixir.name}</h2>
            <p><strong>Effect:</strong> ${elixir.effect}</p>
            <p><strong>Side Effects:</strong> ${displaySideEffects(elixir.sideEffects)}</p>
            <p><strong>Characteristics:</strong> ${elixir.characteristics || 'Not specified'}</p>
            <p><strong>Ingredients:</strong> ${displayIngredients(elixir.ingredients)}</p>
        `;
    } catch (error) {
        console.error("Error fetching elixirs: ", error);
    }
}

//     axios.get(elixirsUrl)
//     .then(response => {
//         if (response.data.length > 0) {
//             let randomIndex = Math.floor(Math.random() * response.data.length);
//             const elixir = response.data[randomIndex];

//             content.innerHTML = `
//             <h2 style="color: #90ee90; text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5)">${elixir.name}</h2>
//             <p><strong>Effect:</strong> ${elixir.effect}</p>
//             <p><strong>Side Effects:</strong> ${displaySideEffects(elixir.sideEffects)}</p>
//             <p><strong>Characteristics:</strong> ${elixir.characteristics || 'Not specified'}</p>
//             <p><strong>Ingredients:</strong> ${displayIngredients(elixir.ingredients)}</p>
//             `;
//         } else {
//             const errorMessage = 'No elixirs found.';
//             content.innerHTML = `<p>${errorMessage}</p>`;
//         }
//     })
//     .catch(error => console.error("Error fetching elixirs:", error));
// };

// format ingredients, convert it from an object to a string
const displayIngredients = (ingredients) => {
if (ingredients && ingredients.length > 0) {
    const ingredientList = ingredients.map(ingredient => ingredient.name).join(', ');
    return ingredientList;
} else {
    return 'Not specified';
}
};

// format side effects so it will show "Unknown" instead of "null"
const displaySideEffects = (sideEffects) => {
    return sideEffects !== null ? sideEffects : 'Unknown';
};