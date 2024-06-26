/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

export default function JobRow() {
  return (
    <>
      <div className="bg-white p-4 rounded-lg shadow-sm relative">
        <div className='absolute top-4 right-4 '>
          <FontAwesomeIcon
            className="size-4 text-gray-300 cursor-pointer hover:text-blue-900 "
            icon={faHeart} />
        </div>
        <div className='flex grow gap-4'>
          <div className='content-center'>
            <img
              className="size-12"
              src="https://gartman.com/wp-content/uploads/2020/08/57-571935_linkedin-icon-vector-png-linkedin-circle-logo-transparent.jpg" alt="" />
          </div>
          <div className='grow sm:flex'>
            <div className='grow'>
              <div className='text-gray-500'>LinkedIn</div>
              <div className='font-bold'>
                Backend Engineer
              </div>
              <div className='text-gray-500 text-sm'>
                Remote &middot; Banglore &middot; India &middot; Full-time
              </div>
            </div>
            <div className='content-end text-gray-500 text-sm'>
              2 days ago
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
