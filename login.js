import { signInWithEmailAndPassword , onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";


import { auth } from "./firebaseconfig.js";

const form = document.querySelector('#form')
const email = document.querySelector('#email')
const password = document.querySelector('#password')

form.addEventListener('submit',(events)=>{
    events.preventDefault();

    signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {

      const user = userCredential.user;
   console.log(user);
   window.location = 'https://expensemanagmentsystem.web.app/';
   email.value=''
   password.value=''
   
})
.catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);

    });



    onAuthStateChanged(auth, (user) => {
        if (user) {
   
          const uid = user.uid;
          // ...
        } else {
     
        }
      });
      

})
