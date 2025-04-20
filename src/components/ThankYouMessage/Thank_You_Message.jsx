import React from 'react'
import "./Thank_You_Message.css"

function ThankYouMessage() {
  return (
    <div className="popup">
      <div className="thankyou_pop">
        <div className="emoji">❤️</div>
        <h3>Thank you for connect with us:</h3>
        <p>Our team will contacting with you soon</p>
        <button className="submit_btn">Done</button>
      </div>
    </div>
  )
}

export default ThankYouMessage
