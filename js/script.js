
const links = document.querySelectorAll("nav ul li a");

links.forEach(link => {
    if (link.href === window.location.href) {
        link.style.color = "yellow";
    }
});

const button = document.querySelector(".hero button");

if (button) {
    button.addEventListener("click", () => {
        window.location.href = "squad.html";
    });
}

function startCountdown() {
    const countdown = document.getElementById("countdown");

    if (!countdown) return;

    // Set match date (change this later)
    const matchDate = new Date("April 10, 2026 18:30:00").getTime();

    setInterval(() => {
        const now = new Date().getTime();
        const diff = matchDate - now;

        if (diff < 0) {
            countdown.innerHTML = "Match Started!";
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        countdown.innerHTML =
            days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    }, 1000);
}

startCountdown();

function vote(team) {
    alert("You voted for " + team);
    function goToSquad() {
    window.location.href = "squad.html";
}
}
function playSound() {
    let sound = new Audio("audio/whistle.mp3");
    sound.play();
}