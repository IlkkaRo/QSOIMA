
var computerChoice = Math.random();

    if (computerChoice < "0.33333") {computerChoice = "Rock";}
    else if (computerChoice > "0.66666") {computerChoice = "Scissors";}
    else {computerChoice = "Paper";}

console.log(computerChoice);

//var playerChoice;

function rps(){
  var playerChoice = document.getElementById("dropdownChoice").options[document.getElementById("dropdownChoice").selectedIndex].text
  console.log(playerChoice);
  document.getElementById("game-message").innerHTML='Computer chose: ' + computerChoice;
  wiNNer();
  var result = wiNNer();
  alert(result);
  setTimeout("location.reload(true)", 1000);
}



//playerChoice = e.options[e.selectedIndex].text;

  function wiNNer() {
    var playerChoice = document.getElementById("dropdownChoice").options[document.getElementById("dropdownChoice").selectedIndex].text

    if(playerChoice === computerChoice) {return "It's a tie! Try again.";}

    if(playerChoice === "Rock") {
      if(computerChoice === "Scirrors"){return "You won, computer is a sucker!"
  }else{
    return "Computers paper beats you!"}
  }
  if(playerChoice === "Paper"){
    if(computerChoice === "Rock"){
      return "You won! How does paper beat rock anyway?";
    }else{
      return "Computer won, scissors cut deep...";
    }
  }
  if(playerChoice === "Scissors"){
    if(computerChoice === "Rock"){
      return "Computer won, don't try to cut rock!";
    }else{
      return "Scissors wins, you are the sharpest tool in the shed!";
    }
  }
}
