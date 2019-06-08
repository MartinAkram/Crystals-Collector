$(document).ready(function() {
  //Global Variables
  var wins = 0;
  var losses = 0;
  var totalGuessed = 0;

  //This variable, "myRandomNumber" generates a random number that the user must match
  function generateRandomNumber() {
    var myRandomNumber = Math.floor(Math.random() * 102) + 19;
    $("#targetNumber").append(myRandomNumber);
  }
  generateRandomNumber();

  var myRandomNumber = $("#targetNumber").html();
  console.log(myRandomNumber);

  var crystal1 = Math.floor(Math.random() * 12) + 1;
  var crystal2 = Math.floor(Math.random() * 12) + 1;
  var crystal3 = Math.floor(Math.random() * 12) + 1;
  var crystal4 = Math.floor(Math.random() * 12) + 1;

  $(".crystal").on("click", function() {
    whichCrystal = $(this).attr("value");
    if (totalGuessed < myRandomNumber) {
      if (whichCrystal === "crystal-1") {
        crystalValue1 = crystal1;
        totalGuessed = totalGuessed + crystalValue1;
        $("#totalGuessed").html(totalGuessed);
        if (totalGuessed == myRandomNumber) {
          wins++;
          $("#wins").html(wins);
          $("#message").html("Yay, You Won!");
        } else if (totalGuessed > myRandomNumber) {
          losses++;
          $("#losses").html(losses);
          $("#message").html("Oh No, You Lost!");
        }
      } else if (whichCrystal === "crystal-2") {
        crystalValue2 = crystal2;
        totalGuessed = totalGuessed + crystalValue2;
        $("#totalGuessed").html(totalGuessed);
        if (totalGuessed == myRandomNumber) {
          wins++;
          $("#wins").html(wins);
          $("#message").html("Yay, You Won!");
        } else if (totalGuessed > myRandomNumber) {
          losses++;
          $("#losses").html(losses);
          $("#message").html("Oh No, You Lost!");
        }
      } else if (whichCrystal === "crystal-3") {
        crystalValue3 = crystal3;
        totalGuessed = totalGuessed + crystalValue3;
        $("#totalGuessed").html(totalGuessed);
        if (totalGuessed == myRandomNumber) {
          wins++;
          $("#wins").html(wins);
          $("#message").html("Yay, You Won!");
        } else if (totalGuessed > myRandomNumber) {
          losses++;
          $("#losses").html(losses);
          $("#message").html("Oh No, You Lost!");
        }
      } else if (whichCrystal === "crystal-4") {
        crystalValue4 = crystal4;
        totalGuessed = totalGuessed + crystalValue4;
        $("#totalGuessed").html(totalGuessed);
        if (totalGuessed == myRandomNumber) {
          wins++;
          $("#wins").html(wins);
          $("#message").html("Yay, You Won!");
        } else if (totalGuessed > myRandomNumber) {
          losses++;
          $("#losses").html(losses);
          $("#message").html("Oh No, You Lost!");
        }
      }
    }
  });
});
