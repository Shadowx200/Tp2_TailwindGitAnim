gsap.set(["#image1", "#image2", "#image3"], {
  opacity: 0,
});

const tl = gsap.timeline();

tl.to("#image1", {
  opacity: 1,
  x: 0,
  duration: 0.8,
  ease: "power1.out",
  from: { x: -100 },
});

tl.to("#image2", {
  opacity: 1,
  x: 0,
  duration: 0.8,
  ease: "power1.out",
  from: { y: 100 },
});

tl.to("#image3", {
  opacity: 1,
  x: 0,
  duration: 0.8,
  ease: "power1.out",
  from: { x: 100 },
});
