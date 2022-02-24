window.abschicken = function () {
  // hier kommt dein code bei klick auf den button

  var frage1 = document.querySelector('input[name="frage1"]:checked');
  var frage2 = document.querySelector('input[name="frage2"]:checked');
  var frage3 = document.querySelector('input[name="frage3"]:checked');
  var frage4 = document.querySelector('input[name="frage4"]:checked');
  var frage5 = document.querySelector('input[name="frage5"]:checked');
  var frage6 = document.querySelector('input[name="frage6"]:checked');
  var frage7 = document.querySelector('input[name="frage7"]:checked');
  var frage8 = document.querySelector('input[name="frage8"]:checked');
  var frage9 = document.querySelector('input[name="frage9"]:checked');
  var frage10 = document.querySelector('input[name="frage10"]:checked');

  var Fehler = document.querySelector("#error");

  if (
    frage1 &&
    frage2 &&
    frage3 &&
    frage4 &&
    frage5 &&
    frage6 &&
    frage7 &&
    frage8 &&
    frage9 &&
    frage10
  ) {
    var wert1 = parseInt(frage1.value, 10);
    var wert2 = parseInt(frage2.value, 10);
    var wert3 = parseInt(frage3.value, 10);
    var wert4 = parseInt(frage4.value, 10);
    var wert5 = parseInt(frage5.value, 10);
    var wert6 = parseInt(frage6.value, 10);
    var wert7 = parseInt(frage7.value, 10);
    var wert8 = parseInt(frage8.value, 10);
    var wert9 = parseInt(frage9.value, 10);
    var wert10 = parseInt(frage10.value, 10);

    var summe =
      wert1 +
      wert2 +
      wert3 +
      wert4 +
      wert5 +
      wert6 +
      wert7 +
      wert8 +
      wert9 +
      wert10;

    localStorage.setItem("Summe", summe);

    document.location = "/ergebnis.html";
  } else {
    Fehler.innerText = "⚠️Wähle für jede Frage eine Antwort aus⚠️";
  }
};
