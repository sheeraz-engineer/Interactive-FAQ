const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");

  question.addEventListener("click", () => {
    faqItems.forEach((i) => {
      if (i !== item) i.classList.remove("active");
    });
    item.classList.toggle("active");
  });
});


const scrollBtn = document.getElementById("scrollToTopBtn");
window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


const themeBtn = document.getElementById("toggleTheme");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
