window.addEventListener("DOMContentLoaded", () => {
    const introText = document.getElementById("intro-text");
    const intro = document.querySelector('.intro');
    const hasVisited = localStorage.getItem("visited");


    setTimeout(() => {
        introText.classList.add("active");
    }, 300);

    setTimeout(() => {
        intro.style.opacity = "0";
        intro.style.transition = "opacity 1s ease";

        setTimeout(() => {
            intro.style.display = "none";
        }, 1000);
    }, 1500);
});

const overlay = document.getElementById("projectOverlay");
const overlayImage = document.getElementById("overlayImage");
const overlayTitle = document.getElementById("overlayTitle");
const overlayDescription = document.getElementById("overlayDescription");
const closeBtn = document.getElementById("closeOverlay");

document.querySelectorAll(".project-frame").forEach(frame => {
    frame.addEventListener("click", () => {

        overlayImage.src = frame.dataset.image;
        overlayTitle.textContent = frame.dataset.title;
        overlayDescription.textContent = frame.dataset.description;

        overlay.style.display = "flex";
    });
});

closeBtn.addEventListener("click", () => {
    overlay.style.display = "none";
});


overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
        overlay.style.display = "none";
    }
});

function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value,
    }

    emailjs.send("service_ujrwn0h","template_4tztg1n",parms).then (alert("Email Sent!"))
}