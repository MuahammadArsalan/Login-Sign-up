import {   collection, addDoc , getDocs , doc, deleteDoc   } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js"; 

import{ signOut }from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js" 

import { auth } from "./firebaseconfig.js";
import { db } from "./firebaseconfig.js";







const form =document.querySelector('#form');
const addBtn =document.querySelector('#add-todo');
const todo =document.querySelector('#todo');
const ul =document.querySelector('#ul');
const deleteBtn = document.querySelectorAll('#delete')
const editBtn = document.querySelectorAll('#edit');





const arr = [];




async function getDataFromFirestore(){
    
    const querySnapshot = await getDocs(collection(db, "todos"));
    
    
    querySnapshot.forEach((doc) => {
        
        // console.log(`${doc.id} => ${doc.data()}`);
            arr.push({...doc.data() , id:doc.id})
            
    });

    render()
    console.log(arr);
};

getDataFromFirestore() 





// onAuthStateChanged(auth, (user) => {
//     if (user) {
        
        
//         const uid = user.uid;
        
//     } else {
        
//         window.location = './login.html';
//     }
// });


//  =======================  RANDER TODO FUNCTION START========================== //


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

        const deleteBtn = document.querySelectorAll('#delete');
        const editBtn = document.querySelectorAll('#edit');
        
            // ========================  DELETE BUTTON STARTED===========================  //
            deleteBtn.forEach((btn , index)=>{
                
                btn.addEventListener('click',async()=>{
                    
                    await deleteDoc(doc(db, "todos", arr[index].id));
                    
                    arr.splice(index,1);
                    render()
                    
                });
            });

        })
    }
    // ========================  DELETE BUTTON ENDED ===========================  //













    // ========================  EDIT BUTTON STARTED ===========================  //
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // ========================  EDIT BUTTON ENDED ===========================  //
    


    
    //  =======================  RANDER TODO FUNCTION END========================== //







//  =======================  ADD TODO BUTTON========================== //


addBtn.addEventListener("click",()=>{
    if(todo.value === ''){
        alert('Enter todo to add')
     
        render()
    }
})

form.addEventListener("submit",async(event)=>{
    
    event.preventDefault();
    
    render();
    
    try {
        const docRef = await addDoc(collection(db, "todos"),{
            
            todo:todo.value,
            
            
        } );
        
        
        console.log("Document written with ID: ", docRef.id);
        
        arr.push({
            
            todo:todo.value,
            id:docRef.id    ,
            
            
        })
        
        todo.value = '';
        
    } catch (e) {
    
    console.error("Error adding document: ", e);
}





})


//  =======================  ADD TODO BUTTON========================== //




    
//  =======================  DELETE TODO FUNCTIONALITY START ========================== //















//  =======================  DELETE TODO FUNCTIONALITY END  ========================== //











  //  =======================  LOGOUT   START========================== //
  
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

//  =======================  LOGOUT   END========================== //


















