import React, { useRef } from 'react'
import { auth } from '../../config/Firebase/config';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";

function Login() {

    let navigate = useNavigate();

    const emailValue = useRef();
    const passwordValue = useRef();

    const login = (event) => {

        event.preventDefault()

signInWithEmailAndPassword(auth, emailValue.current.value, passwordValue.current.value)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
    navigate('')
    
  })    
  .catch((error) => {
    console.log(error);
    
  });
        



    }


  return (
   <>
    <div>
        <h1 className='text-3xl text-center font-bold mt-3'>Login User</h1>
    </div>


<form onSubmit={login} className='w-[80%] sm:w-[30%] md:w-[40%] lg:w-[30%] items-center mt-[10vh] m-0 m-auto'>
    
    <label className="input input-bordered flex items-center gap-2 mt-5">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
    <path
      d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
  </svg>
  <input type="text" className="grow" placeholder="Email" ref={emailValue} />
</label>
<label className="input input-bordered flex items-center gap-2 mt-5">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      fillRule="evenodd"
      d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
      clipRule="evenodd" />
  </svg>
  <input type="password" className="grow" placeholder='Password'ref={passwordValue} />
</label>
<div className='text-center mt-5'>
    <button className="btn btn-outline btn-info">LOGIN</button>
</div>
</form>
    </>
   
  )
}

export default Login