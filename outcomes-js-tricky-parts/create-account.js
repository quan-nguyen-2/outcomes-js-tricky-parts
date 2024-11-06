function createAccount(pin, amount = 0) {
    let balance = amount;
    let accountPin = pin;
  
    return {
      checkBalance(inputPin) {
        if (inputPin !== accountPin) return "Invalid PIN.";
        return `$${balance}`;
      },
      
      deposit(inputPin, amount) {
        if (inputPin !== accountPin) return "Invalid PIN.";
        balance += amount;
        return `Successfully deposited $${amount}. Current balance: $${balance}.`;
      },
  
      withdraw(inputPin, amount) {
        if (inputPin !== accountPin) return "Invalid PIN.";
        if (amount > balance) {
          return "Withdrawal amount exceeds account balance. Transaction cancelled.";
        }
        balance -= amount;
        return `Successfully withdrew $${amount}. Current balance: $${balance}.`;
      },
  
      changePin(inputPin, newPin) {
        if (inputPin !== accountPin) return "Invalid PIN.";
        accountPin = newPin;
        return "PIN successfully changed!";
      }
    };
  }
  
  module.exports = { createAccount };
  