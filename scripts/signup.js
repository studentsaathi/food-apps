import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar()
let register = async (e) => {
    e.preventDefault();

    let form_data = {
      name: document.getElementById("mail").value,
      email: document.getElementById("number").value,
      password: document.getElementById("user").value,
      username: document.getElementById("password").value,
      //mobile: document.getElementById("mobile").value,
     // description: document.getElementById("description").value,
    };

    form_data = JSON.stringify(form_data);

    let res = await fetch(
      "https://masai-api-mocker.herokuapp.com/auth/register",
      {
        method: "POST",
        body: form_data,
        // mode: "no-cors"
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    let data = await res.json();
    console.log(data);
  };

  document.getElementById("submit").addEventListener("click", register);