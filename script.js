let events = [];

document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("form");
    const eventList = document.getElementById("eventList");
    const card1 = document.querySelector(".card1");
    const card2 = document.querySelector(".card2");

    
    window.addEventListener("load", function () {
        card2.style.minHeight = card1.offsetHeight + "px";
    });

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        addEvent();
    });

    window.clearEvents = function () {
        events = [];
        renderEvents();
    };