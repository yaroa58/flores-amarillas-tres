window.onload = () => {

    document.body.classList.remove("container");

    const audio = document.getElementById("musica");

    document.addEventListener("touchstart", function () {
        audio.play();
    }, { once: true });

    document.addEventListener("click", function () {
        audio.play();
    }, { once: true });

};