// Function to calculate average score
function calculateAverage(scores) {
    const total = scores.reduce((acc, score) => acc + score, 0);
    return total / scores.length;
  }
  // Function to determine the winner
function determineWinner(dolphinsScores, koalasScores) {
    const dolphinsAverage = calculateAverage(dolphinsScores);
    const koalasAverage = calculateAverage(koalasScores);
  
    console.log(`Dolphins' average score: ${dolphinsAverage.toFixed(2)}`);
    console.log(`Koalas' average score: ${koalasAverage.toFixed(2)}`);
}
// Check for bonus rule 1 and 2
  const dolphinsQualified = dolphinsAverage >= 100;
  const koalasQualified = koalasAverage >= 100;

//   if (dolphinsQualified && koalasQualified) {
//     if (dolphinsAverage > koalasAverage) {
//       console.log(`Dolphins win with an average score of ${dolphinsAverage.toFixed(2)}!`);
//     } else if (koalasAverage > dolphinsAverage) {
//       console.log(`Koalas win with an average score of ${koalasAverage.toFixed(2)}!`);
//     } else {
//       console.log(`It's a draw! Both teams have an average score of ${dolphinsAverage.toFixed(2)}.`);
//     }
//   } else if (dolphinsQualified) {
//     console.log(`Dolphins win with an average score of ${dolphinsAverage.toFixed(2)}!`);
//   } else if (koalasQualified) {
//     console.log(`Koalas win with an average score of ${koalasAverage.toFixed(2)}!`);
//   } else {
//     console.log("No team wins the trophy as neither team meets the minimum score requirement.");
//   }

