document.addEventListener('DOMContentLoaded', () => {
    const sideBar = document.querySelector('.side-links')
    const hamMenu = document.querySelector('.ham')
    const closeMenu = document.querySelector('.close')

    document.addEventListener('DOMContentLoaded', () => {
        const elementToRemove = document.querySelector('.skiptranslate');
        if (elementToRemove) {
            elementToRemove.remove();
        }
    });

    hamMenu.addEventListener('click', () => {
        sideBar.style.display = 'flex'
        closeMenu.style.display = 'block'
    })

    closeMenu.addEventListener('click', () => {
        sideBar.style.display = 'none'
        closeMenu.style.display = 'none'
    })

});

function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        defaultLanguage: 'en',
        pageLanguage: 'en',
        includedLanguages: 'en,hi,bn',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false,
        multilanguagePage: true
    }, google_translate_element);

    const translateIcon = document.querySelector('.goog-te-gadget-icon');
    translateIcon.src= " ";
    translateIcon.style.backgroundImage = "url('./media/translate.svg')"
    translateIcon.style.backgroundPosition = "";
    translateIcon.style.backgroundSize = "cover";
    translateIcon.style.border = "0";
    // translateIcon.src = "translate.svg";
    // translateIcon.style.objectFit = "cover"
};
// const a = document.querySelector('.skiptranslate > iframe')
// console.log(a)
// console.log(document.querySelector('.VIpgJd-ZVi9od-ORHb').innerHTML)

const ty = document.querySelector('.VIpgJd-ZVi9od-xl07Ob-lTBxed > span')
console.log(ty)