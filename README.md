<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Shoe Store - Login</title>
  <style>
    body { font-family: Arial, sans-serif; background: #f5f5f5; margin: 0; padding: 0; }
    .container { width: 400px; margin: 120px auto; background: #fff; padding: 30px; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.1); }
    h2 { text-align: center; }
    input { width: 100%; padding: 12px; margin: 10px 0; border-radius: 5px; border: 1px solid #ccc; }
    button { width: 100%; padding: 12px; background: black; color: white; border: none; border-radius: 5px; cursor: pointer; }
    a { display: block; margin-top: 15px; text-align: center; }
  </style>
</head>
<body>
  <div class="container" id="loginPage">
    <h2>Login</h2>
    <input type="text" id="username" placeholder="Username" />
    <input type="password" id="password" placeholder="Password" />
    <button onclick="login()">Login</button>
  </div>

  <div class="container" id="storePage" style="display:none;">
    <h2>Welcome to the Shoe Store</h2>
    <p>You are logged in!</p>
    <button onclick="logout()">Logout</button>
  </div>

  <script>
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
      document.getElementById("loginPage").style.display = "block";
    }
  </script>
  <div class="container" id="products" style="display:none; margin-top:20px;">
    <h2>Shoe Collection</h2>
    <div style="display:flex; gap:20px; flex-wrap:wrap;">
      <div style="width:180px; background:#fff; padding:10px; border-radius:10px; box-shadow:0 0 5px rgba(0,0,0,0.1);">
        <img src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/df7cfe77-1e36-43bd-a147-2533168c59c2/air-max-90-mens-shoes-Jl0zZC.png" style="width:100%; border-radius:10px;" />
        <h3 style="font-size:18px;">Nike Air Max</h3>
        <p style="font-size:16px; font-weight:bold;">$120</p>
      </div>

      <div style="width:180px; background:#fff; padding:10px; border-radius:10px; box-shadow:0 0 5px rgba(0,0,0,0.1);">
        <img src="https://image.goat.com/600/attachments/product_template_additional_pictures/images/079/888/650/original/802631_01.jpg" style="width:100%; border-radius:10px;" />
        <h3 style="font-size:18px;">Adidas Yeezy</h3>
        <p style="font-size:16px; font-weight:bold;">$220</p>
      </div>

      <div style="width:180px; background:#fff; padding:10px; border-radius:10px; box-shadow:0 0 5px rgba(0,0,0,0.1);">
        <img src="https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/ab30c98d-618d-43c0-9b3b-75667f182947/air-jordan-4-retro-fire-red-release-date.jpg" style="width:100%; border-radius:10px;" />
        <h3 style="font-size:18px;">Jordan Retro 4</h3>
        <p style="font-size:16px; font-weight:bold;">$190</p>
      </div>
    </div>
  </div>

</body>
</html>
