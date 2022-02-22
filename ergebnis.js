// Hier kommt dein code
var glückwunsch = document.querySelector("#glückwunsch");
var character = document.querySelector("#character");
var characterBild = document.querySelector("#characterBild");
var steckbrief = document.querySelector("#steckbrief");
if (glückwunsch) {
  glückwunsch.innerText = "Glückwunsch, du bist:";
}
if (character) {
  character.innerText = "Count Dooku";
}
if (steckbrief) {
  steckbrief.innerText = "Steckbrief";
}
if (characterBild) {
  characterBild.src =
    "https://lumiere-a.akamaihd.net/v1/images/Count-Dooku_4f552149.jpeg?region=0%2C0%2C1436%2C808&width=960";
}
