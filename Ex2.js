
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
// Test data 2
const markWeight2 = 95; // kg
const markHeight2 = 1.88; // m
const johnWeight2 = 85; // kg
const johnHeight2 = 1.76; // m

// Calculate BMI for Mark and John (Data 2)
const markBMI2 = markWeight2 / (markHeight2 * markHeight2);
const johnBMI2 = johnWeight2 / (johnHeight2 * johnHeight2);

// Determine who has a higher BMI (Data 2)
let resultMessage2;
if (markBMI2 > johnBMI2) {
  resultMessage2 = `Mark's BMI (${markBMI2.toFixed(2)}) is higher than John's (${johnBMI2.toFixed(2)})!`;
} else if (johnBMI2 > markBMI2) {
  resultMessage2 = `John's BMI (${johnBMI2.toFixed(2)}) is higher than Mark's (${markBMI2.toFixed(2)})!`;
} else {
  resultMessage2 = `Mark and John's BMIs are the same (${markBMI2.toFixed(2)})!`;
}

console.log("\nTest Data 2:");
console.log(resultMessage2);