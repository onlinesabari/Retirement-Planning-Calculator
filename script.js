function calculateRetirement() {
      const currentAge = parseInt(document.getElementById("currentAge").value);
      const retirementAge = parseInt(document.getElementById("retirementAge").value);
      const monthlySavings = parseFloat(document.getElementById("monthlySavings").value);
      const expectedReturn = parseFloat(document.getElementById("expectedReturn").value);

      if (!currentAge || !retirementAge || !monthlySavings || !expectedReturn || retirementAge <= currentAge) {
        document.getElementById("results").innerHTML = "<p>Please fill all fields correctly.</p>";
        return;
      }

      const years = retirementAge - currentAge;
      const months = years * 12;
      const monthlyRate = expectedReturn / 12 / 100;

      const futureValue = monthlySavings * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
      const investedAmount = monthlySavings * months;

      document.getElementById("results").innerHTML = `
        <p><strong>Estimated Retirement Corpus:</strong> ₹${Math.round(futureValue).toLocaleString()}</p>
        <p><strong>Total Amount Invested:</strong> ₹${Math.round(investedAmount).toLocaleString()}</p>
        <p>By saving ₹${monthlySavings.toLocaleString()} every month until age ${retirementAge}, you may accumulate ₹${Math.round(futureValue).toLocaleString()} by the time you retire.</p>
      `;
    }
