import React from 'react'

export default function Jobs() {
  return (
    <div className='bg-gray-200 py-4 rounded-xl'>
      <div className="container">
        <h2 className='font-bold mb-4 '>Recent Jobs</h2>

        <div className="flex flex-col gap-4 ">
          <div className="bg-white p-6 rounded-lg shadow-sm ">Backend Engineer</div>
          <div className="bg-white p-6 rounded-lg shadow-sm ">CI\CD Engineer.</div>
          <div className="bg-white p-6 rounded-lg shadow-sm ">Code Tester</div>
          <div className="bg-white p-6 rounded-lg shadow-sm ">Fullstack web developer</div>
        </div>
      </div>
    </div>
  )
}
