# SBA308A: Wizard World Random Generator

Welcome to ⚡🤓🪄 **Wizard World Random Generator** 🏰🧙‍♂️🦁! This simple JavaScript web application is for Per Scholas skill-based assessment and allows you to explore random spells and elixirs powered by the [WizardWorldApi](https://example.com/wizard-world-api).

## 📖 Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Random Spell Generation](#random-spell-generation)
  - [Random Elixir Generation](#random-elixir-generation)
  - [Submit Your Feedback](#submit-your-feedback)
- [Code Structure](#code-structure)
- [Contributing](#contributing)
- [License](#license)

## Installation

Simply clone or download the repository and open the `index.html` file

## Usage

### Random Spell Generation

Click the `🪄 Learn A Random Spell` button to generate a random spell with the spell's details, including incantation, effect, type, and light.

### Random Elixir Generation

Click the `⚗️ Learn A Random Elixir` button to discover a mysterious elixir with unique effects and characteristics. The elixir's name, effect, side effects, characteristics, and ingredients will be displayed.

### Submit Your Feedback

Express your thoughts and suggestions by clicking the `✉️ Send Your Feedback` button. A feedback form (textarea) will show up, allowing you to type and submit your magical feedback.

## Code Structure

The main application logic is in `main.js`, where event listeners are set up for the buttons to trigger the respective functions imported from the codebase.

The codebase is then organized into three main modules:

- **`spell.js`**: Contains the function to fetch random spells using the `fetch` API with a GET request.

- **`elixirs.js`**: Contains the functions to fetch and display random elixirs using the `axios` library for HTTP GET requests.

- **`feedback.js`**: Handles the submission of user feedback using the `axios` library for HTTP POST requests.
