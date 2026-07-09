const images = [
  "Medias/Star6image1.jpg",
  "Medias/Star6image2.jpg",
  "Medias/Star6image3.jpg",
  "Medias/Star6image4.jpg",
  "Medias/Star6image5.jpg",
  "Medias/Star6image6.jpg",
  "Medias/Star6image7.jpg",
  "Medias/Star6image8.jpg",
  "Medias/Star6image9.jpg",
];

let index = 3;

const image1 = document.querySelector("#image1");
const image2 = document.querySelector("#image2");
const image3 = document.querySelector("#image3");

const groupeImages = [image1, image2, image3];

function animerEntree() {
  gsap.fromTo(
    groupeImages,
    {
      opacity: 0,
      x: 120,
      scale: 0.95,
    },
    {
      opacity: 1,
      x: 0,
      scale: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
    },
  );
}

function rotationImages() {
  gsap.to(groupeImages, {
    opacity: 0,
    x: -120,
    duration: 0.6,
    stagger: 0.15,
    ease: "power2.in",
    onComplete: function () {
      image1.src = images[index];
      image2.src = images[(index + 1) % images.length];
      image3.src = images[(index + 2) % images.length];

      index = (index + 3) % images.length;

      animerEntree();
    },
  });
}

animerEntree();

setInterval(rotationImages, 5000);
