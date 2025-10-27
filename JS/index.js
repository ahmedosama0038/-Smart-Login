


var usernama = document.getElementById("username2")
var emill = document.getElementById("email2")
var password  = document.getElementById("password2")
var ptext = document.getElementById("ptext")
var xmasseg = document.getElementById("xmasseg")
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

      

//         for (let i =0 ; i< alldata.length ; i++ ) {
     
//             if ( emill.value.toLowerCase()  === alldata[i].email.toLowerCase() ) {
//                 exxist = true ;

//                 xmasseg.classList.remove("d-none");
//                 xmasseg.innerText = "this email already exists";
         
//                 break;
                
//             }


//         }

// if ( exxist ) {

        
       
//         emill.classList.remove("is-invalid");
//          emill.classList.add("is-valid");
    
//   return ;


//      }
 datauser();
 

//  localStorage.setItem("loginuser" , usernama.value );
    window.location.href = "index.html";
}

else{
    ptext.classList.remove("d-none");
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
    xmasseg.innerText = "All inputs is required";   
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
        ptext.classList.remove("d-none");
        ptext.innerText = "Email already exists";
        return false
    }

 
}



function vildpassword(){
    var text = password.value;
    var regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    if(regex.test(text)) {
        password.classList.remove("is-invalid");
        password.classList.add("is-valid");
        ptext.classList.add("d-none");
        return true
}

    else {
        password.classList.remove("is-valid");
        password.classList.add("is-invalid");
        ptext.classList.remove("d-none");
        return false
    }
    
}



















// var inputs2 = document.querySelectorAll(".sup-input input");
// var inputs3 = document.querySelectorAll(".sup-input2 input");


// for (var i = 0; i < inputs3.length; i++) {
//     inputs3[i].addEventListener("focus", function(e) {



//         e.target.classList.add("active");
//     });
// }













    
// function loginUser(){

    
//     if (vildusernama() == true && vildemill() == true && vildpassword() == true ) {
     
//   datauser();
 

//    window.location.href = "index.html";
// }

// else{
//     ptext.classList.remove("d-none");
//  }

// }

    























// var email = document.getElementById("email")
// // var password  = document.getElementById("password")
// var ntext = document.getElementById("ntext") 
// var loginBtn = document.getElementById("loginBtn")

// var alldata= JSON.parse(localStorage.getItem("users")) || [] ;





// function  dataemill(){

// let xemail=  document.getElementById("email").value.trim();
// let xpassword=  document.getElementById("password").value.trim();

//  console.log(xemail);
 


//     for (var i = 0; i < alldata.length; i++) {

//         if (xemail == alldata[i].email && xpassword == alldata[i].password ) {
//        window.location.href = "home.html";
               
// }


// }

      
//       email.classList.remove("is-valid");
//       email.classList.add("is-invalid");
//          password.classList.add("is-invalid");
//         ntext.classList.remove("d-none");
//         ntext.innerText = "Email or  password is incorrect";
        
    








   

    
 
 































// else{
//     ntext.classList.remove("d-none");
// }
// });



// function checkAllInput(){
//   if (vildemill() == true && vildpassword() == true ) {

//     loginBtn.removeAttribute("disabled")

//   }

//   else{
//     loginBtn.setAttribute("disabled" ,  "true")
//   }
// }



//  email.addEventListener( "input" , checkAllInput )

// password.addEventListener( "input" , checkAllInput )







// function vildemill(){
//     var text = email.value;
//     var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
//     if(regex.test(text)) {
//        email.classList.remove("is-invalid");
//        email.classList.add("is-valid");
//         ntext.classList.add("d-none");
  
//         return true
// }



//     else {
//        email.classList.remove("is-valid");
//        email.classList.add("is-invalid");
//         ntext.classList.remove("d-none");
//         ntext.innerText = "Email already exists";
//         return false
//     }

 
// }



// function vildpassword(){
//     var text = password.value;
//     var regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
//     if(regex.test(text)) {
//         password.classList.remove("is-invalid");
//         password.classList.add("is-valid");
//         ntext.classList.add("d-none");
//         return true
// }

//     else {
//         password.classList.remove("is-valid");
//         password.classList.add("is-invalid");
//         ntext.classList.remove("d-none");
//         return false
//     }
    
// }



