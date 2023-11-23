// Storing elements into data
let data = document.getElementById("form-element")
let userName = data.elements["user-name"];
let userEmail = data.elements["user-email"];
let phoneNumber = data.elements["phone-number"];
let isCorrect = data.elements['isCorrect'];
let userMessage = data.elements['user-message']

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
    if (!phoneNumber.value) {
        phoneNumber.nextElementSibling.textContent = "Password is required";
    } else {
        phoneNumber.nextElementSibling.textContent = "";
    }
   
    
    if (userName.value && userEmail.value && phoneNumber.value) {
        if (!isCorrect.checked){
            alert("Please tick before submitting! ")
        }else{
          alert("Your message has succesfully been submitted, we will contact you soon");
          userName.value = "";
            userEmail.value = "";
            phoneNumber.value = "";
            userMessage.value = ""

            isCorrect.checked = false;
        }
    }
    
});