import { collection, addDoc , getDocs } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js"; 

import { db } from "./firebaseconfig.js";







const form =document.querySelector('#form');
const addBtn =document.querySelector('#add-todo');
const todo =document.querySelector('#todo');
const ul =document.querySelector('#ul');


const arr = [];






async function read(){
    const querySnapshot = await getDocs(collection(db, "todos"));
    
    
    querySnapshot.forEach((doc) => {
    
      console.log(`${doc.id} => 
        
        ${doc.data()}`);
        arr.push(doc.data())
    
        render()
    });
    }
    read()
    







function render(){

    ul.innerHTML = '';
    
    if(arr.length===0){
        ul.innerHTML ='No item found...'
    return;
    }

    arr.map((item)=>{
ul.innerHTML += `

<li>${item.todo}</li>

`

    })
}

                        // ------Form Event---------- //

form.addEventListener("submit",async(event)=>{

      event.preventDefault();
    
    ul.innerHTML ='';

arr.push({
    todo:todo.value,
})

render();

try {
    const docRef = await addDoc(collection(db, "todos"),{
  
        todo:todo.value,
  
    } );
  todo.value = ''
    console.log("Document written with ID: ", docRef.id);
    
} catch (e) {

    console.error("Error adding document: ", e);
  }


  


})


