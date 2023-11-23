// Storing elements into data
let data = document.getElementById("sign-up__form")
let userName = data.elements["name-user"];
let userEmail = data.elements["phone-email"];
let password = data.elements["password"];
let isMatch = data.elements["confirm-password"];

// Form Validation
data.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!userName.value) {
        userName.nextElementSibling.textContent = "Your user name is required";
    } else {
        userName.nextElementSibling.textContent = "";
    }

    if (!userEmail.value) {
        userEmail.nextElementSibling.textContent = "Phone number or email is required";
    } else {
        userEmail.nextElementSibling.textContent = "";
    }
    if (!password.value) {
        password.nextElementSibling.textContent = "Password is required";
    } else {
        password.nextElementSibling.textContent = "";
    }
    
    if (!isMatch.value &&password.value) {
        isMatch.nextElementSibling.textContent = "Please Confirm The Password";
    } else if (isMatch.value !== password.value) {
        isMatch.nextElementSibling.textContent = "Passwords do not match";
    } else {
        isMatch.nextElementSibling.textContent = "";
    }
    
    if (userName.value && userEmail.value && password.value && isMatch.value === password.value) {
        alert("The account creation request has been sent, we will soon send you a link!");
    }
    
});
// Reset Button, 

document.querySelector(".btn-reset").addEventListener("click", function () {
    userName.nextElementSibling.textContent = "";
    userEmail.nextElementSibling.textContent = "";
    password.nextElementSibling.textContent = "";
    isMatch.nextElementSibling.textContent = "";
});