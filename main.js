import { getSpell } from './spell.js';
import { getElixirs } from './elixirs.js';
import { showFeedbackForm } from './feedback.js';

const content = document.getElementById("content");
const btnSpell = document.getElementById("btnSpell");
const btnElixir = document.getElementById("btnElixir");
const btnFeedback = document.getElementById("btnFeedback");

btnSpell.addEventListener("click", () => getSpell(content));
btnElixir.addEventListener("click", () => getElixirs(content));
btnFeedback.addEventListener("click", () => showFeedbackForm(content));