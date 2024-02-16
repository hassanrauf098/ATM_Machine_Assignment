let balance = 1000;

let transactionType = prompt("Enter 1 for deposit, 2 for withdrawal, 3 for balance check, 4 to exit:");

switch (transactionType)
 {
    case '1': 
        let depositAmount = +prompt("Enter deposit amount:");
        balance += depositAmount;
        document.write(`Deposited ${depositAmount}. <br> Your new balance is ${balance}.`);
        break;
    case '2': 
        let withdrawAmount = +prompt("Enter withdrawal amount:");
        if (balance >= withdrawAmount) {
            balance -= withdrawAmount;
            document.write(`Withdrawn ${withdrawAmount}. <br> Your new balance is ${balance}.`);
        } else {
            document.write("Insufficient funds.");
        }
        break;
    case '3': 
        document.write(`Your balance is ${balance}.`);
        break;
    case '4': 
        document.write("Good Bye MUHAMMAD HASSAN <br> Exiting ATM ! <br> Have a Nice Day!");
        break;
    default:
        document.write("Invalid option.");
}

