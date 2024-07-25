import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth } from "./firebaseconfig.js";

console.log('Bismillah');

const form =document.querySelector('#form')
const email = document.querySelector('#email')
const password = document.querySelector('#password')



form.addEventListener('submit',(event)=>{

event.preventDefault();


createUserWithEmailAndPassword(auth, email.value,password.value)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
    window.location = './login.html';
email.value=''
password.value=''

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);

  });


})











