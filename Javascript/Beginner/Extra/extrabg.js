function main () {

  var text = "perkele";
  var lowerCase = text.toLowerCase();
  var textArray = lowerCase.split("");


  console.log(text);
  console.log(textArray);

  var backwardsArray = textArray.reverse("");
  var joinArray = backwardsArray.join("");

  console.log(backwardsArray);
  console.log(joinArray);

  palinDrome(lowerCase, joinArray);

}


function palinDrome (front, back) {

    if (front == back)
    {document.write("Goddamn yes it is");}
  else{
    document.write("No it is not");
}
}
