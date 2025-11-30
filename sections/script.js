window.addEventListener("DOMContentLoaded", () => {
    const introText = document.getElementById("intro-text");
    const intro = document.querySelector('.intro');
    const hasVisited = localStorage.getItem("visited");

    // Set the text content
    if (hasVisited) {
        introText.textContent = "Home."; 
    } else {
        introText.textContent = "Hello."; 
        localStorage.setItem("visited", "true"); 
    }

    // Show the text
    setTimeout(() => {
        introText.classList.add("active");
    }, 300);

    // Hide the entire intro section
    setTimeout(() => {
        intro.style.opacity = "0";
        intro.style.transition = "opacity 1s ease"; // Ensure smooth fade

        setTimeout(() => {
            intro.style.display = "none";
        }, 1000);
    }, 1500);
});