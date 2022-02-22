// Hier kommt dein code
console.log("Ich werde beim laden der Seite ausgegeben!");
var glückwunsch = document.querySelector("#glückwunsch");
var character = document.querySelector("#character");
var characterBild = document.querySelector("#characterBild");
var steckbrief = document.querySelector("#steckbrief");
if (glückwunsch) {
  glückwunsch.innerText = "Glückwunsch, du bist:";
}
if (character) {
  character.innerText = "Infotext";
}
if (steckbrief) {
  steckbrief.innerText = "Infotext";
}
