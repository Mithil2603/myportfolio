import React from 'react'
import './Styles/MainBody.css'
import LeftMainBody from './LeftMainBody'
import RightMainBody from './RightMainBody'

export default function MainBody() {
  return (
    <div className='mainbody'>
        <LeftMainBody></LeftMainBody>
        <RightMainBody></RightMainBody>
    </div>
  )
}
