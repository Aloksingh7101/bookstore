import React,{useEffect,useState} from 'react';

import Cards from './Cards';
import axios from "axios";

import { Link } from 'react-router-dom';

function Course() {
  const [book, setBook] = useState([]);
   useEffect(() => {
      const getbook= async()=>{
       try {
        const res =  await axios.get("https://bookstore-1-00so.onrender.com/book");
        console.log(res.data);
        setBook(res.data);
       } catch (error) {
        console.log(error);
       }
      };
      getbook();
    
  }, []);
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div className='mt-28 items-center justify-center text-center'>
      <h1 className='text-2xl md:text-4xl font-semibold '>We'r delighted to have  you <span className='text-pink-600'>here!:)</span></h1>
      <p className='mt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates unde a eveniet, quia accusantium officia labore. At deleniti in, beatae nostrum et delectus quidem modi vero nisi maxime, reprehenderit ipsam consequuntur provident deserunt cum praesentium cumque laborum velit voluptatum ducimus. Beatae, illo omnis. Maxime eius porro non, perspiciatis minus totam neque voluptas ea sit rerum adipisci numquam molestias aspernatur repellendus?</p>
      <Link to="/">
      <button className='bg-pink-600 p-3 mt-4 rounded-lg hover:bg-pink-400'>
        Back
        </button>
      </Link>
      </div>
      <div className='mt-12 grid grid-cols-1 md:grid-cols-3'>
      {book.map((item)=>(
        <Cards item={item} key={item.id}/>
      ))}
      </div>
      </div>
    </>
  )
}

export default Course
