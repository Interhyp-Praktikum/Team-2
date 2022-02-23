window.holeDenWert = function () {
  var namesfeld = document.querySelector("input");
  var wertAusDemFeld = namesfeld.value;
  console.log(wertAusDemFeld);
  var ära = document.querySelector("select");
  var äraWert = ära.value;
  console.log(äraWert);

  localStorage.setItem("name", wertAusDemFeld);
  localStorage.setItem("ära", äraWert);
  document.location = "/fragen.html";
};
