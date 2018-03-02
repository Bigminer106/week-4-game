$(document).ready(function () {
  var minRandomGen = 19;
  var maxRandomGen = 120;
  var minGuess = 1;
  var maxGuess = 12;
  var wins = 0;
  var losses = 0;
  var totalScore = 0;

  var gem1 = randomNumberFromRange(minGuess, maxGuess);
  var gem2 = randomNumberFromRange(minGuess, maxGuess);
  var gem3 = randomNumberFromRange(minGuess, maxGuess);
  var gem4 = randomNumberFromRange(minGuess, maxGuess);

  var randomGen = randomNumberFromRange(minRandomGen, maxRandomGen);

  function randomNumberFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  function winLoss() {
    if (totalScore > randomGen) {
      alert('You lose!');

      totalScore = 0;

      $('.totalScoreShown').html('<h1>' + totalScore + '</h1>');

      losses++;

      $('.winLoss').html('<h1>Wins: ' + wins + '</h1><br><h1>Losses: ' + losses + '</h1>');

      randomGen = randomNumberFromRange(minRandomGen, maxRandomGen);
      $('.rngShown').html('<h1>' + randomGen + '</h1>');
      
      gem1 = randomNumberFromRange(minGuess, maxGuess);
      gem2 = randomNumberFromRange(minGuess, maxGuess);
      gem3 = randomNumberFromRange(minGuess, maxGuess);
      gem4 = randomNumberFromRange(minGuess, maxGuess);

    } else if (totalScore === randomGen) {
      
      alert('You WIN!!');

      totalScore = 0;

      $('.totalScoreShown').html('<h1>' + totalScore + '</h1>');

      wins++;

      $('.winLoss').html('<h1>Wins: ' + wins +     '</h1><br><h1>Losses: ' + losses + '</h1>');

      randomGen = randomNumberFromRange(minRandomGen, maxRandomGen);
      $('.rngShown').html('<h1>' + randomGen + '</h1>');

      gem1 = randomNumberFromRange(minGuess, maxGuess);
      gem2 = randomNumberFromRange(minGuess, maxGuess);
      gem3 = randomNumberFromRange(minGuess, maxGuess);
      gem4 = randomNumberFromRange(minGuess, maxGuess);
    };
  };

  $('.rngShown').html('<h1>' + randomGen + '</h1>');
  $('.winLoss').html('<h1>Wins: ' + wins + '</h1><br><h1>Losses: ' + losses + '</h1>');
  $('.totalScoreShown').html('<h1>' + totalScore + '</h1>');

  $('.gem1').click(function () {
    totalScore += gem1;

    $('.totalScoreShown').html('<h1>' + totalScore + '</h1>');

    winLoss();    
  });

  $('.gem2').click(function () {
    totalScore += gem2;

    $('.totalScoreShown').html('<h1>' + totalScore + '</h1>');

    winner();
    loser();
  });

  $('.gem3').click(function () {
    totalScore += gem3;

    $('.totalScoreShown').html('<h1>' + totalScore + '</h1>');

    winner();
    loser();
  });

  $('.gem4').click(function () {
    totalScore += gem4;

    $('.totalScoreShown').html('<h1>' + totalScore + '</h1>');

    winner();
    loser();
  });

});