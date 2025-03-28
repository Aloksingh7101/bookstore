import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

import axios from "axios";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userinfo ={
     
      email : data.email,
      password : data.password

    }
     await axios.post("http://localhost:4001/user/login",userinfo)
    .then((res)=>{
      console.log(res.data);
      toast.success('login  successfully!');
      setInterval(() => {
        
      document.getElementById('my_modal_3').close();
      window.location.reload();
      }, 3000);
      
    

      localStorage.setItem("users", JSON.stringify(res.data.user))
    }).catch((err)=>{
    if(err.response){
      console.log(err);
    
      toast.error(err.response.data.message);

    }
    })

  
  };

  return (
    <>
      <div>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            {/* Close button outside the form */}
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById('my_modal_3').close()}
            >
              ✕
            </button>

            <h3 className="font-semibold text-lg">Login</h3>

            {/* Form starts here */}
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mt-4 space-y-3">
                {/* Email Input */}
                <span>Email</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your Email"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register('email', { required: true })}
                />
                <br />
                {errors.email && (
                  <span className="text-sm text-red-500">This field is required</span>
                )}
                <br />

                {/* Password Input */}
                <span>Password</span>
                <br />
                <input
                  type="password" // Corrected type
                  placeholder="Enter Password"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register('password', { required: true })}
                />
                <br />
                {errors.password && ( // Corrected error check
                  <span className="text-sm text-red-500">This field is required</span>
                )}
                <br />
              </div>

              {/* Submit Button */}
              <div className="flex justify-around mt-4">
                <button
                  type="submit" // Ensure this is a submit button
                  className="bg-pink-700 p-2 rounded-lg hover:bg-pink-400 text-white"
                >
                  Login
                </button>
                <p>
                  Not registered?{' '}
                  <Link
                    to="/signup"
                    className="underline text-blue-500 cursor-pointer hover:text-blue-300"
                  >
                    Signup
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </>
  );
}

export default Login;