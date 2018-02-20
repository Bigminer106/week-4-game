$(document).ready(function () {
  var minRandomGen = 19;
  var maxRandomGen = 120;

  var minGuess = 1;
  var maxGuess = 12;

  var gem1 = randomNumberFromRange(minGuess, maxGuess);
  var gem2 = randomNumberFromRange(minGuess, maxGuess);
  var gem3 = randomNumberFromRange(minGuess, maxGuess);
  var gem4 = randomNumberFromRange(minGuess, maxGuess);

  var randomGen = randomNumberFromRange(minRandomGen, maxRandomGen);

  var wins = 0;
  var losses = 0;

  function randomNumberFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  console.log(gem1);
  console.log(gem2);
  console.log(gem3);
  console.log(gem4);

})