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
                description: 'This project integrates the RSA algorithm for secure communication in cloud computing environments.',
                link: '#'
            },
            'project3': {
                title: 'Virtual Voice Assistant',
                description: 'An AI-based virtual voice assistant capable of performing various tasks and answering queries.',
                link: '#'
            },
            'project4': {
                title: 'E-Commerce Platform for Furniture',
                description: 'A fully-featured e-commerce platform developed for buying and selling furniture online.',
                link: '#'
            },
            'project5': {
                title: 'Enhanced Image Recognition for Early Detection of Plant Diseases',
                description: 'Using machine learning and deep learning to improve early detection of plant diseases.',
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
    link.href = 'resume.pdf';  // Update with the correct path to your resume
    link.download = 'Mohan_Reddy_Aeturi_Resume.pdf';
    link.click();
}
