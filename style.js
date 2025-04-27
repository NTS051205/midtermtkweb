// Navigation Module
const Navigation = {
    init() {
        const navToggle = document.getElementById('navToggle');
        const navLinks = document.querySelector('.nav-links');

        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        document.addEventListener('click', (e) => {
            if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
                navLinks.classList.remove('active');
            }
        });

        this.initSmoothScroll();
    },

    initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    const navLinks = document.querySelector('.nav-links');
                    if (navLinks.classList.contains('active')) {
                        navLinks.classList.remove('active');
                    }
                }
            });
        });
    }
};

// Animation Module
const Animation = {
    init() {
        this.initScrollAnimations();
        this.initCounterAnimations();
    },

    initScrollAnimations() {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in');
                    }
                });
            },
            { threshold: 0.1 }
        );

        document.querySelectorAll('.animate-on-scroll').forEach(element => {
            observer.observe(element);
        });
    },

    initCounterAnimations() {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.animateCounter(entry.target, parseInt(entry.target.dataset.target));
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.5 }
        );

        document.querySelectorAll('.counter').forEach(counter => {
            observer.observe(counter);
        });
    },

    animateCounter(element, target) {
        let current = 0;
        const increment = target / 100;
        const timer = setInterval(() => {
            current += increment;
            element.textContent = Math.floor(current);
            if (current >= target) {
                element.textContent = target;
                clearInterval(timer);
            }
        }, 20);
    }
};

// Theme Module
const Theme = {
    init() {
        this.initTheme();
    },

    initTheme() {
        const theme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', theme);
        
        const themeToggle = document.querySelector('.theme-toggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                const currentTheme = document.documentElement.getAttribute('data-theme');
                const newTheme = currentTheme === 'light' ? 'dark' : 'light';
                document.documentElement.setAttribute('data-theme', newTheme);
                localStorage.setItem('theme', newTheme);
            });
        }
    }
};

// Profile Module
const Profile = {
    init() {
        this.initProfileMenu();
        this.initAvatarChange();
        this.initFormSubmissions();
    },

    initProfileMenu() {
        const menuItems = document.querySelectorAll('.profile__menu-item');
        const sections = document.querySelectorAll('.profile__section');

        menuItems.forEach(item => {
            item.addEventListener('click', () => {
                const target = item.getAttribute('href').substring(1);
                menuItems.forEach(i => i.classList.remove('active'));
                sections.forEach(s => s.classList.remove('active'));
                item.classList.add('active');
                document.getElementById(target).classList.add('active');
            });
        });
    },

    initAvatarChange() {
        const changeAvatarBtn = document.querySelector('.change-avatar-btn');
        const profileAvatar = document.querySelector('.profile__avatar img');

        if (changeAvatarBtn && profileAvatar) {
            changeAvatarBtn.addEventListener('click', () => {
                const input = document.createElement('input');
                input.type = 'file';
                input.accept = 'image/*';
                
                input.onchange = (e) => {
                    const file = e.target.files[0];
                    if (file) {
                        const reader = new FileReader();
                        reader.onload = (event) => {
                            profileAvatar.src = event.target.result;
                        };
                        reader.readAsDataURL(file);
                    }
                };
                
                input.click();
            });
        }
    },

    initFormSubmissions() {
        const profileForm = document.querySelector('.profile__form');
        const settingsForm = document.querySelector('.settings__form');

        if (profileForm) {
            profileForm.addEventListener('submit', (e) => {
                e.preventDefault();
                // Handle profile form submission
            });
        }

        if (settingsForm) {
            settingsForm.addEventListener('submit', (e) => {
                e.preventDefault();
                // Handle settings form submission
            });
        }
    }
};

