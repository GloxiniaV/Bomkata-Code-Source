const startBtn = document.getElementById("startBtn");
const joinBtn = document.getElementById("joinBtn");
const settingsBtn = document.getElementById("settingsBtn");

// Button events
startBtn.addEventListener("click", () => {
  alert("Start Game clicked! (Lobby will be created)");
});

joinBtn.addEventListener("click", () => {
  alert("Join Game clicked! (Enter room code soon)");
});

settingsBtn.addEventListener("click", () => {
  alert("Settings clicked! (Options coming soon)");
});

// Debug overlay
const debug = document.createElement("div");
debug.id = "debug";
document.body.appendChild(debug);

function updateDebug() {
  debug.textContent = `📱 ${window.innerWidth} x ${window.innerHeight}`;
}
updateDebug();
window.addEventListener("resize", updateDebug);
window.addEventListener("orientationchange", updateDebug);