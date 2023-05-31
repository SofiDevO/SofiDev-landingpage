import hamburgerMenu from "./hamburger.js";


import { cambiarModo } from "./darkTheme.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e)=> {
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
})


