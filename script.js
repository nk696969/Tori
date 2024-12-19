window.addEventListener('scroll', function() {
    const textContainers = document.querySelectorAll('.text-container');
    const overviewText = document.querySelector('.overview-text');
    const buttonContainer = document.querySelector('.button-container');

    textContainers.forEach((container) => {
        const sectionTop = container.offsetTop;
        const sectionHeight = container.offsetHeight;
        const scrollPosition = window.scrollY + window.innerHeight;

        if (scrollPosition > sectionTop + sectionHeight / 2) {
            container.style.opacity = 1;
            container.style.transform = 'translateY(0)';
        }
    });

    const checkFadeIn = (element) => {
        const sectionTop = element.offsetTop;
        const sectionHeight = element.offsetHeight;
        const scrollPosition = window.scrollY + window.innerHeight;

        if (scrollPosition > sectionTop + sectionHeight / 2) {
            element.style.opacity = 1;
            element.style.transform = 'translateY(0)';
        }
    };

    checkFadeIn(overviewText);
    checkFadeIn(buttonContainer);
});
