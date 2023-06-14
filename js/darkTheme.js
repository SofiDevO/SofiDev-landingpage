const d = document;


const toggleDark = d.getElementById ('toggleDark');




export default  function getSystemColorScheme() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function saveUserPreference(preference) {
    localStorage.setItem('color-scheme', preference);
  }

function loadUserPreference() {
 return localStorage.getItem('color-scheme');
}


function toggleDarkMode(enableDarkMode) {
    if (enableDarkMode) {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
}

function initializeDarkMode() {
    const userPreference = loadUserPreference();    
    if (userPreference) {
        toggleDarkMode(userPreference === 'dark');       
    } else {
        const systemColorScheme = getSystemColorScheme();
        toggleDarkMode(systemColorScheme === 'dark');
        
    }
  }
  document.addEventListener('DOMContentLoaded', initializeDarkMode);



function handleDarkModeToggle() {
    const currentPreference = loadUserPreference() || getSystemColorScheme();
    const newPreference = currentPreference === 'dark' ? 'light' : 'dark';

    toggleDarkMode(newPreference === 'dark');
    saveUserPreference(newPreference);
    console.log("escucho")
    }
    toggleDark.addEventListener('click', handleDarkModeToggle);
    


  function handleSystemColorSchemeChange(event) {
    if (!loadUserPreference()) {
      toggleDarkMode(event.matches);
    }
}

window.matchMedia("(prefers-color-scheme: dark)").addEventListener(handleSystemColorSchemeChange);