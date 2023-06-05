var users=["admin@example.com","nitul@example.com","advaith@example.com","arjun@example.com"]; // list of valid usernames
var usernames=[];
for(var i=0;i<users.length;i++){                //extracting name of user
    var names=users[i].split("@");
    usernames.push(names[0].toUpperCase());
}
var currentUser=null;
function logValidate(){
    var userError=document.getElementById("error1");
    var passError=document.getElementById("error2");
    var mainError=document.getElementById("mainError");
    userError.innerHTML="&nbsp;";
    passError.innerHTML="&nbsp;";
    var uname=document.getElementById("username").value;
    var pd=document.getElementById("password").value;
    var noName=false;
    var nopd=false;
    if(uname!=""){ // check for blank username
        noName=true;
        if(pd!=""){     //check for blank password
            nopd=true;
            var userFound=false;
            for(var i=0;i<users.length;i++){
                if(users[i]==uname){            //username validation
                    userFound=true;
                    currentUser=usernames[i];
                }
            }
            if(userFound){
                if(pd=="password"){             //password validation
                    mainError.style.display="none";
                    userError.innerHTML="&nbsp;";
                    passError.innerHTML="&nbsp;";
                    // alert(`Login success, welcome ${currentUser}`);
                    // window.open("second.html");
                    window.location.href="/main";
                    // window.location.assign("second.html");
                    return true;
                }
                else{
                    passError.previousElementSibling.style.border="1px solid red";
                    mainError.style.display="block";
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
            passError.textContent="please enter the password";
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
// For Second.html
// const welcomeText=document.querySelector(".cont");
// welcomeText.innerText=`Hi  ${currentUser}, Welcome  to Home page`;