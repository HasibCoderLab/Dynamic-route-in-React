import React from 'react'

const SingleProduct = ({product}) => {
 const {category,image , title ,price} =  product;
  console.log(product);
  
  return (
    <div>
      <h1>  Title : {title}  </h1>
      <h2> Category  : {category} </h2>
      <h3> Price :   {price} </h3>
      <img src={image} alt="" />

    </div>
  )
}

export default SingleProduct