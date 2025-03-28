import React from 'react'
import banner from "../../public/Alok.jpg";

export default function Banner() {
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4  flex flex-col md:flex-row my-6">
        <div className="w-full md:w-1/2  mt-12 md:mt-32">
        <div className='space-y-6'>
          <h1 className="font-bold text-4xl">Hello, Welcome Here To Learn Something <span className='text-pink-500'>New Everyday!!!</span> </h1>
          <p className='text-xl font-'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio beatae repellendus iusto fugiat non debitis, et sapiente odit maxime perspiciatis architecto magni nobis enim totam molestiae eos provident asperiores explicabo nesciunt. Ex excepturi cum dolores dignissimos corporis? Consequatur tenetur sit eligendi odit aut adipisci modi laboriosam itaque explicabo vel vero mollitia quas porro corporis impedit, sint libero hic eaque ab, aliquam aspernatur dolorem iusto tempora sed. Excepturi numquam eius quam dignissimos laudantium laborum culpa architecto porro quisquam eligendi qui sed deserunt neque iusto, autem libero voluptates saepe accusamus aspernatur at aperiam veniam! Facere id dignissimos cupiditate. Ipsum nulla nemo reiciendis.</p>
                  <label className="input validator">
          <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></g></svg>
          <input type="email" placeholder="mail@site.com" required/>
        </label>
        <div className="validator-hint hidden">Enter valid email address</div>
        </div>
        <button className="btn btn-active btn-secondary mt-6">Secondary</button>
        </div>
        
        <div className="w-full md:w-1/2 mt-40">
        <img src={banner} className="  w-90 h-85" alt=''></img>
         </div>
       
    </div>
    </>
  )
}
