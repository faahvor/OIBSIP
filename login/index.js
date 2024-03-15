document.addEventListener("DOMContentLoaded", function(){
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");
    const loginSection = document.getElementById("loginSection");
    const registerSection = document.getElementById("registerSection");
    const showRegisterLink = document.getElementById("showRegister");
    const showLoginLink = document.getElementById("showLogin");

// hide register
registerSection.style.display = "none";

//show register
showRegisterLink.addEventListener("click", function(event){
    event.preventDefault();
    loginSection.style.display = "none";
    registerSection.style.display = "block";
});

//show login section 
showLoginLink.addEventListener("click",function(event){
    event.preventDefault();
    registerSection.style.display = "none";
    loginSection.style.display = "block";
});

//mock user data
let users = [];

//register user
registerForm.addEventListener("submit", function(event){
    event.preventDefault();

    const fullName = this.newFullName.value;
    const email = this.newEmail.value;
    const username = this.newUsername.value;
    const password = this.newPassword.value;
    const confirmPassword = this.confirmPassword.value;

if (password !== confirmPassword){
    console.log(confirmPassword);
    alert("Passwords do not match.please try again");
    return;
}

users.push({fullName,email,username,password});
alert("Registration successFul. Please login.");
this.reset();
registerSection.style.display = "none";
loginSection.style.display = "block";
});

//loin user
loginForm.addEventListener("submit", function(event){
    event.preventDefault();
    const username = this.username.value;
    const password = this.password.value;
    const user = users.find(user =>user.username === username && user.password === password);
    if(user){
        alert("login successful!");
        window.location.href = "https://www.youtube.com"
    }
    else{
        alert("Invalid username or password. Please try again.");
        this.reset();
    }
});

});