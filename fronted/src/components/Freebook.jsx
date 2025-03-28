import React,{useEffect,useState} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import axios from "axios";
import Cards from './Cards'; // Adjust the path as necessary

export default function Freebook() {
  const [book, setBook] = useState([]);
   useEffect(() => {
      const getbook= async()=>{
       try {
        const res =  await axios.get("http://localhost:4001/book");
        console.log(res.data);
        const data =res.data.filter((data) => data.category === "free");
        setBook(data);
       } catch (error) {
        console.log(error);
       }
      };
      getbook();
    
  }, []);


  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className='font-semibold text-xl pb-2 border-2px solid text-blue-400'>Free Offered Course</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis porro fugiat culpa sapiente. Illum unde quod quae quis harum dignissimos.</p>
        </div>
        <div>
          <Slider {...settings}>
            {book.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}