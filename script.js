let balance = 5000;
function updateBalance() {
    document.getElementById("balance").innerHTML = "₹" + balance;
}

function deposit() {
    let amount = Number(document.getElementById("amount").value);
    let message = document.getElementById("message");
    if (amount > 0) {
        balance += amount;
        updateBalance();
        message.style.color = "#4FC3F7";
        message.innerHTML =
        "✅ ₹" + amount + " deposited successfully.<br>Current Balance : ₹" + balance;
    }
    else {
        message.style.color = "red";
        message.innerHTML =
        "❌ Please enter a valid amount.";
    }
    document.getElementById("amount").value = "";
}

function withdraw() {
    let amount = Number(document.getElementById("amount").value);
    let message = document.getElementById("message");
    if (amount <= 0) {
        message.style.color = "red";
        message.innerHTML =
        "❌ Please enter a valid amount.";
    }
    else if (amount > balance) {
        message.style.color = "red";
        message.innerHTML =
        "❌ Insufficient Balance.";
    }
    else {
        balance -= amount;
        updateBalance();
        message.style.color = "#4FC3F7";
        message.innerHTML =
        "✅ ₹" + amount + " withdrawn successfully.<br>Current Balance : ₹" + balance;
    }
    document.getElementById("amount").value = "";
}

function resetBalance() {
    balance = 5000;
    updateBalance();
    let message = document.getElementById("message");
    message.style.color = "#4FC3F7";
    message.innerHTML =
    "🔄 Balance has been reset to ₹5000.";
}

function checkBalance() {
    document.getElementById("message").innerHTML =
        "Current Balance : ₹" + balance;
    document.getElementById("amount").value = "";
    let message = document.getElementById("message");
    message.style.color = "#4FC3F7";
}
