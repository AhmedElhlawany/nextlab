import React from 'react'

export default function User({ user }) {
  return (
    <>
      <div key={user.id} className="mb-4 border-1 rounded-lg p-3">
                  <h2 className="text-xl font-semibold">{user.name}</h2>
                  <p className="text-gray-600">Email: {user.email}</p>
                  <p className="text-gray-600">userName: {user.username}</p>
                  <p className="text-gray-600">address: {user.address.street}</p>
              
              </div> 




    </>
  )
}
