const projects = [
    {
        title: "Project 1",
        description: "A brief description of Project 1 and its key features.",
        image: "https://picsum.photos/300/200?random=1",
        link: "#",
        github: "https://github.com/yourusername/project1",
        technologies: ["React", "Node.js", "MongoDB","python"]
    },
    {
        title: "Project 2",
        description: "An overview of Project 2 and what makes it unique.",
        image: "https://picsum.photos/300/200?random=2",
        link: "#",
        github: "https://github.com/yourusername/project2",
        technologies: ["Vue.js", "Express", "PostgreSQL"]
    },
    {
        title: "Project 3",
        description: "Highlighting the main aspects of Project 3 and its impact.",
        image: "https://picsum.photos/300/200?random=3",
        link: "#",
        github: "https://github.com/yourusername/project3",
        technologies: ["Angular", "Django", "MySQL"]
    },
    {
        title: "Project 4",
        description: "Detailing the challenges and solutions in Project 4.",
        image: "https://picsum.photos/300/200?random=4",
        link: "#",
        github: "https://github.com/yourusername/project4",
        technologies: ["Next.js", "GraphQL", "MongoDB"]
    },
    {
        title: "Project 5",
        description: "Exploring the innovative features of Project 5.",
        image: "https://picsum.photos/300/200?random=5",
        link: "#",
        github: "https://github.com/yourusername/project5",
        technologies: ["React Native", "Firebase", "Redux"]
    },
    {
        title: "Project 6",
        description: "Showcasing the user-centric design of Project 6.",
        image: "https://picsum.photos/300/200?random=6",
        link: "http://studentportal.diu.edu.bd/",
        github: "https://github.com/yourusername/project6",
        technologies: ["Svelte", "Fastify", "SQLite"]
    }
];

function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
        <img src="${project.image}" alt="${project.title}" class="project-image">
        <div class="project-info">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-technologies">
                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            <div class="project-links">
                <a href="${project.link}" class="project-link">View Project</a>
                <a href="${project.github}" class="github-link" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </a>
            </div>
        </div>
    `;
    return card;
}

function animateCards() {
    const cards = document.querySelectorAll('.project-card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.animation = `fadeInUp 0.5s ease forwards, float 6s ease-in-out infinite`;
            card.style.animationDelay = `${index * 100}ms`;
        }, index * 100);
    });
}

projects.forEach(project => {
    const card = createProjectCard(project);
    projectGrid.appendChild(card);
});

setTimeout(animateCards, 100);

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    updateThemeIcon();
});

function updateThemeIcon() {
    const isDarkMode = !document.body.classList.contains('light-mode');
    themeToggle.innerHTML = isDarkMode
        ? '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"/></svg>'
        : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path fill-rule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clip-rule="evenodd" /></svg>';
}

// Intersection Observer for scroll animations

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = `fadeInUp 0.5s ease forwards, float 6s ease-in-out infinite`;
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.project-card').forEach(card => {
    observer.observe(card);
});

// Initial theme icon update
updateThemeIcon();
