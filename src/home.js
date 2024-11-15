import foodImage from "./images/tinytrans.gif";

export const displayHomePage = () => {
    const content = document.querySelector("#content");
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