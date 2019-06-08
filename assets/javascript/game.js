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

  $(".crystal").on("click", function() {
    whichCrystal = $(this).attr("value");
    if (totalGuessed < targetNumber.html()) {
      if (whichCrystal === "crystal-1") {
        crystalValue1 = crystal1;
        totalGuessed = totalGuessed + crystalValue1;
        console.log(totalGuessed);
        console.log(targetNumber.html());
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
      } else if (whichCrystal === "crystal-2") {
        crystalValue2 = crystal2;
        totalGuessed = totalGuessed + crystalValue2;
        console.log(totalGuessed);
        console.log(targetNumber.html());
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
      } else if (whichCrystal === "crystal-3") {
        crystalValue3 = crystal3;
        totalGuessed = totalGuessed + crystalValue3;
        console.log(totalGuessed);
        console.log(targetNumber.html());
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
      } else if (whichCrystal === "crystal-4") {
        crystalValue4 = crystal4;
        totalGuessed = totalGuessed + crystalValue4;
        console.log(totalGuessed);
        console.log(targetNumber.html());
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
  });
});
