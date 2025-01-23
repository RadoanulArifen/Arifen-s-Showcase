document.addEventListener('DOMContentLoaded', () => {
    const filterSelect = document.getElementById('category-filter');
    const certificates = document.querySelectorAll('.certificate');
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;

    filterSelect.addEventListener('change', (e) => {
        const selectedCategory = e.target.value;

        certificates.forEach(certificate => {
            if (selectedCategory === 'all' || certificate.dataset.category === selectedCategory) {
                certificate.style.display = 'block';
            } else {
                certificate.style.display = 'none';
            }
        });
    });

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        updateThemeIcon();
    });

    function updateThemeIcon() {
        const isDarkMode = !body.classList.contains('light-mode');
        themeToggle.innerHTML = isDarkMode
            ? '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>'
            : '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>';
    }

    // Initialize theme icon
    updateThemeIcon();
});

