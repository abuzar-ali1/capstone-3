// Sign in
document
  .getElementById("logIn-details")
  .addEventListener("submit", function (ex) {
    ex.preventDefault();
    
    
    let user = localStorage.getItem('user');


    let objParse = JSON.parse(user)



    
    let userName = document.getElementById("user-name").value;
    let userPassword = document.getElementById("user-password").value;

    if (userName===objParse.name  && userPassword===objParse.userPass) {
    window.location.href = "./../../index.html";
      
    }else{
      alert("Some thing went wrong")
    }
  });
