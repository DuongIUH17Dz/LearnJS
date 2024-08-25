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
  