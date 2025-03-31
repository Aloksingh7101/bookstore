import React from 'react';
import Home from './home/Home';
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from './courses/Courses';
import Signup from './components/Signup';
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/Authpro';
import Contect from './components/Contect';

function App() {
  const [authUser] = useAuth(); // Removed unused setAuthUser
  console.log(authUser);
  
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route 
          path="/course" 
          element={authUser ? <Courses/> : <Navigate to="/signup"/>}
        />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/contact" element={<Contect/>}/>
      </Routes>
      </BrowserRouter>
      <Toaster />
    </>
  );
}

export default App;