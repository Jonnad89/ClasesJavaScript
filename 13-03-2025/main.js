document.getElementById("togglePassword").addEventListener("click", function(event){
    let passwordInput = document.getElementById("password");
    event.preventDefault()
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
})