'use client'
import { Editor } from '@/components/editor/Editor'
import React from 'react'

const Home = () => {
  return (
    <div>
    <div>
      <div className='text-color-white flex justify-center font-bold p-3 pb-0'>Lexi-Edit</div>
      <Editor/>
    </div>
    </div>
  )
}

export default Home
