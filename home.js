import {   collection, addDoc , getDocs  } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js"; 

import{ signOut }from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js" 

import { auth } from "./firebaseconfig.js";
import { db } from "./firebaseconfig.js";







const form =document.querySelector('#form');
const addBtn =document.querySelector('#add-todo');
const todo =document.querySelector('#todo');
const ul =document.querySelector('#ul');


const arr = [];

// onAuthStateChanged(auth, (user) => {
//     if (user) {
        
        
//         const uid = user.uid;
        
//     } else {
        
//         window.location = './login.html';
//     }
// });
const logOutBtn =document.querySelector('#button-logOut');
logOutBtn.addEventListener("click", () => {
    signOut(auth)
      .then(() => {
        alert('Are you agree')
            window.location = "./login.html";
      })
      .catch((error) => {
        console.log(error);
      });
  });



function render(){
    
    ul.innerHTML = '';
    
    if(arr.length===0){
        ul.innerHTML = 'item not found....';
        return ;
    };

    arr.map((item)=>{
ul.innerHTML += `

<li>${item.todo}
<button id="delete">delete</button>
<button id="edit">edit</button>

</li>

`

    })
}

// ------Form Event---------- //

addBtn.addEventListener("click",()=>{
    if(todo.value === ''){
      alert('Enter todo to add')
      render()
    }
})

form.addEventListener("submit",async(event)=>{

    event.preventDefault();
    
    
    arr.push({
        todo:todo.value,
})

render();

try {
    const docRef = await addDoc(collection(db, "todos"),{
  
        todo:todo.value,
        
    } );

    todo.value = '';

    console.log("Document written with ID: ", docRef.id);
    
} catch (e) {

    console.error("Error adding document: ", e);
}





})





async function read(){
    const querySnapshot = await getDocs(collection(db, "todos"));
    
    
    querySnapshot.forEach((doc) => {
    
      console.log(`${doc.id} => 
        
        ${doc.data()}`);
        arr.push(doc.data())
    
    });
    render()
    };


    read()
    
