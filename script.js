var menuLogo = document.querySelector('#menu-logo');
var closeLogo = document.querySelector('#close-logo');
var menuOverlay = document.querySelector('#menu-scr-overlay');
var menuHeadings = document.querySelectorAll('#menu-headings h2');
// console.log(menuHeadings);

var flag = 0;

closeLogo.style.display = 'none';

menuLogo.addEventListener('click', function () {
    if (flag === 0) {
        menuLogo.style.display = 'none';
        closeLogo.style.display = 'block';
        menuOverlay.style.right = '0';
        flag = 1;
    }
});

closeLogo.addEventListener('click', function () {
    if (flag === 1) {
        closeLogo.style.display = 'none';
        menuLogo.style.display = 'block';
        menuOverlay.style.right = '-100%';
        flag = 0;
    }
});


// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#wrapper'),
//     smooth: true
// });


const sliderTrack = document.querySelector(".slider-track");
let index = 0;
const slides = document.querySelectorAll(".cont").length;
const delay = 3000;

function slideLogos() {
    index = (index + 1) % slides;
    const offset = -(index * 250) / slides;
    sliderTrack.style.transform = `translateX(${offset}%)`;
}

setInterval(slideLogos, delay);

document.querySelector('.cart img').classList.add('expanded');


document.addEventListener("DOMContentLoaded", function () {
    let percentage = 0;
    const percentageElement = document.getElementById('loading-percentage');
    var loader = document.querySelector('#loader');

    const interval = setInterval(function () {
        percentage += 1;
        percentageElement.textContent = percentage + '%';

        if (percentage === 100) {
            clearInterval(interval);
            document.getElementById('preloader').style.opacity = 0;

            setTimeout(function () {
                document.getElementById('preloader').style.display = 'none';
                document.getElementById('content').style.display = 'block';
            }, 500); 
        }
    }, 30); 
});



// const header = document.querySelector('#header');
// const section3 = document.querySelector('#section3');
// // console.log(section3);

// const section3options = { };

// const section3observer = new IntersectionObserver(function(entries, section3observer) {
//     entries.forEach(entry => {
//         if(entry.isIntersecting){
//             header.style.backgroundColor = "orange";
//         }
//     })
// }, section3options);


// section3observer.observe(section3)


const faders = document.querySelectorAll('.fade-in');
// console.log(faders);

const heading2 = document.querySelector('#section2 #heading2');
// console.log(heading2);

const appearOptions = {
    threshold: 0,
    rootMargin: "0% 0% -20% 0%"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){
    entries.forEach(entry => {
        if (!entry.isIntersecting){
            return;
        } else{
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    })
}, appearOptions);


faders.forEach(fader => {
    appearOnScroll.observe(fader)
})