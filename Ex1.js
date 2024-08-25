// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).

//Store Mark's and John's mass and height in variables
//data1
const markWeight1 = 78; 
const markHeight1 = 1.69; 
const johnWeight1 = 92; 
const johnHeight1 = 1.95; 
//data2
const markWeight2 = 95; 
const markHeight2 = 1.88; 
const johnWeight2 = 85; 
const johnHeight2 = 1.76; 
//Calculate both their BMIs using the formula (you can even implement both
//versions)
const markBMI1 = markWeight1 / (markHeight1 * markHeight1);
const johnBMI1 = johnWeight1 / (johnHeight1 * johnHeight1);

// Determine if Mark has a higher BMI than John (Data 1)
const markHigherBMI1 = markBMI1 > johnBMI1;
console.log("Test Data 1:");
console.log(`Mark's BMI: ${markBMI1.toFixed(2)}`);
console.log(`John's BMI: ${johnBMI1.toFixed(2)}`);
console.log(`Does Mark have a higher BMI than John? ${markHigherBMI1}`);
// Calculate BMI for Mark and John (Data 2)
const markBMI2 = markWeight2 / (markHeight2 * markHeight2);
const johnBMI2 = johnWeight2 / (johnHeight2 * johnHeight2);

// Determine if Mark has a higher BMI than John (Data 2)
const markHigherBMI2 = markBMI2 > johnBMI2;

console.log("\nTest Data 2:");
console.log(`Mark's BMI: ${markBMI2.toFixed(2)}`);
console.log(`John's BMI: ${johnBMI2.toFixed(2)}`);
console.log(`Does Mark have a higher BMI than John? ${markHigherBMI2}`);
//Done

