$(document).ready(function() {
  //Global Variables
  var wins = 0;
  var losses = 0;
  var totalGuessed = 0;
  var targetNumber = $("#targetNumber");

  //This variable, "myRandomNumber" generates a random number that the user must match
  function generateRandomNumber() {
    var myRandomNumber = Math.floor(Math.random() * 102) + 19;
    $("#targetNumber").html(myRandomNumber);
  }
  generateRandomNumber();

  var crystal1 = Math.floor(Math.random() * 12) + 1;
  var crystal2 = Math.floor(Math.random() * 12) + 1;
  var crystal3 = Math.floor(Math.random() * 12) + 1;
  var crystal4 = Math.floor(Math.random() * 12) + 1;

  function resetGame() {
    generateRandomNumber();
    var myRandomNumber = $("#targetNumber").html();
    totalGuessed = 0;
    $("#totalGuessed").html(totalGuessed);
  }

  var crystals = ["crystal-1", "crystal-2", "crystal-3", "crystal-4"];
  var crystalValues = [crystal1, crystal2, crystal3, crystal4];

  $(".crystal").on("click", function() {
    whichCrystal = $(this).attr("value");
    if (totalGuessed < targetNumber.html()) {
      for (var i = 0; i < crystals.length; i++) {
        if (whichCrystal === crystals[i]) {
          crystalValue = crystalValues[i];
          console.log(crystalValue);
          totalGuessed = totalGuessed + crystalValue;
          $("#totalGuessed").html(totalGuessed);
          if (totalGuessed == targetNumber.html()) {
            wins++;
            $("#wins").html(wins);
            $("#message").html("Yay, You Won!");
            resetGame();
          } else if (totalGuessed > targetNumber.html()) {
            losses++;
            $("#losses").html(losses);
            $("#message").html("Oh No, You Lost!");
            resetGame();
          }
        }
      }
    }
  });
});
