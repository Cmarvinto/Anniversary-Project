let opened = false;

const images = [
  "img0.jpg",
  "img1.jpg",
  "img2.jpg",
  "img3.jpg",
  "img4.jpg",
  "img5.jpg",
  "img6.jpg",
  "img7.jpg",
  "img8.jpg",
  "img9.jpg",
];

function bloomAll() {
  if (opened) return;
  opened = true;

  // Bloom flowers
  document.querySelector(".bouquet").classList.add("bloom");

  // Show message
  const msg = document.querySelector(".message");
  msg.classList.remove("hidden");
  msg.classList.add("show");

  // Show slideshow
  const slide = document.querySelector(".slideshow");
  slide.classList.add("show");

  // Hide button
  document.querySelector(".love-btn").style.display = "none";

  // Play sound
  document.getElementById("loveSound").play();

  // Other animations
  heartsRain();
  finalExplosion();
  startSlideshow();
  imageRain();
}

/* ❤️ Heart Rain */
function heartsRain() {
  setInterval(() => {
    const h = document.createElement("div");
    h.textContent = "❤️";
    h.style.position = "fixed";
    h.style.left = Math.random() * 100 + "vw";
    h.style.top = "-20px";
    h.style.fontSize = 24 + Math.random() * 20 + "px";
    h.style.animation = "fall 4s linear forwards";
    document.body.appendChild(h);
    setTimeout(() => h.remove(), 4000);
  }, 500);
}

/* 🌧 Image Rain */
function imageRain() {
  setInterval(() => {
    const img = document.createElement("img");
    img.src = images[Math.floor(Math.random() * images.length)];
    img.className = "img-rain";
    img.style.left = Math.random() * 100 + "vw";
    img.style.animationDuration = 5 + Math.random() * 3 + "s";
    document.body.appendChild(img);
    setTimeout(() => img.remove(), 8000);
  }, 700);
}
/* 💖 Explosion that disappears completely */
function finalExplosion() {
  setTimeout(() => {
    const msg = document.createElement("div");
    msg.className = "explosion";
    msg.textContent = "I LOVE YOU 💖 mwua !";
    document.body.appendChild(msg);

    // Remove the explosion after 2 seconds
    setTimeout(() => {
      msg.remove();
    }, 2000);
  }, 3500);
}

/* 🌹 Heart-frame Slideshow starting with img5.jpg */
function startSlideshow() {
  const frame = document.querySelector(".slideshow");

  if (!frame) return; // stop if container not found

  const reordered = [
    "img5.jpg",
    "img6.jpg",
    "img7.jpg",
    "img8.jpg",
    "img9.jpg",
    "img0.jpg",
    "img1.jpg",
    "img2.jpg",
    "img3.jpg",
    "img4.jpg",
  ];

  reordered.forEach((src, index) => {
    const img = document.createElement("img");
    img.src = src;
    if (index === 0) img.classList.add("active"); // img5.jpg first
    frame.appendChild(img);
  });

  let current = 0;
  const slides = frame.querySelectorAll("img");

  setInterval(() => {
    slides[current].classList.remove("active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("active");
  }, 3500);
}
