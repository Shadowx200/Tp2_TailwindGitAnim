const images = [
    "img/images.jfif",
    "img/image1.jfif",
    "img/image2.jfif",
    "img/image3.jfif",
    "img/image4.jfif",
    "img/image5.jfif",
    "img/image6.jfif",
    "img/image7.jfif",
    "img/image8.jfif",
];

let current = 0;
let autoSlide;

const image = document.getElementById("carousel-image");
const dots = document.querySelectorAll("#dots span");
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");

function updateCarousel() {
    image.style.opacity = "0";

    setTimeout(() => {
        image.src = images[current];
        image.style.opacity = "1";
    }, 200);

    dots.forEach((dot, index) => {
        if (index === current) {
            dot.classList.remove("bg-gray-300");
            dot.classList.add("bg-gray-700");
        } else {
            dot.classList.remove("bg-gray-700");
            dot.classList.add("bg-gray-300");
        }
    });
}

function nextImage() {
    current = (current + 1) % images.length;
    updateCarousel();
}

function prevImage() {
    current = (current - 1 + images.length) % images.length;
    updateCarousel();
}

function startAutoSlide() {
    autoSlide = setInterval(nextImage, 3000);
}

function restartAutoSlide() {
    clearInterval(autoSlide);
    startAutoSlide();
}

nextButton.addEventListener("click", () => {
    nextImage();
    restartAutoSlide();
});

prevButton.addEventListener("click", () => {
    prevImage();
    restartAutoSlide();
});

dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        current = index;
        updateCarousel();
        restartAutoSlide();
    });
});

updateCarousel();
startAutoSlide();
