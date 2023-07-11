const d = document;

const toogleLanguage = d.querySelector('[data-type="toogleLanguage"]');
const toogleLanguageMobile = d.querySelector('[data-type="toogleLanguageMobile"]');


export default  toogleLanguage.addEventListener('click',(e)=>{
    console.log(e.target.parentElement);
})

toogleLanguageMobile.addEventListener('click',(e)=>{
    console.log(e.target.parentElement);
})


