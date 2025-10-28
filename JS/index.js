


var usernama = document.getElementById("username2")
var emill = document.getElementById("email2")
var password  = document.getElementById("password2")
var ptext = document.getElementById("ptext")
var ztext = document.getElementById("ztext")
var xmasseg = document.getElementById("xmasseg")
var qtext = document.getElementById("qtext")
var loginBtn2 = document.getElementById("loginBtn2")


var alldata = [];
if(localStorage.getItem("users")   ) {
    alldata = JSON.parse(localStorage.getItem("users"))
}

function datauser(){
 

    var user = {
        username: usernama.value,
        email: emill.value,
        password: password.value,
}
    alldata.push(user);
    localStorage.setItem("users" , JSON.stringify(alldata) )

}


loginBtn2.addEventListener("click" , function(e){
    e.preventDefault();
 
     if (vildusernama() == true && vildemill() == true && vildpassword() == true ) {

      
 datauser();
 

//  localStorage.setItem("loginuser" , usernama.value );
    window.location.href = "index.html";
}

else{
    xmasseg.classList.remove("d-none");
}

})

function checkAllInput() {
    if (vildusernama() == true && vildemill() == true && vildpassword() == true ) {

        
        loginBtn2.removeAttribute("disabled")
    
}

    else {
        loginBtn2.setAttribute("disabled" , "true")
    }

}

usernama.addEventListener( "input"  , checkAllInput  );
emill.addEventListener(     "input"  ,   checkAllInput  );
password.addEventListener(    "input" ,   checkAllInput  );


function vildusernama() {

    var text = usernama.value;
    var regex = /^[a-zA-Z0-9]{3,12}$/
    if(regex.test(text)) {
         usernama.classList.remove("is-invalid");
        usernama.classList.add("is-valid");
        ptext.classList.add("d-none");
        return true

    }
    
    else {
        
        usernama.classList.remove("is-valid");
        usernama.classList.add("is-invalid");
        ptext.classList.remove("d-none");
        ptext.innerText = "Invalid username format";  
      
        return false
    }
}

function vildemill(){
    var text = emill.value;
    var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if(regex.test(text)) {

  let exxist = false ;

        for (let i =0 ; i< alldata.length ; i++ ) {
     
            if ( emill.value.toLowerCase()  === alldata[i].email.toLowerCase() ) {
                exxist = true ;
                break;
                
            }

        }


if ( exxist ) {

        
   xmasseg.classList.remove("d-none");
    xmasseg.innerText = "Email already exists";   
     emill.classList.remove("is-valid");
     emill.classList.add("is-invalid");
    
  return  false;


     }
else{

     xmasseg.classList.add("d-none");
          emill.classList.remove("is-invalid");
     emill.classList.add("is-valid");
 return  true
}

}

    else {

        emill.classList.remove("is-valid");
        emill.classList.add("is-invalid");
         ztext.classList.add("d-none");
         ztext.innerText = "“Please enter a valid email address";
        return false
    }

 
}

function vildpassword(){
    var text = password.value;
    var regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    if(regex.test(text)) {
        password.classList.remove("is-invalid");
        password.classList.add("is-valid");
       qtext.classList.add("d-none");
        return true
}

    else {
        password.classList.remove("is-valid");
        password.classList.add("is-invalid");
       qtext.classList.remove("d-none");
         qtext.innerText = "Password must be at least 8 characters long and contain at least one letter and one number";
        return false
    }
    
}































    























    
 
 



























