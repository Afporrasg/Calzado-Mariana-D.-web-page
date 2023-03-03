const hamburger = document.querySelector('.hamburger');
const navul =document.querySelector('.nav-ul');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active')
    navul.classList.toggle('active')
})

document.querySelectorAll('.nav-a').forEach(n => n.addEventListener('click', function(){
    hamburger.classList.remove('active');
    navul.classList.toggle('active')
}))

//animations

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) { 
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const hiddenBlur = document.querySelectorAll('.hiddenb');
hiddenBlur.forEach((el) => observer.observe(el));

const slideRight = document.querySelectorAll('.slide-right');
slideRight.forEach((el) => observer.observe(el));

const slideLeft = document.querySelectorAll('.slide-left');
slideLeft.forEach((el) => observer.observe(el));