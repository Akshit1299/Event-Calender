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

    window.addSampleEvents = function () {
        events.push(
            {
                title: "AI Conference 2026",
                date: "2026-03-15",
                category: "conference",
                description: "Discussion on AI future."
            },
            {
                title: "Friends Meetup",
                date: "2026-04-10",
                category: "friends",
                description: "Evening hangout."
            }
        );

        renderEvents();
    };