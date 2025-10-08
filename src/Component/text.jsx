import React, { useEffect } from 'react'



const fetchAPI = async()=>{
    const response=await "https://dummyjson.com/products";
    console.log(data);
}

useEffect(() => {
  fetchAPI();
}, [])


const Check = () => {
  return (
    <div>check</div>
  )
}

export default check