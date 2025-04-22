function validate()

{
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username=="admin"&& password=="user")
    {

        alert("login succesfully");
        window.location.href = "Welcome Back"
        return false;
    }
    else
    {
        alert("login faild");

    }
}