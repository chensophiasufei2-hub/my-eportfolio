document.addEventListener("DOMContentLoaded", function () {
  const lightbox = document.getElementById("imageLightbox");
  const lightboxImage = document.getElementById("lightboxImage");
  const closeButton = document.querySelector(".lightbox-close");
  const triggers = document.querySelectorAll(".lightbox-trigger");

  if (!lightbox || !lightboxImage || triggers.length === 0) return;

  triggers.forEach((img) => {
    img.style.cursor = "zoom-in";
    img.addEventListener("click", function () {
      let src = img.getAttribute("src") || "";

      if (src.toLowerCase().endsWith(".pdf")) {
        return;
      }

      lightboxImage.setAttribute("src", src);
      lightbox.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  });

  function closeLightbox() {
    lightbox.classList.remove("active");
    lightboxImage.setAttribute("src", "");
    document.body.style.overflow = "";
  }

  if (closeButton) {
    closeButton.addEventListener("click", closeLightbox);
  }

  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && lightbox.classList.contains("active")) {
      closeLightbox();
    }
  });
});
