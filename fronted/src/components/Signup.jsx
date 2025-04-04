import React from 'react'
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from "axios";
import { toast } from 'react-hot-toast';


function Signup() {
   const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
  
    const onSubmit = async (data) => {
      const userinfo ={
        fullname:data.fullname,
        email : data.email,
        password : data.password

      }
       await axios.post("https://bookstore-vlsy.onrender.com/user/signup",userinfo)
      .then((res)=>{
        console.log(res.data);
        toast.success('Signup successfully!');
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
    <div className=' flex h-screen items-center justify-center'>
    <div id="my_modal_3" className='border-[2px] shadow-md p-5 rounded-md'>
  <div >
    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
  
    <h3 className="font-semibold text-lg">Signup</h3>
    <div className='mt-4 space-y-2'>
        <span>
            Name
        </span>
        <br/>
        <input
        type ="text"
        placeholder="Enter your name"
        className='w-80 px-3 py-1   border rounded-md outline -none'
        {...register('fullname', { required: true })}
        />
        <br/>
        {errors.fullname && (
                  <span className="text-sm text-red-500">This field is required</span>
                )}
                <br />
        <span>
     Email
        </span>
        <br/>
        <input
        type ="text"
        placeholder="Enter your Email"
        className='w-80 px-3 py-1   border rounded-md outline -none'
        {...register('email', { required: true })}
        />
        <br/>
        {errors.email && (
                  <span className="text-sm text-red-500">This field is required</span>
                )}
                <br />
        <span>
     Password
        </span>
        <br/>
        <input
        type ="text"
        placeholder="Enter your passwoord"
        className='w-80 px-3 py-1   border rounded-md outline -none'
        {...register('password', { required: true })}
        />
         <br/>
         {errors.password && ( // Corrected error check
                  <span className="text-sm text-red-500">This field is required</span>
                )}
                <br />
        

    </div>
    
        
     

    
     <div className='flex justify-around mt-2 gap-5 '>
        <button className='bg-pink-700 p-1 rounded-lg hover:bg-pink-400'>Signup</button>
        <p>
            Have account ?{" "}
        <Link to="/"
         className='underline text-blue-500 cursor-pointer hover:text-blue-300'
      >
            Login
            </Link>{" "}
       
         </p>
     </div>
     </form>
  </div>
</div>
    </div>
    </>
  )
}

export default Signup
