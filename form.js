const form = document.getElementById("registrationForm")
const nameInput = document.getElementById("name")
const emailInput = document.getElementById("email")
const passwordInput = document.getElementById("password")

const nameError = document.getElementById("nameError")
const emailError = document.getElementById("emailError")
const passwordError = document.getElementById("passwordError")
const successMessage = document.getElementById("successMessage")

form.addEventListener("submit", function(event){

    event.preventDefault();

    //Get values

    const name = nameInput.value
    const email = emailInput.value
    const password = passwordInput.value

    //start with valid
    let isvalid = true

    // clear old message
    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    successMessage.textContent = "";

    // validate name
    if(name === ""){
        nameError.textContent = "Name is requird ";
        isvalid = false
    }

    // validate email
    if(email === ""){
        emailError.textContent = "Email is requird "
        isvalid = false
    } else if(!email.includes("@")){
        emailError.textContent = "Enter a valid email";
        isvalid = false
    }

     //validate password
     if (password === ""){
         passwordError.textContent = "passwors is required"
     } else if(password.length < 8){
         passwordError.textContent = "password must be at least 8 character"
         isvalid = false
     }

     //final result
     if(isvalid){
         successMessage.textContent = "registration is successful";
     }

})

