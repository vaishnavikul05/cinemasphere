export const CheckValidData=(email,password)=>{
   const isEmailvalid=/^\S+@\S+\.\S+$/.test(email);
   const  isPasswordValid=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);
  // const isNameValid= /^[a-zA-Z][a-zA-Z0-9_]{2,15}$/.test(name);

   if(!isEmailvalid) return "email is not valid";
   if(!isPasswordValid) return "Password is not Valid";
   // if(!isNameValid) return "Name is not Valid";
   return null;
   
}
//Minimum eight characters, at least one uppercase letter, one lowercase letter and one number: