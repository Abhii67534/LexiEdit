import { Editor } from '@/components/editor/Editor'
import React from 'react'

const Document = () => {
  return (
    <div>
      <div className='text-color-white flex justify-center font-bold p-3 pb-0'>Lexical Editor</div>
      <Editor/>
    </div>
  )
}

export default Document
