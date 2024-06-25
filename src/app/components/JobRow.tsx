/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function JobRow() {
  return (
    <>
      <div className="bg-white p-4 rounded-lg shadow-sm flex gap-4">
        <div className='content-center'>
          <img
            className="size-12"
            src="https://gartman.com/wp-content/uploads/2020/08/57-571935_linkedin-icon-vector-png-linkedin-circle-logo-transparent.jpg" alt="" />
        </div>
        <div className='grow'>
          <div className='text-gray-500'>LinkedIn</div>
          <div className='font-bold'>
            Backend Engineer
          </div>
          <div className='text-gray-500 text-sm'>
            Remote &middot; Banglore &middot; India &middot; Full-time
          </div>
        </div>
        <div className='content-end text-gray-500 text-sm'>2 days ago</div>
      </div>
    </>
  )
}
