import foodImage from "./images/tinytrans.gif";

const Pages = (() => {
    const content = document.querySelector("#content");

    const displayHomePage = async () => {
        // Dynamically import the home page and its styles
        const { displayHomePage } = await import("./home");
        await import("./styles/home.css");
        displayHomePage(foodImage);
    };

    const displayMenuPage = async () => {
        const { displayMenuPage } = await import("./menu");
        await import("./styles/menu.css");
        displayMenuPage(foodImage);
    };

    const displayContactPage = async () => {
        const { displayContactPage } = await import("./contact");
        await import("./styles/contact.css");
        displayContactPage(foodImage);
    };

    return { displayHomePage, displayMenuPage, displayContactPage };
})();

const Navigation = (() => {
    const switchTab = async (tab) => {
        clearStyles();

        if (tab === "home") {
            Pages.displayHomePage();
        } else if (tab === "menu") {
            Pages.displayMenuPage();
        } else if (tab === "contact") {
            Pages.displayContactPage();
        }
    };

    const clearStyles = () => {
        const styleSheets = document.querySelectorAll("style[data-webpack]");
        styleSheets.forEach((style) => style.remove());
    };

    const setupNavigation = () => {
        const homeButton = document.querySelector("#home-btn");
        const menuButton = document.querySelector("#menu-btn");
        const contactButton = document.querySelector("#contact-btn");

        homeButton.addEventListener("click", () => switchTab("home"));
        menuButton.addEventListener("click", () => switchTab("menu"));
        contactButton.addEventListener("click", () => switchTab("contact"));
    };

    return { setupNavigation, switchTab };
})();

// Initial Setup
function startApp() {
    Navigation.switchTab("home"); // Load the home page by default
    Navigation.setupNavigation(); // Set up the navigation buttons
}

startApp();
