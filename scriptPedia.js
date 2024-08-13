// Function to handle tab button clicks (PC/Large screens)
function openSection(evt, sectionName) {
    var i, faqAccordion, faqTabButton;

    // Hide all accordion sections
    faqAccordion = document.getElementsByClassName("faq-accordion");
    for (i = 0; i < faqAccordion.length; i++) {
        faqAccordion[i].style.display = "none";
    }

    // Remove active class from all tab buttons
    faqTabButton = document.getElementsByClassName("faq-tab-button");
    for (i = 0; i < faqTabButton.length; i++) {
        faqTabButton[i].className = faqTabButton[i].className.replace(" active", "");
    }

    // Show the current section and add active class to the button
    document.getElementById(sectionName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Function to handle dropdown selection (Mobile/Small screens)
function openSectionDropdown(evt) {
    var sectionName = evt.target.value;
    var faqAccordion = document.getElementsByClassName("faq-accordion");

    // Hide all sections
    for (var i = 0; i < faqAccordion.length; i++) {
        faqAccordion[i].style.display = "none";
    }

    // Show the selected section
    document.getElementById(sectionName).style.display = "block";
}

// Function to handle accordion behavior for each question
document.querySelectorAll('.faq-accordion-button').forEach(button => {
    button.addEventListener('click', () => {
        const accordionContent = button.nextElementSibling;

        // Toggle the active class on the button
        button.classList.toggle('active');

        if (button.classList.contains('active')) {
            accordionContent.style.display = 'block';
        } else {
            accordionContent.style.display = 'none';
        }
    });
});

// Initial setup to show the first section
document.addEventListener("DOMContentLoaded", function() {
    // Display the first section by default
    document.getElementsByClassName('faq-tab-button')[0].click();
    
    // For small screens, show the first section in the dropdown
    if (window.innerWidth <= 768) {
        document.querySelector('.faq-dropdown').selectedIndex = 0;
        openSectionDropdown({ target: { value: 'general' } });
    }
});
