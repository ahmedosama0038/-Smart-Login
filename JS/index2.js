
var email = document.getElementById("email")
var password  = document.getElementById("password")
var ntext = document.getElementById("ntext") 
var loginBtn = document.getElementById("loginBtn")

var alldata= JSON.parse(localStorage.getItem("users")) || [] ;

   


function  dataemill(){

let xemail=  document.getElementById("email").value.trim();
let xpassword=  document.getElementById("password").value.trim();





    for (var i = 0; i < alldata.length; i++) {

        if (xemail === alldata[i].email && xpassword === alldata[i].password ) {
       window.location.href = "home.html";
       return          
}


}

      
      email.classList.remove("is-valid");
      email.classList.add("is-invalid");
         password.classList.add("is-invalid");
        ntext.classList.remove("d-none");
        ntext.innerText = "Email or  password is incorrect";
        
    


}




loginBtn.addEventListener("click" , function(e){

    e.preventDefault();

    if (vildemill() == true && vildpassword() == true ) { 
 dataemill();
 
}



else{
    ntext.classList.remove("d-none");
}
});



function checkAllInput(){
  if (vildemill() == true && vildpassword() == true ) {

    loginBtn.removeAttribute("disabled")

  }

  else{
    loginBtn.setAttribute("disabled" ,  "true")
  }
}



 email.addEventListener( "input" , checkAllInput )

password.addEventListener( "input" , checkAllInput )







function vildemill(){
    var text = email.value;
    var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if(regex.test(text)) {
       email.classList.remove("is-invalid");
       email.classList.add("is-valid");
        ntext.classList.add("d-none");
  
        return true
}



    else {
       email.classList.remove("is-valid");
       email.classList.add("is-invalid");
        ntext.classList.remove("d-none");
        ntext.innerText = "Email already exists";
        return false
    }

 
}



function vildpassword(){
    var text = password.value;
    var regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    if(regex.test(text)) {
        password.classList.remove("is-invalid");
        password.classList.add("is-valid");
        ntext.classList.add("d-none");
        return true
}

    else {
        password.classList.remove("is-valid");
        password.classList.add("is-invalid");
        ntext.classList.remove("d-none");
        return false
    }
    
}




