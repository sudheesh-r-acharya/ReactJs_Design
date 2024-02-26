import React from 'react'
import { BiArrowToBottom } from 'react-icons/bi'
const Footer = () => {
  return (
    <div className='Footer'>

      <div className="categories">
        <h2>CATEGORIES</h2>
        <h4>Web Builder</h4>
        <h4>Hosting</h4>
        <h4>Data Center</h4>
        <h4>Robotic-Automation</h4>
      </div>

      <div className="contact">
        <h2>CONTACT</h2>
        <h4>Contact</h4>
        <h4>Privacy Policy</h4>
        <h4>Terms Of Service</h4>
        <h4>Categories</h4>
        <h4>About</h4>
      </div>

      <div className="footer-country">
        <h4>United States</h4>
        <BiArrowToBottom/>

        </div>

    </div>
  )
}

export default Footer