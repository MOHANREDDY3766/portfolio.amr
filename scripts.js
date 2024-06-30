document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Dark mode toggle
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

    // Handle contact form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            alert('Your message has been sent. We will contact you soon.');
            window.location.href = `mailto:aeturimohanreddy@gmail.com?subject=Contact from ${name}&body=${message}`;
        } else {
            alert('Please fill in all fields.');
        }
    });

    // Project modal handling
    const projectModal = document.getElementById('project-modal');
    const projectDetails = document.getElementById('project-details');
    const closeModalButton = document.querySelector('.close');

    window.openProjectModal = function(projectId) {
        let projectContent = '';
        switch (projectId) {
            case 'project1':
                projectContent = '<h2>Smart Traffic Management System</h2><p>Details about Smart Traffic Management System...</p>';
                break;
            case 'project2':
                projectContent = '<h2>RSA Algorithm Integration in Cloud Computing</h2><p>Details about RSA Algorithm Integration in Cloud Computing...</p>';
                break;
            case 'project3':
                projectContent = '<h2>Virtual Voice Assistant</h2><p>Details about Virtual Voice Assistant...</p>';
                break;
            case 'project4':
                projectContent = '<h2>E-Commerce Platform for Furniture</h2><p>Details about E-Commerce Platform for Furniture...</p>';
                break;
            case 'project5':
                projectContent = '<h2>Enhanced Image Recognition for Early Detection of Plant Diseases</h2><p>Details about Enhanced Image Recognition for Early Detection of Plant Diseases...</p>';
                break;
            default:
                projectContent = '<h2>Project Details</h2><p>No details available.</p>';
                break;
        }
        projectDetails.innerHTML = projectContent;
        projectModal.style.display = 'block';
    };

    window.closeProjectModal = function() {
        projectModal.style.display = 'none';
    };

    // Close modal when clicking outside of it
    window.onclick = function(event) {
        if (event.target === projectModal) {
            projectModal.style.display = 'none';
        }
    };
});