// Initialize all modules when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    Navigation.init();
    Animation.init();
    Theme.init();
    Profile.init();

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Close mobile menu if open
                const navLinks = document.querySelector('.nav-links');
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }
            }
        });
    });

    // Add scroll animation for feature cards
    const cards = document.querySelectorAll('.feature-card');
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        },
        {
            threshold: 0.1
        }
    );

    cards.forEach(card => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });

    // Sample course data - would typically come from a backend
    const sampleCourses = [
        {
            title: 'Web Development Fundamentals',
            description: 'Learn HTML, CSS, and JavaScript',
            image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085'
        },
        {
            title: 'Data Science Essentials',
            description: 'Master data analysis and visualization',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71'
        },
        {
            title: 'Mobile App Development',
            description: 'Build iOS and Android applications',
            image: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb'
        }
    ];

    // Populate course grid
    const courseGrid = document.querySelector('.course-grid');
    if (courseGrid) {
        sampleCourses.forEach(course => {
            const courseCard = document.createElement('div');
            courseCard.className = 'feature-card';
            courseCard.innerHTML = `
                <img src="${course.image}" alt="${course.title}" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px;">
                <h3>${course.title}</h3>
                <p>${course.description}</p>
                <a href="course-detail.html" class="cta-button" style="font-size: 0.9rem; padding: 0.5rem 1rem;">Learn More</a>
            `;
            courseGrid.appendChild(courseCard);
        });
    }

    // Animations on scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.animate-on-scroll');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    };

    // Smooth navbar background on scroll
    const navbar = document.querySelector('.navbar');
    const smoothNavbar = () => {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    };

    // Particles background effect
    const createParticles = () => {
        const particles = document.createElement('div');
        particles.className = 'particles';
        document.body.appendChild(particles);

        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.setProperty('--x', `${Math.random() * 100}%`);
            particle.style.setProperty('--y', `${Math.random() * 100}%`);
            particle.style.setProperty('--duration', `${Math.random() * 20 + 10}s`);
            particle.style.setProperty('--delay', `${Math.random() * 10}s`);
            particles.appendChild(particle);
        }
    };

    // Initialize effects
    window.addEventListener('scroll', () => {
        animateOnScroll();
        smoothNavbar();
    });

    window.addEventListener('load', () => {
        animateOnScroll();
        createParticles();
    });

    // Handle Profile Menu Tabs
    const menuItems = document.querySelectorAll('.profile__menu-item');
    const sections = document.querySelectorAll('.profile__section');

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            const target = item.getAttribute('href').substring(1);
            
            // Remove active class from all menu items and sections
            menuItems.forEach(i => i.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));
            
            // Add active class to clicked menu item and corresponding section
            item.classList.add('active');
            document.getElementById(target).classList.add('active');
        });
    });

    // Handle Avatar Change
    const changeAvatarBtn = document.querySelector('.change-avatar-btn');
    const profileAvatar = document.querySelector('.profile__avatar img');

    if (changeAvatarBtn) {
        changeAvatarBtn.addEventListener('click', () => {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/*';
            
            input.onchange = (e) => {
                const file = e.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = (event) => {
                        profileAvatar.src = event.target.result;
                        // Here you would typically upload the image to your server
                    };
                    reader.readAsDataURL(file);
                }
            };
            
            input.click();
        });
    }

    // Handle Form Submissions
    const profileForm = document.querySelector('.profile__form');
    const settingsForm = document.querySelector('.settings__form');

    if (profileForm) {
        profileForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Here you would typically send the form data to your server
            alert('Profile updated successfully!');
        });
    }

    if (settingsForm) {
        settingsForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Here you would typically send the settings data to your server
            alert('Settings saved successfully!');
        });
    }

    // Handle Logout
    const logoutBtn = document.querySelector('.logout');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            // Here you would typically handle the logout process
            window.location.href = 'index.html';
        });
    }

    // Initialize active section based on URL hash
    window.addEventListener('load', () => {
        const hash = window.location.hash || '#personal-info';
        const activeMenuItem = document.querySelector(`[href="${hash}"]`);
        const activeSection = document.querySelector(hash);
        
        if (activeMenuItem && activeSection) {
            menuItems.forEach(i => i.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));
            
            activeMenuItem.classList.add('active');
            activeSection.classList.add('active');
        }
    });

    // Handle course progress (for My Courses section)
    function initializeCourseProgress() {
        const courses = [
            {
                id: 1,
                title: 'Web Development Fundamentals',
                progress: 75,
                image: 'assets/img/course-1.jpg',
                duration: '8 weeks',
                level: 'Intermediate'
            },
            // Add more courses as needed
        ];

        const coursesGrid = document.querySelector('.courses__grid');
        if (coursesGrid) {
            coursesGrid.innerHTML = courses.map(course => `
                <div class="course-card">
                    <img src="${course.image}" alt="${course.title}" class="course-image">
                    <div class="course-info">
                        <h3 class="course-title">${course.title}</h3>
                        <div class="progress-bar">
                            <div class="progress" style="width: ${course.progress}%"></div>
                        </div>
                        <div class="course-meta">
                            <span class="course-duration">
                                <i class='bx bx-time'></i> ${course.duration}
                            </span>
                            <span class="course-level ${course.level.toLowerCase()}">
                                ${course.level}
                            </span>
                        </div>
                    </div>
                </div>
            `).join('');
        }
    }

    // Initialize course progress when the page loads
    initializeCourseProgress();

    // Handle achievements section
    function initializeAchievements() {
        const achievements = [
            {
                id: 1,
                title: 'Quick Learner',
                description: 'Completed 5 courses in one month',
                icon: 'bx bx-medal'
            },
            // Add more achievements as needed
        ];

        const achievementsGrid = document.querySelector('.achievements__grid');
        if (achievementsGrid) {
            achievementsGrid.innerHTML = achievements.map(achievement => `
                <div class="achievement-card">
                    <i class='${achievement.icon}'></i>
                    <h3>${achievement.title}</h3>
                    <p>${achievement.description}</p>
                </div>
            `).join('');
        }
    }

    // Initialize achievements when the page loads
    initializeAchievements();
});

// Check login status and update UI
document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.getElementById('loginButton');
    const userProfile = document.getElementById('userProfile');
    const userAvatar = document.getElementById('userAvatar');
    const userName = document.getElementById('userName');
    const userEmail = document.getElementById('userEmail');
    const logoutButton = document.getElementById('logoutButton');

    // Check if user is logged in
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
        // Hide login button and show profile
        if (loginButton) loginButton.style.display = 'none';
        if (userProfile) userProfile.style.display = 'block';

        // Update user information
        if (userAvatar) userAvatar.src = currentUser.avatar || 'assets/img/avatar/avatar-1.png';
        if (userName) userName.textContent = currentUser.name || currentUser.email.split('@')[0];
        if (userEmail) userEmail.textContent = currentUser.email;

        // Handle logout
        if (logoutButton) {
            logoutButton.addEventListener('click', function(e) {
                e.preventDefault();
                localStorage.removeItem('currentUser');
                window.location.reload();
            });
        }
    } else {
        // Show login button and hide profile
        if (loginButton) loginButton.style.display = 'block';
        if (userProfile) userProfile.style.display = 'none';
    }
});

// Function to update cart count
function updateCartCount() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const cartCount = cartItems.length;

    // Update all cart count elements
    const cartCountElements = document.querySelectorAll('.cart-count');
    cartCountElements.forEach(element => {
        element.textContent = cartCount;
    });
}

// Update cart count when page loads
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
});

// Update cart count when storage changes
window.addEventListener('storage', function(e) {
    if (e.key === 'cartItems') {
        updateCartCount();
    }
});

// Hero Slideshow
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const indicators = document.querySelectorAll('.indicator');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        indicators.forEach(indicator => indicator.classList.remove('active'));
        
        slides[index].classList.add('active');
        indicators[index].classList.add('active');
        currentSlide = index;
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    // Event listeners
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => showSlide(index));
    });

    // Auto slide every 5 seconds
    setInterval(nextSlide, 5000);
});