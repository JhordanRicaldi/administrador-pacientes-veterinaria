import React from 'react'

export const Error = ({ children}) => {
  return (
    <div className=' font-bold bg-red-600 uppercase text-center rounded-lg text-white p-2 mb-3'>
        {children}
    </div>
  )
}


