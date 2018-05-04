function whatTime() {
  var today = new Date();
  var twentyFour = today.getHours();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  var mid = "pm";

  if (m < 10) {
    m = "0" + m;
  }

  if (s < 10) {
    s = "0" + s;
  }

  if (h > 12) {
    h = h - 12;
  }

  if (h < 10) {
    h = "0" + h;
  }

  if (twentyFour < 12) {
    mid = "am";
  }

  document.getElementById("currentTime").innerHTML =
  h + ":" + m + ":" + s + " " + mid;

  setTimeout(whatTime, 1000);

}
