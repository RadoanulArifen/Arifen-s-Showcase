const projects = [
  {
    title: "Result Checker",
    description:
      "A Result Checker is a web-based application that allows users, such as students, to easily access their academic results online. By entering details like their student ID and semester ID, the system retrieves results from a secure database or API and displays them in a user-friendly format. This tool eliminates the hassle of manual result distribution and ensures accuracy, accessibility, and convenience for both students and administrators.",
    image: "./assets/img/result crecker.png",
    link: "https://jsgcnlry9rhfowhi.vercel.app/",
    github: "https://github.com/RadoanulArifen/Result-Checker",
    technologies: ["HTML", "CSS", "Typescript"],
  },
  {
    title: "EduCare",
    description:
      "Educare is an educational website designed to provide quality learning experiences through interactive video lessons, quizzes, live classes, and downloadable resources. With a simple and user-friendly interface, Educare offers a variety of courses and study materials to support school, college, and exam preparation. The platform focuses on making education accessible, engaging, and effective for learners at all levels.",
    image: "./assets/img/EduCare.png",
    link: "https://radoanularifen.github.io/EduCare/",
    github: "https://github.com/RadoanulArifen/EduCare",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "NexBank",
    description:
      "Nexbank is a comprehensive bank management system designed to streamline and automate banking operations. It provides core functionalities such as account management, transaction processing, loan management, and customer relationship management. With a secure and user-friendly interface, Nexbank ensures efficient financial operations, enhanced customer service, and seamless integration with modern banking needs.",
    image: "./assets/img/nexbank.jpg",
    link: "https://github.com/RadoanulArifen/NexBank",
    github: "https://github.com/RadoanulArifen/NexBank",
    technologies: ["JAVA"],
  },
  {
    title: "ControlHub",
    description: "ControlHub is an intuitive admin dashboard designed for efficient management and monitoring of data and operations. It provides real-time analytics, user management, customizable widgets, and a clean interface to streamline decision-making. ControlHub ensures administrators have complete control and visibility over their systems for improved efficiency and productivity.",
    image: "./assets/img/admin dashboard.png",
    link: "https://radoanularifen.github.io/ControlHub/",
    github: "https://github.com/RadoanulArifen/ControlHub",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Foodie",
    description: "Foodie is an intuitive platform designed for food enthusiasts to explore, order, and enjoy their favorite cuisines. It offers a seamless experience with features like restaurant browsing, online food ordering, personalized recommendations, and real-time delivery tracking. Foodie connects users with a variety of dining options, ensuring convenience and satisfaction for every meal.",
    image: "./assets/img/foodie.png",
    link: "https://radoanularifen.github.io/Foodie/",
    github: "https://github.com/RadoanulArifen/Foodie",
    technologies: ["HTML","CSS","JavaScript","Next.js", "GraphQL", "MongoDB"],
  },
  {
    title: "EcoHaven",
    description: "EcoHaven is a sustainability-focused platform designed to promote eco-friendly living and environmental awareness. It serves as a hub for resources, tips, and products that support sustainable practices, such as reducing waste, conserving energy, and adopting green technologies. EcoHaven inspires individuals and communities to make environmentally conscious choices for a greener future",
    image: "./assets/img/Ecohaven.png",
    link: "#",
    github: "https://github.com/RadoanulArifen/EcoHaven",
    technologies: ["Html", "Css", "JavaScript","PHP","MySQL"],
  },
  {
    title: "SavoryBites",
    description: "SavoryBites is a modern restaurant website designed to showcase delicious cuisines and provide a seamless dining experience. It features an attractive menu display, online reservations, and food ordering options. With user-friendly navigation and mouthwatering visuals, SavoryBites connects food lovers with their favorite dishes and offers an unforgettable culinary journey.",
    image: "./assets/img/SavoryBites.png",
    link: "https://radoanularifen.github.io/SavoryBites/",
    github: "https://github.com/RadoanulArifen/SavoryBites",
    technologies: ["HTML", "css", "JavaScript"],
  },
];

function createProjectCard(project) {
  const card = document.createElement("div");
  card.className = "project-card";
  card.innerHTML = `
        <img src="${project.image}" alt="${
    project.title
  }" class="project-image">
        <div class="project-info">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-technologies">
                ${project.technologies
                  .map((tech) => `<span class="tech-tag">${tech}</span>`)
                  .join("")}
            </div>
            <div class="project-links">
                <a href="${project.link}" class="project-link">View Project</a>
                <a href="${
                  project.github
                }" class="github-link" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </a>
            </div>
        </div>
    `;
  return card;
}

function animateCards() {
  const cards = document.querySelectorAll(".project-card");
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.style.animation = `fadeInUp 0.5s ease forwards, float 6s ease-in-out infinite`;
      card.style.animationDelay = `${index * 100}ms`;
    }, index * 100);
  });
}

projects.forEach((project) => {
  const card = createProjectCard(project);
  projectGrid.appendChild(card);
});

setTimeout(animateCards, 100);

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  updateThemeIcon();
});

function updateThemeIcon() {
  const isDarkMode = !document.body.classList.contains("light-mode");
  themeToggle.innerHTML = isDarkMode
    ? '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"/></svg>'
    : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path fill-rule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clip-rule="evenodd" /></svg>';
}

// Intersection Observer for scroll animations

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animation = `fadeInUp 0.5s ease forwards, float 6s ease-in-out infinite`;
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll(".project-card").forEach((card) => {
  observer.observe(card);
});

// Initial theme icon update
updateThemeIcon();
