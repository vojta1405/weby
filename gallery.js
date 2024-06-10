document.addEventListener('DOMContentLoaded', () => {
    const galleries = document.querySelectorAll('.gallery-container');
    const galleryStates = {};
    //array uklada stavy galerii {1, 6, 73 atd}
    galleries.forEach(galleryContainer => {
        const galleryId = galleryContainer.getAttribute('data-gallery');
        galleryStates[galleryId] = { currentIndex: 0 };
        //najde galerie nastavi je na nulu
    });
    function showImage(galleryId, index) {
        const galleryContainer = document.querySelector(`.gallery-container[data-gallery="${galleryId}"]`);
        const gallery = galleryContainer.querySelector('.gallery');
        const images = gallery.querySelectorAll('img');
        const totalImages = images.length;
        if (index >= totalImages) {
            galleryStates[galleryId].currentIndex = 0;
        } else if (index < 0) {
            galleryStates[galleryId].currentIndex = totalImages - 1;
        } else {
            galleryStates[galleryId].currentIndex = index;
        }
        const offset = -galleryStates[galleryId].currentIndex * 100;
        gallery.style.transform = `translateX(${offset}%)`;
        //zobrazi obrazky na jejich pozici podle cisel udela uplnou rotaci na limitu podle auto indexu
    }
    window.nextImage = function(galleryId) {
        showImage(galleryId, galleryStates[galleryId].currentIndex + 1);
        //tlacitko vprde
    };
    window.prevImage = function(galleryId) {
        showImage(galleryId, galleryStates[galleryId].currentIndex - 1);
        //tlacitko vzad
    };
    Object.keys(galleryStates).forEach(galleryId => {
        showImage(galleryId, 0);
    });
});