setTimeout(() => {
    document.querySelector('.intro').style.opacity = "0";

    setTimeout(() => {
        document.querySelector('.intro').style.display = "none";
    }, 1000);

}, 1500);

window.addEventListener("DOMContentLoaded", () => {
    const introText = document.querySelector(".intro-header-inner");
    introText.classList.add("active");
});

window.addEventListener("DOMContentLoaded", () => {
    const introText = document.getElementById("intro-text");
    const intro = document.querySelector('.intro');
    const hasVisited = localStorage.getItem("visited");

    if (hasVisited) {
        introText.textContent = "Home."; 
    } else {
        introText.textContent = "Hello."; 
        localStorage.setItem("visited", "true"); 
    }

    setTimeout(() => {
        introText.classList.add("active");
    }, 300);

    setTimeout(() => {
        intro.style.opacity = "0";

        setTimeout(() => {
            intro.style.display = "none";
        }, 1000);

    }, 1500);
});
