import { supabase } from "../hide.js";
// console.log(supabase);


let signup_Btn = document.getElementById("signup");
signup_Btn.addEventListener("click", async () => {
  let signupemail = document.getElementById("Email").value;
  let signupname = document.getElementById("name").value;
  let signuppass = document.getElementById("pass");

  try {
    const { error } = await supabase
  .from('Practise')
  .insert({ 
     Name: signupname ,
     Email : signupemail ,
     })
     if (error) {
        console.log(error.message);
     } else{
console.log("Data done ");
     }

  } catch (err) {
    console.log("unexpected eror" + err.message);
  }
})

// fetching data 
// let nmaeporfile = document.getElementById ("")

console.log();
