// Function to calculate the tip and print the result
function calculateTip(bill) {
    // Calculate the tip using a ternary operator
    const tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20;
    
    // Calculate the total value
    const total = bill + tip;
    
    // Print the result
    console.log(`The bill was ${bill}, the tip was ${tip.toFixed(2)}, and the total value ${total.toFixed(2)}`);
  }
  // Test Data 1
console.log("Test Data 1:");
calculateTip(275); 
calculateTip(40);  
calculateTip(430); 