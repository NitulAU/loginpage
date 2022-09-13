var users=["admin@example.com","nitul@example.com","advaith@example.com","arjun@example.com"]; // list of valid usernames
var usernames=[];
for(var i=0;i<users.length;i++){                //extracting name of user
    var names=users[i].split("@");
    usernames.push(names[0].toUpperCase());
}
var currentUser=null;
function logValidate(){
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
                    alert(`Login success, welcome ${currentUser}`);
                    window.open("second.html");
                    // window.location="second.html";
                    // window.location.assign("second.html");
                    return true;
                }
                else{
                    alert("Login failed, wrong password!");
                    return false;
                }
            } 
            else{
                alert("Login failed, user not found!")
                return false;
            }
        }
        else
            alert("Login failed, please enter the password");
        }
    else{
        alert("Login failed, please enter a user name!");
    }
}
// For Second.html
// var cont=document.querySelector("h1");
// cont.innerText=`Hi ${currentUser}, Welcome  to Home page`;