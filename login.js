import { signInWithEmailAndPassword , GoogleAuthProvider,signInWithPopup ,GithubAuthProvider  } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";


import { auth } from "./firebaseconfig.js";



const form = document.querySelector('#form')
const email = document.querySelector('#email')
const password = document.querySelector('#password')

const mailBtn = document.querySelector('#login-mail-btn')
const googlebBtn = document.querySelector('#login-google-btn')
const githubBtn = document.querySelector('#login-github-btn')

form.addEventListener('submit',(events)=>{
    events.preventDefault();

    signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      
      const user = userCredential.user;
      console.log(user);
      window.location = "./home.html";
      // email.value=''
      // password.value=''
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    alert(errorMessage);
  });
  
  
  
});


            //    ----------- Google Authentication ----------//

const provider = new GoogleAuthProvider();

googlebBtn.addEventListener('click',()=>{
  
  signInWithPopup(auth, provider)
  .then((result) => {
    
    
    const user = result.user;
    console.log(user);
    window.location = './home.html';


  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
alert(errorMessage)
  });

  
});




            //    ----------- Github Authentication ----------//
            
            
            const githubProvider = new GithubAuthProvider();

githubBtn.addEventListener('click',()=>{

  signInWithPopup(auth, provider)
  .then((result) => {

    const user = result.user;
console.log(user);

window.location='./home.html';

  }).catch((error) => {

    const errorCode = error.code;
    const errorMessage = error.message;
alert(errorMessage);

  });

})



