const d = document;
/* Elementos de la pagina */
const body = d.querySelector('body');

/* ELEMENTOS DEL HEADER */
const toggle = d.getElementById ('toggleDark');
const logo = d.getElementById ('logo');
const span= d.getElementById ('span');

/* ELEMENTOS DEL HERO */
const fondoHero = d.getElementById('hero')
const titulo= d.getElementById ('titulo-saludo');
const spanTitulo = d.getElementById('span-titulo')
const subtitulo= d.getElementById ('subtitulo');
const profilePic = d.getElementById('profile-pic');
const linkOracle = d.getElementById('link-oracle');
const linkPlatzi = d.getElementById('link-platzi');

/* ELEMNTOS DEL MENU HAMBURGUESA */
const botonHamburguesa = d.getElementById('hamburguesa')
const acercaDeHamburguesa = d.getElementById('acercaDe-menuA');
const portafolioHamburguesa = d.getElementById('portafolio-menuA');
const contactoHamburguesa = d.getElementById('contacto-menuA');
const blogHamburguesa = d.getElementById('blog-menuA');
const panelMenu = d.getElementById('panel')
const SkillsHamburguesa = d.getElementById('skills-menuA');

/* DIVIDERES */
const divider1 = d.getElementById('divider1');

/* SECCION ACERCA DE */
const acercaDeTitulo = d.getElementById('acercaDeTitulo');
const acercadDeSpan = d.getElementById('span-titulo2');
const contenidoTexto = d.getElementById('textos');
const cajaCristal = d.getElementById('caja-cristal');


/* ELEMENTOS DE LA SECCION SKILLS */

const FondoSkills = d.getElementById('fondo-skills');



/* addEventListener AL BOTON DE MODO OSCURO */
toggle.addEventListener('click', cambiarModo);
export  function cambiarModo(){
    this.classList.toggle('bi-lightning-charge-fill')
    if(this.classList.toggle('bi-lightning-charge')){
        /* estilos del tema claro */
        body.style.background = '';
        body.style.color = '';
        body.style.transition = '2s';
        divider1.style.fill = '';
        toggle.style.filter = '';
        logo.style.filter = '';
        logo.style.transition = '1s';
        logo.style.color = ''

        
        /* ELEMNTOS DE HERO */
        fondoHero.style.background = 'linear-gradient(0deg, rgba(65, 6, 138, 0.736) 20%, rgba(160, 5, 126, 0.589) 63%)';
        titulo.style.color = 'black';
        spanTitulo.style.filter = '';
        spanTitulo.style.color = 'white';
        span.style.filter = '';
        span.style.color = ''
        subtitulo.style.color = '';
        

        /* Elemntos del menu hamburguesa */
        botonHamburguesa.style.filter = '';
        acercaDeHamburguesa.style.color = '';
        portafolioHamburguesa.style.color = '';
        contactoHamburguesa.style.color = '';
        blogHamburguesa.style.color = '';
        panelMenu.style.background = '';
        panelMenu.style.backdropFilter = '';
        
        /* Sección Abaout me */
        profilePic.style.filter = '';
        cajaCristal.style.background = 'rgba( 255, 255, 255, 0.25 )';
        cajaCristal.style.boxShadow= '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )';
        contenidoTexto.style.color = ''
        linkOracle.style.color = '';
        linkPlatzi.style.color = '';
        acercaDeTitulo.style.color = ''
        acercaDeTitulo.style.filter = '';
        acercadDeSpan.style.color = ''
        acercadDeSpan.style.filter = '';

        /* ELEMENTOS DE LA SECCION SKILLS */
        FondoSkills.style.background = '';
    }else{
        /* Estilos en el tema oscuro */
        body.style.color = 'rgb(199, 199, 199)';
        body.style.transition = '2s';
        body.style.background = 'rgb(7, 7, 7)';
        
        logo.style.filter = ' drop-shadow(0 0 11px  rgba(0,212,255,1)';
        logo.style.color = 'white'
        span.style.color = 'rgba(0,212,255,1)';
        span.style.filter = ' drop-shadow(0 0 11px  rgba(0,212,255,1)';
        toggle.style.filter = ' invert(0%) sepia(22%) saturate(7443%) hue-rotate(110deg) brightness(91%) contrast(101%) drop-shadow(0 0 12px  rgba(0,212,255,1)';
        
        /* ELEMENTOS DEL HERO */
        fondoHero.style.background = 'linear-gradient(0deg, rgba(18,0,42,1) 20%,  rgba(7, 7, 7)61%)';
        fondoHero.style.transition = '4s';
        titulo.style.color = 'white'; 
        titulo.style.transition = '4s';
        spanTitulo.style.color = 'rgba(0,212,255,1)';
        spanTitulo.style.filter = ' drop-shadow(0 0 11px  rgba(0,212,255,1)';
        subtitulo.style.color = 'white';
        profilePic.style.filter = 'drop-shadow(2px -5px 16px #D608A9)';
       
        /* Elementos del menu hamburguesa */
        acercaDeHamburguesa.style.color = 'rgba(0,212,255,1)';
        portafolioHamburguesa.style.color = 'rgba(0,212,255,1)';
        contactoHamburguesa.style.color = 'rgba(0,212,255,1)';
        blogHamburguesa.style.color = 'rgba(0,212,255,1)';
        SkillsHamburguesa.style.color = 'rgba(0,212,255,1)';
        botonHamburguesa.style.filter = ' invert(74%) sepia(58%) saturate(4419%) hue-rotate(149deg) brightness(102%) contrast(107%)';
        panelMenu.style.background = 'rgba( 54, 54, 54, 0.4 )';
        panelMenu.style.backdropFilter = 'blur( 10px )';
        
        /* DIVIDERS */
        divider1.style.fill = 'rgb(7, 7, 7)';
        divider1.style.transition = '2s';
        /* Sección Abaout me */
        acercadDeSpan.style.color = 'rgba(0,212,255,1)'
        acercadDeSpan.style.filter = ' drop-shadow(0 0 12px  rgba(0,212,255,1)';
        acercaDeTitulo.style.color = 'white'
        acercaDeTitulo.style.filter = ' drop-shadow(0 0 8px  black';
        linkOracle.style.color = '#8758FF';
        linkPlatzi.style.color = '#8758FF';
        contenidoTexto.style.color = 'white'
        contenidoTexto.style.filter = 'drop-shadow(0 0 12px  black'; 
        cajaCristal.style.background = ' rgba( 0, 0, 0, 0.85 )  ';
        cajaCristal.style.boxShadow= ' 0 8px 32px 0 rgba( 31, 38, 135, 0.37 )';

        /* ELEMENTOS DE LA SECCION SKILLS */
        FondoSkills.style.background = ' linear-gradient(0deg, rgba(0,0,0,1) 52%, rgba(63,0,113,1) 100%)';
    }
}