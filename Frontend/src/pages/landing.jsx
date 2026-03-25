import React from 'react'
import "../App.css"
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <div className="landingPageContainer">
      <nav>
        <div className='navHeader'>
          <h2>VideoCast</h2>
        </div>
        <div className='navlist'>
          <p>Join as Guest</p>
          <p>Register</p>
          <div role='button'>
            <p>Login</p>
          </div>
        </div>
      </nav>

      <div className="landingMainContainer">
        <div>
          <h1><span style={{color:"#FF9839"}}>Connect</span> with Your Mentor</h1>
          <p>Crack Interview with  Guidance</p>
           <div>
            <Link to={"/home"}>Get Started</Link>
           </div>
        </div>
        <div>
          <img src="https://drive.google.com/file/d/1-Y_pZmGVaDo2lVymM4uLca-nT8sroumy/view?usp=drive_link" alt="" />
        </div>
      </div>
    </div>
    
  )
}

export default LandingPage
