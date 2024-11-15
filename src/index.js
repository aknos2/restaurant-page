import foodImage from "./images/tinytrans.gif";

const Pages = (() => {
    const content = document.querySelector("#content");

    const displayHomePage = () => {
        content.innerHTML = `<h1>High Quality Meat</h1>
        <div id="home-images">
            <div class="menu-food-imgs"><img src="${foodImage}" alt=""><p>Food</p></div>
            <div class="menu-food-imgs"><img src="${foodImage}" alt=""><p>Food</p></div>
            <div class="menu-food-imgs"><img src="${foodImage}" alt=""><p>Food</p></div>
        </div>
        <div id="restaurant-summary">
            <h1>Our history</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et delectus ea veritatis, cum excepturi temporibus velit pariatur voluptates iusto soluta ullam blanditiis tempora minima? Esse iure repellendus itaque ipsum voluptatum?</p>
        </div>
        <div id="access-info">
            <h1>Access</h1>
            <div id="address">
                <div id="location">
                    <h2>Location</h2>
                    <p>123 Forest Drive, Forestville, Maine</p>
                </div>
                <div id="hours">
                    <h2>Hours</h2>
                    <li>
                        <ul>Sunday: 8am - 10pm</ul>
                        <ul>Monday: 8am - 7pm</ul>
                        <ul>Tuesday: 8am - 7pm</ul>
                        <ul>Wednesday: closed</ul>
                        <ul>Thursday: 8am - 7pm</ul>
                        <ul>Friday: 8am - 7pm</ul>
                        <ul>Saturday: 8am - 10pm</ul>
                    </li>
                </div>
            </div>
        </div>`;
    };

    const displayMenuPage = () => {
        content.innerHTML = `<hr class="hr-text" id="first-hr">
        <h1>Menu</h1>
        <hr class="hr-text">

        <div class="img-container">
            <img src="${foodImage}" alt="">
            <img src="${foodImage}" alt="">
            <img src="${foodImage}" alt="">
        </div>

        <div id="food-menu">
            <div class="food-item">
                <h3>FOOD</h3>
                <p class="price-text">$10</p>            
                <p class="food-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, odit?</p>
            </div>
            <div class="food-item">
                <h3>FOOD</h3>
                <p class="price-text">$10</p>
                <p class="food-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, odit?</p>
            </div>
            <div class="food-item">
                <h3>FOOD</h3>
                <p class="price-text">$10</p>
                <p class="food-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, odit?</p>
            </div>
            <div class="food-item">
                <h3>FOOD</h3>
                <p class="price-text">$10</p>
                <p class="food-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, odit?</p>
            </div>
            <div class="food-item">
                <h3>FOOD</h3>
                <p class="price-text">$10</p>
                <p class="food-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, odit?</p>
            </div>
            <div class="food-item">
                <h3>FOOD</h3>
                <p class="price-text">$10</p>
                <p class="food-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, odit?</p>
            </div>
        </div>

        <hr class="hr-text">
        <h1>Drinks</h1>
        <hr class="hr-text">

        <div class="img-container">
            <img src="${foodImage}" alt="">
            <img src="${foodImage}" alt="">
            <img src="${foodImage}" alt="">
        </div>

        <div id="drink-menu">
            <div class="food-item">
                <h3>FOOD</h3>
                <p class="price-text">$10</p>            
                <p class="food-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, odit?</p>
            </div>
            <div class="food-item">
                <h3>FOOD</h3>
                <p class="price-text">$10</p>
                <p class="food-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, odit?</p>
            </div>
            <div class="food-item">
                <h3>FOOD</h3>
                <p class="price-text">$10</p>
                <p class="food-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, odit?</p>
            </div>
            <div class="food-item">
                <h3>FOOD</h3>
                <p class="price-text">$10</p>
                <p class="food-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, odit?</p>
            </div>
            <div class="food-item">
                <h3>FOOD</h3>
                <p class="price-text">$10</p>
                <p class="food-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, odit?</p>
            </div>
            <img src="./images/tinytrans.gif" alt="">
        </div>

        <hr class="hr-text">
        <img src="${foodImage}" id="menu-bottom-img" alt="">`
    };

    const displayContactPage = () => {
        content.innerHTML = ` <h1>Contact</h1>
        <hr class="hr-text">
        <div id="opening-hours-container">
            <p>WE ARE OPEN</p>
            <div class="time-text">
                <p>MON - FRI (except thursday)</p>
                <p>08:00 - 19:00</p>
            </div>
            <div class="time-text">
                <p>SAT - SUN</p>
                <p>08:00 - 22:00</p>
            </div>
        </div>
        <hr class="hr-text">

        <div id="contact-info-container">
            <h3>Address</h3>
            <p>73 Apple Road, Bababa, BH8 6BL, UK</p>
            <p>TEL: 121-343-4545</p>
        </div>

        <div id="map">
            <img src="${foodImage}" id="menu-bottom-img" alt="">
            <p>Show map location on google</p>
        </div>
        <p>5 minutes by car from Bababa Station</p>`;
    };

    
    return {displayHomePage, displayMenuPage, displayContactPage};
})()

const Navigation = (() => {
    const switchTab = (tab) => {
       clearStyles();

    if (tab === "home") {
        import("./home.css");
        Pages.displayHomePage();
      } else if (tab === "menu") {
        import("./menu.css");
        Pages.displayMenuPage();
      } else if (tab === "contact") {
        import("./contact.css");
        Pages.displayContactPage();
      }
    };

    const clearStyles = () => {
        const styleSheets = document.querySelectorAll("style[data-webpack]");
        styleSheets.forEach((style) => style.remove());
    };

    const navigateTab = () => {
        const homeButton = document.querySelector("#home-btn");
        const menuButton = document.querySelector("#menu-btn");
        const contactButton = document.querySelector("#contact-btn");

        homeButton.addEventListener("click", () => switchTab("home"));
        menuButton.addEventListener("click", () => switchTab("menu"));
        contactButton.addEventListener("click", () => switchTab("contact"));
    }

    return {navigateTab, clearStyles, switchTab};
})()

function startingPage() {
    Navigation.clearStyles();
    Navigation.switchTab("home");
}

startingPage();
Navigation.navigateTab();å

