// Function to calculate average score
function calculateAverage(scores) {
    const total = scores.reduce((acc, score) => acc + score, 0);
    return total / scores.length;
  }
  