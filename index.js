import "animate.css";

window.holeDenWert = function () {
  var namesfeld = document.querySelector("input");
  var wertAusDemFeld = namesfeld.value;
  var Fehler = document.querySelector("#error");
  var ära = document.querySelector("select");
  var äraWert = ära.value;
  if (wertAusDemFeld === "" || äraWert === "") {
    Fehler.style.display = "block";
  } else {
    localStorage.setItem("name", wertAusDemFeld);
    localStorage.setItem("ära", äraWert);
    document.location = "/fragen.html";
  }
};
