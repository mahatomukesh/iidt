function calculateTipPerPerson(billAmount, serviceQuality, numberOfPeople) {
    // Convert service quality to a decimal (e.g., 5 becomes 0.05)
    const serviceQualityDecimal = serviceQuality / 100;
  
    // Calculate the total tip amount
    const totalTip = billAmount * serviceQualityDecimal;
  
    // Calculate the tip amount per person
    const tipPerPerson = totalTip / numberOfPeople;
  
    return tipPerPerson;
  }
  
  // Test cases
  console.log(calculateTipPerPerson(500, 5, 2)); // Expected output: 12.5
  console.log(calculateTipPerPerson(1000, 3, 5)); // Expected output: 6
  