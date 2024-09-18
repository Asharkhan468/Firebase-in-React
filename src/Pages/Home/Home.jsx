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


   const editBtn = async (id)=>{

        const updateValue = prompt('Update your Todo');
        if (updateValue === null || updateValue.trim() === '') {
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

    {todo.length!=0 ? todo.map((item)=>{
      return(
       <>
       <h1 className='text-2xl text-center m-[10vh] font-bold'>User Todo</h1>
       <div key={item.id}>
        <li className='list-none mt-3 flex justify-center gap-5 text-xl'>{item.todo} <button className='btn btn-warning' onClick={() => deleteBtn(item.id)}>delete</button>  <button className='btn btn-warning' onClick={()=> editBtn(item.id)}>edit</button></li>
       </div>
       </>
      )

    }): <h1 className='text-center mt-5'>No Todo found...</h1>}

 
    
    </>
  )
}

export default Home