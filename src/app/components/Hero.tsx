import { getUser } from '@workos-inc/authkit-nextjs'
import React from 'react'

export default  function Hero() {
  return (
    <section className='container my-16'>

      <h1 className='text-4xl font-bold text-center'>
        Find your next<br /> dream job
      </h1>
      <p className='text-center text-gray-700 mt-2'>
        Find your dream job here on this job board. Search your next job here with just one click.
      </p>
      <form className='flex gap-2 mt-4 max-w-md mx-auto'>
        <input type="search"
          className="border border-gray-400 w-full py-2 px-3 rounded-md "
          placeholder='Search Jobs....' />
        <button className='bg-blue-600 text-white py-2 px-4 rounded-md'>Search</button>
      </form>
    </section> 
  )
}
