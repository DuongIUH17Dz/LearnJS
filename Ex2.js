
// Test data 1
const markWeight1 = 78; // kg
const markHeight1 = 1.69; // m
const johnWeight1 = 92; // kg
const johnHeight1 = 1.95; // m

// Calculate BMI for Mark and John (Data 1)
const markBMI1 = markWeight1 / (markHeight1 * markHeight1);
const johnBMI1 = johnWeight1 / (johnHeight1 * johnHeight1);

let resultMessage1;
if (markBMI1 > johnBMI1) {
  resultMessage1 = `Mark's BMI (${markBMI1.toFixed(2)}) is higher than John's (${johnBMI1.toFixed(2)})!`;
} else if (johnBMI1 > markBMI1) {
  resultMessage1 = `John's BMI (${johnBMI1.toFixed(2)}) is higher than Mark's (${markBMI1.toFixed(2)})!`;
} else {
  resultMessage1 = `Mark and John's BMIs are the same (${markBMI1.toFixed(2)})!`;
}

console.log("Test Data 1:");
console.log(resultMessage1);