import React from 'react'
import './Realinfo.css'
import infoimg from '../Accets/Images/info.jpeg'

const Realinfo = () => {
  return (
    <>
    <div className="info-container">
        <div className="info-img">
            <img src={infoimg} width='500px' height='400px' />
        </div>
    <div className="info-content">
          <h2 className="info-heading">Agent power + Buying power = Empowered</h2>
          <p className="info-text">
          We believe that real estate agents are essential to a winning buying experience. The RealSure Buy program is a powerful tool in your agent’s toolkit. They can help guide you through a seamless and successful process by combining their deep knowledge of your local area with the ability to make a cash-backed offer. To be eligible for the program, just work with a participating agent from one of these leading real estate brokerages:
          </p>
          </div>
    </div>
    </>
  )
}

export default Realinfo