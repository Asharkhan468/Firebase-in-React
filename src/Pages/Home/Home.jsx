import React, { useEffect, useRef, useState } from 'react'
import { collection, addDoc , getDocs , deleteDoc , doc , updateDoc } from "firebase/firestore"; 
import { db } from '../../config/Firebase/config';


function Home() {

  const todoVal = useRef()

  
    let [todo , setTodo] = useState([]);

   const addTodo = async (event) => {
    event.preventDefault()
     const addData = async () => {
      const docRef = await addDoc(collection(db, "userTodo"), {
 todo:todoVal.current.value,
});
console.log("Document written with ID: ", docRef.id);
setTodo(prevTodo => [...prevTodo , {id:docRef.id , todo:todoVal.current.value}])
console.log(todo);
}



addData();

   }



   


   const deleteBtn = async(index) => {

    try {
            await deleteDoc(doc(db, "userTodo", index));
            console.log('Todo deleted with ID: ', index);
           setTodo(prevTodos => prevTodos.filter(todo => todo.id !== index))
            
        } catch (error) {
            console.log(error);
            
        }

    console.log('delete button clicked');
    

   }


   const editBtn = async (id) => {

        const updateValue = prompt('Update your Todo');
        if (updateValue === null || updateValue.trim() === '') {
          alert('Please Enter the updated Value')
            return;
        }

        await updateDoc(doc(db, 'userTodo', id),{todo: updateValue})
        setTodo(prevTodos => prevTodos.map(todo =>
            todo.id === id ? { ...todo, todo: updateValue } : todo
        ));

    }

  



  

  


  return (
    <>
    <form onSubmit={addTodo} className='flex justify-center items-center gap-3 '>
      <div className='text-center mt-4'>
      <input
  type="text"
  placeholder="Todo..."
  className="input input-bordered input-primary w-full max-w-5xl" ref={todoVal} />

 

    </div>
    <div className='mt-4'>
       <button className='btn btn-primary'>Add Todo</button>
    </div>
    </form>

     <h1 className='text-2xl text-center m-[10vh] font-bold'>User Todo</h1>

    {todo.length!=0 ? todo.map((item)=>{
      return(
       <>
       {/* <div key={item.id}>
        <li className='list-none mt-3 flex justify-center gap-5 text-xl'>{item.todo} <button className='btn btn-warning' onClick={() => deleteBtn(item.id)}>Delete</button>  <button className='btn btn-warning' onClick={()=> editBtn(item.id)}>Edit</button></li>
       </div> */}

<div className='max-w-md mx-auto p-4'>
      
         <ul>
          <li className="flex justify-between items-center bg-gray-100 p-3 mb-2 rounded-lg shadow-md">
            <span className="text-gray-800">{item.todo}</span>
            <div className="flex space-x-2">
              <button
                onClick={() => editBtn(item.id)}
                className="text-blue-500 hover:text-blue-700 transition duration-200"
              >
                Edit
              </button>
              <button
                onClick={() => deleteBtn(item.id)}
                className="text-red-500 hover:text-red-700 transition duration-200"
              >
                Delete
              </button>
            </div>
          </li>
        
      </ul>

      </div>

     
       </>
      )

    }): <h1 className='text-center mt-5 text-lg'>No Todo found...</h1>}

 
    
    </>
  )
}

export default Home