export async function getSpell(content) {
    const spellUrl = "https://wizard-world-api.herokuapp.com/Spells";

    try {
        const response = await fetch(spellUrl);

        if (!response.ok) {
            throw new Error("Bad Status");
        }

        const data = await response.json();

        return new Promise((resolve, reject) => {
            if (data.length > 0) {
                const randomIndex = Math.floor(Math.random() * data.length);
                const spellHTML = `
                    <h2 style="color: #FFD700; text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5)">${data[randomIndex].name}</h2>
                    <p><strong>Incantation:</strong> ${data[randomIndex].incantation}</p>
                    <p><strong>Effect:</strong> ${data[randomIndex].effect}</p>
                    <p><strong>Type:</strong> ${data[randomIndex].type}</p>
                    <p><strong>Light:</strong> ${data[randomIndex].light}</p>
                `;
                content.innerHTML = spellHTML;
                resolve(spellHTML);
            } else {
                const errorMessage = 'No spells found.';
                content.innerHTML = `<p>${errorMessage}</p>`;
                reject(errorMessage);
            }
        });
    } catch (error) {
        console.error("Error in fetching spell:", error);
        throw error; // Propagate the error for handling elsewhere
    }
};

// export const getSpell = (content) => {
//     const spellUrl = "https://wizard-world-api.herokuapp.com/Spells";

//     fetch(spellUrl)
//         .then(response => response.json())
//         .then(data => {
//             let randomIndex = Math.floor(Math.random() * data.length);
//             content.innerHTML = `
//             <h2 style="color: #FFA500; text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5)">${data[randomIndex].name}</h2>
//             <p><strong>Incantation:</strong> ${data[randomIndex].incantation}</p>
//             <p><strong>Effect:</strong> ${data[randomIndex].effect}</p>
//             <p><strong>Type:</strong> ${data[randomIndex].type}</p>
//             <p><strong>Light:</strong> ${data[randomIndex].light}</p>
//             `;
//         })
//         .catch(error => console.error("Error in fetching spell: ", error));
// }

// my old code:
//const content = document.getElementById("content");
// const btnSpell = document.getElementById("btnSpell");
// const spellUrl = "https://wizard-world-api.herokuapp.com/Spells";

// let getSpell = () => {
//     fetch(spellUrl)
//         .then(response => response.json())
//         .then(data => {
//             let randomIndex = Math.floor(Math.random() * data.length);
//             content.innerHTML = `
//             <h2 style="color: #FFA500; text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5)">${data[randomIndex].name}</h2>
//             <p><strong>Incantation:</strong> ${data[randomIndex].incantation}</p>
//             <p><strong>Effect:</strong> ${data[randomIndex].effect}</p>
//             <p><strong>Type:</strong> ${data[randomIndex].type}</p>
//             <p><strong>Light:</strong> ${data[randomIndex].light}</p>
//             `;
//         })
//         .catch(error => console.error("Error fetching spell:", error));
// }

// btn.addEventListener("click", getSpell);