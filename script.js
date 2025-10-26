// Add some interactive terminal effects
document.addEventListener('DOMContentLoaded', function() {
    // Simulate typing effect for commands
    const commands = document.querySelectorAll('.command');
    commands.forEach((cmd, index) => {
        setTimeout(() => {
            cmd.style.opacity = '1';
        }, index * 500);
    });

    // Add glitch effect to ASCII art
    const asciiArt = document.querySelector('.ascii-art');
    setInterval(() => {
        if (Math.random() < 0.1) {
            asciiArt.classList.add('glitch');
            setTimeout(() => {
                asciiArt.classList.remove('glitch');
            }, 2000);
        }
    }, 5000);

    // Add hover effects to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.borderColor = '#44ff44';
        });
        card.addEventListener('mouseleave', function() {
            this.style.borderColor = '#4444ff';
        });
    });

    // Simulate terminal commands on click
    const prompts = document.querySelectorAll('.prompt');
    prompts.forEach(prompt => {
        prompt.addEventListener('click', function() {
            this.style.backgroundColor = 'rgba(68, 68, 255, 0.1)';
            setTimeout(() => {
                this.style.backgroundColor = 'transparent';
            }, 200);
        });
    });
});
