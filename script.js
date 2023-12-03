
let createAccount = document.getElementById("cAccount")

function checkPass() {
    let passwordOne = document.getElementById("pass").value
    let passwordTwo = document.getElementById("conPass").value
    if (passwordOne != passwordTwo) {
        window.alert("Your passwords do not match. Try Again!")
    }
}

createAccount.addEventListener("click", checkPass);
