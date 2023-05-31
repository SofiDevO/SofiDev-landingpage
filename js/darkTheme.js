const d = document;
/* Elementos de la pagina */
const body = d.querySelector('body');
const toggle = d.getElementById ('toggleDark');
const logo = d.getElementById ('logo');
const span= d.getElementById ('span');
const fondoHero = d.getElementById('hero')
const titulo= d.getElementById ('titulo-saludo');
const spanTitulo = d.getElementById('span-titulo')
const subtitulo= d.getElementById ('subtitulo');
const profilePic = d.getElementById('profile-pic');
const acercaDeHamburguesa = d.getElementById('acercaDe-menuA');
const portafolioHamburguesa = d.getElementById('portafolio-menuA');
const contactoHamburguesa = d.getElementById('contacto-menuA');
const botonHamburguesa = d.getElementById('hamburguesa')
const divider1 = d.getElementById('divider1');
const contenidoTexto = d.getElementById('textos');
const acercadDeSpan = d.getElementById('span-titulo2');



toggle.addEventListener('click', cambiarModo);
export  function cambiarModo(){
    this.classList.toggle('bi-lightning-charge-fill')
    if(this.classList.toggle('bi-lightning-charge')){
        /* estilos del tema claro */
        body.style.background = 'rgb(206, 206, 206)';
        body.style.color = 'black';
        body.style.transition = '2s';
        divider1.style.fill = 'rgb(206, 206, 206)';
        

        toggle.style.filter = 'invert(100%) sepia(0%) saturate(7500%) hue-rotate(155deg) brightness(102%) contrast(100%)drop-shadow(0 0 12px #000000)';
        
        fondoHero.style.background = 'linear-gradient(0deg, rgba(65, 6, 138, 0.736) 20%, rgba(160, 5, 126, 0.589) 63%)';
        
        logo.style.filter = 'drop-shadow(0 0 11px  rgba(0,0,0) ';
        logo.style.transition = '1s';
        logo.style.color = 'black'
        
        titulo.style.color = 'black';
        
        subtitulo.style.color = 'black';
        
        spanTitulo.style.filter = 'none';
        spanTitulo.style.color = 'white';
        
        span.style.filter = '';
        span.style.color = 'white'

        acercadDeSpan.style.color = 'white'
        acercadDeSpan.style.filter = '';

        botonHamburguesa.style.filter = ' invert(0%) sepia(90%) saturate(7500%) hue-rotate(78deg) brightness(93%) contrast(93%)';
        acercaDeHamburguesa.style.color = '';
        portafolioHamburguesa.style.color = '';
        contactoHamburguesa.style.color = '';
        profilePic.style.filter = '';
        
        
        /* Estilos en el tema oscuro */
    }else{
        body.style.color = 'rgb(199, 199, 199)';
        body.style.transition = '2s';
        body.style.background = 'rgb(7, 7, 7)';
        
        divider1.style.fill = 'rgb(7, 7, 7)';
        divider1.style.transition = '2s';
        
        toggle.style.filter = ' invert(0%) sepia(22%) saturate(7443%) hue-rotate(110deg) brightness(91%) contrast(101%) drop-shadow(0 0 12px  rgba(0,212,255,1)';
        
        fondoHero.style.background = 'linear-gradient(0deg, rgba(18,0,42,1) 20%,  rgba(7, 7, 7)61%)';
        fondoHero.style.transition = '4s';
        
        titulo.style.color = 'white'; 
        titulo.style.transition = '4s';
        
        subtitulo.style.color = 'white';
        
        logo.style.filter = ' drop-shadow(0 0 11px  rgba(0,212,255,1)';
        logo.style.color = 'white'
        contenidoTexto.style.color = 'black'
        contenidoTexto.style.textShadow = '-0.3rem -0.2rem 2rem blue'; 

        acercadDeSpan.style.color = 'rgba(0,212,255,1)'
        acercadDeSpan.style.filter = ' drop-shadow(0 0 11px  rgba(0,212,255,1)';
        
        span.style.color = 'rgba(0,212,255,1)';
        span.style.filter = ' drop-shadow(0 0 11px  rgba(0,212,255,1)';
        
        spanTitulo.style.color = 'rgba(0,212,255,1)';
        spanTitulo.style.filter = ' drop-shadow(0 0 11px  rgba(0,212,255,1)';
        
        profilePic.style.filter = 'drop-shadow(2px -5px 16px #D608A9)';
        
        /* Elementos del menu hamburguesa */
        acercaDeHamburguesa.style.color = 'rgba(0,212,255,1)';
        portafolioHamburguesa.style.color = 'rgba(0,212,255,1)';
        contactoHamburguesa.style.color = 'rgba(0,212,255,1)';
        botonHamburguesa.style.filter = ' invert(74%) sepia(58%) saturate(4419%) hue-rotate(149deg) brightness(102%) contrast(107%)';


    }
        

}
        

        
        
        
        
        