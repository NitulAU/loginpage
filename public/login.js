var users=["admin@example.com",
            "nitul@example.com",
            "advaith@example.com",
            "arjun@example.com"
        ]; // list of valid usernames
window.logValidate=logValidate;
//bringing the function from global scope to module scope
function logValidate(){
    var userError=document.getElementById("error1");
    var passError=document.getElementById("error2");
    var mainError=document.getElementById("mainError");
    userError.innerHTML="&nbsp;";
    passError.innerHTML="&nbsp;";

    var uname=document.getElementById("username").value;
    var pd=document.getElementById("password").value;
    var noName= uname.trim()=="";
    var nopd= pd.trim()=="";

    if(!noName){ // check for blank username
        if(!nopd){     //check for blank password      
            var userIndex = users.indexOf(uname); // find the index of the username
            var userFound = userIndex !== -1;     //confirming username is valid
            if(userFound){
                if(pd==="password"){             //password validation (strict comparison)
                    mainError.style.display="none";
                    userError.innerHTML="&nbsp;";
                    passError.innerHTML="&nbsp;";

                    window.location.href="/main";
                    return true;
                }
                else{
                    passError.previousElementSibling.style.border="1px solid red";
                    mainError.style.display="block";
                    // userError.innerHTML='&nbsp;';
                    passError.innerText="wrong password!";
                    return false;
                }
            } 
            else{
                userError.previousElementSibling.style.border="1px solid red";
                mainError.style.display="block";
                userError.innerText="user not found!";
                return false;
            }
        }
        else{
            passError.previousElementSibling.style.border="1px solid red";
            mainError.style.display="block";
            passError.textContent="please enter the password!";
            return false;
        }
    }
    else{
        userError.previousElementSibling.style.border="1px solid red";
        mainError.style.display="block";
        userError.innerText="please enter a user name!";
        return false;
    }
}
export default logValidate;