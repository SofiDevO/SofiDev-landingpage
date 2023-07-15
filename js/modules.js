const d = document;
import hamburgerMenu from "./hamburger.js";


import toggleDarkMode from "./darkTheme.js";

import btnRayo from "./electricSound.js";

import toogleLanguage from "./language.js";

import { valida } from "./form.js";

const inputs = d.querySelectorAll('input');

inputs.forEach(input => {
    input.addEventListener('blur', (input)=>{
        valida(input.target);
    })
        
    
});