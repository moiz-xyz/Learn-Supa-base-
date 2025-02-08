import { supabase } from "../hide.js";

// console.log(supabase);
// signup functions
let signup_Btn = document.getElementById("signup");
signup_Btn.addEventListener("click", async (data) => {
  let signupemail = document.getElementById("Email");
  let signupname = document.getElementById("name");
  let signuppass = document.getElementById("pass");

  console.log(signupemail.value);
  console.log(signupname.value);
  console.log(signuppass.value);

  try {
    const { data, error } = await supabase.auth.signUp({
      name: signupname.value,
      email: signupemail.value,
      password: signuppass.value,
    });
    console.log("Successfully signed up", data);

    if (error) {
      console.log(error);
    }
  } catch (error) {
    console.log(err);
  }

  signupemail.value = "";
  signupname.value = "";
  signuppass.value = "";
});





// // login Function
// let login_btn = document.getElementById("login");
// login_btn.addEventListener("click", () => {
//   // console.log("hello wprld ");

//   let loginemail = document.getElementById("Email_login");
//   let loginpass = document.getElementById("pass_login");
//   console.log(loginemail);
//   console.log(loginpass);
// });
