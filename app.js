
function login() {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  if (user === "admin" && pass === "1234") {
    document.getElementById("products").style.display = "block";
    document.getElementById("loginPage").style.display = "none";
    document.getElementById("storePage").style.display = "block";
  } else {
    alert("Wrong username or password!");
  }
}

function logout() {
  document.getElementById("storePage").style.display = "none";
  document.getElementById("products").style.display = "none";
  document.getElementById("loginPage").style.display = "block";
}
