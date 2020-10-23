"use strict";

document.addEventListener("DOMContentLoaded", function (e) {
  tabs_privileges = document.querySelectorAll(".nav-link-description");
  tabs_events = document.querySelectorAll(".nav-link-description-events");
  ShowMobileMenu();
  tabs(tabs_privileges, "nav-link-description active-privileges", ".nav-link-description.active-privileges", "active-privileges", ".tab-pane.active-block-privileges", "active-block-privileges");
  tabs(tabs_events, "nav-link-description-events active-event", ".nav-link-description-events.active-event", "active-event", ".tab-pane.active-block-event", ".active-block-event");
});

function tabs(ArrayNavLinks, classLinkActive, ClassLinkForQuerySelector, ClassLinkDecoration, ClassBodyQuerySelector, ClassShowBody) {
  ArrayNavLinks.forEach(function (link) {
    link.onclick = function (event) {
      event.preventDefault();

      if (link.className != classLinkActive) {
        tabs_active = document.querySelector(ClassLinkForQuerySelector);
        link.classList.toggle(ClassLinkDecoration);
        tabs_active.classList.toggle(ClassLinkDecoration);
        bodyId = link.hash.replace('#', '');
        body = document.getElementById(bodyId);
        body_active = document.querySelector(ClassBodyQuerySelector);
        body_active.classList.toggle(ClassShowBody);
        body.classList.toggle(ClassShowBody);
      }
    };
  });
}

function ShowMobileMenu() {
  hamburger = document.querySelector(".hamburger");
  menu = document.querySelector(".mobile-menu");

  hamburger.onclick = function () {
    menu.classList.toggle("active-menu");
    hamburger.classList.toggle("active-hamburger");
  };
}