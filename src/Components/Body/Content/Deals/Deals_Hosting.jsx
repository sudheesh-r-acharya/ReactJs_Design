import React from 'react'

const Deals_Hosting = () => {
  return (
    <div>
      <div className="deal-content">
        <div className="deal-card">
          <img src="Images\Hosting image.png" alt="" />
          <div className="deal-offer">
          <h4>20% Off</h4>
          <h4 id='limit'>Limited time</h4>
          </div>
          <h3>Webbuilder 1</h3>
          <p>Computer Modern clasic with wix support</p>
          <div className="deal-price">
            <h2>$39.96</h2>
            <h5>$49.96</h5>
            <h6>(20% Off)</h6>
          </div>
          <button><h4>View Deal</h4></button>
        </div>
      </div>
    </div>
  )
}

export default Deals_Hosting