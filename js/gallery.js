document.addEventListener("DOMContentLoaded", () => {
       const swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 0,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        loop: true,
        allowTouchMove: false,
    });

    // imagen tamaño al 100
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    const closeModal = document.getElementById("closeModal");
    const previewImages = document.querySelectorAll(".preview-img");

    previewImages.forEach(img => {
        img.addEventListener("click", () => {
            modalImage.src = img.src; 
            modal.classList.remove("hidden"); // Mostrar tamaño al 100
        });
    });

    closeModal.addEventListener("click", () => {
        modal.classList.add("hidden"); // Ocultar tamaño al 100
        modalImage.src = ""; // Limpia imagen 
    });

    // Ocultar - Mostrar galería
    const galleryContainer = document.getElementById("galleryContainer");
    const hideGalleryButton = document.getElementById("hideGallery");

    hideGalleryButton.addEventListener("click", () => {
        if (galleryContainer.style.display === "none") {
            galleryContainer.style.display = "block";
            hideGalleryButton.textContent = "Ocultar Fotos";
        } else {
            galleryContainer.style.display = "none";
            hideGalleryButton.textContent = "Mostrar Fotos";
        }
    });
});
