
"use client";
import React, { useEffect, useState } from 'react'
import User from '../user/User';


export default function page() {

// throw new Error("error");
const [users, setUsers] = useState([]);
useEffect(() => {
  const fetchUsers = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      console.log("Fetched users:", data);
      
      
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  fetchUsers();
}, []);








  return (
    <>
    
        <div className="container mx-auto p-4"> 
          <h1 className="text-2xl font-bold mb-4">Users List</h1>
         <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {users.map((user) => (
             <User key={user.id} user={user} />
            ))}
      </div>
        </div>
      
    </>
  )
}
