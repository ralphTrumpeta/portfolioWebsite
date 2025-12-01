window.addEventListener("DOMContentLoaded", () => {
    const introText = document.getElementById("intro-text");
    const intro = document.querySelector('.intro');
    const hasVisited = localStorage.getItem("visited");

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

function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value,
    }

    emailjs.send("service_ujrwn0h","template_4tztg1n",parms).then (alert("Email Sent!"))
}