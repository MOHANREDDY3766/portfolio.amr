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
    darkModeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });

    // Load theme preference
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
    }

    // Contact form validation
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Perform form validation
        alert('Message sent!');
        contactForm.reset();
    });

    // Project modal handling
    window.openProjectModal = function(projectId) {
        const projectDetails = {
            'project1': {
                title: 'Smart Traffic Management System',
                description: 'A project involving cloud computing, machine learning, and deep learning to manage traffic efficiently.',
                link: '#'
            },
            'project2': {
                title: 'RSA Algorithm Integration in Cloud Computing',
                description: 'A project that integrates RSA algorithm for secure data transmission in cloud computing.',
                link: '#'
            },
            'project3': {
                title: 'Virtual Voice Assistant',
                description: 'An AI-based voice assistant capable of understanding and executing user commands.',
                link: '#'
            },
            'project4': {
                title: 'E-Commerce Platform for Furniture',
                description: 'A comprehensive e-commerce platform built using modern web development technologies.',
                link: '#'
            },
            'project5': {
                title: 'Enhanced Image Recognition for Early Detection of Plant Diseases',
                description: 'A machine learning project aimed at early detection of plant diseases through enhanced image recognition techniques.',
                link: '#'
            }
        };
        const project = projectDetails[projectId];
        if (project) {
            document.getElementById('project-details').innerHTML = `
                <h2>${project.title}</h2>
                <p>${project.description}</p>
                <a href="${project.link}" target="_blank">View Project</a>
            `;
            document.getElementById('project-modal').style.display = 'block';
        }
    };

    window.closeProjectModal = function() {
        document.getElementById('project-modal').style.display = 'none';
    };
});

function downloadResume() {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/drive/folders/1-TwAanf3HcDRwt5gFpJigNI28khzXXml?usp=sharing';
    link.download = 'Mohan_Reddy_Aeturi_Resume.pdf';
    link.click();
}
