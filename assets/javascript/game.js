$(document).ready(function() {
  //Here we declare the global variables that we'll be using throughout the code
  var wins = 0;
  var losses = 0;
  var totalGuessed = 0;
  var targetNumber = $("#targetNumber");
  var crystalOne = $("#crystalOne");
  var crystalTwo = $("#crystalTwo");
  var crystalThree = $("#crystalThree");
  var crystalFour = $("#crystalFour");

  //This function is called generateRandomNumber
  //Upon being called, it generates a random number that the user must match
  //The random number is then stored and displayed in the html file
  //We define the function and then call it immediately after to generate that random number
  function generateRandomNumber() {
    var myRandomNumber = Math.floor(Math.random() * 102) + 19;
    $("#targetNumber").html(myRandomNumber);
  }
  generateRandomNumber();

  //This function is called gnenerateCrystalNumbers
  //Upon being called, it generates a different random number between 1 and 12 and for each crystal
  //The random numbers are stored in the html file using jquery
  //This part of the html file was purposefully hidden in css
  //We define the function and then call it immediately after to generate that random numbers
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

  //Here we define an array with each of our crystals
  //We will use it later to iterate on our upcoming for loop
  var crystals = ["crystal-1", "crystal-2", "crystal-3", "crystal-4"];

  //This function is called resetGame
  //Upon being called, it calls 2 functions, generateRandomNumber and gnenerateCrystalNumbers
  //It also resets the totalGuessed value of the player's guesses to zero
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

  //This is the main function of the game. It runs every time the player clicks one of the four crystals
  //We will explain its features in the function directly

  //First we define a "click" function on the class "crystals"
  $(".crystal").on("click", function() {
    //We define an array that calls the crystals' values from the html document
    //These values were generated and stored in the gnenerateCrystalNumbers function
    var crystalValues = [
      $("#crystalOne").html(),
      $("#crystalTwo").html(),
      $("#crystalThree").html(),
      $("#crystalFour").html()
    ];

    //We define a new variable called whichCrystal
    //We set it equal to the clicked crystal's value
    //The crystal's attribute "value" was statically defined in the html document
    whichCrystal = $(this).attr("value");

    //We start comparing the player's total guess to the random number generated in the generateRandomNumber function
    //We initalized totalGuessed to zero in our global variables
    //If the totalGuessed is less than the target number (which is always true at the start of a game), the click function enters a for loop
    if (totalGuessed < targetNumber.html()) {
      //In this for loop we iterate over each elements of the crystals array defined above in line 41
      for (var i = 0; i < crystals.length; i++) {
        //Here we start comparing the "whichCrystal" value to each of our our four crystals
        if (whichCrystal === crystals[i]) {
          //Here we convert each crystalValue to an int (we had stored it as html earlier)
          crystalValue = parseInt(crystalValues[i]);
          //Here we update the totalGuessed value to the totalGuessed (starting at 0) plus each crystal's value
          totalGuessed = totalGuessed + crystalValue;
          //We then append the totalGuessed value using jquery to our html page
          $("#totalGuessed").html(totalGuessed);
          //Here we define how a player wins
          //A player wins by matching their totalGuessed to the targetNumber
          if (totalGuessed == targetNumber.html()) {
            //If they win we increase the wins by 1
            wins++;
            //Then we append the wins to the html file
            $("#wins").html(wins);
            //We update the message displayed in col-three-A
            $("#message").html("Yay, You Won! Keep The Streak Going!");
            //And we call the resetGame function to start a new game while preserving the total wins
            resetGame();
            //Here we define how a player loses
            //A player loses by exceeding the value of targetNumber in their totalGuessed
          } else if (totalGuessed > targetNumber.html()) {
            //If they lose we increase the losses by 1
            losses++;
            //Then we append the losses to the html file
            $("#losses").html(losses);
            //We update the message displayed in col-three-A
            $("#message").html("Oh No, You Lost! Try Again To Get Better!");
            //And we call the resetGame function to start a new game while preserving the total losses
            resetGame();
          }
        }
      }
    }
  });
});
