// 🌐 Cuộn mượt đến các section khi click liên kết nội bộ
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ✨ Hiệu ứng nền lung linh theo vị trí chuột
document.querySelectorAll('section, footer').forEach(section => {
  section.addEventListener('mousemove', e => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    section.style.backgroundPosition = `${x * 100}% ${y * 100}%`;
  });
});

// 📸 Hiệu ứng ảnh minh họa phóng nhẹ khi xuất hiện trên màn hình
const animatedImages = document.querySelectorAll('.illustration img');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.transform = 'scale(1.05)';
      entry.target.style.transition = 'transform 0.6s ease';
    } else {
      entry.target.style.transform = 'scale(1)';
    }
  });
}, { threshold: 0.3 });
animatedImages.forEach(img => observer.observe(img));

// 🌸 Hiệu ứng hoa rơi bằng emoji 🌸
function createFlower() {
  const flower = document.createElement("div");
  flower.classList.add("flower");
  flower.textContent = "🌸";
  flower.style.left = Math.random() * window.innerWidth + "px";
  flower.style.animationDuration = 5 + Math.random() * 5 + "s";
  flower.style.fontSize = Math.random() * 16 + 16 + "px";
  flower.style.opacity = Math.random();
  flower.style.position = "fixed";
  flower.style.top = "-40px";
  flower.style.pointerEvents = "none";
  flower.style.zIndex = 1;

  document.body.appendChild(flower);

  setTimeout(() => {
    flower.remove();
  }, 10000);
}

setInterval(createFlower, 400);
