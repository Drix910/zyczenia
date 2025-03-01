var confetti = {
    start: function() {
        const duration = 5 * 1000;
        const end = Date.now() + duration;
        (function frame() {
            confettiEffect();
            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        })();
    },
    stop: function() { }
};

function confettiEffect() {
    var colors = ['#ff6b81', '#ff4757', '#feca57', '#1dd1a1', '#54a0ff'];
    var confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.animationDuration = Math.random() * 3 + 2 + "s";
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 5000);
}
