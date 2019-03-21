
function validate(){
  var username = document.getElementById("uname");
  var password = document.getElementById("pass");


  if(username.value.trim() ==""){
    alert("Blank Username");
    username.style.border = "solid 3px red";
    
    document.getElementById("lbluser").style.visibility="visible";
    document.getElementById("lblpass").style.visibility="hidden";
    return false;
  }
  else if(password.value.trim() ==""){
    alert("Blank Password");
    password.style.border = "solid 3px red";
    document.getElementById("lblpass").style.visibility="visible";
    document.getElementById("lbluser").style.visibility="hidden";
    return false;
  }
  else if(password.value.trim().length<5){
    alert("Password too short");
    password.style.border = "solid 3px red";
    document.getElementById("lblpass").style.visibility="visible";
    document.getElementById("lbluser").style.visibility="hidden";
    return false;
  }
  else{
    return true;
  }

  
}
