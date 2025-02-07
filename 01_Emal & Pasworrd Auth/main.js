let signup_Btn = document.getElementById("signup");

signup_Btn.addEventListener("click", () => {
    let signupemail = document.getElementById("Email");
    let signupname = document.getElementById("name");
    let signuppass = document.getElementById("pass");

    console.log(signupemail.value);
    console.log(signupname.value);
    console.log(signuppass.value);

    signupemail.value = "";
    signupname.value = "";
    signuppass.value = "";
});
