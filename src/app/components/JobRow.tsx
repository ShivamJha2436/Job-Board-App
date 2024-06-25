/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function JobRow() {
  return (
    <>
      <div className="bg-white p-4 rounded-lg shadow-sm flex gap-4">
        <div>
          <img
            className="size-12"
            src="https://gartman.com/wp-content/uploads/2020/08/57-571935_linkedin-icon-vector-png-linkedin-circle-logo-transparent.jpg" alt="" />
        </div>
        <div>
          <div>LinkedIn</div>
          <div>Backend Engineer</div>
          <div>Remote | Banglore &middot; India &middot; Full-time</div>
        </div>
        <div>created</div>
      </div>
    </>
  )
}
