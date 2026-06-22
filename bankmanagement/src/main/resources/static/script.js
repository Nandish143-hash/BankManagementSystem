const baseUrl = "http://localhost:9090/account";
function showRegister() {
    document.getElementById("registerSection").style.display = "block";
}

function createAccount() {
    fetch(baseUrl + "/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            passwordHash: document.getElementById("newPassword").value
        })
    })
    .then(res => res.json())
    .then(data => {
        alert("Account Created Successfully! Account Number: " + data.accountNumber);
    })
    .catch(error => {
        console.log(error);
        alert("Account creation failed");
    });
}


// Deposit Money
function depositMoney() {
    let acc = document.getElementById("depositAcc").value;
    let amount = document.getElementById("depositAmount").value;

    fetch(baseUrl + "/deposit?accountNumber=" + acc + "&amount=" + amount, {
        method: "POST"
    })
    .then(res => res.text())
    .then(data => {
        alert("Money Deposited Successfully");
    })
    .catch(error => {
        console.log(error);
        alert("Deposit Failed");
    });
}


// Withdraw Money
function withdrawMoney() {
    let acc = document.getElementById("withdrawAcc").value;
    let amount = document.getElementById("withdrawAmount").value;

    fetch(baseUrl + `/withdraw?accountNumber=${acc}&amount=${amount}`, {
        method: "POST"
    })
    .then(res => res.json())
    .then(data => {
        alert("Money Withdrawn Successfully");
    });
}


// Check Balance
function checkBalance() {
    let acc = document.getElementById("balanceAcc").value;

    fetch(baseUrl + `/balance/${acc}`)
    .then(res => res.text())
    .then(data => {
        document.getElementById("balanceResult").innerText =
            "Balance: " + data;
    });
}


// Transfer Money
function transferMoney() {
    let fromAcc = document.getElementById("fromAcc").value;
    let toAcc = document.getElementById("toAcc").value;
    let amount = document.getElementById("transferAmount").value;

    fetch(baseUrl + `/transfer?fromAccount=${fromAcc}&toAccount=${toAcc}&amount=${amount}`, {
        method: "POST"
    })
    .then(res => res.text())
    .then(data => {
        alert(data);
    });
}


// Transaction History
function getTransactions() {
    let acc = document.getElementById("historyAcc").value;

    fetch(baseUrl + `/transactions/${acc}`)
    .then(res => res.json())
    .then(data => {

        let result = "";

        data.forEach(function(t) {
            result +=
                "<div style='border:1px solid gray; padding:10px; margin:10px;'>"
                + "<p><b>Transaction ID:</b> " + t.id + "</p>"
                + "<p><b>From Account:</b> " + t.fromAccount + "</p>"
                + "<p><b>To Account:</b> " + t.toAccount + "</p>"
                + "<p><b>Amount:</b> ₹" + t.amount + "</p>"
                + "<p><b>Type:</b> " + t.type + "</p>"
                + "<p><b>Status:</b> " + t.status + "</p>"
                + "<p><b>Date:</b> " + t.createdAt + "</p>"
                + "</div>";
        });

        document.getElementById("historyResult").innerHTML = result;
    });
}
function login() {
    let acc = document.getElementById("loginAcc").value;
    let pass = document.getElementById("loginPass").value;

    fetch(baseUrl + "/login?accountNumber=" + acc + "&password=" + pass, {
        method: "POST"
    })
    .then(res => res.text())
    .then(data => {
        console.log("Response:", data);

        if (data.trim() === "SUCCESS") {
            alert("Login Successful");
            window.location.href = "dashbord.html";
        } else {
            alert("Wrong Password or Account Number");
        }
    })
    .catch(error => {
        console.log(error);
        alert("Server Error");
    });
    function downloadStatement() {
    let acc = document.getElementById("statementAcc").value;

    if(acc == ""){
        alert("Please enter account number");
        return;
    }

    window.open(
        "http://localhost:9090/account/statement/" + acc,
        "_blank"
    );
}
}

