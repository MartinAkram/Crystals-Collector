$(document).ready(function() {
  //This variable, "myRandomNumber" generates a random number that the user must match
  var myRandomNumber = Math.floor(Math.random() * 102) + 19;
  $("#targetNumber").append(myRandomNumber);

  var crystal1 = Math.floor(Math.random() * 12) + 1;
  var crystal2 = Math.floor(Math.random() * 12) + 1;
  var crystal3 = Math.floor(Math.random() * 12) + 1;
  var crystal4 = Math.floor(Math.random() * 12) + 1;

  //   function assignCrystalValue() {
  var totalGuessed = 0;

  $(".crystal").on("click", function() {
    whichCrystal = $(this).attr("value");
    if (whichCrystal === "crystal-1") {
      crystalValue1 = crystal1;
      totalGuessed = totalGuessed + crystalValue1;
      $("#totalGuessed").html(totalGuessed);
    } else if (whichCrystal === "crystal-2") {
      crystalValue2 = crystal2;
      totalGuessed = totalGuessed + crystalValue2;
      $("#totalGuessed").html(totalGuessed);
    } else if (whichCrystal === "crystal-3") {
      crystalValue3 = crystal3;
      totalGuessed = totalGuessed + crystalValue3;
      $("#totalGuessed").html(totalGuessed);
    } else if (whichCrystal === "crystal-4") {
      crystalValue4 = crystal4;
      totalGuessed = totalGuessed + crystalValue4;
      $("#totalGuessed").html(totalGuessed);
    }
  });
});
