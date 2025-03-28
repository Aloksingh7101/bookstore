
import React from 'react'

function Cards({item}) {
   
  return (
    <>
    <div>
      <div className="card bg-base-100 w-96 shadow-sm hover:scale-105 duration-150">
  <figure>
    <img
      src="https://img.freepik.com/free-vector/books-stack-realistic_1284-4735.jpg?t=st=1742062196~exp=1742065796~hmac=cc1457ed1b3cd0ddf1cd789be262800360d8cda6f81ccf1fb94cfdba19bef743&w=826"
      alt="bookstore" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.Name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-around">
      <div className="badge badge-outline">${ item.price}</div>
      <div className="badge badge-outline">Buy Now</div>
    </div>
  </div>
</div>
      </div>
    </>
  )
}

export default Cards
