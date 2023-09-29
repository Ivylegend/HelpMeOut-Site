import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='flex items-center justify-center flex-col h-[100vh] gap-5'>
      <h2 className='text-xl font-medium'>404, Not Found</h2>
      <p>Sorry the page you are looking for does not exist</p>
      <Link to={'/'} className='underline'>Go Home</Link>
    </div>
  )
}

export default NotFound