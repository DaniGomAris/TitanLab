function register() {
    const username = document.getElementById("username").value;
    const fullName = document.getElementById("full-name").value;
    const email = document.getElementById("email").value;
    const dob = document.getElementById("dob").value;
    const password = document.getElementById("password").value;
    const rePassword = document.getElementById("re-password").value;

    const usernameRegex = /^[a-zA-Z][a-zA-Z0-9]{7,14}$/;
    if (!usernameRegex.test(username)) {
        alert("Username must be between 8 and 15 characters, cannot contain spaces, and cannot start with a number or special character");
        return;
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{12,20}$/;
    if (!passwordRegex.test(password)) {
        alert("Password must be between 12 and 20 characters, and must include at least one uppercase letter, one lowercase letter, one number and one special character");
        return;
    }

    if (password !== rePassword) {
        alert("Passwords do not match");
        return;
    }

    const user = {
        username,
        fullName,
        email,
        dob,
        password
    };
    localStorage.setItem("user", JSON.stringify(user));

    window.location.href = "sign-in.html";
}