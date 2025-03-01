function showWishes() {
    let name = document.getElementById('nameInput').value;
    let wishesDiv = document.getElementById('wishes');
    let personalWish = document.getElementById('personalWish');

    if (name.trim() !== "") {
        personalWish.innerText = `Dla Ciebie, ${name}! 🎈`;
    } else {
        personalWish.innerText = "Dla Ciebie! 🎈";
    }

    wishesDiv.classList.remove('hidden');
}

// Skrypt do efektu confetti
function startConfetti() {
    confetti.start();
    setTimeout(() => confetti.stop(), 5000); // Confetti przez 5 sekund
}
