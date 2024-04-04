"use client"
import Image from 'next/image'
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaBell, FaSignal, FaWifi,FaPaperPlane,FaBatteryThreeQuarters,FaTimesCircle } from 'react-icons/fa';
import logo from "../public/Images/Vector.png"
import avatar from "../public/Images/avatar.jpg"

export default function Home() {
  const[notification,setNotification]=useState(false)
  const[banner,setBanner]=useState(false)

  const handleNotification=()=>{
    setNotification(true);
    setBanner(true)
    setTimeout(() => {
      setBanner(false)
    }, 1000);
  }
  return (
    <main className='home'>
      <div className='box'>
        {banner?<div className='notification'>
            <div className='notification-left'>
            <Image className='image-dp' src={avatar} alt="Picture of the author" />
            </div>
            <div className='notification-right'>
            <div onClick={()=>setBanner(false)}><FaTimesCircle size="1.2rem" onClick={()=>setBanner(false)}/></div>
              <p>Recived a Notification</p>
            </div>
        </div>:""}
        <div className='status-bar'>
           <div className='left-status-bar'>
            <ul>
            <li>1:11</li>
              <li><FaPaperPlane /></li>
              
            </ul>
          </div>
          <div className='right-status-bar'>
          <ul>
            {notification?<li
            onClick={()=>{setNotification(false);setBanner(true)}}><FaBell /> </li>:""}
          
              <li><FaSignal /> </li>
              <li><FaWifi /> </li>
              <li><FaBatteryThreeQuarters height="1rem"/> </li>
            </ul>
          </div>
      </div>
         {/* Body of Box */}
          <div className='box-body'>
            <div className='box-body-content'>
                        <div className='body-head'>
                          <h1 className='body-head-1'>Lorem Ipsum...</h1>
                          <h2
                          className='body-head-2'>Lorem ipsum dolor sit amet.</h2>
                        </div>
                        <div className='body-circle-main'>
                        <div className='body-circle-1'>
                        <div className='body-circle-2'>
                                    
                        <div className='body-circle-3'>
                        <div className='body-circle-4'>
                        <div className='body-circle-5'>
                        <Image className='image' src={logo} alt="Picture of the author" />
                        </div>         
                        </div>      
                        </div>
                                    </div>      
                        </div>
                        </div>
            </div>
            
          <div className='btn-notification'
          onClick={handleNotification}>
          Send Notification
          </div>
          </div>
        
        
      </div>
    </main>
  )
}
