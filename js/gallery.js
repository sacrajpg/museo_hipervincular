document.addEventListener("DOMContentLoaded", () => {
    const swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 0,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        loop: true,
        allowTouchMove: true, // swipe en móviles
    });

    // Modal img en pantalla completa
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    const closeModal = document.getElementById("closeModal");
    const previewImages = document.querySelectorAll(".preview-img");

    previewImages.forEach(img => {
        img.addEventListener("click", () => {
            modalImage.src = img.src;
            modal.classList.add("show"); // muestra modal
            modal.style.zIndex = "1000"; // modal al frente
            modalImage.style.zIndex = "1001"; 
            closeModal.style.zIndex = "1002"; // Btn cerrar
        });
    });

    closeModal.addEventListener("click", () => {
        modal.classList.remove("show"); // oculta  modal
        modalImage.src = "";
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
