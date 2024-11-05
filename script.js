const images = ["imagem-reinaldo.png", "imagem-moacir.png"];
let currentIndex = 0;

function nextImage() {
    const imgElement = document.getElementById("carousel-image");
    imgElement.classList.add("hidden"); 

    setTimeout(() => {
        currentIndex = (currentIndex + 1) % images.length;
        imgElement.src = images[currentIndex];
        imgElement.classList.remove("hidden"); 
    }, 500); 
}

function prevImage() {
    const imgElement = document.getElementById("carousel-image");
    imgElement.classList.add("hidden");

    setTimeout(() => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        imgElement.src = images[currentIndex];
        imgElement.classList.remove("hidden");
    }, 500);
}