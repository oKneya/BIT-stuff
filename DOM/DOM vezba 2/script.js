const username = document.getElementById("fname");
const password = document.getElementById("lname");
const btn = document.querySelector("button");
const error = document.querySelector(".error")


function checkLogin () {
    if (username.value === "milos" && password.value === "123"){
        window.location.href="/succsess.html"
    } else {
        error.style.display= "block";
        username.style.borderColor = "red";
        password.style.borderColor = "red";
    }
}


btn.addEventListener("click", checkLogin)