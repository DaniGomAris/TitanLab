function login() {
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
        alert("No user found");
        return;
    }

    if (username === storedUser.username && password === storedUser.password) {
        window.location.href = "home.html";
    } else {
        alert("Invalid username or password.");
    }
}