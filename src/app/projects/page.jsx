import React from 'react'
import { Projects as AllProject } from '../components/Main'
// import { metadata } from '../layout'


export const metadata = {
  title: 'Projects',
}
export default function Projects() {
  return (
    <React.Fragment>
      <div className='mt-[80px]'>
          <AllProject />
      </div>
    </React.Fragment>
  )
}
