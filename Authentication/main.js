import { supabase } from "../hide.js";

let signup_Btn = document.getElementById("signup");
signup_Btn.addEventListener("click", async () => {
  let signupemail = document.getElementById("Email").value;
  let signupname = document.getElementById("name").value;
  let signuppass = document.getElementById("pass").value;

  try {
    const { data, error } = await supabase.auth.signUp({
      email: signupemail,
      password: signuppass,
      options: {
        data: { name: signupname } 
      }
    });

    if (error) {
      console.error("Signup Error:", error.message);
    } else {
      console.log("Signup Success:", data);
    }
  } catch (err) {
    console.error("Unexpected Error:", err);
  }

  document.getElementById("Email").value = "";
  document.getElementById("name").value = "";
  document.getElementById("pass").value = "";
});


 // login Function
let login_btn = document.getElementById("login");
login_btn.addEventListener("click", async () => {
  
  let loginemail = document.getElementById("Email_login");
  let loginpass = document.getElementById("pass_login");
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: loginemail.value ,
      password: loginpass.value,
    })
    if (error) {
      console.error("Signup Error:", error.message);
    } else {
      console.log("Hello user",);
    }
  }catch (err) {
    console.error("Unexpected Error:", err);
  }
  document.getElementById("Email_login").value = ""
   document.getElementById("pass_login").value = ""
});