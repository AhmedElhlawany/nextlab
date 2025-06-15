"use client";
import React, { useEffect, useState } from "react";

export default function TodoList() {
  const [allproducts, setallproducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/products").then((res) => {
       return res.json()
    }).then((data)=>{
        setallproducts(data)
        console.log(data);
    });
  }, []);

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
