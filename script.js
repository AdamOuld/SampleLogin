let passwordOne = document.getElementById("pass").innerText
let passwordTwo = document.getElementById("conPass").innerText
let createAccount = document.getElementById("cAccount")

function checkPass() {
    if (passwordOne != passwordTwo) {
        window.alert("Your passwords do not match. Try Again!")
    }
}

createAccount.addEventListener("click", checkPass);