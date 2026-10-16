console.log("Gaming Hub initialized successfully.");

// Interactive stat increment or simulation
document.addEventListener("DOMContentLoaded", () => {
    const kdElement = document.getElementById("kd-ratio");
    if (kdElement) {
        setTimeout(() => {
            kdElement.style.color = "#00ffcc";
        }, 500);
    }
});
