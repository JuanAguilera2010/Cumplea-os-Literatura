document.addEventListener("DOMContentLoaded", function () {
    const botonAbrir = document.querySelector(".abrir-regalo");
    const regalo = document.querySelector(".regalo");
    const videoContainer = document.querySelector(".video-container");
    const texts =this.querySelector(".texts");
    const textFinal =this.querySelector(".text-final");
    const buttonNext =this.querySelector(".button-next");
   
  
    botonAbrir.addEventListener("click", function () {
        regalo.classList.add("agrandar");

        setTimeout(() => {
            regalo.style.display = "none"; // Desaparece después de la animación
            texts.style.display = "none";
            videoContainer.style.display = "block";
            textFinal.style.display = "block";
            buttonNext.style.display = "block"; // Muestra el contenedor del video
        }, 600); // Tiempo igual a la animación
    });
});