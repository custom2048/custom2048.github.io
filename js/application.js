// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  game_manager = new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager);
});

function handle_undo() {
  game_manager.move(-1);
}

function setpack() {
url = document.getElementById("pack").value
  var lastChar = url.substr(-1); // Selects the last character
if (lastChar != '/') {         // If the last character is not a slash
   url = url + '/';  }          // Append a slash to it.
localStorage.setItem("pack", url); 
location.reload();
}
