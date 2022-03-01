function validate() {
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    if (email=="pacineza@gmail.com" && password=="123abc")
    {
        alert("You are logged In");
        return false;
    }
    else
    {
        alert("Loggin Failed");
    }
}