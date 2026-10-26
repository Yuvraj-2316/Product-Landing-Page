
"use strict";

// ========================================
// MOBILE NAVIGATION
// ========================================

const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");

if (menuToggle && siteNav) {
    menuToggle.addEventListener("click", () => {
        const isOpen = siteNav.classList.toggle("is-open");

        menuToggle.setAttribute("aria-expanded", String(isOpen));

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation" : "Open navigation"
        );
    });

    siteNav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            siteNav.classList.remove("is-open");

            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation");
        });
    });
}

// ========================================
// PRODUCT UPDATES SIGNUP FORM
// ========================================

const updatesForm = document.querySelector("#updates-form");

if (updatesForm) {
    const emailInput = document.querySelector("#email");
    const consentInput = document.querySelector("#consent");
    const message = document.querySelector("#form-message");

    if (emailInput && consentInput && message) {
        updatesForm.addEventListener("submit", (event) => {
            event.preventDefault();

            // Clear the previous message.
            message.textContent = "";
            message.className = "form-message";

            // Check that an email has been entered.
            if (!emailInput.value.trim()) {
                message.textContent =
                    "Please enter your email address.";

                message.classList.add("message-error");
                emailInput.focus();
                return;
            }

            // Check the email format.
            if (!emailInput.validity.valid) {
                message.textContent =
                    "Please enter a valid email address, such as you@example.com.";

                message.classList.add("message-error");
                emailInput.focus();
                return;
            }

            // Check the consent checkbox.
            if (!consentInput.checked) {
                message.textContent =
                    "Please tick the checkbox to confirm you understand this is a demo signup.";

                message.classList.add("message-error");
                consentInput.focus();
                return;
            }

            // Show a successful DEMO submission.
            // No email is sent or stored.
            message.textContent =
                "You're all set! Your demo signup was successful. Your email has not been saved or sent anywhere.";

            message.classList.add("message-success");

            // Keep the email and checkbox visible so the
            // confirmation does not appear disconnected.
        });
    }
}

// ========================================
// BACK TO TOP
// ========================================

document.querySelectorAll("[data-top]").forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
