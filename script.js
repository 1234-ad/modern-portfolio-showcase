// Smooth scrolling and interactive elements
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth reveal animation for sections
    const sections = document.querySelectorAll('.section');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
    
    // Add click animation to skills
    const skills = document.querySelectorAll('.skill');
    skills.forEach(skill => {
        skill.addEventListener('click', function() {
            this.style.transform = 'scale(1.1)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
        });
    });
    
    // Add hover effect to experience items
    const experienceItems = document.querySelectorAll('.experience-item, .education-item');
    experienceItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.background = '#e8f4fd';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.background = '#f8f9fa';
        });
    });
    
    // Add typing effect to the title
    const title = document.querySelector('.title');
    const titleText = title.textContent;
    title.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
        if (i < titleText.length) {
            title.textContent += titleText.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };
    
    setTimeout(typeWriter, 1000);
    
    // Add floating animation to profile icon
    const profileIcon = document.querySelector('.profile-image i');
    setInterval(() => {
        profileIcon.style.transform = 'translateY(-5px)';
        setTimeout(() => {
            profileIcon.style.transform = 'translateY(0)';
        }, 1000);
    }, 2000);
    
    // Add progress bar animation for skills
    const skillCategories = document.querySelectorAll('.skill-category');
    skillCategories.forEach((category, index) => {
        setTimeout(() => {
            category.style.opacity = '1';
            category.style.transform = 'translateY(0)';
        }, index * 200);
    });
    
    // Initialize skill categories with hidden state
    skillCategories.forEach(category => {
        category.style.opacity = '0';
        category.style.transform = 'translateY(20px)';
        category.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
});