function updateClock() {
    const now = new Date();
    const time = now.toLocaleTimeString();
    document.getElementById('clock').textContent = time;
}

setInterval(updateClock, 500);
updateClock(); // Initialize clock immediately