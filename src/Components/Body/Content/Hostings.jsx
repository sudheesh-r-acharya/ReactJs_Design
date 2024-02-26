import React from 'react'
import { GoTrophy } from "react-icons/go";
import Hosting_card from './Hosting_Cards/Hosting_card';
import { IoDiamondOutline } from "react-icons/io5";
import Hosting_card_4 from './Hosting_Cards/Hosting_card_4';



const Hostings = () => {
  return (
    <div>
      <div className="Hostings">
        <div className="number">
          <h3 id='n1' >1</h3>
          <h3 className='n2' >2</h3>
          <h3 className='n3' >3</h3>
          <h3 className='n4' >4</h3>
        </div>
        <div className="lable">
          <GoTrophy className='GoTrophy'/>
          <h5>Best Choice</h5>
        </div>
        <div className="lable-2">
          <IoDiamondOutline className='IoDiamondOutline' />
          <h5>Best Value</h5>
        </div>
        <Hosting_card/>
        <Hosting_card_4/>

      </div>
    </div>
  )
}

export default Hostings