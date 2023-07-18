const d = document;
const inputs = d.querySelectorAll('[data-type]');
const mensajes = d.querySelectorAll('[data-span]');
const submitBtn = d.querySelector(".submit");
const loader = d.querySelector(".contact_form_loader")


    
    



export default inputs.forEach(input => {
    function mostrarError(){
        mensajes.forEach(mensaje =>{
            if(input.value == ""){
                mensaje.classList.remove("none");
            }else{
                mensaje.classList.add("none");
                
                
            };
        });
    };
    input.addEventListener('blur', (input)=>{
        mostrarError();
        submitBtn.addEventListener('click', (event)=>{
            event.preventDefault();
            loader.classList.remove("none");
        })
        
    })

    
});



  function contactFormValidation(){
    const $form = d.querySelector(".formulario__contacto"),
    $inputs = d.querySelectorAll(".formulario__contacto [required"); 
    
    console.log($inputs);
    $inputs.forEach((input) =>{
        const $span = d.createElement("span");
        $span.id = input.name;
        $span.textContent = input.title;
        $span.classList.add("contact-form-error", "none")
        input.insertAdjacentElement("afterend", $span);
    });
    d.addEventListener("keyup", (e)=>{
        
        if(e.target.matches(".formulario__contacto [required")){
            let $input = e.target,
            pattern = $input.pattern || $input.dataset.pattern;
            
           // console.log($input, pattern);
            if(pattern){
                let regex = new RegExp(pattern);
                return !regex.exec($input.value)
                ? d.getElementById($input.name).classList.add("is-active")
                :d.getElementById($input.name).classList.remove("is-active");
            };
        };
    })
}

contactFormValidation();

