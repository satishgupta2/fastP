import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';
function App() {
  const [sat, setsat] = useState([])
  const fetchAPI = async()=>{
    const data=await axios.get("https://dummyjson.com/products");
    setsat(data.data.products)
    // console.log(data.data.products);
    // console.log(sat)
  }
  
  useEffect(() => {
  fetchAPI();
  }, [])
  return (
   <>
   <div>
    {
      sat.map((item,index)=>(
        <div key={index}>
          <h1>{item.id}</h1>
          <p>{item.title}</p>
          <p>{item.description}</p>
          <p>{item.category}</p>
          <p>{item.price}</p>
          <p>{item.discountPercentage}</p>
          <p>{item.rating}</p>
          <p>{item.stock}</p>
          <p>{item.tags[0]}</p>
          <p>{item.tags[1]}</p>
          <p>{item.brand}</p>
        </div>
      ))
    }
   </div>
   
   </>
  );
}

export default App;