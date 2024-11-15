import foodImage from "./images/tinytrans.gif";

export const displayMenuPage = () => {
    const content = document.querySelector("#content");
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