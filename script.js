// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {

    // --- Hamburger Menu Toggle ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Close menu when a link is clicked
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }
            });
        });
    }


    // --- Scroll to Top Button ---
    const scrollTopBtn = document.getElementById('scrollTopBtn');

    if (scrollTopBtn) {
        // Show or hide the button based on scroll position
        window.onscroll = function() {
            scrollFunction();
        };

        function scrollFunction() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                scrollTopBtn.style.display = "block";
                scrollTopBtn.style.opacity = "1";
            } else {
                scrollTopBtn.style.opacity = "0";
                // Hide the button after the transition
                setTimeout(() => {
                    if (scrollTopBtn.style.opacity === "0") {
                       scrollTopBtn.style.display = "none";
                    }
                }, 300);
            }
        }

        // When the user clicks on the button, scroll to the top of the document
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({top: 0, behavior: 'smooth'});
        });
    }

    // --- Hide Navbar on Scroll Down, Show on Scroll Up ---
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');

    if(navbar) {
        window.addEventListener("scroll", function() {
            let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
            if (currentScroll > lastScrollTop) {
                // Scroll Down
                navbar.style.top = "-80px"; // Hide navbar
            } else {
                // Scroll Up
                navbar.style.top = "0"; // Show navbar
            }
            lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
        }, false);
    }
});
