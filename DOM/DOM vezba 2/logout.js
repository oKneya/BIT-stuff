const logout = document.querySelector(".logout")
logout.addEventListener("click", logOut)

function logOut () {
    window.history.back(1);
}
