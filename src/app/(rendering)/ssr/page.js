import React from "react";
async function getData(){
    let res = await fetch("http://localhost:3000/products",{
        cache:'no-store' //default //force new fetch on every request 
    });
    return await res.json();
   
}
export default async function TodoList() {
  const allproducts=await getData()
  return (
    <>
     {allproducts.map((prod) => (
        <div key={prod._id}>
          <h2>{prod.title}</h2>
          <p>{prod.price}</p>
        </div>
      ))}
    </>
  );
}
