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
    var wert1 = frage1.value;
    var wert2 = frage2.value;
    var wert3 = frage3.value;
    var wert4 = frage4.value;
    var wert5 = frage5.value;
    var wert6 = frage6.value;
    var wert7 = frage7.value;
    var wert8 = frage8.value;
    var wert9 = frage9.value;
    var wert10 = frage10.value;

    localStorage.setItem("frage1", wert1);
    localStorage.setItem("frage2", wert2);
    localStorage.setItem("frage3", wert3);
    localStorage.setItem("frage4", wert4);
    localStorage.setItem("frage5", wert5);
    localStorage.setItem("frage6", wert6);
    localStorage.setItem("frage7", wert7);
    localStorage.setItem("frage8", wert8);
    localStorage.setItem("frage9", wert9);
    localStorage.setItem("frage10", wert10);

    document.location = "/ergebnis.html";
  }
};
