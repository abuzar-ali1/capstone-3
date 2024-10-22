// SignUp Js
document
  .getElementById("user-details")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let userName = document.getElementById("user-name").value;
    let userEmail = document.getElementById("user-email").value;
    let userPassword = document.getElementById("user-password").value;
    let confrimPassword = document.getElementById("user-confrim").value;
    if (userName && userEmail && (userPassword === confrimPassword)) {
      let userDetails = {
        name: userName,
        email: userEmail,
        userPass: userPassword,
        confirmPass: confrimPassword,
      };

      let userStringify = JSON.stringify(userDetails);
      localStorage.setItem("user", userStringify);
      window.location.href = "./signIn.html";
    } else {
      alert("Something went wrong");
    }
  });
