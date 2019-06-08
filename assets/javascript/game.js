$(document).ready(function() {
  //Global Variables
  var wins = 0;
  var losses = 0;
  var totalGuessed = 0;
  var targetNumber = $("#targetNumber");
  var crystalOne = $("#crystalOne");
  var crystalTwo = $("#crystalTwo");
  var crystalThree = $("#crystalThree");
  var crystalFour = $("#crystalFour");

  //This variable, "myRandomNumber" generates a random number that the user must match
  function generateRandomNumber() {
    var myRandomNumber = Math.floor(Math.random() * 102) + 19;
    $("#targetNumber").html(myRandomNumber);
  }
  generateRandomNumber();

  // numberValue1 = $(this).attr("value");
  // firstNumber.append(numberValue1);

  function gnenerateCrystalNumbers() {
    var crystal1 = Math.floor(Math.random() * 12) + 1;
    $("#crystalOne").html(crystal1);
    var crystal2 = Math.floor(Math.random() * 12) + 1;
    $("#crystalTwo").html(crystal2);
    var crystal3 = Math.floor(Math.random() * 12) + 1;
    $("#crystalThree").html(crystal3);
    var crystal4 = Math.floor(Math.random() * 12) + 1;
    $("#crystalFour").html(crystal4);
  }
  gnenerateCrystalNumbers();

  var crystals = ["crystal-1", "crystal-2", "crystal-3", "crystal-4"];

  function resetGame() {
    generateRandomNumber();
    var myRandomNumber = $("#targetNumber").html();
    gnenerateCrystalNumbers();
    var crystal1 = $("#crystalOne").html();
    var crystal2 = $("#crystalTwo").html();
    var crystal3 = $("#crystalThree").html();
    var crystal4 = $("#crystalFour").html();
    totalGuessed = 0;
    $("#totalGuessed").html(totalGuessed);
  }

  $(".crystal").on("click", function() {
    var crystalValues = [
      $("#crystalOne").html(),
      $("#crystalTwo").html(),
      $("#crystalThree").html(),
      $("#crystalFour").html()
    ];
    whichCrystal = $(this).attr("value");
    if (totalGuessed < targetNumber.html()) {
      for (var i = 0; i < crystals.length; i++) {
        if (whichCrystal === crystals[i]) {
          crystalValue = parseInt(crystalValues[i]);
          console.log(crystalValue);
          totalGuessed = totalGuessed + crystalValue;
          $("#totalGuessed").html(totalGuessed);
          if (totalGuessed == targetNumber.html()) {
            wins++;
            $("#wins").html(wins);
            $("#message").html("Yay, You Won! Keep The Streak Going!");
            resetGame();
          } else if (totalGuessed > targetNumber.html()) {
            losses++;
            $("#losses").html(losses);
            $("#message").html("Oh No, You Lost! Try Again To Get Better!");
            resetGame();
          }
        }
      }
    }
  });
});
