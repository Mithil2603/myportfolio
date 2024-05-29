import React from 'react'
import './Styles/LeftMainBody.css'
import my_img from './Styles/Images/Mithil_img.jpg'

export default function LeftMainBody() {
  return (
    <div className='myImg'>
      <img src={my_img} alt="Personal Image" />
      {/* <img src="https://images6.fanpop.com/image/photos/43300000/Henry-Cavill-for-Men-s-Health-2019-henry-cavill-43325447-540-810.png" alt="Personal Image" /> */}
    </div>
  )
}
