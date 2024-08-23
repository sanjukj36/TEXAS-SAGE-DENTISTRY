document.addEventListener('DOMContentLoaded', function () {
    const mainNav = document.querySelector('.main-nav');
    const topNav = document.querySelector('.top-nav');
    const logo = document.querySelector('.logo img');
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');


    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            topNav.classList.add('scrolled');
            mainNav.classList.add('scrolled');
            logo.style.visibility = 'visible'; 
        } else {
            topNav.classList.remove('scrolled');
            mainNav.classList.remove('scrolled');
            logo.style.visibility = 'hidden'; 
        }
    });


    menuIcon.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const video = document.getElementById('background-video');
    const button = document.getElementById('sound-toggle');
    const icon = button.querySelector('i');

    button.addEventListener('click', function () {
        if (video.muted) {
            video.muted = false;
            icon.classList.remove('fa-volume-off');
            icon.classList.add('fa-volume-high');
        } else {
            video.muted = true;
            icon.classList.remove('fa-volume-high');
            icon.classList.add('fa-volume-off');
        }
    });
});

const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const imgGroupWrapper = document.querySelector('.instagram-img-group-wrapper');

    let currentIndex = 0;

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            imgGroupWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
        toggleButtons();
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex < imgGroupWrapper.children.length - 1) {
            currentIndex++;
            imgGroupWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
        toggleButtons();
    });

    function toggleButtons() {
        if (currentIndex === 0) {
            prevBtn.style.display = 'none';
        } else {
            prevBtn.style.display = 'block';
        }

        if (currentIndex === imgGroupWrapper.children.length - 1) {
            nextBtn.style.display = 'none';
        } else {
            nextBtn.style.display = 'block';
        }
    }


    toggleButtons();
  