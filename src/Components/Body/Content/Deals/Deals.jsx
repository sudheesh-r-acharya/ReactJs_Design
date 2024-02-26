import React from 'react'
import Deals_Hosting from './Deals_Hosting'

const Deals = () => {
  return (
    <div>
      <div className="deal-header">
        <h3>Related deals you might like for</h3>
      </div>
      <div className="deal-hosting">
      <Deals_Hosting/>
      <Deals_Hosting/>
      <Deals_Hosting/>
      </div>
      <div className="deal-signUp">
        <h2>Sign up and get exclusive special deals</h2>
        <span className="input">
          <input type="text" />
          <button><h5>Sign Up</h5></button>
        </span>
      </div>
    </div>
  )
}

export default Deals