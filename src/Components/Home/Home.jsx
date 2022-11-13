import React from 'react'
import avataaars from '../../img/avataaars.svg'
import './Home.css'

export default function Home() {
  return (
    <div className='homeDiv d-flex  align-items-center  '>
        <div className=' container text-center'>
            <img className=' homeImage' src={avataaars} alt="" />
            <h1>START REACT</h1>
            <div className=' d-flex justify-content-center  align-items-center'>
              <div className='HLine'></div>
              <i class="fa-solid fa-star"></i>
              <div className='HLine'></div>

            </div>
            <p>Graphic Artist - Web Designer - Illustrator</p>
        </div>
        

    </div>
  )
}
