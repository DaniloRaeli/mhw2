// Seleziona l'elemento che rappresenta il trigger per generare il div
const triggerElement = document.querySelector('.Bottom');

// Variabile per tenere traccia dello stato del div
let divIsVisible = false;

// Aggiungi un gestore di eventi per il clic
triggerElement.addEventListener('click', function(event) {
    // Verifica se il div è già presente
    if (divIsVisible) {
        // Se è già presente, rimuovilo
        const existingDiv = document.querySelector('.dynamic-div');
        if (existingDiv) {
            existingDiv.remove();
        }
        // Cambia lo stato a non visibile
        divIsVisible = false;
    } else {
        // Se il div non è presente, crea un nuovo elemento <div>
        const newDivElement = document.createElement('div');
        newDivElement.classList.add('dynamic-div');
        // Aggiungi eventuali contenuti o attributi al nuovo elemento <div>
        newDivElement.textContent = 'Questo è un nuovo div generato dinamicamente!';

        // Inserisci il nuovo elemento <div> come fratello del triggerElement
        triggerElement.parentNode.insertBefore(newDivElement, triggerElement.nextSibling);
        
        // Cambia lo stato a visibile
        divIsVisible = true;
    }

    // Previeni il comportamento predefinito del clic (ad es. l'invio di un modulo)
    event.preventDefault();
});

function changeImage() {
    // Seleziona l'elemento dell'immagine
    const imageElement = document.getElementById('HOME_ICON');

    // Cambia l'URL dell'immagine al passaggio del mouse
    imageElement.src = 'image/KFC_Twister_Gamma_Website_slider_dekstop_3840x1866px_5280551392.webp';
}

function resetImage() {
    // Seleziona l'elemento dell'immagine
    const imageElement = document.getElementById('HOME_ICON');

    // Ripristina l'URL dell'immagine quando il mouse esce dall'area dell'immagine
    imageElement.src = 'image/KFC_Promo_Calcio_Website_3840x1866_c2a626196e.webp';
}

function toggleDropdownLogin() {
    const dropdownMenu = document.getElementById('menu_tendina');
    dropdownMenu.classList.toggle('nascosto');
}

function toggleDropdownNovita() {
    var menu = document.getElementById("menunovita");
    menu.classList.toggle("nascosto");
}

function toggleDropdownProdotti() {
    var menu = document.getElementById("menuprodotti");
    if (menu.classList.contains("nascosto")) {
        menu.classList.remove("nascosto");
    } else {
        menu.classList.add("nascosto");
    }
}


document.addEventListener('DOMContentLoaded', function() {
    // Seleziona tutti i link della navbar
    var navLinks = document.querySelectorAll('.nav-link');

    // Aggiungi un listener di evento a ciascun link
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            // Previene il comportamento predefinito del link
            event.preventDefault();

            // Qui puoi aggiungere la logica per gestire il clic sul link,
            // ad esempio cambiare la visualizzazione della pagina o eseguire altre azioni

            // Per esempio, potresti aggiungere una classe "active" al link cliccato
            navLinks.forEach(function(link) {
                link.classList.remove('active');
            });
            this.classList.add('active');

            // Puoi anche cambiare il contenuto della pagina senza ricaricarla
            // Ad esempio, potresti caricare dinamicamente il contenuto di una sezione
            // utilizzando AJAX o altri metodi di caricamento asincrono
        });
    });
});


   // Funzione per mostrare il menu di registrazione quando si clicca sul link "Registrati ora"
   function showRegistration() {
    document.getElementById('registrationMenu').style.display = 'block';
}

// Codice JavaScript
function toggleDropdown(elementId) {
    var menu = document.getElementById(elementId);
    menu.classList.toggle("nascosto");
}

function showRegistration() {
    toggleDropdown("registrationMenu");
}

document.addEventListener("DOMContentLoaded", function() {
    var buttons = document.querySelectorAll("[data-action]");
    buttons.forEach(function(button) {
        var action = button.getAttribute("data-action");
        button.addEventListener("click", function() {
            if (action === "mostra_registrazione") {
                showRegistration();
            } else {
                toggleDropdown(action);
            }
        });
    });
});
