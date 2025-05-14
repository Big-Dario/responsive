function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }
}

function openForm() {
    document.getElementById("enquiryForm").style.display = "block";
}

function closeForm() {
    document.getElementById("enquiryForm").style.display = "none";
}

function submitEnquiryForm(event) {
    event.preventDefault();
    const name = document.getElementById("enquiry-name").value;
    const email = document.getElementById("enquiry-email").value;
    const message = document.getElementById("enquiry-message").value;
    // Here you would typically send this data to a server
    console.log("Enquiry Submitted:", { name, email, message });
    alert("Enquiry submitted successfully!");
    closeForm();
    document.getElementById("enquirySubmitForm").reset();
}

function submitContactForm(event) {
    event.preventDefault();
    const name = document.getElementById("contact-name").value;
    const email = document.getElementById("contact-email").value;
    const message = document.getElementById("contact-message").value;
    // Here you would typically send this data to a server
    console.log("Contact Form Submitted:", { name, email, message });
    alert("Message sent successfully!");
    document.querySelector('#contact form').reset();
}

function showDestinations(country) {
    const countrySections = document.querySelectorAll('.country-section');
    countrySections.forEach(section => {
        section.style.display = 'none';
    });
    const selectedCountrySection = document.getElementById(country);
    if (selectedCountrySection) {
        selectedCountrySection.style.display = 'block';
    }
}

// Questionnaire Logic
const steps = document.querySelectorAll('.questionnaire .step');
const nextBtn = document.getElementById('nextBtn');
let currentStep = 0;

function showStep(index) {
    steps.forEach((step, i) => {
        step.classList.remove('active');
        if (i === index) {
            step.classList.add('active');
        }
    });
    if (currentStep < steps.length - 1) {
        nextBtn.innerText = 'Next';
    } else {
        nextBtn.innerText = 'Submit';
    }
}

function nextStep() {
    if (currentStep < steps.length - 1) {
        currentStep++;
        showStep(currentStep);
    } else {
        // Handle form submission here
        const formData = new FormData(document.getElementById('bookingForm'));
        const data = {};
        for (let [key, value] of formData.entries()) {
            data[key] = value;
        }
        console.log('Booking Form Data:', data);
        alert('Booking enquiry submitted!');
        document.getElementById('bookingForm').reset();
        currentStep = 0;
        showStep(currentStep);
    }
}

if (nextBtn) {
    nextBtn.addEventListener('click', nextStep);
}

// Initialize the first step of the questionnaire
showStep(currentStep);

// Initially show the 'home' section
document.addEventListener('DOMContentLoaded', () => {
    showSection('home');
    showDestinations('kenya'); // Show Kenya destinations by default
});
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
    function toggleDetails(id) {
            var detailsDiv = document.getElementById(id);
            if (detailsDiv.style.display === 'none') {
                detailsDiv.style.display = 'block';
            } else {
                detailsDiv.style.display = 'none';
            }
        }