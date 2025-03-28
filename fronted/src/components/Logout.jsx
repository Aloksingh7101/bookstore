import React from 'react'
import { useAuth } from '../context/Authpro';
import toast from 'react-hot-toast';



function Logout() {
  const[authUser,setAuthUser]=useAuth();
  const handle=()=>{
    try {
     setAuthUser({
      ...authUser,
      user:null,
     });
     localStorage.removeItem("users");
     toast.success("Logout Successfully!!")
     window.location.reload();

    } catch (error) {
      toast.error("Error"+error.message);
    }
  }
  return (
    <div>
      <button className='px-3 py-2 bg-red-500 rounded-lg cursor-pointer'
      onClick={handle}>Logout</button>
    </div>
  )
}

export default Logout

