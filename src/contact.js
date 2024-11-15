import foodImage from "./images/tinytrans.gif";

export const displayContactPage = () => {
    const content = document.querySelector("#content");
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
