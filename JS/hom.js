
var hommasg = document.getElementById("hommasg")
var user = JSON.parse(localStorage.getItem("users")) || [] ;


    if (user.length > 0 ) {

let userlast = user[user.length - 1] ;


    
    hommasg.innerHTML   =   `Welcome ${userlast.username} ` ;

   
    }
    







